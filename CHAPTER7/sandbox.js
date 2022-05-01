const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');


form.addEventListener('submit',e =>{
    e.preventDefault();
    console.log(username.value);
    console.log(form.username.value);

    console.log(e);
});


const un = '45454&*&$dcfsdfsdfdddddcccdd£';
const pattern = /[a-z]{6,}/;

const pattern2 = /[a-z]{6,}/;

let result = pattern.test(un);
console.log(result);


let result2 = un.search(pattern);
console.log(result2);