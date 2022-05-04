const corectAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    //check answers
    userAnswers.forEach((answer, index) => {
        if (answer === corectAnswers[index]) {
            score += 25;
        }
    });

    //show results on page
    scrollTo(0, 0);
    const scoreBlock = document.querySelector('.result');
    console.log(scoreBlock);
    scoreBlock.classList.remove('d-none');

    var i = 0;
    const timer = setInterval(() => {
        if (i === score) {
            clearInterval(timer);
        }
        scoreBlock.querySelector('span').textContent = `${i}%`
        i++;
    }, 10);


    console.log(scoreBlock.nextSibling.nextSibling);
    console.log(scoreBlock);
    console.log(score);
});