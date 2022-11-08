class TodoListView {
    static CLASSES = {
        TODO_ITEM_CLASS: 'todo__item',
        DONE_ITEM_CLASS: 'todo__item-done',
        DELETE_BTN_CLASS: 'todo__delete-btn',
    };

    static todoListContainerTemplate = `
        <div class="todo__list-wrapper">
            <div id="todo-list" class="todo__list"></div>
        </div>`;
    
    static todoItemTemplate = `
        <div class="todo__item {{itemDone}}" data-todo-id="{{id}}"">
            {{title}}
            <span class="todo__delete-btn">Delete</span>
        </div>`

    static generateTodoItemHtml(todo) {
        return interpolate(TodoListView.todoItemTemplate, todo).replaceAll(
            '{{itemDone}}',
            todo.isDone ? TodoListView.CLASSES.DONE_ITEM_CLASS : ''
        );
    }

    static getTodoId(el) {
        return el.closest('.' + TodoListView.CLASSES.TODO_ITEM_CLASS).dataset.todoId;
    }

    el = null;
    #config = null;

    constructor(config) {
        this.#config = config;
        this.#initView();
    }

    #initView() {
        const todoListWrapper = document.createElement('div');
        todoListWrapper.className = 'todo__list-wrapper';

        const todoList = document.createElement('div');
        todoList.className = 'todo__list';

        todoListWrapper.append(todoList);

        todoListWrapper.addEventListener('click', (e) => {
            if (e.target.classList.contains(TodoListView.CLASSES.DELETE_BTN_CLASS)) {
                const todoId = TodoListView.getTodoId(e.target);
                this.deleteTodo(todoId);
            }
            if (e.target.classList.contains(TodoListView.CLASSES.TODO_ITEM_CLASS)) {
                const todoId = TodoListView.getTodoId(e.target);
                this.toggleTodo(todoId);
            }
        })

        this.el = todoListWrapper;
    }

    renderList(list) {
        this.el.children[0].innerHTML = list
            .map(TodoListView.generateTodoItemHtml)
            .join('');
    }

    toggleTodo(id) {
        this.#config.onToggle(id);
    }

    deleteTodo(id) {
        this.#config.onDelete(id);
    }
}