var base=document.querySelector("#base");
var height=document.querySelector("#height");
var button=document.querySelector('#area-button');
var output=document.querySelector('#area-output');
function clickHandler()
{
    if(base.value>=0&&height.value>=0)
    {
    var Area=0.5*(+base.value*+height.value)
    output.innerText="The area of triangle is "+Area.toFixed(1)+" units²."
    }
   
}

button.addEventListener("click",clickHandler);