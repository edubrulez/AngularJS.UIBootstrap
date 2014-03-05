/// <reference path="../../_references.js" />
/// <reference path="../../app/services/modal.js"/>
/// <reference path="../../app/controllers/login.js" />

'use strict';

describe('Controllers: LoginCtrl', function () {
    var $scope, ctrl;

    beforeEach(module('app.controllers'));

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('LoginCtrl', { $scope: $scope });
    }));
    
    it('should default to not logged in', function() {
        expect($scope.$root.loggedIn).toBe(false);
    })

    it('should not set a page title', function () {
        expect($scope.$root.title).toBe(undefined);
    });
});
