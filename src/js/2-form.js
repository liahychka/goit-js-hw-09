const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

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

