class TodoFormView {
    static todoFormTempalate = `
        <form id="todo-form" class="todo__form">
            <input type="hidden" id="id" />
            <input class="todo__form-input" type="text" id="todo-input" placeholder="Write task" />
            <button class="todo__form-btn" id="saveTodoBtn">Save task</button>
        </form>`
    
    el = null;
    #config = null;

    constructor(config) {
        this.#initView();
        this.#config = config;
    }

    #initView() {
        const todoForm = document.createElement('form');
        todoForm.className = 'todo__form';

        const todoFormInput = document.createElement('input');
        todoFormInput.className = 'todo__form-input';

        const todoFormBtn = document.createElement('button');
        todoFormBtn.className = 'todo__form-btn';
        todoFormBtn.textContent = 'Save';

        todoForm.append(todoFormInput);
        todoForm.append(todoFormBtn);

        todoForm.addEventListener('submit', (e) => {
            e.preventDefault();

            this.saveTodo(el);
        })

        this.el = todoForm;
    }

    saveTodo(el) {
        this.#config.onSave(el);
    }
}