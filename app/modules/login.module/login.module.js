define(function (require) {
  "use strict";

  var angular = require("angular"),
      appCore = require("../core.module/core.module");

  angular
    .module("app.login", [
      "app.core"
    ]);

    // .controller("login.ctrl", require("./controllers/login.controller"))

    // .service("auth", require("./services/AuthService"))
    // .service("session", require("./services/SessionService"))

    // .factory("Interceptor", require("./services/TokenInterceptor"))

    // .run(require("./services/assignToRootScope"))

    // .config(require("./config"));

  return angular;
});