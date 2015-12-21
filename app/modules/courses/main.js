define(function (require) {
  "use strict";

  var angular = require("angular"),
      ngResource = require("ngResource"),

  CoursesModule = angular
    .module("CoursesModule", ["ngResource"]);

    .controller("CoursesCtrl", require("./controllers/CoursesCtrl"))

    .factory("Course", require("./services/CourseService"));

  return CoursesModule;
});