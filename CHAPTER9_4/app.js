const names = ['Douglas', 'Amanda', 'Simone', 'Lucca', 'Bucky', 'Noah'];

names.sort();
console.log(names);

const scores = [10, 30, 15, 25, 50, 40, 5];

//scores.sort();
//scores.reverse();
scores.sort((a, b) => a - b);

console.log(scores);

const players = [
    { name: 'Douglas', score: 67 },
    { name: 'Amanda', score: 23 },
    { name: 'Simone', score: 34 },
    { name: 'Lucca', score: 45 },
    { name: 'Bucky', score: 78 },
    { name: 'Noah', score: 10 }
]

players.sort((a, b) => {

    if (a.score > b.score) {
        return -1;
    } else if (b.score > a.score) {
        return 1;
    } else {
        return 0
    }
});

console.log(players);