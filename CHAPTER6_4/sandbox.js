const button = document.querySelector('button');
const ul = document.querySelector('ul');

console.log(button);

button.addEventListener('click', () => {
    //ul.innerHTML += '<li>Something New</li>';
    const li = document.createElement('li');
    li.textContent = 'something new';
    //ul.append(li);
    ul.prepend(li);
});

const items = document.querySelectorAll('li');
items.forEach(element => {
    element.addEventListener('click', e => {
        e.target.remove();
    });
});