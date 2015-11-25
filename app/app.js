define(function (require) {
    "use strict";

    var angular = require("angular"),
        LoginModule = require("./modules/login/main"),
        MainApp,
        ngRoute = require("ngRoute");

    MainApp = angular
                .module("MainApp", ["ngRoute", "LoginModule"])
                .config(function ($routeProvider) {
                    $routeProvider
                        .when("/" , {
                            template: require("text!./modules/login/templates/LoginTemplate.html"),
                            controller: "LoginCtrl"
                        })
                        .otherwise({redirectTo: "/"});
                });

    return MainApp;
});