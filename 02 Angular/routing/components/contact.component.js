class ContactComponent {
    constructor($stateParams) {
        const contactId = $stateParams.id;

        this.contact = contactService.get(contactId);
    }
}

appModule.component("appContact", {
    controller: ContactComponent,
    templateUrl: "components/contact.component.html",
});

