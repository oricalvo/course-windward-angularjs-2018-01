(function() {
    const logger = createLogger("AppComponent");

    class AppComponent {
        constructor(contactService, appStore) {
            logger.log("ctor");

            this.appStore = appStore;
            this.contactService = contactService;

            this.contactService.load();
        }

        get state() {
            return this.appStore;
        }

        refresh() {
            this.contactService.load(true);
        }

        clear() {
            this.contactService.clear();
        }
    }

    appModule.component("appRoot", {
        controller: AppComponent,
        templateUrl: "components/app.component.html",
    });
})();
