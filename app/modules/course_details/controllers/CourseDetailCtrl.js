define(function (require) {
  "use strict";

  function CourseDetailCtrl($scope, $routeParams, $http) {
    $http.get("../courses/" + $routeParams.courseId + ".json").success(function (data) {
      $scope.course = data;
    });
  };

  CourseDetailCtrl.$inject = ["$scope", "$routeParams", "$http"];

  return CourseDetailCtrl;
});