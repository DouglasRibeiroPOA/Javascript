

const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && (request.status === 200)) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('could not make the request');
            }
        });
        request.open('GET', resource);
        request.send();
    });
};


getTodos('todos/doug.json').then(data => {
    console.log('promisse 1 resolved: ', data);
    return getTodos('todos/amanda.json');
}).then(data => {
    console.log('promisse 2 resolved: ', data);
    return getTodos('todos/lucca.json');
}).then(data => {
    console.log('promisse 3 resolved: ', data);
}).catch((err) => {
    console.log('promiss rejected: ', err);
});


