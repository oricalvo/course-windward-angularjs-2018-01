import {log} from "./common";
import {Item} from "./item";

export class Contact extends Item {
    constructor(name, email) {
        super();

        this.name = name;
        this.email = email;
    }

    print(ident) {
        log(ident, this.id + ": " + this.name + ", " + this.email);
    }
}
