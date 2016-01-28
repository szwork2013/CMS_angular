define(function (require) {
  "use strict";

  CoursesCtrl.$inject = ["Course"];

  function CoursesCtrl (Course) {
    var vm = this;
    vm.items = [];

    activate();

    function activate() {
      Course.query(function (response) {
        vm.items = response;
        return vm.items;
      });
    }
  }

  return CoursesCtrl;
});