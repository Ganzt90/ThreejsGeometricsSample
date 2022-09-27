const geometry = new THREE.TorusGeometry( 3, 1, 30, 200 );
const material = new THREE.MeshLambertMaterial({ 
  color: 0x632124, 
  emissive : 0x000000,
  wireframe : true,
  fog : true
  });
const torus = new THREE.Mesh( geometry, material );

export default torus