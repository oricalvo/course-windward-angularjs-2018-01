const appModule = angular.module("myApp", ['ui.router']);

appModule.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state({
        name: 'index',
        url: "/index",
        component: "appIndex",
    });

    $stateProvider.state({
        name: 'new',
        url: "/new",
        component: "appNew",
    });

    $urlRouterProvider.otherwise("index");
});

appModule.run(function($rootScope) {
});

