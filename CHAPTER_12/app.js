

//----------------------------------------------------------------------------------------------------------------


const request = new XMLHttpRequest();

const getTodos = (callback) => {

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && (request.status === 200)) {
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            callback('could not make the request', undefined);
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
};


console.log(1);
console.log(2);

getTodos((err, data) => {
    console.log('callback fired!');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);
