const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';

const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';
const INVALID_INPUT_CLASS = 'invalid-input';
const CONTACT_ITEM_SELECTOR = '.contact-item';

const contactsListEl = document.querySelector('#contactsList');
const contactForm = document.querySelector('#contactForm');
const idInput = document.querySelector('#id');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const emailInput = document.querySelector('#email');
const contactTemplate = document.querySelector('#contactTemplate').innerHTML;
const saveContactBtn = document.querySelector('#addContactBtn');

let contactsList = [];

contactForm.addEventListener('submit', onFormSubmit);
contactsListEl.addEventListener('click', onContactsListElClick);
nameInput.addEventListener('input', onFormElementInput);
surnameInput.addEventListener('input', onFormElementInput);
emailInput.addEventListener('input', onFormElementInput);

init();

function init() {
    fetchContactsList();
    renderList(contactsList);
    saveContactBtn.disabled = true;
}

function fetchContactsList() {
    fetch(API_URL)
        .then((resp) => resp.json())
        .then((data) => {
            contactsList = data;
            renderList(contactsList);
        })
}

function onFormSubmit(e) {
    e.preventDefault();

    const contactData = getFormValues();

    saveContact(contactData);
    resetFormData();
}

function onContactsListElClick(e) {
    const contactId = getContactId(e.target);

    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteContact(contactId);
    }
    if (e.target.classList.contains(EDIT_BTN_CLASS)) {
        editContact(contactId);
    }
}

function onFormElementInput(e) {
    activeValidateInput(e.target);
}

function renderList(list) {
    contactsListEl.innerHTML = list.map(generateContactHtml).join('');
}

function generateContactHtml({ id, name, surname, email }) {
    return contactTemplate
        .replaceAll('{{id}}', id)
        .replaceAll('{{name}}', name)
        .replaceAll('{{surname}}', surname)
        .replaceAll('{{email}}', email);
}

function getFormValues() {
    return {
        id: idInput.value,
        name: nameInput.value,
        surname: surnameInput.value,
        email: emailInput.value,
    };
}

function fillFormValues({ id, name, surname, email }) {
    idInput.value = id;
    nameInput.value = name;
    surnameInput.value = surname;
    emailInput.value = email;
}

function resetFormData() {
    idInput.value = '';
    nameInput.value = '';
    surnameInput.value = '';
    emailInput.value = '';
}

function getContactId(el) {
    return el.closest(CONTACT_ITEM_SELECTOR).dataset.contactId;
}

function saveContact(contact) {
    if (contact.id === '') {
        addContact(contact);
    } else {
        updateContact(contact);
    }
}

function addContact(contact) {
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            contactsList = [...contactsList, data];
            renderList(contactsList);
        });
}

function updateContact(contact) {
        fetch(API_URL + contact.id, {
        method: 'PUT',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(() => {
            contactsList = contactsList.map((item) => 
                item.id === contact.id ? contact : item
            );

            renderList(contactsList);
        });
}

function deleteContact(id) {
    fetch(API_URL + id, {
        method: 'DELETE',
    }).then(() => {
        contactsList = contactsList.filter((item) => item.id !== id);

        renderList(contactsList);
    });
}

function editContact(id) {
    const contact = contactsList.find((item) => item.id === id);
    currentContactId = id;
    fillFormValues(contact);
}

function activeValidateInput(input) {
    if (input.value === '') {
        input.classList.add(INVALID_INPUT_CLASS);
        saveContactBtn.disabled = true;
    } else {
        resetActiveValidation(input);
    }
}

function resetActiveValidation(input) {
    input.classList.remove(INVALID_INPUT_CLASS);
    saveContactBtn.disabled = false;
}