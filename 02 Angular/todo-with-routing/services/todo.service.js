class TodoService {
    constructor(store){
        this.store = store;
    }

    get todos(){
        return store.todos;
    }

    add(name){
        const todo = {
            name,
        };

        this.todos.push(todo);
    }

    done(todo){
        const index = this.todos.indexOf(todo);
        if(index == -1) {
            return;
        }

        this.todos.splice(index, 1);
    }
}

appModule.service("todoService", TodoService);
