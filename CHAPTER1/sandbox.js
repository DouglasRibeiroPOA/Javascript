const ul = document.querySelector('.people');
const people = ['Amanda', 'Lucca', 'Simone', 'Douglas'];

let html = ``

people.forEach((person,index) => {
    html += `<li style="color: purple">${index+1} -  ${person}</li>`;
});

console.log(html);
ul.innerHTML = html;