/*
Copyright 2015, 2016 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://raw.githubusercontent.com/fluid-project/infusion-nexus/master/LICENSE.txt
*/

/* eslint-env node */

"use strict";

var fluid = require("infusion"),
    kettle = require("kettle");

require("../index.js");
require("../src/test/nexusTestUtils.js");

kettle.loadTestingSupport();

fluid.registerNamespace("fluid.tests.nexus.FLUID6541.resourceLoader");

fluid.defaults("fluid.tests.nexus.FLUID6541.resourceLoader.badlyFormedJson", {
    gradeNames: "fluid.resourceLoader",
    resources: {
        corruptJSON: {
            path: "%infusion-nexus/tests/data/corruptJSONFile.jsonx",
            dataType: "text"
        }
    }
});

fluid.tests.nexus.FLUID6541.resourceLoader.testDefs = [
    {
        name: "resourceLoader test",
        gradeNames: ["fluid.tests.nexus.FLUID6541.resourceLoader.badlyFormedJson"],
        expect: 0,
        config: {
            configName: "fluid.tests.nexus.config",
            configPath: "%infusion-nexus/tests/configs"
        },
        sequence: [
            {
                event: "{badlyFormedJson}.events.onResourcesLoaded",
                listener: "jqUnit.assert",
                args: ["onResourcesLoaded event fires"]
            }
        ]
    }
];

kettle.test.bootstrapServer(fluid.tests.nexus.FLUID6541.resourceLoader.testDefs);
