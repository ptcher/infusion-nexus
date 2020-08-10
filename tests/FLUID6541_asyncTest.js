/*
Copyright 2017 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://raw.githubusercontent.com/fluid-project/infusion-nexus/master/LICENSE.txt
*/

/* eslint-env node */

"use strict";

var fluid = require("infusion"),
    jqUnit = fluid.require("node-jqunit");

require("../index.js");

jqUnit.module("nexusUtils asyncTest");

fluid.defaults("fluid.tests.nexus.FLUID6541.parent", {
    gradeNames: ["fluid.component", "fluid.resolveRoot"],
    components: {
        container: {
            type: "fluid.component",
            options: {
                components: {
                    componentA: {
                        type: "fluid.component",
                        options: {
                            listeners: {
                                afterDestroy: "{fluid.tests.nexus.FLUID6541.parent}.events.onComponentADestroyed"
                            }
                        }
                    }
                }
            }
        }
    },
    events: {
        onComponentADestroyed: null
    }
});

// FIXME: This asyncTest contributes to the collected tests never concluding

jqUnit.asyncTest("destroyInContainer first level component", function () {
    jqUnit.expect(0);

    var parent = fluid.tests.nexus.FLUID6541.parent({
        listeners: {
            onComponentADestroyed: "jqUnit.start"
        }
    });

    fluid.nexus.destroyInContainer(parent.container, "componentA");
});
