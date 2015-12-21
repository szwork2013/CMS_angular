define(function (require) {
  "use strict";

  var angular = require("angular"),
      LoginModule = require("./modules/login/main"),
      CoursesModule = require("./modules/courses/main"),
      CourseDetailModule = require("./modules/course_details/main"),
      CourseModule = require("./modules/course_module/main"),
      ResetModule = require("./modules/reset/main"),

      MainApp,

      uiRouter = require("uiRouter");

  MainApp = angular
    .module("MainApp", [
      "ui.router",

      "LoginModule", 
      "CoursesModule",
      "CourseDetailModule",
      "CourseModule",
      "ResetModule"
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/login");
      $stateProvider
      //public (no authorize) state
        .state("public", {
          abstract: true,
          template: "<div ui-view />",
          data: {
            authorize: false
          }
        })
        .state("public.login" , {
          url: "/login",
          template: require("text!./modules/login/templates/LoginTemplate.html"),
          controller: "LoginCtrl"
        })
        .state("public.reset", {
          url: "/reset",
          template: require("text!./modules/reset/templates/ResetTemplate.html"),
          controller: "ResetModuleCtrl"
        })
      //private(need to authorize) state
        .state("main", {
          abstract: true,
          template: "div ui-view />",
          data: {
            authorize: true
          }
        })
        .state("main.courses", {
          url: "/courses",
          template: require("text!./modules/courses/templates/CoursesTemplate.html"),
          controller: "CoursesCtrl"
        })
        .state("main.course", {
          url: "/courses/:courseId",
          template: require("text!./modules/course_details/templates/CourseDetailTemplate.html"),
          controller: "CourseDetailCtrl"
        })
        .state("main.module", {
          url:"/courses/:courseId/modules/:moduleId",
          template: require("text!./modules/course_module/templates/CourseModuleTemplate.html"),
          controller: "CourseModuleCtrl"
        });
    });

  return MainApp;
});