define(function (require) {
  "use strict";

  TestsCtrl.$inject = ["Test"];

  function TestsCtrl(Test) {
    var vm = this;
    vm.items = [];

    activate();

    function activate() {
      Test.query(function (response) {
        vm.items = response;
        return vm.items;
      });
    }
  }

  return TestsCtrl;
});