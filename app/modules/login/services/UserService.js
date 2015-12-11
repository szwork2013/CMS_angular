define(function (require) {
  "use strict";

  var angular = require("angular"),
      UserService = angular.module("UserService", []);

  UserService.factory("UserService", function ($http) {
    return {
      logIn: function (email, password) {
        return $http.post("localhost:8888/api/authentication", {email: email, password: password});
      },
      logOut: function () {

      }
    };
  });

  return UserService;
});