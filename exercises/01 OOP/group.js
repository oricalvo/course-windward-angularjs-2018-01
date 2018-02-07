export class Group {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    print() {
        console.log(this.name);

        for(const item of this.items) {
            item.print();
        }
    }
}
