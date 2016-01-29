define(function (require) {
  "use strict";

  Session.$inject = ["$window", "$location"];

  function Session($window, $location) {
    this.getUser = getUser;
    this.setUser = setUser;
    this.getToken = getToken;
    this.setToken = setToken;
    this.destroy = destroy;

    function getUser() {
      return JSON.parse($window.localStorage.getItem("user"));
    }

    function setUser(user) {
      $window.localStorage.user = JSON.stringify(user);
    }

    function getToken() {
      return $window.localStorage.getItem("token");
    }

    function setToken(token) {
      $window.localStorage.setItem("token", token);
    }

    function destroy() {
      $window.localStorage.removeItem("user");
      $window.localStorage.removeItem("token");
      $location.path("/login");
    }
  }

  return Session;
});