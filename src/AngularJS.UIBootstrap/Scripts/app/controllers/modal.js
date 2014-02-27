'use strict';

angular.module('app.controllers')
    .controller('ModalCtrl', function($scope, $modal) {

        var appRoot = '/views/app';
        var partialsRoot = appRoot + '/partials';

        $scope.openLogin = function () {
            var modalInstance = $modal.open({
                templateUrl: partialsRoot + '/login',
                controller: 'LoginCtrl',
                backdrop: true,
                keyboard: true,
                backdropClick: true
            });
        };
    });