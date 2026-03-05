
let piastrella

function preload() {
	piastrella = loadImage("tiles/moon_tiny.png")
}

function setup() {
	createCanvas(400, 400, WEBGL)

}

function draw() {
	background(0)
	stroke(255)

	rotateX(PI/3)

	if (mouseIsPressed) {
		rotateZ(mouseX * 0.01)
	}


	const spaziatura = 18

	const numPuntiX = piastrella.width
	const numPuntiY = piastrella.height

	const margineX = - (numPuntiX - 1) * spaziatura / 2
	const margineY = - (numPuntiY - 1) * spaziatura / 2


	noFill()
	beginShape(POINTS)
	for (let j=0; j<numPuntiY; j++) {
		for(let i=0; i<numPuntiX; i++) {
			const px = i * spaziatura + margineX
			const py = j * spaziatura + margineY
			vertex(px, py)
		}
	}
	endShape()
}

