﻿/// <reference path="../../_references.js" />
/// <reference path="../../app/controllers/error.js" />

'use strict';

describe('Controllers: Error404Ctrl', function () {
    var $scope, ctrl;

    beforeEach(module('app.controllers'));

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('Error404Ctrl', { $scope: $scope });
    }));

    it('should set a page title', function () {
        expect($scope.$root.title).toBe('Error 404: Page Not Found');
    });
});