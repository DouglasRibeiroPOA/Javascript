

const request = new XMLHttpRequest();

const getTodos = (resource, callback) => {

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && (request.status === 200)) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('could not make the request', undefined);
        }
    });
    request.open('GET', resource);
    request.send();
};


console.log(1);
console.log(2);

getTodos('todos/amanda.json', (err, data) => {
    console.log(data);
    getTodos('todos/lucca.json', (err, data) => {
        console.log(data);
        getTodos('todos/doug.json', (err, data) => {
            console.log(data);
        });
    });
});

console.log(3);
console.log(4);
