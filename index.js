var angle1=document.querySelector("#angle1");
var angle2=document.querySelector("#angle2");
var angle3=document.querySelector("#angle3");
var button=document.querySelector('#triangle-button');
var output=document.querySelector('#triangle-output');

function clickHandler()
{
    if(angle1.value>=0 && angle2.value>=0 && angle3.value>=0)
    {
        if(+angle1.value + +angle2.value + +angle3.value === 180)
        {
            output.innerText="The angles can make a triangle!!🥳🥳";
        }
        else output.innerText="The angles cannot make a triangle😥😥";

    }
    else output.innerText="Angles cannot be negative";
}

button.addEventListener("click",clickHandler);
