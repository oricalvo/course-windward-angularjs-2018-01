class ContactService {
    constructor($http) {
        this.$http = $http;
    }

    load(){
        this.$http.get("/api/contact", {
            headers: {
                "MYAUTH": appStore.user.token,
            }
        }).then(res => {
            appStore.contacts = res.data;
        })
    }
}

appModule.service("contactService", ContactService);
