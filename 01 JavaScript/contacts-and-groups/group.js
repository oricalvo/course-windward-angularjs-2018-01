import {log} from "./common";
import {Item} from "./item";

export class Group extends Item {
    constructor(name) {
        super();

        this.name = name;
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    print(ident) {
        ident = ident || 0;

        log(ident, this.id + ": " + this.name);

        for(const item of this.items) {
            item.print(ident+1);
        }
    }
}
