
var mic;
angle=0.1;
function preload(){
  sound = loadSound('Calling On You.MP3');
}

function setup(){
  var cnv = createCanvas(windowWidth,windowHeight);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(1);
  //angleMode(DEGREES);
}

function draw(){
  background(0);
  
  var spectrum = fft.analyze();
  noStroke();
  fill(0,255,0); // spectrum is green
  //console.log(spectrum.length);
  //rotate(angle);
  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, 0, width/2);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    push();
      //translate(width/2, -height/2);
      //rotate(angle);
      rect(x*1.5, height, (width / spectrum.length), h/4 );
    pop();
    push();
      translate(width/2, height/2);
      //rotate(angle);
      //scale(-1, -1);
      //rect(x*1.5, height, (width / spectrum.length), h );
    pop();
    push();
      translate(width/2, -height/2);
      //rotate(angle);
      //scale(1, -1);
      //rect(x*1.5, height, (width / spectrum.length), -h/2 );
    pop();
    push();
      translate(width/2+width/2, -height/2-height/2);
      //rotate(angle);
      //scale(-1, 1);
      scale(-1,1);
      rect(x*1.5, height, (width / spectrum.length), -h/4 );
    pop();
    
      var c=map(i,0,spectrum.length,0,100);
      var c1=map(i,0,spectrum.length,0,-100);

      //console.log(spectrum.length-1000);
      var col=map(h, 0, width/2, 0, 255);
    push();
      translate(width/2, height/2);
      fill(255,0,col);
      rotate(c);
      ellipse(0, 10+(h/2), 10, 10);
      strokeWeight(5);
      stroke(255,90);
      line(0, 0, 0, 10+(h/2));
    pop();
    push();
      translate(width/2, height/2);
      fill(255,0,col);
      rotate(c1);
      ellipse(0, 10+(h/2), 10, 10);
      strokeWeight(5);
      stroke(255,90);
      line(0, 0, 0, 10+(h/2));
    pop();
    angle+=0.1;
  }

  var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255,0,255); // waveform is red
  strokeWeight(1);
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map( waveform[i], -1, 1, 0, height);
    //vertex(x,y);
  }
  endShape();

  text('click to play/pause', 4, 10);
}

// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}