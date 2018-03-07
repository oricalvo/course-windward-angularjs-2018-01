class HomeComponent {
    constructor($state) {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];

        this.$state = $state;
    }

    gotoContactDetails(contact){
        console.log(contact);

        this.$state.go("contact", {
            id: contact.id,
        });
    }
}

appModule.component("appHome", {
    controller: HomeComponent,
    templateUrl: "components/home.component.html",
});

