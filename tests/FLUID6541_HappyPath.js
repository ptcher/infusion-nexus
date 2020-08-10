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

fluid.registerNamespace("fluid.tests.nexus.FLUID6541.happyPath");

fluid.tests.nexus.FLUID6541.happyPath.testDefs = [
    {
        name: "FLUID-6541 Happy Path",
        gradeNames: "fluid.test.nexus.testCaseHolder",
        expect: 1,
        config: {
            configName: "fluid.tests.nexus.config",
            configPath: "%infusion-nexus/tests/configs"
        },
        events: {
            targetModelChanged: null
        },
        sequence: [
            {
                funcName: "jqUnit.assert",
                args: ["whatever, dude"]
            }
        ]
    }
];

kettle.test.bootstrapServer(fluid.tests.nexus.FLUID6541.happyPath.testDefs);
