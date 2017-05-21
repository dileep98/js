var bar;
var ball;
var score;
function setup() {
  var width=400;
  var height=500;
  createCanvas(width,height);
  bar=new Bar();
  ball = new ball();
  score=new score();
}

function draw() {
  background(0);
  bar.show();
  ball.show();
  ball.update();
  ball.wallHit();
  ball.barHit();
  if(keyIsDown(LEFT_ARROW)){
	  if(bar.x>=0)
	  bar.dir(-10);
  }
  if(keyIsDown(RIGHT_ARROW)) {
	  if(bar.x<=300) 
		bar.dir(10);
  }
  score.show();
}

function score() {
	
	this.x=350;
	this.y=475;
	this.score=0;
	this.lives=5;
	this.dia=0;
	this.show = function() {
		fill(255,255,0);
		text("score="+this.score,this.x,this.y);
		//createP(this.x,this.y,'Score='+this.score);
		text("Lives = "+this.lives,20,475);
		if(this.lives<=0){
			fill(255,0,0);
			text(".....GAMEOVER.....",150,480);
			alert("please refresh the page to start new game");
		}
		
	}
	
}

/* function keyPressed() {
  if(keyCode==LEFT_ARROW) {
    bar.dir(-10);
  }
   if(keyCode==RIGHT_ARROW) {
    bar.dir(10);
  }
} */

function ball() {
	
	this.x=0;
	this.y=440;
	this.speed=5;
	this.last="1";                         //r_u1,l_u2,l_d3,r_u4
	this.xspeed=this.speed;
	this.yspeed=-this.speed;
	this.update = function() {
		this.x=this.x+this.xspeed;
		this.y=this.y+this.yspeed;  //tan(random(15,80))*x;
	}
	this.show = function() {
		fill(255,255,255);
		ellipse(this.x,this.y,10,10);
		
	}
	
	this.wallHit = function(x,y) {
		if(this.x+5>=width&&this.last=="1") {
			
			this.xspeed=-this.speed;
			this.yspeed=-this.speed;
			this.last="2";
			
		}
		if(this.y-5==0&&this.last=="2") {
			
			this.xspeed=-this.speed;
			this.yspeed=this.speed;
			this.last="3";
		}
		if(this.x-5==0&&this.last=="3") {
			
			this.xspeed=this.speed;
			this.yspeed=this.speed;
			this.last="4";
		}
		if(this.y+5==height&&this.last=="4") {
			
			this.xspeed=this.speed;
			this.yspeed=-this.speed;
			this.last="1";
			score.lives--;
		}
		if(this.x+5==width&&this.last == "4") {
			
			this.xspeed=-this.speed;
			this.yspeed=this.speed;
			this.last="3";
		}
		if(this.y-5==0&&this.last=="1") {
			
			this.xspeed=this.speed;
			this.yspeed=this.speed;
			this.last="4";
		}
		if(this.x-5==0&&this.last=="2") {
			
			this.xspeed=this.speed;
			this.yspeed=-this.speed;
			this.last="1";
		}
		if(this.y+5==height&&this.last=="3") {
			
			this.xspeed=-this.speed;
			this.yspeed=-this.speed;
			this.last="2";
			score.lives--;
		}
		
	}
	this.barHit = function() {
		if((this.x>=bar.x-5&&this.x<=bar.x+105)&&(this.y+5==bar.y)&&(this.last=="4")) {
			this.xspeed=this.speed;
			this.yspeed=-this.speed;
			this.last="1";
			score.score++;
		}
		if((this.x>=bar.x-5&&this.x<=bar.x+105)&&(this.y+5==bar.y)&&(this.last=="3")) {
			
			this.xspeed=-this.speed;
			this.yspeed=-this.speed;
			this.last="2";
			score.score++;
		}
	}
}

function Bar() {
	this.x=0;
	this.y=500-50;
	this.speed=10;
	this.update = function() {
		this.x=this.x+this.speed;
		
	}
	this.show = function() {
		fill(255,255,255);
		rect(this.x,this.y,100,10);
		
	}
	this.dir = function(x) {
	  this.speed=x;
	  this.update();
	}
}