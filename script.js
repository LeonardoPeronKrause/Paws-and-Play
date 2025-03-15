document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const accept = document.getElementById('accept').checked;

    if (firstName === '') {
        alert('Por favor, insira seu primeiro nome.');
        return;
    }

    if (lastName === '') {
        alert('Por favor, insira seu sobrenome.')
        return;
    }

    if (email === '') {
        alert('Por favor, insira seu email');
        return;
    }

    if (message === '') {
        alert('Por favor, insira uma mensagem.');
        return;
    }

    if (!accept) {
        alert('Por favor, concorde com a politica de privacidade');
        return;
    }

    alert('Formulário enviado com sucesso!');
});

document.getElementById('subscribe-btn').addEventListener('click', function (event) {
    const email = document.getElementById('newsletter-email').value.trim();

    if (email === '') {
        alert('Por favor, insira um email.');
        return;
    }

    alert('Inscrito com sucesso. Em breve você receberá atualizações...');
});
