
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener("submit", (event) => {
    event.preventDefault();

   checkForm();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

username.addEventListener("blur", () => {
    checkInputUserName();
})

function checkInputUserName() {
    const usernameValue = username.value;

    if(usernameValue === "") {
        erroInput(username, 'Preencha o seu nome')
    }else {
        const formItem = username.parentElement;
        formItem.className = 'form-content';
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if(emailValue === "") {
        erroInput(email, "Preencha o email")
    }else {
        const formItem = email.parentElement;
        formItem.className = 'form-content'
    }
}

function checkInputPassword() {
    const passwordValue = password.value;

    if(passwordValue === "") {
        erroInput(password, "A senha é obrigatória")
    }else if (passwordValue.length < 8) {
        erroInput(password, "A senha precisa no mínimo 8 caracteres")
    }else {
        const formItem = password.parentElement;
        formItem.className = 'form-content'
    }
}

function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

   if(confirmationPasswordValue === "") {
        erroInput(passwordConfirmation, "A confirmação de senha é obrigatória!")
   }else if(confirmationPasswordValue !== passwordValue) {
        erroInput(passwordConfirmation, "As senhas não são iguais")
   }else {
    const formItem = passwordConfirmation.parentElement;
    formItem.className = 'form-content'
   }
}

function checkForm() {
    checkInputUserName();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll('.from-content');

    const isValid = [...formItems].every( (item) => {
        return item.className === 'form-content'
    });

    if(isValid) {
        alert("CADASTRADO COM SUCESSO!")
    }
}


function erroInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector('a');

    textMessage.innerText = message;

    formItem.className = 'form-content error'
}