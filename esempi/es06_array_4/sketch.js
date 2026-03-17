const numero = 1000

let rx = [] // rx = new Array()
let ry = []

function setup() {
	createCanvas(500, 500)
	background(255,0,0)


	for (let i=0; i<numero; i++) {
		rx[i] = width/2
		ry[i] = width/2
	}

	// rx[0] = width/2
	// ry[0] = height/2

	// rx[1] = width/2
	// ry[1] = height/2
}

function draw() {
	noStroke()
	fill(0)
	for (let i=0; i<numero; i++) {
		rect(rx[i], ry[i], 4, 4)
		rx[i] = rx[i] + random(-4, 4)
		ry[i] = ry[i] + random(-4, 4)
	}
}
