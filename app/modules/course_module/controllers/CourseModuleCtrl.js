define(function (require) {
  "use strict";

  function CourseModuleCtrl($scope, $http, $routeParams) {
    $http.get("../courses/" + $routeParams.moduleId + ".json").success(function (data) {
      $scope.module = data;
    });

    $http.get("../courses/" + $routeParams.courseId + ".json").success(function (data) {
      $scope.course = data;
    });
  };

  CourseModuleCtrl.$inject = ["$scope", "$http", "$routeParams"];

  return CourseModuleCtrl;
});