const logger = createLogger("ContactService");

class ContactService {
    constructor($q, $timeout, appStore) {
        logger.log("ctor");
        this.$q = $q;
        this.$timeout = $timeout;
        this.appStore = appStore;
    }

    load(force) {
        if(!force && this.appStore.contacts) {
            return;
        }

        this.appStore.loading = true;

        this.$timeout(()=> {
            this.appStore.contacts = [
                {id: 1, name: "Ori"},
                {id: 2, name: "Roni"},
            ];

            this.appStore.loading = false;
        }, 1500);
    }

    clear() {
    }
}

appModule.service("contactService", ContactService);
