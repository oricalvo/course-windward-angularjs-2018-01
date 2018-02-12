class ClockComponent {
    constructor() {
    }
}

appModule.component("appClock", {
    controller: ClockComponent,
    templateUrl: "components/clock/clock.component.html",
});

