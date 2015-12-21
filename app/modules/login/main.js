define(function (require) {
  "use strict";

  var angular = require("angular"),

  LoginModule = angular
    .module("LoginModule", [])

    .controller("LoginCtrl", require("./controllers/LoginCtrl"))

    .service("auth", require("./services/AuthService"))
    .service("session", require("./services/SessionService"))

    .factory("Interceptor", require("./services/TokenInterceptor"))

    .run(require("./services/assignToRootScope"))

    .config(require("./config"));

  return LoginModule;
});