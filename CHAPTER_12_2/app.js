

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


getTodos('todos/dougs.json').then(data => {
    console.log('promisse resolved: ', data);
}).catch((err) => {
    console.log('promiss rejected: ', err);
});
