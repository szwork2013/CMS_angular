define(function (require) {
  "use strict";

  function CoursesCtrl ($scope, $http) {
    $http.get("../courses/courses.json").success(function (data) {
      $scope.courses = data;
    });
  };

  CoursesCtrl.$inject = ["$scope", "$http"];

  return CoursesCtrl;
});