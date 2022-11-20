class TodoListView {
    static CLASSES = {
        ITEM_DONE_CLASS: 'todo__item-done',
        DELETE_BTN_CLASS: 'todo__delete-btn',
        EDIT_BTN_CLASS: 'todo__edit-btn',
        ITEM_TODO_CLASS: 'todo__item',
    };

    static SELECTORS = {
        ITEM_TASK_CLASS: '.todo__item',
    };

    static todoListContainerTemplate = `
    <div class="todo__list-wrapper">
        <div id="todo-list" class="todo__list"></div>
    </div>`;

    static todoItemTemplate = `
    <div class="todo__item {{itemDone}}" data-todo-id="{{id}}"">
        {{title}}
        <span class="todo__delete-btn">Delete</span>
        <span class="todo__edit-btn">Edit</span>
    </div>`;

    static getTodoId(elem) {
        return elem.closest(TodoListView.SELECTORS.ITEM_TASK_CLASS).dataset.todoId;
    };

    static generateTodoListHtml(todo) {
        return interpolate(TodoListView.todoItemTemplate, todo)
        .replaceAll(`{{itemDone}}`, todo.isDone ? TodoListView.CLASSES.ITEM_DONE_CLASS : '');
    };

    el = null;
    #config = null;

    constructor(config) {
        this.#config = config;
        this.#initView();
    }

    #initView() {
        const todoEl = htmlToElement(TodoListView.todoListContainerTemplate);

        todoEl.addEventListener('click', (e) => {
            const todoId = TodoListView.getTodoId(e.target);

            if(e.target.classList.contains(TodoListView.CLASSES.DELETE_BTN_CLASS)) {
                this.deleteTodo(todoId);
            };
            if(e.target.classList.contains(TodoListView.CLASSES.ITEM_TODO_CLASS)) {
                this.toggleTodo(todoId);
            };
            if(e.target.classList.contains(TodoListView.CLASSES.EDIT_BTN_CLASS)) {
                this.editTodo(todoId);
            };
        });

        this.el = todoEl;
    };

    renderList(list) {
        this.el.children[0].innerHTML = list
            .map(TodoListView.generateTodoListHtml)
            .join('');
    };

    toggleTodo(id) {
        this.#config.onToggle(id);
    };

    deleteTodo(id) {
        this.#config.onDelete(id);
    };

    editTodo(id) {
        this.#config.onEdit(id);
    };

    clearInput() {
        this.#config.onClearInput(id);
    };
}