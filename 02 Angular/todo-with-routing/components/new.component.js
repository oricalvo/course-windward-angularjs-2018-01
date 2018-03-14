class NewComponent {
    constructor(rootService) {
        console.log("new.ctor");

        this.rootService = rootService;
    }

    save(){
        if(!this.form.$valid){
            return;
        }

        this.rootService.add(this.name);
    }
}

appModule.component("appNew", {
    controller: NewComponent,
    templateUrl: "components/new.component.html",
});

