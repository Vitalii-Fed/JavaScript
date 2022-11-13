class TodosCollection {
    #api = null;
    list = [];
    todoInput = document.querySelector('.todo__form-input');

    constructor() {
        this.#api = new RestApi('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/');
    }

    fetchList() {
        return this.#api.getList().then((data) => (this.list = data));
    }

    toggle(id) {
        const item = this.list.find((item) => item.id === id);
        const updatedItem = {
            ...item,
            isDone: !item.isDone,
        };
        
        return this.#api.update(updatedItem).then(() => {
            this.list = this.list.map((item) =>
                item.id === updatedItem.id ? updatedItem : item);
        });
    }

    delete(id) {
        return this.#api.delete(id).then(() => {
            this.list = this.list.filter((item) => item.id !== id);
        });
    }

    getValues() {
        return {title: this.todoInput.value};
    }

    create(newTodo) {
        newTodo = this.getValues();
        return this.#api.create(newTodo).then((data) => {
            this.list = [...this.list, data];
        });
    }

    clear() {
        return this.todoInput.value = '';
    }
}