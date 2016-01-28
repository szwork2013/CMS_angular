define(function (require) {
  "use strict";

  ModuleCtrl.$inject = ["Module", "$stateParams"];

  function ModuleCtrl(Module, $stateParams) {
    var vm = this;
    vm.item = {};

    activate();

    function activate() {
      console.log($stateParams);
      Module.get({moduleId: $stateParams.modulesId}, function (response) {
        vm.item = response;
        return vm.item;
      });
    }
  }

  return ModuleCtrl;
});