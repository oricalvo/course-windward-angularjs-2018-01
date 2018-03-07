const appModule = angular.module("myApp", []);

appModule.run(function($rootScope, authService) {
    authService.init();
});

