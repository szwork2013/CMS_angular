define(function (require) {
    "use strict";

    function LoginCtrl($scope, $location, $window, UserService, AuthenticationService) {
        $scope.logIn = function logIn(email, password) {
            if (email !== undefined && password !== undefined) {
                UserService.logIn(email, password)
                    .success(function (data) {
                        AuthenticationService.isLogged = true;
                        $window.sessionStorage.token = data.token;
                        $location.path("/courses");
                    })
                    .error(function (status, data) {
                        console.log("Status: " + status + "Data: " + data);
                    });
            }
        };

        $scope.logOut = function logOut() {
            if (AuthenticationService.isLogged) {
                AuthenticationService.isLogged = false;
                delete $window.sessionStorage.token;
                $location.path("/login");
            }
        };
    }

    LoginCtrl.$inject = ["$scope", "$location", "$window", "UserService", "AuthenticationService"];

    return LoginCtrl;
});