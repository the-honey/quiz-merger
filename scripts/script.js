var request = new XMLHttpRequest();
request.open("GET", "../questions.json", false);
request.send(null)
var jsondata = JSON.parse(request.responseText);

window.onload = function() {
    for (let [i, question] of Object.entries(jsondata)) {
        var choices = "";
        for (let [j, answer] of Object.entries(question.answers)) {
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

        var myDiv = document.createElement("div");
        myDiv.className = 'question-box';
        myDiv.innerHTML = question_box;
        document.body.appendChild(myDiv);
    }
}