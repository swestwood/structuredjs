/* Runs the QUnit tests for StructuredJS. `node testrunner.js` */

var runner = require("./node_modules/qunit");
runner.run({
    code: {path: "./structured.js", namespace: "structured"},
    tests: "tests.js"
});
