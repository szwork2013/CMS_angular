define(function (require) {
  "use strict";

  var angular = require("angular"),
      appCore = require("../core.module/core.module");

  angular
    .module("app.reset", [
      "app.core"
    ])

    .controller("reset.ctrl", require("./controllers/reset.controller"));

  return angular;
});