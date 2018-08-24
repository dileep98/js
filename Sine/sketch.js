var s;
var i=90;
var l;
var j=0;
var speed=0.1;
var canvas;
var h=0;
var b=[];
var x1,y;
var as,bs,spacingSlidey,spacingSlidex,alphaSlide,cr;
function setup() {
	canvas =createCanvas(windowWidth,windowHeight-20);
	
	x1=windowWidth/15;
	
	as= createSlider(1, 100, 50);
	bs= createSlider(0, 255, 50);
	spacingSlidey= createSlider(15, 30, 20);
	spacingSlidex= createSlider(15, 30, 20);
	alphaSlide= createSlider(10,100,50);
	cr= createSlider(1,15,10);
	//y=windowHeight/spacingSlide.value();
	for(var i=0;i<50;i++){
		
		b[i]=new ball();
				
	}
}



function draw() {
	angleMode(DEGREES);
	//frameRate(100);
	background(0,0,0,as.value());
	/* push();
	translate(width/2,height/2);
	rotate(-90);
	s=map(sin(i),-1,1,-100,100);
	stroke(255);
	fill(255);
	l=map(sin(j),-1,1,-100,100);
	//ellipse(l,s,10);
	stroke(255);
	//point(l, s);
	//line(0,0,0,s);
	//line(0,0,l,0);
	pop();
	push();
	translate(width/2+5,height/2)
	rotate(-90);
	s=map(sin(i+1),-1,1,-100,100);
	stroke(255);
	fill(255);
	l=map(sin(j+1),-1,1,-100,100);
	//ellipse(0,s,10);
	stroke(255);
	point(l, s);
	pop(); */
	//line(0,0,0,s);
	//line(0,0,l,0);
	/* pop();
	for(var k=0;k<100;k++){
		push();
	translate(k*10,height/2);
	rotate(-90);
	s=map(sin(i+k*10),-1,1,-10,10);
	stroke(255);
	fill(255);
	l=map(sin(j+k*10),-1,1,-10,10);
	//ellipse(l,s,1);
	stroke(255);
	//point(l, s);
	//line(0,0,0,s);
	//line(0,0,l,0);
	pop();
	} */
	//i+=speed;
	//j+=speed;
	for(var i=0;i<b.length;i++) {
		b[i].show(i*spacingSlidey.value());
	}

}

function ball() {
	this.x;
	this.show=function(x){
	this.x=x;
	for(var k=0;k<x1;k++){
		push();
		translate(k*spacingSlidex.value(),this.x);
		rotate(0);
		s=map(sin(i+k*15+this.x),-1,1,-10,10);
		l=map(sin(j+k*15+this.x),-1,1,-10,10);
		//stroke(255);
		noStroke();
		r=map(s,-10,10,0,255);
		g=map(l,-10,10,0,255);
		fill(r,g,bs.value(),alphaSlide.value());
		ellipse(l,s,cr.value());
		stroke(255);
		//point(l, s);
		//line(0,0,0,s);
		//line(0,0,l,0);
		pop();
	}

	
	i+=speed;
	j+=speed;
}
}