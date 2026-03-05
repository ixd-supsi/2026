function setup() {
	createCanvas(400, 400, WEBGL)

}

function draw() {
	background(220, 0, 0)

	const spaziatura = 18

	const numPuntiX = 19
	const numPuntiY = 19

	const margineX = - (numPuntiX - 1) * spaziatura / 2
	const margineY = - (numPuntiY - 1) * spaziatura / 2

	strokeWeight(8)

	for (let j=0; j<numPuntiY; j++) {
		for(let i=0; i<numPuntiX; i++) {
			const px = i * spaziatura + margineX
			const py = j * spaziatura + margineY
			point(px, py)
		}
	}
}

