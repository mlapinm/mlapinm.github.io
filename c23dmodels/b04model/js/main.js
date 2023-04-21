//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

let log1 = $(".log1")
let model_num = 0
let models = [
  {
    name: 'bird_orange',
    objToRender: '../b01models/bird_orange.glb',
    z: 6
  },
  {
    name: 'cute_spider',
    objToRender: '../b01models/cute_spider/scene.gltf',
    z: 6
  },
  {
    name: 'bowl',
    objToRender: '../b01models/bowl/scene.gltf',
    z: 6
  },
]

//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//Keep track of the mouse position, so we can make the eye move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//Keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene
let controls;

//Set which object to render
let objToRender = 'bowl';
objToRender = "https://drive.google.com/drive/folders/1S3U5GN8h8k2wvFhYgTi5KQNiHl-0H8zu?usp=share_link//scene.gltf"
objToRender = "https://drive.google.com/file/d/1d74g4_D4mhjj0_fsUBYD4-gx-KX0HmAL/view?usp=share_link"
objToRender = "https://drive.google.com/uc?export=download&id=1d74g4_D4mhjj0_fsUBYD4-gx-KX0HmAL"
objToRender = '../b01models/bird_orange.glb'
objToRender = '../b01models/cute_spider/scene.gltf'
objToRender = '../b01models/bowl/scene.gltf'

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

let renderer = undefined
let topLight = undefined
let ambientLight = undefined

let load_obj = (objToRender) => {

scene.remove(object)
scene.remove(topLight)
scene.remove(ambientLight)


  //Load the file
loader.load(
  objToRender,
  function (gltf) {
    //If the file is loaded, add it to the scene
    object = gltf.scene;
    scene.add(object);
  },
  function (xhr) {
    //While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    //If there is an error, log it
    console.error(error);
  }
);

// delete(renderer)
  // renderer = undefined
//Instantiate a new renderer and set its size
renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);

//Add the renderer to the DOM
document.getElementById("container3D").innerHTML = ''
document.getElementById("container3D").appendChild(renderer.domElement);

//Add the renderer to the DOM
// document.getElementById("container3D").appendChild(renderer.domElement);

//Set how far the camera will be from the 3D model
camera.position.z = 6;

//Add lights to the scene, so we can actually see the 3D model
topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

ambientLight = new THREE.AmbientLight(0x333333, 5);
scene.add(ambientLight);

//This adds controls to the camera, so we can rotate / zoom it with the mouse
controls = new OrbitControls(camera, renderer.domElement);


}

objToRender = models[model_num].objToRender

load_obj(objToRender)




//Render the scene
function animate() {
  requestAnimationFrame(animate);
  //Here we could add some code to update the scene, adding some automatic movement

  //Make the eye move
  if (object && objToRender === "eye") {
    //I've played with the constants here until it looked good 
    object.rotation.y = -3 + mouseX / window.innerWidth * 3;
    object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
  }
  renderer.render(scene, camera);
}

//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

//add mouse position listener, so we can make the eye move
document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

//Start the 3D rendering
animate();

$(".button1").click(() => {
  let q = models.length



  model_num = model_num + 1 < q ? model_num + 1 : 0

  objToRender = models[model_num]['objToRender']
  load_obj(objToRender)

  let text = `${2} ${model_num}`
  log1.text(objToRender)
  console.log(333)
})