import * as angular from "angular";
import {appModule} from "./app.module";
import {CounterCtrl} from "./counter.component";

const components = [
    CounterCtrl,
];

function bootstrap() {
    console.log("bootstrap \8");

    const injector = angular.element(document).injector();
    if(!injector) {
        angular.bootstrap(document, [appModule.name]);
    }
    else {
        const $rootScope = injector.get("$rootScope");

        const appRootScope = rootScope.$$childHead;
        if(appRootScope) {
            $rootScope.$destroy();

            // const appRootElement = document.querySelector("app-counter");
            // appRootElement.innerHTML = "";
            //
            // const $compile = injector.get("$compile");
            // $compile(document)($rootScope);
            //
            // $rootScope.$apply();
        }
    }
}

if (module.hot) {
    module.hot.accept();

    bootstrap();

    module.hot.dispose(() => {
        //
        // bootstrap();
    });
}
