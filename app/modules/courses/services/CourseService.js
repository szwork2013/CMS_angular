define(function (require) {
  "use strict";

  var angular = require("angular"),
      CourseService;
  require("ngResource");

  CourseService = angular.module("CourseService", ["ngResource"]);

  CourseService.factory("Course", ["$resource",
    function ($resource) {
      return $resource("../courses/:courseId.json", {}, {
        query: {method: "GET", params: {courseId: "courses"}, isArray: true}
      });
    }]);

  return CourseService;
});