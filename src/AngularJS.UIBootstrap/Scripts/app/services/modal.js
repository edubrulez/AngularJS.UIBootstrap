'use strict';

angular.module('app.services')
    .factory('modalService', function ($modal) {
        var modalInstance;
        
        return {
            login: function() {
                var appRoot = '/views/app';
                var partialsRoot = appRoot + '/partials';
                
                if (modalInstance != null) {
                    modalInstance.close();
                }
                
                modalInstance = $modal.open({
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

            },
            
            close: function() {
               modalInstance.close(function () { $scope.$apply(); });
            }
        }
    });
