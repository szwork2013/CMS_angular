define(function (require) {
  "use strict";

  ModuleCtrl.$inject = ["Module", "$stateParams", "$sce"];

  function ModuleCtrl(Module, $stateParams, $sce) {
    var vm = this;
    vm.item = {};
    vm.trustSrc = trustSrcHandler;

    activate();

    function activate() {
      Module.get({moduleId: $stateParams.modulesId}, function (response) {
        vm.item = response;
        return vm.item;
      });
    }

    function trustSrcHandler(src) {
      return $sce.trustAsResourceUrl(src);
    }
  }

  return ModuleCtrl;
});