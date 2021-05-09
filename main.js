mouseevent="empty";
var lastx, lasty;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
radius="2";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{ 
    color=document.getElementById("input_colour").value;
    radius=document.getElementById("pen_width").value;
    mouseevent="mouseDown";
}


canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{

    mouseevent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{

    mouseevent="mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouseevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=2;
        console.log("lastx"+lastx+"lasty="+lasty);
        console.log("currentx="+currentx+"currenty="+currenty);
    
        ctx.arc(currentx, currenty, radius,0,2 * Math.PI  );
        ctx.stroke();



        lastx=currentx;
        lasty=currenty;

    }
}