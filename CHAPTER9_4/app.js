const scores = [10, 30, 15, 25, 50, 40, 5];

const findHighestScore = scores.find( score => {

    return score>15;
});

console.log(findHighestScore);