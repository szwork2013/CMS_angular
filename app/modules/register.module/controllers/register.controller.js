define(function (require) {
  "use strict";

  RegisterCtrl.$inject = ["register"];

  function RegisterCtrl(register) {
    var vm = this;
    vm.register = registerHandler;

    function registerHandler(credentials) {
      return register.call(credentials);
    }
  }

  return RegisterCtrl;
});