var mario = new Image();
mario.src = "mario.jpg";

// alert("this is working");
mario.onload=function(){
	ctx4.drawImage(mario,200,200,50,90);
}
var Luckynoodles = new Image();
Luckynoodles.src = "Luckynoodle.jpeg";

Luckynoodles.onload=function(){
	ctx4.drawImage(Luckynoodles,100,100,100,90);
}

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d")



//start drawing
ctx.beginPath();
//set drawing style
ctx.strokestyle="red";
//move your pen to starting point
ctx.moveTo(75,0);
ctx.lineTo(150,75);
ctx.lineTo(75,150);
ctx.lineTo(0,75);
ctx.closePath();
ctx.stroke();
ctx.fillStyle="red"
ctx.fill();


var c2=document.getElementById("myCanvas2");
var ctx2=c2.getContext("2d")

ctx2.beginPath();
ctx2.moveTo(0,0);
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle="brown";
ctx2.fill();


var c3=document.getElementById("myCanvas3");
var ctx3=c3.getContext("2d")

ctx3.beginPath();
ctx3.arc(150,150,80,0,6.28);

ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle="yellow";
ctx3.fill();

var c4=document.getElementById("myCanvas4");
var ctx4=c4.getContext("2d")