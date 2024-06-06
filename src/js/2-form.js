const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const input = form.querySelector('input');
const textarea2 = document.querySelector('textarea');


form.addEventListener('input', () => {
    const formData = new FormData(form);
    const email = formData.get('email');
    const message = formData.get('message');
    const data = { email, message }; 

    saveToLS('email', email);
    saveToLS('message', message);
    saveToLS('userData', data);
}); 

function saveToLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
    const json = localStorage.getItem(key);
    try {
        const data = JSON.parse(json);
        return data;
    } catch {
        return json;
    }
}  

function validateForm() {
    if (textarea2.value === '' || input.value === '' ) {
        return false;
    } else {
        return true;
    }
    
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email');
    const message = formData.get('message');
    const data = { email, message }; 

    console.log(data);

    form.reset();
    localStorage.removeItem('email');
    localStorage.removeItem('message');
    localStorage.removeItem('userData');

    if (!validateForm()) {
        e.preventDefault();
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const email = loadFromLS('email');
    const message = loadFromLS('message');

    form.elements.email.value = email;
    form.elements.message.value = message;
});