class ClockCtrl {
    constructor($interval, $http, $scope, $rootScope) {
        this.time = new Date();

        $interval(()=> {
            this.time = new Date();
        }, 1000);
    }
}

appModule.component("appClock", {
    controller: ClockCtrl,
    template: `<span>{{$ctrl.time | date: 'HH:mm:ss'}}</span>`
});