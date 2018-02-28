const appModule = angular.module("myApp", []);

appModule.config(function($provide, $compileProvider){
    appModule.service = $provide.service;
    appModule.directive = $compileProvider.directive;
    appModule.component = $compileProvider.component;
});

appModule.run(function($rootScope) {
});
