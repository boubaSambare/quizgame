
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
                quizContainer.id = 'quiz-container'
            
                var quizTitle = document.createElement('h3')
                quizTitle.className = 'quiz quiz' + (i + 1)
                quizTitle.innerText = questions.results[i].question
                quizContainer.appendChild(quizTitle)

                containerElm.appendChild(quizContainer)
                var choiceLabel = document.createElement('label')

                for (var j = 0; j < questions.results[i].incorrect_answers.length; j++){
                var choiceContiner = document.createElement('div')
                choiceContiner.innerHTML = '<p> hello</p>'
                    
                } 

                } else if(questions.results[i].type === 'boolean') {
                    var quizContainer = document.createElement('div')
                    quizContainer.id = 'quiz-container'
                
                    var quizTitle = document.createElement('h3')
                    quizTitle.className = 'quiz quiz' + (i + 1)
                    quizTitle.innerText = questions.results[i].question
                    quizContainer.appendChild(quizTitle)
                    containerElm.appendChild(quizContainer)
                }
            
        }


    })

}

window.onload = function () {
    buildQuestion()
}