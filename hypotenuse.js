var side1=document.querySelector("#a");
var side2=document.querySelector("#b");
var button=document.querySelector('#hyp-button');
var output=document.querySelector('#hyp-output');
function clickHandler()
{
    if(side1.value>=0&&side2.value>=0)
    {
    var sumOfSquares=Math.pow(+side1.value,2)+Math.pow(+side2.value,2);
    answer=Math.sqrt(sumOfSquares);
    output.innerText="The length of hypotenuse is "+answer.toFixed(4)+" units."
    }
    else output.innerText="Length of sides should be positive";
}

button.addEventListener("click",clickHandler);