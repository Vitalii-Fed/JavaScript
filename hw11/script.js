const TODO_ITEM_CLASS = 'todo-item';
const DONE_ITEM_CLASS = 'done';
const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';
const INVALID_INPUT_CLASS = 'invalid-input';
const TODO_ITEM_SELECTOR = '.todo-item';

const todoTemplate = document.querySelector('#todoTemplate').innerHTML;
const listEl = document.querySelector('#list');
const newTodoTitleInput = document.querySelector('#newTodoTitle');
const idInput = document.querySelector('#id');
const saveTodoBtn = document.querySelector('#saveTodoBtn');
const newTodoForm = document.querySelector('#newTodoForm');
// const todoItem = document.querySelector('.todo-item');

// let todoList = [
//     { id: 1, task: Title1, isDone: false },
//     { id: 2, task: Title2, isDone: false },
//     { id: 3, task: Title3, isDone: false }
// ];

let list = [];


newTodoForm.addEventListener('submit', onFormSubmit);
listEl.addEventListener('click', onTodoListElClick);
newTodoTitleInput.addEventListener('input', onFormElementInput);
// todoItem.addEventListener('click', onClickTodoItem);

init();

function init() {
    renderList(list);
}

function onFormSubmit(e) {
    e.preventDefault();

    const todoData = getFormValues();

    saveTodo(todoData);
    resetFormData();
}

function onTodoListElClick(e) {
    const todoId = getTodoId(e.target);

    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteTodo(todoId);
    }
    if (e.target.classList.contains(EDIT_BTN_CLASS)) {
        editTodo(todoId);
    }
    if (e.target.classList.contains(TODO_ITEM_CLASS)) {
        e.target.classList.toggle(DONE_ITEM_CLASS);
    }
}

function onFormElementInput(e) {
    validateInput(e.target);
}

// function onClickTodoItem({ isDone }) {
//     return console.log(isDone);
//     // if (isDone === null) {
//     //      todoItem.classList.add(DONE_ITEM_CLASS);
//     // } else {
//     //     todoItem.classList.remove(DONE_ITEM_CLASS);
//     // }
// }

function renderList(list) {
    listEl.innerHTML = list.map(generateTodoHtml).join('');
}

function generateTodoHtml({ id, task, isDone }) {
    return todoTemplate
        .replaceAll('{{id}}', id)
        .replaceAll('{{task}}', task)
}

function getFormValues() {
    return {
        id: +idInput.value,
        task: newTodoTitleInput.value,
        isDone: false,
    };
}

function fillFormValues({ id, task, isDone }) {
    idInput.value = id;
    newTodoTitleInput.value = task;
}

function resetFormData() {
    newTodoTitleInput.value = '';
}

function getTodoId(el) {
    return +el.closest(TODO_ITEM_SELECTOR).dataset.todoId;
}

function saveTodo(todo) {
    if (todo.id === 0) {
        addTodo(todo);
    } else {
        updateTodo(todo);
    }
}

function addTodo(todo) {
    todo.id = Date.now();

    list.push(todo);
    renderList(list);
}

function updateTodo(todo) {
    // const index = contactsList.findIndex((item) => item.id === contact.id);
    // contactsList.splice(index, 1, contact);

    list = list.map((item) =>
        item.id === todo.id ? todo : item
    );

    renderList(list);
}

function deleteTodo(id) {
    list = list.filter((item) => item.id !== id);
    renderList(list);
}

function editTodo(id) {
    const todo = list.find((item) => item.id === id);
    // currentTodoId = id;
    fillFormValues(todo);
}

function validateInput(input) {
    resetValidation(input);
    if (input.value === '') {
        input.classList.add(INVALID_INPUT_CLASS);
    }
}

function resetValidation(input) {
    input.classList.remove(INVALID_INPUT_CLASS);
}
















// function validateForm() {
//     resetFormValidation();
//     if (newTodoTitleInput.value === '') {
//         newTodoTitleInput.classList.add(INVALID_CLASS);
//         saveTodoBtn.disabled = true;
//         return false;
//     }

//     return true;
// }

// function resetFormValidation() {
//     newTodoTitleInput.classList.remove(INVALID_CLASS);
//     saveTodoBtn.disabled = false;
// }


// function onListClick(e) {
//     if (e.target.classList.contains(TODO_ITEM_CLASS)) {
//         toggleTodo(e.target);
//     }
//     if (e.target.classList.contains(DELETE_BTN_CLASS)) {
//         removeTodo(e.target.parentElement);
//     }
// }

// function onFormSubmit(e) {
//     e.preventDefault();

//     if (!validateForm()) {
//         return;
//     }
//     const newTodo = getFormData();
//     addTodo(newTodo);
//     resetFormData();
// }

// function onNewTodoTitleChange(e) {
//     validateForm();
// }



















// function addTodo(todo) {
//     const todoHtml = generateTodoHtml(todo);
//     listEl.insertAdjacentHTML('beforeend', todoHtml);
// }

// function generateTodoHtml({ title }) {
//     return todoTemplate.replaceAll('{{title}}', title);
// }


// function clearList() {
//     listEl.innerHTML = '';
// }

// function toggleTodo(todoEl) {
//     todoEl.classList.toggle(DONE_ITEM_CLASS);
// }

// function removeTodo(todoEl) {
//     todoEl.remove();
// }