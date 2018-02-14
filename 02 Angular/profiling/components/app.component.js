class AppComponent {
    constructor() {
        const contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
            ];

        this.contacts = [];
        for(let i=0; i<5000; i++) {
            this.contacts.push({...contacts[0]});
            this.contacts.push({...contacts[1]});
        }
    }

    noop() {
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    templateUrl: "components/app.component.html",
});

