
let piastrella
let geom
let bbox



function preload() {
	piastrella = loadImage("tiles/moon_small.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	piastrella.loadPixels()


	const spaziatura = 3
	const margineX = - (piastrella.width - 1) * spaziatura / 2
	const margineY = - (piastrella.height - 1) * spaziatura / 2
	const min = -20
	const max = 20

	geom = new p5.Geometry()
	textureMode(NORMAL)

	for (let j = 0; j < piastrella.height; j++) {
		for (let i = 0; i < piastrella.width; i++) {
			const x = i * spaziatura + margineX
			const y = j * spaziatura + margineY
			const z = getHeight(piastrella, i, j, min, max)
			const v = createVector(x, y, z)
			geom.vertices.push(v)

			const u = i / (piastrella.width - 1)
			const vTex = j / (piastrella.height - 1)
			geom.uvs.push(u, vTex)
		}
	}

	for (let j = 0; j < piastrella.height - 1; j++) {
		for (let i = 0; i < piastrella.width - 1; i++) {
			const i0 = j * piastrella.width + i
			const i1 = j * piastrella.width + (i + 1)
			const i2 = (j + 1) * piastrella.width + (i + 1)
			const i3 = (j + 1) * piastrella.width + i
			geom.faces.push(
				[i0, i1, i2], // triangolo 1
				[i0, i2, i3]  // triangolo 2
			)
		}
	}
	geom.computeNormals()
	bbox = geom.calculateBoundingBox()

}

function draw() {
	background(0)


	const tx = Math.sin(frameCount * 0.002) * bbox.size.x * 0.2
	const ty = Math.cos(frameCount * 0.003) * bbox.size.y * 0.2
	const rz = Math.sin(frameCount * 0.001) * Math.PI

	rotateX(PI/3)
	rotateZ(rz)
	translate(tx, ty, 0)

	ambientLight(60)
	directionalLight(255, 255, 255, -1, 0, -1)

	noStroke()
	texture(piastrella)
	model(geom)


}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function getHeight(immagine, i, j, min, max) {
	const idx = 4 * (i + j * immagine.width)
	const brightness = immagine.pixels[idx]
	return map(brightness, 0, 255, min, max)
}