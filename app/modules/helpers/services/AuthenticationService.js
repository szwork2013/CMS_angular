define(function (require) {
    "use strict";

    var angular = require("angular"),
        AuthenticationService = angular.module("AuthenticationService", []);

    AuthenticationService.factory("AuthenticationService", function () {
        var auth = {
            isLogged: false
        }
        return auth;
    });
});