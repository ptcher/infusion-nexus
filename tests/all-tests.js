/*
Copyright 2015, 2016, 2017 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://raw.githubusercontent.com/fluid-project/infusion-nexus/master/LICENSE.txt
*/

/* eslint-env node */

"use strict";

var fluid = require("infusion");

var tests = [
    "./FLUID6541_HappyPath.js",
    "./FLUID6541_resourceLoader.js",
    "./FLUID6541_asyncTest.js",
];

fluid.each(tests, function (path) {
    require(path);
});
