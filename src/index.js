import camera from "./Camera.js"
import cube from "./Cube.js"
import torus from "./Torus.js"
import torusKnot from "./TorusKnot.js"
import light from "./Light.js"
import renderer from "./Renderer.js"
import scene from "./Scene.js"


scene.add(cube)
scene.add(light)
camera.position.set(1, 2, 5)

camera.lookAt(cube.position)

scene.add(torus)
camera.position.set(4, 8, 10)
camera.lookAt(torus.position)

scene.add(torusKnot)
camera.position.set(8, 16, 20)
camera.lookAt(torusKnot.position)

setInterval(() => {
  cube.rotation.z += 0.01
  cube.rotation.y += 0.001
  cube.rotation.x += 0.01
  torus.rotation.z -= 0.015
  torus.rotation.y -= 0.001
  torus.rotation.x -= 0.015
  torusKnot.rotation.z += 0.01
  torusKnot.rotation.y += 0.001
  torusKnot.rotation.x += 0.01
  renderer.render(scene, camera)
}, 1000 / 30);