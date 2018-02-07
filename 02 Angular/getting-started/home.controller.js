appModule.controller("HomeCtrl", function($scope) {
    $scope.counter = 1;

    $scope.inc = function() {
        console.log("inc");

        ++$scope.counter;
    }
});
