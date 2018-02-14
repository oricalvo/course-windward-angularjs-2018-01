const appModule = angular.module("myApp", []);

appModule.run(function($rootScope) {
    console.log($rootScope);

    const originalApply = $rootScope.constructor.prototype.$apply;
    $rootScope.constructor.prototype.$apply = function() {
        const before = performance.now();

        originalApply.apply(this, arguments);

        const after = performance.now();

        console.log("$apply", (after-before));
    }
});

