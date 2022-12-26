var width = window.innerWidth,
    height = window.innerHeight;

// Create a renderer and add it to the DOM.
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
// Create the scene 
var scene = new THREE.Scene();



// Create a camera
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
camera.position.z = 50;

scene.add(camera);

// Create a light, set its position, and add it to the scene.
var light = new THREE.PointLight(0xffffff);
light.position.set(-100,200,100);
scene.add(light);

// Add OrbitControls so that we can pan around with the mouse.
var controls = new THREE.OrbitControls(camera, renderer.domElement);

// Add axes
var axes = new THREE.AxisHelper(50);
scene.add( axes );

var geometry = new THREE.BoxGeometry(25,25,25);

var cubeMaterial 
// cubeMaterial = new THREE.MeshNormalMaterial(); 
cubeMaterial = new THREE.MeshBasicMaterial( {color: 0x6200ee, wireframe: true} )

var mesh = new THREE.Mesh( geometry, cubeMaterial );

scene.add( mesh );


resize();
animate();
window.addEventListener('resize',resize);

function resize(){
  let w = window.innerWidth;
  let h = window.innerHeight;
  
  renderer.setSize(w,h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

// Renders the scene
function animate() {

  renderer.render( scene, camera );
  renderer.setClearColor (0xffffff, 1);
  controls.update();

  requestAnimationFrame( animate );
}