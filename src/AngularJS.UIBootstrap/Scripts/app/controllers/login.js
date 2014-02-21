'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers')

    // Path: /login
    .controller('LoginCtrl', function($scope, $location, $window, $http, $rootScope, authService) {
        $scope.$root.title = 'AngularJS SPA | Sign In';

        $scope.login = function (user) {
            $http({
                method: 'POST',
                url: '/Token',
                data: "grant_type=password&username=" + user.userName + "&password=" + user.password,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
                .success(function (data, status, headers, config) {
                    $http.defaults.headers.common["Authorization"] = 'Bearer ' + data.access_token;  //http://stackoverflow.com/questions/19769422/net-web-api-2-owin-bearer-token-authentication
                    authService.loginConfirmed();
                    //user.authenticated = true;
                    //$rootScope.user = user;
                    //$location.path('/');
                })
                .error(function (data, status, headers, config) {
                    authService.loginCancelled();
                    //user.authenticated = false;
                    //$rootScope.user = {};
                });

            //$http.post('api/account/login', user)
            //    .success(function(data, status, headers, config) {
            //        user.authenticated = true;
            //        $rootScope.user = user;
            //        $location.path('/');
            //    })
            //    .error(function(data, status, headers, config) {
            //        user.authenticated = false;
            //        $rootScope.user = {};
            //    });
            
            return false;
        };

         $scope.$on('$viewContentLoaded', function() {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    });
