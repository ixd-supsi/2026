let rx1, ry1
let rx2, ry2

function setup() {
	createCanvas(500, 500)
	background(255,0,0)
	rx1 = 200
	ry1 = 200
	rx2 = 200
	ry2 = 200
}

function draw() {

	noStroke()

	fill(0)
	rect(rx1, ry1, 4, 4)

	fill(255)
	rect(rx2, ry2, 4, 4)

	rx1 = rx1 + random(-4, 4)
	ry1 = ry1 + random(-4, 4)

	rx2 = rx2 + random(-4, 4)
	ry2 = ry2 + random(-4, 4)

}





