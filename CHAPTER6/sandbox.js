const paras = document.querySelectorAll('p');

console.log(paras);

const errors = document.querySelectorAll('.error');


errors.forEach(error => {
    console.log(error.innerHTML);
});


//get element by Id
const hello = document.getElementById('Douglas').innerText;
console.log(hello);

//get elements by their class names
const erros1 = document.getElementsByClassName('error');
console.log(erros1);


//get elements by their tag names
const ps = document.getElementsByTagName('p');
console.log(ps);



//setting atributes


const href = document.querySelector('a');
console.log(href.getAttribute('href'));
href.setAttribute('href','https://www.youtube.com');
console.log(href.getAttribute('herf'));
console.log(href.innerText='New name!');


const randomText = document.querySelector('body > div:nth-child(3) > p.error');
randomText.setAttribute('style' ,'color:green');
randomText.innerText='Super Test';