define(function (require) {
  "use strict";

  CourseCtrl.$inject = ["Course", "$stateParams"];

  function CourseCtrl(Course, $stateParams) {
    var vm = this;
    vm.item = {};

    activate();

    function activate() {
      Course.get({id: $stateParams.id}, function (response) {
        vm.item = response;
        return vm.item;
      });
    }
  }

  return CourseCtrl;
});