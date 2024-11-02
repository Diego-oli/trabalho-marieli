import { validateEmail } from './index.js';

export function validateContatoForm() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = form.querySelector('input[name="name"]');
            const email = form.querySelector('input[name="email"]');
            const message = form.querySelector('textarea[name="message"]');
            
            let hasError = false;
            
            if (name && name.value.trim() === "") {
                console.error("Nome é um campo obrigatório.");
                hasError = true;
            }
            if (email && !validateEmail(email.value)) {
                console.error("Email inválido.");
                hasError = true;
            }
            if (message && message.value.trim() === "") {
                console.error("Mensagem é um campo obrigatório.");
                hasError = true;
            }

            if (!hasError) {
                console.log("Formulário enviado com sucesso.");
                form.submit();
            }
        });
    } else {
        console.error("Formulário de contato não encontrado.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    validateContatoForm();
});

const form = document.getElementById('formContato');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const assunto = form.assunto.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome || !email || !assunto || !mensagem) {
        feedback.textContent = 'Por favor, preencha todos os campos.';
        feedback.classList.add('error');
        feedback.classList.remove('success');
        return;
    }

    if (!validateEmail(email)) {
        feedback.textContent = 'Por favor, insira um e-mail válido.';
        feedback.classList.add('error');
        feedback.classList.remove('success');
        return;
    }

    feedback.textContent = 'Mensagem enviada com sucesso!';
    feedback.classList.remove('error');
    feedback.classList.add('success');

    form.reset();
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
