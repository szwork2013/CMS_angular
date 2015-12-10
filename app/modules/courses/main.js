define(function (require) {
  "use strict";

  var angular = require("angular"),
      CourseService = require("./services/CourseService"),
      CoursesModule = angular.module("CoursesModule", ["CourseService"]);

  CoursesModule.controller("CoursesCtrl", require("./controllers/CoursesCtrl"));

  return CoursesModule;
});