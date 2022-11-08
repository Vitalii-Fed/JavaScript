class TodoController {
    #todoListView = null;
    #todoFormView = null;
    #todosCollection = null;

    constructor(container) {
        this.#todoListView = new TodoListView({
            onToggle: (id) => this.toggle(id),
            onDelete: (id) => this.delete(id),
            onSave: () => this.save(),
        });
        this.#todoFormView = new TodoFormView();
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

    save(el) {
        this.#todosCollection.create(el).then(() =>
            this.#todosCollection.renderList(this.#todosCollection.list)
        );
    }
}