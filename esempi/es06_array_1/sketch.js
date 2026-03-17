let ry
let rx

function setup() {
	createCanvas(500, 500)
	background(255,0,0)
	rx = 200
	ry = 200
}

function draw() {
	fill(0)
	noStroke()
	rect(rx, ry, 4, 4)
	rx = rx + random(-4, 4)
	ry = ry + random(-4, 4)
}
