define(function (require) {
  "use strict";

  Auth.$inject = ["API", "$http", "$location", "session"];

  function Auth(API, $http, $location, session) {
    this.checkLogIn = checkLogIn;
    this.checkUserRole = checkUserRole;
    this.logIn = logIn;
    this.logOut = logOut;

    function checkLogIn() {
      return session.getUser() !== undefined;
    }

    function checkUserRole(options) {
      var user = session.getUser();
      if (user) {
        return (user.role === options)? true : false;
      }
      return;
    }

    function logIn(credentials) {
      return $http
        .post(API + "/authenticate", credentials)
        .then(function (response) {
          session.setUser(response.data.user);
          session.setToken(response.data.token);
          $location.path("/courses");
        });
    }

    function logOut() {
      return session.destroy();
    }
  }

  return Auth;
});