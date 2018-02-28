class AppComponent {
    constructor($scope, $http, $injector, $compile, $element) {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];

        this.$element = $element;
        this.$scope = $scope;
        this.$http = $http;
        this.$injector = $injector;
        this.$compile = $compile;
    }

    lazyLoad() {
        $.getScript("components/clock.component.js", () => {
            console.log("loaded");

            const rootScope = this.$injector.get("clockService");
            console.log("clockService", rootScope);

            console.log("Compiling clock zone")
            const clockTag = this.$element.find(".clock-cont");
            clockTag.append("<app-clock></app-clock>");
            this.$compile(clockTag)(this.$scope);

            this.$scope.$apply();
        });
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    templateUrl: "components/app.component.html",
});

