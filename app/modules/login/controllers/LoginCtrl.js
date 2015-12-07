define(function (require) {
    "use strict";

    function LoginCtrl($scope, $location, $window, UserService, AuthenticationService) {
        $scope.login = function LogIn(email, password) {
            if (email !== undefined && password !== undefined) {
                UserService.LogIn(email, password)
                    .success(function (data) {
                        AuthenticationService.isLogged = true;
                        $window.sessionStorage.token = data.token;
                        $location.path("/courses");
                    })
                    .error(function (status, data) {
                        console.log("Status: " + status + "Data: " + data);
                    });
            };
        }

        $scope.logout = function LogOut() {
            if (AuthenticationService.isLogged) {
                AuthenticationService.isLogged = false;
                delete $window.sessionStorage.token;
                $location.path("/login");
            }
        }
    };

    LoginCtrl.$inject = ["$scope", "$location", "$window", "UserService", "AuthenticationService"];

    return LoginCtrl;
});