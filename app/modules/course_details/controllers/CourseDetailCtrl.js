define(function (require) {
  "use strict";

  function CourseDetailCtrl($scope, $routeParams, Course) {
      $scope.course = Course.get({courseId: $routeParams.courseId});
  };

  CourseDetailCtrl.$inject = ["$scope", "$routeParams", "Course"];

  return CourseDetailCtrl;
});