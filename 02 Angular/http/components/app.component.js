class AppComponent {
    constructor($http, $rootScope) {
        $http.get("/api/contact").then(res => {
            this.contacts = res.data;
        });
        // $http.get("data/contacts.json").then(res => {
        //     this.contacts = res.data;
        // });

        setTimeout(function() {
            console.log($rootScope);
        }, 1500);
    }

    onContactRemove($event) {
        this.contacts.splice($event.index, 1);
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    templateUrl: "components/app.component.html",
});

