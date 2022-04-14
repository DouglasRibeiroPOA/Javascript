const content = document.querySelector('p');
console.log(content.classList);

console.log(content);

content.classList.add('success');
content.classList.remove('error');


const content_1 = document.querySelector('body > p.success');
var contentParent = content_1.parentNode;

var h1Element = document.createElement('h1')

h1Element.innerText = content_1.innerText;


const allPs = document.querySelectorAll('p');

console.log(allPs);

for (var i = 0; allPs.length > i; i++) {
    if ((allPs[i].innerText).includes("error")) {
        allPs[i].classList.add('error');
    } else if ((allPs[i].innerText).includes("success")) {
        allPs[i].classList.add('success');
    }
}

allPs.forEach(p => {
    console.log(p.innerText);
});

