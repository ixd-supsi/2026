const formiche = []
let mappa

function preload() {
	mappa = loadImage("cat.png")
}

function setup() {
	createCanvas(640, 640)

	const dim = 8

	for (let j=0; j<mappa.height; j++) {
		for (let i=0; i<mappa.width; i++) {
			const col = mappa.get(i, j)
			if (brightness(col) > 5) {
				formiche.push({
					x : i * dim + 20,
					y : j * dim + 20,
					colore : mappa.get(i, j),
					dim : dim - 1,
					vel : 1
				})
			}
		}
	}
}

function draw() {
	background(0)
	noStroke()
	for (let i=0; i<formiche.length; i++) {
		fill(formiche[i].colore)
		//fill(random(256), random(256), random(256))
		rect(formiche[i].x, formiche[i].y, formiche[i].dim, formiche[i].dim)
		formiche[i].x += random(-formiche[i].vel, formiche[i].vel)
		formiche[i].y += random(-formiche[i].vel, formiche[i].vel)
	}
}
