class ClockComponent {
    constructor($interval) {
        console.log("clock.ctor");

        this.time = new Date();

        $interval(()=>{
            this.time = new Date();
        }, 1000);
    }
}

class ClockService {
}

console.log("Registering service clockService");
appModule.service("clockService", ClockService);

console.log("Registering component appClock");
appModule.component("appClock", {
    controller: ClockComponent,
    templateUrl: "components/clock.component.html",
});

