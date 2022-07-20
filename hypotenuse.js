var side1=document.querySelector("#a");
var side2=document.querySelector("#b");
var button=document.querySelector('#hyp-button');
var output=document.querySelector('#quiz-output');
function clickHandler()
{
    var sumOfSquares=Math.pow(+side1.value,2)+Math.pow(+side2.value,2);
    answer=Math.sqrt(sumOfSquares);
   output.innerText="The length of hypotenuse is "+sumOfSquares+" units."
}

button.addEventListener("click",clickHandler);