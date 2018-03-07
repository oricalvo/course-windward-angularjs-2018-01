class AppComponent {
    constructor() {
    }

    get user(){
        return appStore.user;
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    templateUrl: "components/app.component.html",
});

