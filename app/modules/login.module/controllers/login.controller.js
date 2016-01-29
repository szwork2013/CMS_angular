define(function (require) {
  "use strict";

  LoginCtrl.$inject = ["auth"];

  function LoginCtrl(auth) {
    var vm = this;
    vm.logIn = authHandler;

    function authHandler(credentials) {
      return auth.logIn(credentials);
    }
  }

  return LoginCtrl;
});