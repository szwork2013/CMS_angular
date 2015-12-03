define(function (require) {
    "use strict";

    var angular = require("angular"),
        LoginModule = angular.module("LoginModule", []);

        LoginModule.controller("LoginCtrl", require("./controllers/LoginCtrl"));

    return LoginModule;
});