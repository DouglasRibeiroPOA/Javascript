const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

const pattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();

    const username = form.username.value;

    if (pattern.test(username)) {
        feedback.textContent = 'that username is valid!';

    } else {
        feedback.textContent = 'username must contain letters only and it should be between 6 and 12 characters long';
    }
});


form.username.addEventListener('keyup', e => {
    let inputText = document.querySelector('#username');Ì

    console.log(e);

    if (pattern.test(e.target.value)) {
        console.log('passed');
        inputText.setAttribute('class', 'success');
    } else {
        console.log('failed');
        inputText.setAttribute('class', 'error');
    }
});