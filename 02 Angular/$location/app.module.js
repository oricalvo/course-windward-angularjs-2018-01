const appModule = angular.module("myApp", []);

appModule.config(function($locationProvider){
    $locationProvider.html5Mode(true);
});

appModule.run(function($rootScope) {
});

