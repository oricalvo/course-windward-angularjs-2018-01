class ClockComponent {
    constructor($interval, $scope) {
        console.log("Clock.ctor");

        this.time = new Date();

        $interval(()=>{
            this.time = new Date();
        }, 1000);
    }

    $onInit(){
        console.log("Clock.$onInit");
    }

    $onDestroy(){
        console.log("Clock.$onDestroy");
    }
}

appModule.component("appClock", {
    controller: ClockComponent,
    templateUrl: "components/clock.component.html",
});

