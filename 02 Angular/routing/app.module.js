const appModule = angular.module("myApp", ['ui.router']);

appModule.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state({
        name: 'home',
        url: "/home",
        component: "appHome",
    });

    $stateProvider.state({
        name: 'about',
        url: "/about",
        component: "appAbout",
    });

    $stateProvider.state({
        name: 'contact',
        url: "/contact/:id",
        component: "appContact",
    });

    $urlRouterProvider.otherwise("home");
});

appModule.run(function($rootScope) {
});

