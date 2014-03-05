'use strict';

angular.module('app.controllers', ['http-auth-interceptor', 'app.services']);
angular.module('app.services', ['ui.bootstrap']);

// Declares how the application should be bootstrapped. See: http://docs.angularjs.org/guide/module
angular.module('app', ['ui.router', 'ui.bootstrap', 'app.filters', 'app.services', 'app.directives', 'app.controllers', 'http-auth-interceptor'])

    // Gets executed during the provider registrations and configuration phase. Only providers and constants can be
    // injected here. This is to prevent accidental instantiation of services before they have been fully configured.
    .config(['$stateProvider', '$locationProvider', '$httpProvider', function ($stateProvider, $locationProvider, $httpProvider) {

        // UI States, URL Routing & Mapping. For more info see: https://github.com/angular-ui/ui-router
        // ------------------------------------------------------------------------------------------------------------

        var appRoot = '/views/app';
        var partialsRoot = appRoot + '/partials';
        
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: appRoot+'/index',
                controller: 'HomeCtrl'

            })
            .state('about', {
                url: '/about',
                templateUrl: partialsRoot+'/about',
                controller: 'AboutCtrl'
            })
            //.state('login', {
            //    url: '/login',
            //    //layout: 'basic',
            //    templateUrl: partialsRoot+'/login',
            //    controller: 'LoginCtrl'
            //})
            .state('secure', {
                url: '/secure',
                templateUrl: partialsRoot+'/secure',
                controller: 'SecureCtrl'
            })
            .state('otherwise', {
                url: '*path',
                templateUrl: partialsRoot+'/404',
                controller: 'Error404Ctrl'
            });

        $locationProvider.html5Mode(true);
    }])

    // Gets executed after the injector is created and are used to kickstart the application. Only instances and constants
    // can be injected here. This is to prevent further system configuration during application run time.
    .run(['$templateCache', '$rootScope', '$state', '$stateParams', '$http', '$window', '$location', 'modalService', function ($templateCache, $rootScope, $state, $stateParams, $http, $window, $location, modalService) {

        // <ui-view> contains a pre-rendered template for the current view
        // caching it will prevent a round-trip to a server at the first page load
        //var view = angular.element('#ui-view');
        //$templateCache.put(view.data('tmpl-url'), view.html());

        // Allows to retrieve UI Router state information from inside templates
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeSuccess', function (event, toState) {

            // Sets the layout name, which can be used to display different layouts (header, footer etc.)
            // based on which page the user is located
            $rootScope.layout = toState.layout;
        });

        $rootScope.$on('event:auth-loginRequired', function () {
            modalService.login();
        });

        $rootScope.$on('event:auth-loginConfirmed', function () {
            modalService.close();
        });
    }]);