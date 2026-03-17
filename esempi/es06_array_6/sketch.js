const numero = 1000
const formiche = []

function setup() {
	createCanvas(500, 500)
	background(255,0,0)

	for (let i=0; i<numero; i++) {
		formiche[i] = {
			x : width/2,
			y : height/2,
			colore : color(random(255), random(255), random(255)),
			dim : random(1, 20)
		}
	}
}

function draw() {
	noStroke()
	for (let i=0; i<numero; i++) {
		fill(formiche[i].colore)
		//fill(random(256), random(256), random(256))
		rect(formiche[i].x, formiche[i].y, formiche[i].dim, formiche[i].dim)
		formiche[i].x += random(-10, 10)
		formiche[i].y += random(-10, 10)
	}
}


