var drops = [];
var dropCount = 100;
var newDownfall = 500;

var rain;
var thunder;

function preload() {
	rain = loadSound('rain.mp3');
	thunder = loadSound('thunder.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	rain.setVolume(0.5);
	rain.loop();

	downfall();
}

function draw() {
	background(0);

	
	for(var i = drops.length-1; i >= 0; i--) {
		drops[i].update();
		drops[i].show();

		
		if(drops[i].bad()) drops.splice(i, 1);
	}

	
	if(drops.length <= newDownfall) downfall();

	
	if(floor(random(300)) == 1) doThunder();
}

function doThunder() {
	thunder.play();
	background(255);
}

function downfall() {
	
	for(var i = 0; i < dropCount; i++) {
		drops.push(new Drop());
	}
}
