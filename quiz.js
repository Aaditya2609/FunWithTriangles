var button=document.querySelector('#quiz-button');
var output=document.querySelector('#quiz-output');
var Form=document.querySelector(".quiz-form")
var correctAnswer=["90","rightangled","isosceles","obtuse","180"]
function clickHandler()
{
    var score=0;
    var i=0;
    var formResult=new FormData(Form);
    for(let value of formResult.values())
    {
        if(value===correctAnswer[i])
        {
            score++;
        }
        i++;
    }
    output.innerText="Your Score Is "+score;
}

button.addEventListener("click",clickHandler);