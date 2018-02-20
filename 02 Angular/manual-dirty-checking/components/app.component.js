class AppComponent {
    constructor($scope, $http) {
        this.$scope = $scope;

        console.log("$http", $http);

        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];
    }

    change() {
        // this.$scope.$apply();

        setTimeout(()=> {
            this.contacts[0].name = "XXX";

            this.$scope.$apply();
        }, 1000);
    }
}

appModule.component("appRoot", {
    controller: ["$scope", "$http", AppComponent],
    templateUrl: "components/app.component.html",
});

