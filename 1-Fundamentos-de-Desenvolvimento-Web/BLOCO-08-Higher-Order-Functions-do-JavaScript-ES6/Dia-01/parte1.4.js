const verifyAnswer = (correctAnswer, answer) => {
    if (answer === 'N.A') {
        return 0;
    } else if (correctAnswer === answer) {
        return 1;
    }
    return -0.5;
}


const funcao = (correctAnswers, answers, callbackCheck) => {
    let pontuacao = 0;
    for (let index = 0; index < correctAnswers.length; index += 1) {
        pontuacao += callbackCheck(correctAnswers[index], answers[index]);
    }
    return pontuacao;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['N.A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(funcao(rightAnswers, studentAnswers, verifyAnswer));