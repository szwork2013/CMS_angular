define(function (require) {
  "use strict";

  var angular = require("angular"),
      appCore = require("../core.module/core.module");

  angular
    .module("app.register", [
      "app.core"
    ])
    .config(require("./register.routes"))

    .controller("register.ctrl", require("./controllers/register.controller"))

    .service("register", require("./services/register.service"));

  return angular;
});