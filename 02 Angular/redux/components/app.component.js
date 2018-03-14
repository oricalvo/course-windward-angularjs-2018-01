import {appModule} from "../app.module";
import template from "./app.component.html";
import "./app.component.scss";

export class AppComponent {
    constructor(store) {
        this.store = store;
    }

    get contacts(){
        return this.store.getState().contacts;
    }

    remove(contact) {
        this.store.dispatch({
            type: "DELETE_CONTACT",
            contact,
        });
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    template,
});

