class AppComponent {
    constructor() {
        this.contacts = [
            {id:1, name: "Ori", selected: true},
            {id:2, name: "Roni"},
        ];
    }

    change(){
        //this.contacts[0].name = "XXX";

        const contact = {
            id:3,
            name:"Udi",
        };
        const newContacts = this.contacts.concat([contact]);

        this.contacts = newContacts;
    }

    remove(contact, index){
        console.log("remove", contact, index);

        const newContacts = this.contacts.concat([]);
        newContacts.splice(index, 1);
        this.contacts = newContacts;
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    templateUrl: "components/app.component.html",
});

