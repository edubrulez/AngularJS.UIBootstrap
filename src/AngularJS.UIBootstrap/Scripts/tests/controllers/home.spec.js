/// <reference path="../../_references.js" />
/// <reference path="../../app/controllers/home.js" />

'use strict';

describe('Controllers: HomeCtrl', function () {
    var $scope, ctrl;

    beforeEach(module('app.controllers'));

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('HomeCtrl', { $scope: $scope });
    }));

    it('should set a page title', function () {
        expect($scope.$root.title).toBe('AngularJS SPA Template for Visual Studio');
    });
});
