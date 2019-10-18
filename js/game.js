
function getQuestions(amount, level){
    var url = "https://opentdb.com/api.php?amount=" + amount +"&category=18&difficulty=" + level
    var question =[]
    ajaxGet(url,function (reponse) {
        return question.push(JSON.parse(reponse))
    })
    return question
}

var questions = getQuestions(10,'easy')
console.log(questions)