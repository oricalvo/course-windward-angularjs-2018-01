(function() {
    const logger = createLogger("ContactListItemComponent");

    class ContactListItemComponent {
        constructor() {
            logger.log("ctor");
        }

        $onDestroy() {
            logger.log("$ngDestroy");
        }
    }

    appModule.component("appContactListItem", {
        controller: ContactListItemComponent,
        templateUrl: "components/contactListItem/contactListItem.component.html",
        bindings: {
            contact: "<",
        }
    });
})();
