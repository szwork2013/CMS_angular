define(function (require) {
  "use strict";

  var angular = require("angular"),
      appCore = require("../core.module/core.module");

  angular
    .module("app.reset", [
      "app.core"
    ])
    .config(require("./reset.routes"))

    .controller("reset.ctrl", require("./controllers/reset.controller"))

    .service("reset", require("./services/resetpass.service"));

  return angular;
});