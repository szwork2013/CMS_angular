define(function (require) {
    "use strict";

    var angular = require("angular"),
        LoginModule = require("./modules/login/main"),
        CoursesModule = require("./modules/courses/main"),
        CourseDetailModule = require("./modules/course_details/main"),
        CourseModule = require("./modules/course_module/main"),
        ResetModule = require("./modules/reset/main"),

        TokenInterceptorModule = require("./modules/global/services/TokenInterceptorModule"),

        MainApp;

        require("ngRoute");

    MainApp = angular.module("MainApp", [
        "ngRoute",

        "LoginModule", 
        "CoursesModule",
        "CourseDetailModule",
        "CourseModule",
        "ResetModule",

        "TokenInterceptorModule"
    ]);

    MainApp
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push("TokenInterceptor");
        })
        .config(function ($routeProvider) {
            $routeProvider
                .when("/login" , {
                    template: require("text!./modules/login/templates/LoginTemplate.html"),
                    controller: "LoginCtrl",
                    access: {requiredLogin: false}
                })
                .when("/courses", {
                    template: require("text!./modules/courses/templates/CoursesTemplate.html"),
                    controller: "CoursesCtrl",
                    access: {requiredLogin: true}
                })
                .when("/courses/:courseId", {
                    template: require("text!./modules/course_details/templates/CourseDetailTemplate.html"),
                    controller: "CourseDetailCtrl",
                    access: {requiredLogin: true}
                })
                .when("/courses/:courseId/modules/:moduleId", {
                    template: require("text!./modules/course_module/templates/CourseModuleTemplate.html"),
                    controller: "CourseModuleCtrl",
                    access: {requiredLogin: true}
                })
                .when("/reset", {
                    template: require("text!./modules/reset/templates/ResetTemplate.html"),
                    controller: "ResetModuleCtrl",
                    access: {requiredLogin: false}
                })
                .otherwise({
                    redirectTo: "/login"
                });
    });

    return MainApp;
});