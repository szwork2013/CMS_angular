define(function (require) {
  "use strict";

  Register.$inject = ["API", "$http", "$location"];

  function Register(API, $http, $location) {
    this.call = registerHandler;

    function registerHandler(credentials) {
      return $http
        .post(API + "/register", credentials)
        .then(function (response) {
          console.log(response);
          $location.path("/login");
        });
    }
  }

  return Register;
});