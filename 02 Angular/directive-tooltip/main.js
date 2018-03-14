import {appModule} from "./app.module";
import * as angular from "angular";
import {AppComponent} from "./components/app.component";
import {ClockComponent} from "./components/clock.component";
import "./styles/site.scss";
import {TooltipDirective} from "./directives/tooltip.directive";

const components = [
    AppComponent,
    ClockComponent,
];

const directives = [
    TooltipDirective,
];

angular.bootstrap(document, [appModule.name]);
