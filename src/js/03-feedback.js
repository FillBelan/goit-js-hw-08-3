import throttle from 'lodash.throttle';
// const ref = {
//     form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('.feedback-form textarea'),
//     input: document.querySelector('.feedback-form input'),
// };

// ref.form.addEventListener('submit', throttle(submitForm, 500));

// returnText();

// function submitForm(e) { 
//     e.preventDefault();
//     const obj = {}; 
//     const {
//         elements: { email, message }
//     } = e.currentTarget;
//     obj.email = email.value;
//     obj.message = message.value;
//     console.log(obj);
//     e.currentTarget.reset();
//     localStorage.setItem('feedback-form-state', JSON.stringify(obj));
// };

// function returnText() {
//     const savedData = localStorage.getItem('feedback-form-state');
//     const parsedData = JSON.parse(savedData);
//     if (parsedData) {
//         ref.input.value = parsedData.email;
//         ref.textarea.value = parsedData.message;
//     }
// };





const ref = {
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
    form: document.querySelector('.feedback-form')
};

ref.email.addEventListener('input', throttle(inputForm), 500);
ref.message.addEventListener('input', throttle(messageForm), 500);
ref.form.addEventListener('submit', throttle(clearForm), 500);

returnText();

function inputForm(e) { 
    e.preventDefault();
    const emailData = e.currentTarget.value;
    localStorage.setItem('feedback-form-email', emailData);
    e.currentTarget.reset();
console.log(e.currentTarget.value);
};

function messageForm(e) { 
    e.preventDefault();
    const messageData = e.currentTarget.value;
    localStorage.setItem('feedback-form-message', messageData);
    e.currentTarget.reset();
console.log(e.currentTarget.value);
};

function clearForm() {
    localStorage.clear();
}

function returnText() {
    const savedEmail = localStorage.getItem('feedback-form-email');
    const savedMessage = localStorage.getItem('feedback-form-message');
    if (savedEmail && savedMessage) {
        ref.email.value = savedEmail;
        ref.message.value = savedMessage;
    }
};
