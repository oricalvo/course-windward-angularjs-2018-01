class RootService {
    constructor(store, todoService, $state){
        this.store = store;
        this.todoService = todoService;
        this.$state = $state;
    }

    add(name){
        this.todoService.add(name);

        window.history.back();
    }

    done(todo){
        this.todoService.done(todo);
    }
}

appModule.service("rootService", RootService);
