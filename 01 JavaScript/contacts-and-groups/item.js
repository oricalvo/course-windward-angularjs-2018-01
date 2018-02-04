let nextId = 0;

export class Item {
    constructor() {
        this.id = ++nextId;
    }
}
