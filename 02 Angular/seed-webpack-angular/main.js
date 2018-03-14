import {appModule} from "./app.module";
import * as angular from "angular";
import {AppComponent} from "./components/app.component";
import {ClockComponent} from "./components/clock.component";
import "./styles/site.scss";

const components = [
    AppComponent,
    ClockComponent,
];

angular.bootstrap(document, [appModule.name]);
