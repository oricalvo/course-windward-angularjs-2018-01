export class Contact {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    print() {
        console.log(this.name + ", " + this.email);
    }
}
