'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers')

    // Path: /login
    .controller('LoginCtrl', ['$scope', '$location', '$window', '$http', '$rootScope', function($scope, $location, $window, $http, $rootScope) {
        $scope.$root.title = 'AngularJS SPA | Sign In';

        $scope.login = function (user) {
            $http.post('api/account/login', user)
                .success(function(data, status, headers, config) {
                    user.authenticated = true;
                    $rootScope.user = user;
                    $location.path('/');
                })
                .error(function(data, status, headers, config) {
                    user.authenticated = false;
                    $rootScope.user = {};
                });
            
            return false;
        };

         $scope.$on('$viewContentLoaded', function() {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);
