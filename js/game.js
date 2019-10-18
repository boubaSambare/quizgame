
function getQuestions(amount, level){
    var url = "https://opentdb.com/api.php?amount=" + amount +"&category=18&difficulty=" + level
   // var question =[]
   return ajaxGet(url)
    //return question
}

var questions = getQuestions(10,'easy')
var containerElm = document.querySelector('#container')
console.log(questions)


function buildQuestion() {

    //console.log(questions[0].results)
    for (var i = 0; i < questions.length; i++){
       
        if (questions[i].type === 'multiple'){
            var quizContainer = document.createElement('div')
            quizTitleContiner.id = 'quiz-container'
           
            var quizTitle = document.createElement('h3')
            quizTitle.className = 'quiz quiz' + (i + 1)
            quizTitle.innerText = questions[i].question
            quizContiner.appendChild(quizTitle)

            containerElm.appendChild(quizContainer)
            var choiceLabel = document.createElement('label')

            for (var j = 0; j < questions[i].incorrect_answers.length; j++){
               var choiceContiner = document.createElement('div')
                
            }
            
        }

      
        
        

    }
}

window.onload = function () {
    buildQuestion()
}