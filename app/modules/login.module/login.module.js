define(function (require) {
  "use strict";

  var angular = require("angular"),
      appCore = require("../core.module/core.module");

  angular
    .module("app.login", [
      "app.core"
    ])
    .config(require("./login.routes"))

    .controller("login.ctrl", require("./controllers/login.controller"))

    .service("auth", require("./services/auth.service"))
    .service("session", require("./services/session.service"));

  return angular;
});