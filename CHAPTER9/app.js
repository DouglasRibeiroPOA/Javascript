const scores = [10, 30, 15, 25, 50, 40, 5];



var resultScore = scores.filter((score) => {
    return score > 20;
});

console.log(scores);

console.log(resultScore);


console.log('------------------------------------------------- Object filter method -------------------------------------------------');



const users = [
    { name: 'Douglas', premium: true },
    { name: 'Amanda', premium: false },
    { name: 'Simone', premium: false },
    { name: 'Lucca', premium: true },
    { name: 'Bucky', premium: false },
    { name: 'Noah', premium: true }

]

const premiumUsers = users.filter(user => {
    return user.premium === true ? true : false;
});

console.log(premiumUsers);