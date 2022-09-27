const geometry = new THREE.TorusKnotGeometry( 11, 1.3, 300, 20,2,3 );
const material = new THREE.MeshLambertMaterial({ 
  color: 0xf7f7f7, 
  emissive : 0x000000,
  wireframe : true,
  fog : true
  });
const torusKnot = new THREE.Mesh( geometry, material );
export default torusKnot