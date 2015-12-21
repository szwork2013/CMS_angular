define(function (require) {
  "use strict";

  function Session($window, $location) {
    this.getUser = function () {
      return JSON.parse($window.localStorage.getItem("user"));
    };
    this.setUser = function (user) {
      $window.localStorage.user = JSON.stringify(user);
      return this;
    };
    this.getToken = function () {
      return $window.localStorage.getItem("token");
    };
    this.setToken = function (token) {
      $window.localStorage.setItem("token", token);
    };
    this.destroy = function () {
      $window.localStorage.removeItem("user");
      $window.localStorage.removeItem("token");
      $location.path("/login");
    };
  }

  Session.$inject = ["$window", "$location"];

  return Session;
});