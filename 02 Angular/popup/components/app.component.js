class AppComponent {
    constructor(popupService) {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
            ];

        this.popupService = popupService;
    }

    openDialog(){
        this.popupService.show("app-clock");
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    templateUrl: "components/app.component.html",
});

