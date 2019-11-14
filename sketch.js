let img;
function preload(){
}

function setup(){
img = loadImage("http://192.168.137.101:8080/shot.jpg");
createCanvas(100,100);
frameRate(1);
}

function draw(){
	background(img);
	img.resize(100,100);
	img.save("vision","png");
  	document.location.reload();
}
