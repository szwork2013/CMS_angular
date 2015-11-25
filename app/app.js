define(function (require) {
    "use strict";

    var angular = require("angular"),
        LoginModule = require("./modules/login"),
        MainApp;
        require("ngRoute");

    MainApp = angular
                .module("MainApp", [ngRoute, LoginModule])
                .config(function ($routeProvider) {
                    $routeProvider
                        .when("/" , {
                            templateUrl: require("text!./login/templates/LoginTemplate.html"),
                            controller: require("./login/controllers/LoginCtrl")
                        })
                        .otherwise(redirectTo: "/");
                });

    return MainApp;
});