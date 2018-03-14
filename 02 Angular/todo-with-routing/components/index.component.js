class IndexComponent {
    constructor(store, rootService) {
        console.log("index.ctor");

        this.store = store;
        this.rootService = rootService;
    }

    get todos(){
        return this.store.todos;
    }

    done(todo){
        this.rootService.done(todo);
    }
}

appModule.component("appIndex", {
    controller: IndexComponent,
    templateUrl: "components/index.component.html",
});

