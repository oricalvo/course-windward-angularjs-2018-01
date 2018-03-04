class AppComponent {
    constructor() {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
            ];
    }

    login(){
        if(this.form.$invalid){
            console.log("FORM is invalid");
            return;
        }

        console.log("Submit to the server", {
            userName: this.userName,
            password: this.password,
        });
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    templateUrl: "components/app.component.html",
});

