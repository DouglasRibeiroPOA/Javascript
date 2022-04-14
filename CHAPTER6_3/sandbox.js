const button = document.querySelector('button');

console.log(button);

button.addEventListener('click', () => {
    console.log('You clicked me!');
});


const items = document.querySelectorAll('li');

items.forEach(element => {
    element.addEventListener('click', e => {

        
            console.log(e.target.style);
        
            e.target.style.textDecoration = 'line-through';
            console.log(e.target.innerText + '. Done!');
        

    });
});