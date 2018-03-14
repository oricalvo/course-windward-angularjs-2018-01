class AppComponent {
    constructor($location) {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
            ];

        this.$location = $location;
    }

    change () {
        this.$location.url("xxx");
    }

    dump () {
        console.log("url", this.$location.url());
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    templateUrl: "components/app.component.html",
});

