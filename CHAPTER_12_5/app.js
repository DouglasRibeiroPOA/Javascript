

const getTodos = async () => {

    const response = await fetch('todos/doug.json');
    const data =  await response.json();
    return data;
};

console.log(1);
console.log(2);
console.log(3);

getTodos().then(response => {
    console.log(response);
}).catch(err => {
    console.log(err);
});
console.log(4);
console.log(5);
console.log(6);
console.log(7);


