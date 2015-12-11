define(function (require) {
  "use strict";

  function CourseModuleCtrl($scope, $routeParams, Module, Course) {
    $scope.module = Module.get({moduleId: $routeParams.moduleId});
    $scope.course = Course.get({courseId: $routeParams.courseId});
  }

  CourseModuleCtrl.$inject = ["$scope", "$routeParams", "Module", "Course"];

  return CourseModuleCtrl;
});