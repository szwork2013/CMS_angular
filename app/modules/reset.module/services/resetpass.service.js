define(function (require) {
  "use strict";

  ResetPass.$inject = ["API", "$http", "$location"];

  function ResetPass(API, $http, $location) {
    this.call = ResetPassHandler;

    function ResetPassHandler(credentials) {
      return $http
        .post(API + "/reset", credentials)
        .then(function (response) {
          console.log(response);
          $location.path("/login");
        });
    }
  }

  return ResetPass;
});