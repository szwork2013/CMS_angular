define(function (require) {
    "use strict";

    var angular = require("angular"),
        AuthenticationService = require("./services/AuthenticationService"),
        UserService = require("./services/UserService"),
        LoginModule = angular.module("LoginModule", ["AuthenticationService", "UserService"]);

    LoginModule.controller("LoginCtrl", require("./controllers/LoginCtrl"));

    return LoginModule;
});