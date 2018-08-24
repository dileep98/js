let f=6;
let s=0;

function setup() {
    createCanvas(windowWidth  , windowHeight);
    angleMode(DEGREES);
}
function windowResized() {
    createCanvas(windowWidth  , windowHeight);
}
function draw() {
    background(0);
    translate(windowWidth/2, windowHeight/2);
    rotate(-90);
    let sc = second();
    let mn = minute();
    let hr= hour();

   /*  stroke(255);
    strokeWeight(8);
    noFill();
    ellipse(200, 200, 300, 300); */

    strokeWeight(8);
    stroke(255,0,0);
    noFill();

    let end1 = map(sc, 0, 60, 0 , 360);
    
    push();
        rotate(end1);
    /* if(end6==6){
        rotate(end1);
    } */
    strokeWeight(3);
    stroke(255,0,0);
    line(0, 0, 120, 0);
    /* noStroke();
    fill(255);
    text(millis(),100,0); */
    pop();
    
    arc(0,0, 300, 300, 0, end1);
    stroke(0,255,0);
    let end4= map(sc,0,60,0,f);
    
    let end2 = map(mn, 0, 60, 0 , 360);
    // let end2 = map(sc, 0,60,0,6);
    
    arc(0,0, 280, 280, 0, end2);

    push();
    rotate(end4);
    strokeWeight(3);
    stroke(0,255,0);
    if(f==6){
        rotate(end2);
    }
    line(0, 0, 80, 0);
    /* noStroke();
    fill(255);
    text(minute(),100,0); */
    pop();

    stroke(0,0,255);
    let end3 = map(hr%12, 0, 12, 0 , 360);
    let end5= map(mn,0,60,0,f);
    arc(0,0, 260, 260, 0, end3);

    push();
    rotate(end5);
    strokeWeight(3);
    stroke(0,0,255);
    if(f==6){
        rotate(end3);
    }
    line(0, 0, 60, 0);
   /*  noStroke();
    fill(255);
    var h = hour()/2;
    text(h,100,0); */
    pop();

    stroke(255);
    point(0, 0);

}