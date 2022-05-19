

const getTodos = async () => {
    const response = await fetch('todos/dougs.json');
    if(response.status!== 200){
        throw new Error('cannot fetch the data!');
    }
    const data =  await response.json();
    return data;
};

getTodos().then(response => {
    console.log(response);
}).catch(err => {
    console.log(err);
});