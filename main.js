function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	kick = loadSound("kick.wav");
	collect = loadSound("coin.wav");
	gameOver = loadSound("gameover.wav");
	jump = loadSound("jump.wav");
	marioDie = loadSound("mariodie.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(1000,250);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modeLoaded);
	poseNet.on('pose', gotPoses);
}

function modeLoaded(){
	console.log('poseNet is on the service.....');
}

function gotPoses(results){
	if (results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
}






