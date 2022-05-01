const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');



form.addEventListener('submit', e => {
    e.preventDefault();


    const username = form.username.value;
    const pattern = /^[a-zA-Z]{6,12}$/;

    if (pattern.test(username)) {
        feedback.textContent = 'that username is valid!';

    } else {
        feedback.textContent = 'username must contain letters only and it should be between 6 and 12 characters long';
    }

});






