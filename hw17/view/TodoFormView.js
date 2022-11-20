class TodoFormView {
    static CLASSES = {
        INVALID_INPUT_CLASS: 'invalid-input',
    };

    static todoFormTempalate = `
    <div>
    <form id="todo-form" class="todo__form">
        <input type="hidden" id="id" name="todoId"/>
        <input class="todo__form-input" type="text" id="todo-input" placeholder="Write task" name="title" />
        <button class="todo__form-btn" id="saveTodoBtn">Save</button>
    </form>
    </div>`;

    #config = null;
    el = null;
    #form = null;

    constructor(config) {
        this.#config = config;
        this.#initView();
    };

    #initView() {
        this.el = htmlToElement(TodoFormView.todoFormTempalate);

        this.#form = this.el.querySelector('form');

        this.el.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!this.dataValidation()) {
                return;
            }

            const newTodo = this.getFormValues();
            this.addTodo(newTodo);
            this.clearInput();
        });
    };

    getFormValues() {
        return {
            id: this.#form.elements.todoId.value,
            title: this.#form.elements.title.value,
        };
    };

    fillInput({ id, title }) {
        this.#form.elements.todoId.value = id;
        this.#form.elements.title.value = title;
    }

    addTodo(newTodo) {
        this.#config.onSave(newTodo);
    };

    clearInput() {
        this.#form.reset();
    };

    dataValidation() {
        this.resetValidation();
        if (this.#form.elements.title.value.trim() === '') {
            this.#form.elements.title.classList.add(TodoFormView.CLASSES.INVALID_INPUT_CLASS);
            return false;
        };
        return true;
    };

    resetValidation() {
        this.#form.elements.title.classList.remove(TodoFormView.CLASSES.INVALID_INPUT_CLASS);
    }
}












// class TodoFormView {
//     #config = null;
//     el = null;
//     #form = null;

//     static CLASSES = {
//         INVALID_INPUT_CLASS: 'invalid-input',
//     };

//     static todoFormTempalate = `
//     <form id="todo-form" class="todo__form">
//         <input type="hidden" id="id" />
//         <input class="todo__form-input" type="text" id="todo-input" placeholder="Write task" />
//         <button class="todo__form-btn" id="saveTodoBtn">Save</button>
//     </form>`;
//     taskInput = document.querySelector('#taskInput');
//     idInput = document.querySelector('#taskId');

//     constructor(config) {
//     this.#config = config;
//     this.#initView();
//     }
//     #initView() {
//     this.el = htmlToElement(TodoFormView.todoFormTemplate);

//     this.#form = this.el.querySelector('form');

//     this.el.addEventListener('submit', (e) => {
//         e.preventDefault();
//         if (!this.dataValidation()) {
//         return;
//         }

//         const newTask = this.getFormValues();
//         this.addTask(newTask);
//         this.clearinput();
//     });
//     }
//     getFormValues() {
//     return {
//         id: this.#form.elements.taskId.value,
//         title: this.#form.elements.title.value,
//     };
//     }
//     fillInput({ id, title }) {
//     this.#form.elements.taskId.value = id;
//     this.#form.elements.title.value = title;
//     }

//     addTask(newTask) {
//     this.#config.onSave(newTask);
//     }

//     clearinput() {
//     this.#form.reset();
//     }

//     dataValidation() {
//     this.resetValidation();
//     if (this.#form.elements.title.value.trim() === '') {
//         this.#form.elements.title.classList.add(TodoFormView.CLASSES.INVALID_CLASS);
//         return false;
//     }
//     return true;
//     }

//     resetValidation() {
//     this.#form.elements.title.classList.remove(TodoFormView.CLASSES.INVALID_CLASS);
//     }
// }