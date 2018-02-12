class AppComponent {
    constructor() {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
            {id:3, name: "Udi"},
        ];
    }

    remove(contact, index) {
        console.log(contact, index);

        this.contacts.splice(index, 1);
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    templateUrl: "components/app.component.html",
});

