const numero = 1000

const rx = [] // rx = new Array()
const ry = []
const rcolore = []

function setup() {
	createCanvas(500, 500)
	background(255,0,0)

	for (let i=0; i<numero; i++) {
		rx[i] = width/2
		ry[i] = height/2
		// rcolore[i] = color(random(256), random(256), random(256))
		if (random(1) < x) { // lancio della moneta
			rcolore[i] = color(255)
		} else {
			rcolore[i] = color(0)
		}
	}
}

function draw() {
	noStroke()
	for (let i=0; i<numero; i++) {
		fill(rcolore[i])
		//fill(random(256), random(256), random(256))
		rect(rx[i], ry[i], 4, 4)
		rx[i] = rx[i] + random(-20, 20)
		ry[i] = ry[i] + random(-20, 20)
	}
}


