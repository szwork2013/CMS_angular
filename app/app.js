define(function (require) {
    "use strict";

    var angular = require("angular"),
        LoginModule = require("./modules/login/main"),
        CoursesModule = require("./modules/courses/main"),
        CourseDetailModule = require("./modules/course_details/main"),
        CourseModule = require("./modules/course_module/main"),
        MainApp;
        require("ngRoute");

    MainApp = angular.module("MainApp", [
        "ngRoute", 
        "LoginModule", 
        "CoursesModule",
        "CourseDetailModule",
        "CourseModule"
    ]);

    MainApp.config(function ($routeProvider) {
        $routeProvider
            .when("/login" , {
                template: require("text!./modules/login/templates/LoginTemplate.html"),
                controller: "LoginCtrl"
            })
            .when("/courses", {
                template: require("text!./modules/courses/templates/CoursesTemplate.html"),
                controller: "CoursesCtrl"
            })
            .when("/courses/:courseId", {
                template: require("text!./modules/course_details/templates/CourseDetailTemplate.html"),
                controller: "CourseDetailCtrl"
            })
            .when("/courses/:courseId/modules/:moduleId", {
                template: require("text!./modules/course_module/templates/CourseModuleTemplate.html"),
                controller: "CourseModuleCtrl"
            })
            .otherwise({
                redirectTo: "/courses"
            });
    });

    return MainApp;
});