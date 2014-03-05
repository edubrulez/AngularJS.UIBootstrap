/// <reference path="../../_references.js" />
/// <reference path="../../app/services/modal.js"/>
/// <reference path="../../app/controllers/login.js" />

'use strict';

describe('Controllers: LoginCtrl', function () {

    beforeEach(module('app.controllers'));

    describe('Default', function() {        
        var scope, ctrl;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('LoginCtrl', { $scope: scope });
        }));

        it('should not be logged in yet', function() {
            expect(scope.$root.loggedIn).toBe(false);
        });

        it('should not set a page title', function() {
            expect(scope.$root.title).toBe(undefined);
        });
    });

    describe('Login: Success', function () {
        var scope, rootScope, ctrl, httpBackend, http;
        var loginConfirmedCalled = false;
        
        beforeEach(inject(function ($rootScope, $controller, $httpBackend, $http) {
            rootScope = $rootScope;
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            http = $http;
            
            httpBackend.when("POST", "/Token").respond({ access_token: 'token' });

            var fakeAuthService = {
                loginConfirmed: function() {
                    loginConfirmedCalled = true;
                }
            };
            
            ctrl = $controller('LoginCtrl', {
                $scope: scope,
                $http: $http,
                $rootScope: $rootScope,
                authService: fakeAuthService
            });

            scope.login({});
            httpBackend.flush();
        }));

        it('should set bearer token', function () {
            expect(http.defaults.headers.common["Authorization"]).toBe('Bearer token');
        });

        it('should call auth contoroller loginConfirmed', function() {
            expect(loginConfirmedCalled).toBe(true);
        });

        it('should set logged in flag', function() {
            expect(rootScope.loggedIn).toBe(true);
        });

        it('should turn off invalid login flag', function () {
            expect(rootScope.invalidLogin).toBe(false);
        });

    });

    describe('Login: Failure', function () {
        var scope, rootScope, ctrl, httpBackend, http;
        var loginCanceledCalled = false;

        beforeEach(inject(function ($rootScope, $controller, $httpBackend, $http) {
            rootScope = $rootScope;
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            http = $http;

            httpBackend.when("POST", "/Token").respond(400, {});

            var fakeAuthService = {
                loginCanceled: function () {
                    loginCanceledCalled = true;
                }
            };

            ctrl = $controller('LoginCtrl', {
                $scope: scope,
                $http: $http,
                $rootScope: $rootScope,
                authService: fakeAuthService
            });

            scope.login({});
            httpBackend.flush();
        }));

        it('should call auth contoroller loginCanceled', function () {
            expect(loginCanceledCalled).toBe(true);
        });

        it('should turn off logged in flag', function () {
            expect(rootScope.loggedIn).toBe(false);
        });

        it('should set invalid login flag', function() {
            expect(rootScope.invalidLogin).toBe(true);
        });

    });
});
