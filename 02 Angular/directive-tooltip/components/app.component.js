import {appModule} from "../app.module";
import template from "./app.component.html";
import "./app.component.scss";

export class AppComponent {
    constructor() {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];
    }

    change(contact){
        contact.name += "X";
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    template,
});

