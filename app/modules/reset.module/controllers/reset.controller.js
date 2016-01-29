define(function (require) {
  "use strict";

  ResetCtrl.$inject = ["reset"];

  function ResetCtrl(reset) {
    var vm = this;
    vm.resetPass = resetPassHandler;

    function resetPassHandler(credentials) {
      return reset.call(credentials);
    }
  }

  return ResetCtrl;
});