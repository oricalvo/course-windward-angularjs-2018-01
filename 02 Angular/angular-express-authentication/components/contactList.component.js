class ContactListComponent {
    constructor(contactService) {
        contactService.load();
    }

    get contacts() {
        return appStore.contacts;
    }
}

appModule.component("appContactList", {
    controller: ContactListComponent,
    templateUrl: "components/contactList.component.html",
});

