var p=[];
var diff=5;
var r=255;//random(255);
var g=255;//random(255);
var b=255;
function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight).position(0, 0);
  //background(255);
  var siz=width/3;
  for(i=0;i<70;i++){
    p[i]=new Poin();

  }

  for(var i=0;i<p.length;i++){

    p[i].set(siz-i*diff,siz-i*diff,i,1+((i+1)/20));
  }
  // p[0].set(100,100,270,1);
  // p[1].set(100,100,0,1.1);
  // p[2].set(100,100,90,1.2);
  // p[3].set(100,100,180,1.3);
  // p[4].set(100,100,270,1.4);
  //p[0].x=-100;
  //p[0].y=100;
  //p[0].angSpeed=1;


  sSlider = createSlider(1, 10, 2);
  sSlider.position(20, 20);
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 40);
  gSlider = createSlider(0, 255, 100);
  gSlider.position(20, 60);
  bSlider = createSlider(0, 255, 100);
  bSlider.position(20, 80);
  
  console.log(rSlider.value());
    //alert('hi');
  
}
var i=0;
function mousePressed(){


}



function draw() {
  angleMode(DEGREES);
  translate(width/2, height/2);

  var r=random(0, 255);
  var g=random(0,255);
  var b= random(0, 255);



  //background(r,g,b,50);


  background(0, 0,0,90);


  // put drawing code here
  stroke(255);
  strokeWeight(0);
  point(width/2,height/2);
  for(i=0;i<p.length;i++){
    if(i!=p.length-1){
      p[i].conn(p[i+1]);
      //sketch.jsline(p[i].x,p[i].y,p[i+1].x,p[i+1].y);
      
    } else {
      p[i].show();
    }
    p[i].update();
   // p[i].show();
  }
  
  //createP(frameRate);
  //noLoop();
}

function Poin() {
  this.ang=0;
  this.angSpeed=0;
  this.x,this.y;
  this.x1=this.x;
  this.y1=this.y;
  this.r=random(255);
  this.g=random(255);
  this.b=random(255);
  this.update=function(){
    this.ang+=this.angSpeed*sSlider.value();
  }
  this.set=function(x,y,a,as){
    this.x=x;
    this.y=y;
    this.angSpeed=as;
    this.ang=a;
    this.x1=this.x;
    this.y1=this.y;
    this.deg = atan2(this.x, this.y);
    //console.log(this.deg);
    //this.r=255;//rSlider.value();//random(255);
    //this.g=255;//gSlider.value();//random(255);
    //this.b=255;//bSlider.value();//random(255);
  }
  this.show=function() {
    stroke(255);
    strokeWeight(1);
    push();
    //rotate(this.ang);

    //rotate(this.ang);
    //strokeWeight(10);
    strokeWeight(1);
    stroke(255);
    this.x=map(sin(this.ang),-1,1,-this.x1,this.y1);
		this.y=map(cos(this.ang),-1,1,-this.x1,this.y1);
    //point(this.x,this.y);
    //line(this.x1,this.y1,this.x2,this.y2);
    //line(this.x,this.y,other.x,other.y);
    pop();
    //this.ang++;
  }

  this.conn=function(other){
    //stroke(255);
    //strokeWeight(1);
    push();
    //rotate(this.ang);

    //rotate(this.ang);
    //strokeWeight(10);
    strokeWeight(1);
    stroke(this.r,this.g,this.b);
    this.x=map(sin(this.ang),-1,1,-this.x1,this.y1);
		this.y=map(cos(this.ang),-1,1,-this.x1,this.y1);
    point(this.x,this.y);
    //line(this.x1,this.y1,this.x2,this.y2);
    
    line(this.x,this.y,other.x,other.y);
    pop();

  }
}

function lin(){
  this.ang=0;
  this.angSpeed=0;
  this.x1,this.y1,this.x2,this.y2;
  this.update=function(){
    this.ang+=this.angSpeed;
  }
  this.show=function() {
    //text(x1+' '+y1,x1-10,y1);
    push();
      //rotate(this.ang);
      rotate(this.ang);
      //strokeWeight(10);
      strokeWeight(1);
      stroke(255);
      line(this.x1,this.y1,this.x2,this.y2);
    pop();
    //this.ang++;
  }

  
  // this.x=x;
  // this.y=y;

  // this.show=function() {
  //   //console.log(this.x+''+this.y);
  //   push();
  //     strokeWeight(10);
  //     stroke(255);
  //     point(this.x,this.y);
  //   pop();

  // }

}
