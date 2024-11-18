const socket = io("ws://localhost:8080"); // quand en https -> wss
const button = document.querySelector('button');
const input = document.querySelector('input');
const messageFeed = document.querySelector('#message-feed');

socket.on('message', (message) => {
    const li = document.createElement('li');
    li.innerHTML = message.author + ": " + message.content;
    messageFeed.appendChild(li);
})

button.addEventListener('click', () => {
    const inputValue = input.value;
    socket.emit('message', inputValue);
})