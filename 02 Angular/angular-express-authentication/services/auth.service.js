class AuthService {
    constructor($http) {
        this.$http = $http;
    }

    init(){
        const token = localStorage.getItem("token");
        this.$http.get("/api/user", {
            headers: {
                "myauth": token,
            }
        }).then(res => {
            const user  = res.data;
            if(user.authenticated) {
                appStore.user = user;
                appStore.user.token = token;
            }
            else {
                appStore.user = null;
            }
        });
    }

    login(userName, password) {
        this.$http.post("/api/login", {
            userName,
            password,
        }).then(res => {
            appStore.user = res.data;

            localStorage.setItem("token", appStore.user.token);
        }).catch(err => {
            appStore.error = "Login failed";
        });
    }
}

appModule.service("authService", AuthService);


