
function getQuestions(amount, level){
    var url = "https://opentdb.com/api.php?amount=" + amount +"&category=18&difficulty=" + level
    return url
}

var urlQuestions = getQuestions(10,'easy')
var containerElm = document.querySelector('#container')

function buildQuestion() {
    ajaxGet(urlQuestions, function (result){
        var questions = JSON.parse(result)
    
        console.log(questions)
        //console.log(questions[0].results)
        for (var i = 0; i < questions.results.length; i++){
            console.log(questions.results[i].type)
            if (questions.results[i].type === 'multiple'){
                var quizContainer = document.createElement('div')
                quizContainer.className = 'quiz-container'
            
                var quizTitle = document.createElement('h3')
                quizTitle.className = 'quiz quiz' + (i + 1)
                quizTitle.innerText = questions.results[i].question
                quizContainer.appendChild(quizTitle)

                containerElm.appendChild(quizContainer)
                var choiceLabel = document.createElement('div')
                choiceLabel.innerHTML =  '<input type="radio" name="answer">'+ 'true'
                quizContainer.appendChild(choiceLabel)

                for (var j = 0; j < questions.results[i].incorrect_answers.length; j++){
                var choiceContiner = document.createElement('div')
                choiceContiner.innerHTML += '<input type="radio" name="answer">'+ questions.results[i].incorrect_answers[j]
                quizContainer.appendChild(choiceContiner)
                    
                } 

                } else if(questions.results[i].type === 'boolean') {
                    var quizContainer = document.createElement('div')
                    quizContainer.className = 'quiz-container'
                
                    var quizTitle = document.createElement('h3')
                    quizTitle.className = 'quiz quiz' + (i + 1)
                    quizTitle.innerText = questions.results[i].question
                    quizContainer.appendChild(quizTitle)
                    containerElm.appendChild(quizContainer)
                    var choiceLabel = document.createElement('div')
                    choiceLabel.innerHTML = '<input type="radio" name="answer-boolean">' + 'true'
                    choiceLabel.innerHTML += '<input type="radio" name="answer-boolean">' + 'False'
                    quizContainer.appendChild(choiceLabel)
                }
            
        }


    })

}

window.onload = function () {
    buildQuestion()
}