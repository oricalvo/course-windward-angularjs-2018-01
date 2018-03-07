class LoginComponent {
    constructor(authService) {
        this.authService = authService;
    }

    login(){
        if(!this.form.$valid){
            console.log("not valid");
            return;
        }

        this.authService.login(this.userName, this.password);
    }

    get error(){
        return appStore.error;
    }
}

appModule.component("appLogin", {
    controller: LoginComponent,
    templateUrl: "components/login.component.html",
});

