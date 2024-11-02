const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

const automaticResponses = [
    "Olá! Como posso ajudar?",
    "Interessante! Me conte mais sobre isso.",
    "Entendi seu ponto de vista.",
    "Que legal! Continue...",
    "Isso é muito interessante!",
    "Hmm, deixa eu pensar sobre isso...",
    "Excelente observação!",
];

function getRandomResponse() {
    return automaticResponses[Math.floor(Math.random() * automaticResponses.length)];
}

function formatTime() {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
}

function createMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    
    const messageText = document.createElement('div');
    messageText.textContent = text;
    
    const timestamp = document.createElement('div');
    timestamp.classList.add('timestamp');
    timestamp.textContent = formatTime();
    
    messageDiv.appendChild(messageText);
    messageDiv.appendChild(timestamp);
    
    return messageDiv;
}

function sendMessage() {
    const messageText = messageInput.value.trim();
    
    if (messageText === '') {
        displayError("Por favor, digite uma mensagem.");
        return;
    }

    try {
        chatMessages.appendChild(createMessage(messageText, 'sent'));
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            const response = getRandomResponse();
            chatMessages.appendChild(createMessage(response, 'received'));
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    } catch (error) {
        displayError("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
    }
}

function displayError(errorMessage) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.textContent = errorMessage;

    chatMessages.appendChild(errorDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

setTimeout(() => {
    chatMessages.appendChild(createMessage("Olá! Bem-vindo ao chat! Como posso ajudar?", 'received'));
}, 500);
