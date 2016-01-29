define(function (require) {
  "use strict";

  var angular = require("angular"),
      appCore = require("../core.module/core.module");

  angular
    .module("app.tests", [
      "app.core"
    ])
    .config(require("./tests.routes"))

    .controller("tests.ctrl", require("./controllers/tests.controller"))

    .factory("Test", require("./services/test.service"));

  return angular;
});