import throttle from 'lodash.throttle';
const ref = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
};

ref.form.addEventListener('submit', throttle(submitForm, 500));

returnText();

function submitForm(e) { 
    e.preventDefault();
    const obj = {}; 
    const {
        elements: { email, message }
    } = e.currentTarget;
    obj.email = email.value;
    obj.message = message.value;
    console.log(obj);
    e.currentTarget.reset();
    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
};

function returnText() {
    const savedData = localStorage.getItem('feedback-form-state');
    const parsedData = JSON.parse(savedData);
    console.log(parsedData);
    if (parsedData) {
        ref.input.value = parsedData.email;
        ref.textarea.value = parsedData.message;
    }
};