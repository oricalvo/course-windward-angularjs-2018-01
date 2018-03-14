import {appModule} from "./app.module";
import * as angular from "angular";
import {AppComponent} from "./components/app.component";
import "./styles/site.scss";
import {store} from "./store";

store;

const components = [
    AppComponent,
];

angular.bootstrap(document, [appModule.name]);
