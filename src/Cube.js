const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ 
  color: 0x0b8802, 
  emissive : 0x000000,
  wireframe : false,
  fog : false
  });
const cube = new THREE.Mesh(geometry, material);

export default cube