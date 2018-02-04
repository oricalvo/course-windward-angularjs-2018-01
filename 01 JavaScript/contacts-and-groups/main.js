import {Group} from "./group";
import {Contact} from "./contact";

main();

function main() {
    const root = new Group("~");

    const friends = new Group("Friends");
    root.add(friends);

    const udi = new Contact("Udi", "udi@gmail.com");
    friends.add(udi);

    const family = new Group("Family");
    root.add(family);

    const roni = new Contact("Roni", "roni@gmail.com");
    family.add(roni);

    const ori = new Contact("Ori", "ori@gmail.com");
    root.add(ori);

    root.print();
}
