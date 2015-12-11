define(function (require) {
  "use strict";

  function ResetModuleCtrl($scope, $http) {
    $scope.resetPassword = function resetPassword(email) {
      $http.post("localhost:8888/api/reset", {email: email})
           .then(
              function success(data) {
                console.log("success" + data);
              },
              function error(data) {
                console.log("error" + data);
              });
    };
  }

  ResetModuleCtrl.$inject = ["$scope", "$http"];

  return ResetModuleCtrl;
});