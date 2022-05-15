let request = new XMLHttpRequest();
request.open("GET", "../questions.json", false);
request.send(null)
let jsondata = JSON.parse(request.responseText);

const RANDOMIZE_QUESTIONS = false;
const RANDOMIZE_CHOICES = false;

window.onload = function() {
    let questions = RANDOMIZE_QUESTIONS ? Object.entries(jsondata.sort(() => Math.random() - 0.5)) : Object.entries(jsondata);

    for (let [i, question] of questions) {
        let answers = RANDOMIZE_CHOICES ? Object.entries(question.answers.sort(() => Math.random() - 0.5)) : Object.entries(question.answers);

        let choices = "";
        for (let [j, answer] of answers) {
            if (answer.is_correct)
                choices += '<p class="correct-answer"><input type="radio" disabled checked><label>' + answer.text + '</label></p>';
            else
                choices += '<p><input type="radio" disabled><label>' + answer.text + '</label></p>';
        }

        let question_box = '<div class="question-header">Question ' + String(Number(i) + 1) + '</div><div class="question-body"><div class="question-wrapper"><div class="question-text">'
                            + question.question 
                            + '</div></div><div class="answers-wrapper">'
                            + choices
                            + '</div></div>';

        let myDiv = document.createElement("div");
        myDiv.className = 'question-box';
        myDiv.innerHTML = question_box;
        document.body.appendChild(myDiv);
    }
}
