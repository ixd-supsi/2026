
let piastrella

function preload() {
	piastrella = loadImage("tiles/moon_tiny.png")
}

function setup() {
	createCanvas(900, 600, WEBGL)
	piastrella.loadPixels()
}

function draw() {
	background(0)

	rotateX(PI/3)

	if (mouseIsPressed) {
		rotateZ(mouseX * 0.01)
	}

	const spaziatura = 8

	const numPuntiX = piastrella.width
	const numPuntiY = piastrella.height

	const margineX = - (numPuntiX - 1) * spaziatura / 2
	const margineY = - (numPuntiY - 1) * spaziatura / 2

	noFill()
	stroke(255)
	strokeWeight(1)

	beginShape(POINTS)
	for (let j=0; j<numPuntiY; j++) {
		for(let i=0; i<numPuntiX; i++) {
			const px = i * spaziatura + margineX
			const py = j * spaziatura + margineY
			// const colore = piastrella.get(i, j)
			// const grigio = brightness(colore)
			const indice = (j * piastrella.width + i) * 4
			const rosso = piastrella.pixels[indice]
			const pz = rosso * 0.3
			vertex(px, py, pz)
		}
	}
	endShape()
}

