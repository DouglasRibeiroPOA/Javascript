const scores = [10, 30, 15, 25, 50, 40, 5];

const result = scores.reduce((acc, curr) => {
    if (curr > 20) {
        acc++;
    }
    return acc;
}, 0);

console.log(result);

const scoresv2 = [
    { name: 'Douglas', score: 50 },
    { name: 'Amanda', score: 67 },
    { name: 'Simone', score: 35 },
    { name: 'Lucca', score: 234 },
    { name: 'Amanda', score: 66 },
    { name: 'Douglas', score: 50 },
    { name: 'Amanda', score: 67 },
    { name: 'Simone', score: 35 },
    { name: 'Lucca', score: 234 },
    { name: 'Amanda', score: 66 },
    { name: 'Douglas', score: 50 },
    { name: 'Amanda', score: 67 },
    { name: 'Simone', score: 35 },
    { name: 'Lucca', score: 234 },
    { name: 'Amanda', score: 66 },
    { name: 'Amanda', score: 75 }
]

let result2 = scoresv2.reduce((acc, curr) => {
    if (curr.name === 'Amanda') {
        acc += curr.score
    }
    return acc;
}, 0)

console.log(result2);