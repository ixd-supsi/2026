
let piastrella
let geom
let bbox


function preload() {
	piastrella = loadImage("tiles/moon_med.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	piastrella.loadPixels()


	const spaziatura = 3
	const margineX = - (piastrella.width - 1) * spaziatura / 2
	const margineY = - (piastrella.height - 1) * spaziatura / 2
	const min = -60
	const max = 60

	geom = new p5.Geometry()


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
	const tz = map(Math.sin(frameCount * 0.004), -1, 1, -bbox.size.z, -bbox.size.z*2)
	const rx = map(Math.sin(frameCount * 0.002), -1, 1, Math.PI / 6, Math.PI / 3)
	const rz = Math.sin(frameCount * 0.0005) * Math.PI * 2

	rotateX(rx)
	rotateZ(rz)
	translate(tx, ty, -150)

	ambientLight(120)
	directionalLight(255, 255, 255, -1, 0, -1)

	noStroke()
	texture(piastrella)
	textureMode(NORMAL)
	model(geom)


}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function getHeight(immagine, i, j, min, max) {
	const idx = 4 * (i + j * immagine.width)
	const red = immagine.pixels[idx]
	return red
}