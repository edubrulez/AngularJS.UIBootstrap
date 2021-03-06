﻿/// <reference path="../../_references.js" />
/// <reference path="../../app/controllers/about.js" />

'use strict';

describe('Controllers: AboutCtrl', function () {
    var $scope, ctrl;

    beforeEach(module('app.controllers'));

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('AboutCtrl', { $scope: $scope });
    }));

    it('should set a page title', function () {
        expect($scope.$root.title).toBe('AngularJS SPA | About');
    });
});
