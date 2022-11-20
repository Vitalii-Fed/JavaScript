class TodoController {
    #TodoListView = null;
    #TodosCollection = null;
    #TodoFormView = null;

    constructor(todoEl) {
        this.#TodoListView = new TodoListView({
            onToggle: (id) => this.toggleTodo(id),
            onDelete: (id) => this.deleteTodo(id),
            onEdit: (id) => this.editTodo(id),
        })

        todoEl.append(this.#TodoListView.el);

        this.#TodosCollection = new TodosCollection();

        this.#TodosCollection
            .fetchList()
            .then(() => {
                this.#TodoListView.renderList(this.#TodosCollection.list)
            });
        
        this.#TodoFormView = new TodoFormView({
            onSave: (newTodo) => this.addTodo(newTodo),
        })

        todoEl.append(this.#TodoFormView.el);
    };

    toggleTodo(id) {
        this.#TodosCollection.toggle(id)
            .then(() => {
                this.#TodoListView.renderList(this.#TodosCollection.list);
            });
    };

    deleteTodo(id) {
        this.#TodosCollection.delete(id)
            .then(() => {
                this.#TodoListView.renderList(this.#TodosCollection.list);
            });
    };

    addTodo(newTodo) {
        this.#TodosCollection.save(newTodo)
            .then(() => {
                this.#TodoListView.renderList(this.#TodosCollection.list);
            })
    };

    editTodo(id) {
        const item = this.#TodosCollection.getItem(id);
        this.#TodoFormView.fillInput(item);
    };
}