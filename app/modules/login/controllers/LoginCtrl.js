define(function (require) {
  "use strict";

  function LoginCtrl($scope, auth, session) {
    $scope.auth = auth;
  }

  LoginCtrl.$inject = ["$scope", "auth", "session"];

  return LoginCtrl;
});