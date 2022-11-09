class TodoController {
    #todoListView = null;
    #todoFormView = null;
    #todosCollection = null;
    newTodo = {};

    constructor(container) {
        this.#todoListView = new TodoListView({
            onToggle: (id) => this.toggle(id),
            onDelete: (id) => this.delete(id),
        });
        this.#todoFormView = new TodoFormView({
            onGetValues: () => this.getValues(),
            onSave: (newTodo) => this.save(newTodo),
            onClear: () => this.clear(),
        });
        container.append(this.#todoListView.el);
        container.append(this.#todoFormView.el);

        this.#todosCollection = new TodosCollection();
        this.#todosCollection.fetchList().then(() => this.#todoListView.renderList(this.#todosCollection.list));
    }

    toggle(id) {
        this.#todosCollection.toggle(id).then(() => 
            this.#todoListView.renderList(this.#todosCollection.list)
        );
    }

    delete(id) {
        this.#todosCollection.delete(id).then(() => 
            this.#todoListView.renderList(this.#todosCollection.list)
        );
    }

    getValues() {
        this.newTask = this.#todosCollection.getValues();
        return this.newTask;
    }

    save(newTodo) {
        this.#todosCollection.create(newTodo).then(() =>
            this.#todoListView.renderList(this.#todosCollection.list)
        );
    }

    clear() {
        this.#todosCollection.clear();
    }
}