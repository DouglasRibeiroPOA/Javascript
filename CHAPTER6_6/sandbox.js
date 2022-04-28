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

ul.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }


});