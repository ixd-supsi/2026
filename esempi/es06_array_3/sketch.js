let rx = [] // rx = new Array()
let ry = []

function setup() {
	createCanvas(500, 500)
	background(255,0,0)

	rx[0] = width/2
	ry[0] = height/2

	rx[1] = width/2
	ry[1] = height/2
}

function draw() {

	noStroke()

	fill(0)
	rect(rx[0], ry[0], 4, 4)

	fill(255)
	rect(rx[1], ry[1], 4, 4)

	rx[0] = rx[0] + random(-4, 4)
	ry[0] = ry[0] + random(-4, 4)

	rx[1] = rx[1] + random(-4, 4)
	ry[1] = ry[1] + random(-4, 4)
}
