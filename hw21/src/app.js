const chatURL = 'wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self';
// const chatURL = 'ws://localhost:3000/'

const chatForm = document.querySelector('#chatFrom');
const logEl = document.querySelector('#log');

let socket = null;

chatForm.addEventListener('submit', onChatFromSubmit);

init();

function init() {
    socket = new WebSocket(chatURL);

    socket.onmessage = onMessage;
};

function onChatFromSubmit(e) {
    e.preventDefault();

    const author = chatForm.elements.author.value;
    const message = chatForm.elements.message.value;

    send(author, message);
};

function onMessage({ data }) {
    const { type, payload } = JSON.parse(data);

    if(type) {
        return addMessage(payload);
    }
};

function send(author, message) {
    socket.send(
        JSON.stringify({
            type: 'message',
            payload: {
                author,
                message,
            },
        })
    );
};

function addMessage({ author, message }) {
    logEl.insertAdjacentHTML(
        'beforeend',
        `<li>${author} :<br> ${message}</li>`
    );
};