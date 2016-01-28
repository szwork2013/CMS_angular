define(function (require) {
  "use strict";

  function Auth($http, $location, session) {
    this.checkLogIn = function () {
      return session.getUser() !== undefined;
    };
    this.checkUserRole = function (options) {
      var user = session.getUser();
      if (user) {
        return (user.role === options)? true : false;
      } else {
        return;
      }
    };
    this.logIn = function (email, password) {
      return $http
        .post("http://localhost:8080/api/authenticate", {email: email, password: password})
        .then(function (response) {
          session.setUser(response.data.user);
          session.setToken(response.data.token);
          $location.path("/homepage");
        });
    };
    this.logOut = function () {
      return session.destroy();
    };
  }

  Auth.$inject = ["$http", "$location", "session"];

  return Auth;
});