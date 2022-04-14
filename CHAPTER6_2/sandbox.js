const article = document.querySelector('article');

console.log(article);
var articleElements = Array.from(article.children);

console.log(articleElements);


articleElements.forEach(element =>{
    element.classList.add('article-element');
});

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);
console.log(title.nextElementSibling.previousElementSibling);
console.log('-------------------------------');

