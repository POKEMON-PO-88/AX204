
console.log("hahaha");

var canvas;
var ctx;
var x = 600;
var y = 300;
var mx =2;
var my =4;
var width = 600;
var height = 300;



function init(){
	canvas=document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	return setInterval(draw,10);	
}

//characteruistics
 
function circle (x,y,r) {
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28)
	ctx.closePath();
	ctx.fillStyle = "tomato";
	ctx.fill();
}

function clear(){
	ctx.clearRect(0,0,width,height);
}


function draw(){
	clear();
	circle(x,y,30)
	// circle stays in canvas
	if (x+mx > width || x+mx < 0){
		mx = -mx;
	}

	if (y+my >height || y+my< 0){
		my=-my;

	}
	x+=mx;//x=x+mx
	y+=my;//y=y+mx
}
init();