'use strict';

angular.module('app.controllers')
    .controller('ModalCtrl', function($scope, modalService) {
        $scope.openLogin = function () {
            modalService.login();
        };
    });