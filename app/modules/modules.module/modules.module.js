define(function (require) {
  "use strict";

  var angular = require("angular"),
      appCore = require("../core.module/core.module");

  angular
    .module("app.modules", [
      "app.core"
    ])
    .config(require("./modules.routes"))

    .controller("modules.ctrl", require("./controllers/modules.controller"))

    .factory("Module", require("./services/module.service"));

  return angular;
});