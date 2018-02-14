class ListComponent {
    constructor() {
        console.log("items", this.items);
    }

    $onInit() {
        console.log("items", this.items);
    }

    remove(contact, index) {
        this.onRemove({
            $event: {
                contact,
                index
            }
        });
    }
}

appModule.component("appList", {
    controller: ListComponent,
    templateUrl: "components/list.component.html",
    bindings: {
        items: "<",
        onRemove: "&",
    }
});

