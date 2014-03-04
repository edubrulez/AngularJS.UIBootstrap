'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers')

    // Path: /login
    .controller('LoginCtrl', function($scope, $location, $window, $http, $rootScope, authService, modalService) {
        //$scope.$root.title = 'AngularJS SPA | Sign In';
        
        $scope.openLogin = function () {
            modalService.login();
        };

        $scope.login = function (user) {
            $rootScope.invalidLogin = false;
            
            $http({
                method: 'POST',
                url: '/Token',
                data: "grant_type=password&username=" + user.userName + "&password=" + user.password,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
                .success(function (data, status, headers, config) {
                    $http.defaults.headers.common["Authorization"] = 'Bearer ' + data.access_token;  //http://stackoverflow.com/questions/19769422/net-web-api-2-owin-bearer-token-authentication
                    authService.loginConfirmed();
                    $rootScope.loggedIn = true;
                })
                .error(function (data, status, headers, config) {
                    authService.loginCancelled();
                    $rootScope.loggedIn = false;
                    $rootScope.invalidLogin = true;
                });
            
            return false;
        };

        $scope.cancelLogin = function() {
            authService.loginCancelled();
            $rootScope.loggedIn = false;
            modalService.close();
            $location.url('/');
        };

        $scope.logout = function (user) {
            $rootScope.message = 'Logged out.';
            $http.post('api/account/logout', user)
                 .success(function (data, status, headers, config) {
                     $http.defaults.headers.common["Authorization"] = '';
                     $rootScope.loggedIn = false;
                     $location.url('/');
                 });
        };

         $scope.$on('$viewContentLoaded', function() {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    });
