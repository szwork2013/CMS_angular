define(function (require) {
  "use strict";

  function CoursesCtrl ($scope, Course) {
      $scope.courses = Course.query();
  }

  CoursesCtrl.$inject = ["$scope", "Course"];

  return CoursesCtrl;
});