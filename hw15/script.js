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
const todoItem = document.querySelector('.todo-item');

let list = [];

newTodoForm.addEventListener('submit', onFormSubmit);
listEl.addEventListener('click', onTodoListElClick);
newTodoTitleInput.addEventListener('input', onFormElementInput);

init();

function init() {
    fetchTodo();
    renderList(list);
}

function fetchTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos').then((resp) => {
        resp.json().then((data) => {
            list = data;
            renderList(list);
        });
    });
}

function onFormSubmit(e) {
    e.preventDefault();
    if (!validateInput()) {
        return;
    }

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
        toggleTodo(todoId);
    }
}

function onFormElementInput(e) {
    activeValidateInput(e.target);
}

function renderList(list) {
    listEl.innerHTML = list.map(generateTodoHtml).join('');
}

function generateTodoHtml({ id, title, completed }) {
    return todoTemplate
        .replaceAll('{{id}}', id)
        .replaceAll('{{title}}', title)
        .replaceAll('{{completed}}', completed);
}

function getFormValues() {
    return {
        id: +idInput.value,
        title: newTodoTitleInput.value,
        completed: false,
    };
}

function fillFormValues({ id, title }) {
    idInput.value = id;
    newTodoTitleInput.value = title;
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
    list = list.map(item => (item.id === todo.id ? todo : item));
    renderList(list);
}

function deleteTodo(id) {
    list = list.filter(item => item.id !== id);
    renderList(list);
}

function editTodo(id) {
    const todo = list.find(item => item.id === id);
    fillFormValues(todo);
}

function toggleTodo(id) {
    const todo = list.find(item => item.id === id);
    todo.completed = !todo.completed;
    renderList(list);
}

function activeValidateInput(input) {
    resetActiveValidation(input);
    if (input.value === '') {
        input.classList.add(INVALID_INPUT_CLASS);
        saveTodoBtn.disabled = true;
    }
}

function resetActiveValidation(input) {
    input.classList.remove(INVALID_INPUT_CLASS);
    saveTodoBtn.disabled = false;
}

function validateInput() {
    resetValidation();
    if (newTodoTitleInput.value === '') {
        newTodoTitleInput.classList.add(INVALID_INPUT_CLASS);
        return false;
    }
    return true;
}

function resetValidation() {
    newTodoTitleInput.classList.remove(INVALID_INPUT_CLASS);
}