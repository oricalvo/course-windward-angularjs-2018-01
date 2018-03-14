import {appModule} from "../app.module";
import template from "./clock.component.html";

export class ClockComponent {
    constructor() {
    }
}

appModule.component("appClock", {
    controller: ClockComponent,
    template,
});

