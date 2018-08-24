//import processing.video.*;

//Circles[] circles;
var circles=[];

function setup(){
  createCanvas(windowWidth,windowHeight);
  //smooth();
  //frameRate(60);
  //circles = new Circles[70];
  
  for(var i = 0; i < 100; i++){
  circles[i] = new Circles(random(width),random(height),random(5,15),random(10,70),random(-4,5),random(-4,5),i);
  }
}

function draw(){
  background(0,90);
  
  for(var i = 0; i < circles.length; i++){
    circles[i].ellColor();
    circles[i].collisions();
    circles[i].cLines();
    circles[i].update();
    circles[i].display();
  }
  
  //Activate to save video
  //saveFrame("output/line-######.png");
}

  function Circles( _x,  _y,  _ellSize,  _alph,  _vx,  _vy ,_id /*Circles[] oin*/){
    
    //Circles[] others;
  
  
      //constructor
  
        this.x = _x;
        this.y = _y;
        this.ellSize = _ellSize;
        this.alph = _alph;
        this.vx = _vx;
        this.vy = _vy;
        this.id = _id;
        //others = oin;
      
  
      //methods
  this.update=function(/*float vx, float xy*/){
        let n = width;
      this.x+=this.vx;
      this.y+=this.vy;
      
      if(this.x>n||this.x<0){
        this.vx*=-1;
        //x = width;
      }
      if(this.y>n||this.y<0){
        this.vy*=-1;
      }
      
      }
     
 this.collisions=function(){
          noStroke();
          fill(255);
          for(var i = 0; i < circles.length; i++){
              if(this.id != i){
                  if(dist(this.x,this.y,circles[i].x, circles[i].y) < this.ellSize/2 + circles[i].ellSize/2){
                    noStroke();
                    fill(255,0,0,this.alph);
                  }
              }
          }
      }
      
      
    this.ellColor=function(){
      fill(255,0,0);      
      for(var i = 0; i < circles.length; i++){
         if(dist(this.x,this.y,circles[i].x, circles[i].y) < this.ellSize*1.5 + circles[i].ellSize*1.5){
           gradient = map(dist(this.x,this.y,circles[i].x, circles[i].y),this.ellSize,this.ellSize*2,250,150);
           fill(255,this.gradient);
         }
      }
    }
  
    this.display=function(){
      fill(255,this.alph);
      noStroke();
      ellipse(this.x,this.y,this.ellSize,this.ellSize);
    }
      
    this.cLines=function(){
      stroke(255,50);
      strokeWeight(.9);
      for(var i = 0; i < circles.length; i++) {
          if(dist(this.x,this.y,circles[i].x, circles[i].y) < 50 /* this.ellSize*4 + circles[i].ellSize*4 */){
             line(this.x,this.y,circles[i].x, circles[i].y);
           }
      }
    }    
  }