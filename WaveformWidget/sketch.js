
 var fft; // we'll visualize the waveform

 function setup() {
 	createCanvas(800, 400);
 	noFill();
 	background(30); // alpha


 	mic = new p5.AudioIn();
 	mic.start();
 	// create an fft to analyze the audio
 	fft = new p5.FFT();
 	fft.setInput(mic);
 }

 function draw() {
 	background(102, 180, 214); // alpha
 	// analyze the waveform
 	waveform = fft.waveform();
 	// draw the shape of the waveform
 	drawWaveform();
 }

 function drawWaveform() {
 	stroke(255, 255, 255, 100);
 	strokeWeight(4);
 	beginShape();
 	for (var i = 0; i < waveform.length; i++) {
 		var x = map(i, 0, waveform.length, 0, width);
 		var y = map(waveform[i], -1, 1, -height / 2, height / 2);
 		vertex(x, y + height / 2);
 	}
 	endShape();
 }
