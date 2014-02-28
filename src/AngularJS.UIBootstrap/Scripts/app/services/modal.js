'use strict';

angular.module('app.services')
    .factory('modalService', function ($modal) {
        return {
            login: function() {
                var appRoot = '/views/app';
                var partialsRoot = appRoot + '/partials';
                
                var modalInstance = $modal.open({
                    templateUrl: partialsRoot + '/login',
                    controller: 'LoginCtrl',
                    backdrop: true,
                    keyboard: true,
                    backdropClick: true
                });
                
                modalInstance.result.then(function (response) {
                    //$scope.selected = response;
                    //console.log(response);
                }, function () {
                    //console.log('Modal dismissed at: ' + new Date());
                });

            }
        }
    });
