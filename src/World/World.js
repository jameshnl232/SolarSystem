

import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import {createLights} from './components/light.js';
import { createPlanet } from './components/planet.js';
import {createStars} from './components/stars.js';
import { createRing } from './components/ring.js';
import { createUFO } from './components/ufo.js';

import { createControls } from './systems/controls.js';
import {Loop} from './systems/Loop.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Color, CameraHelper, Raycaster, Vector2 } from 'https://cdn.skypack.dev/three@0.132.2';


let camera;
let renderer;
let scene;
let loop;
let controls;
let zoom;
let raycaster;
let mouse;

class World{
    constructor(container){
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);
        


        const resizer = new Resizer(container, camera, renderer);
        /**resizer.onSize = () => {
            this.render();
        };*/

        loop = new Loop(camera, scene, renderer);


        raycaster = new Raycaster();  //raycaster and mouse
        mouse = new Vector2();


        //add plugin camera control
        controls = createControls(camera, renderer.domElement);
        controls.addEventListener('change', () => {
            this.render();
            });
        controls.listenToKeyEvents(window); // pan the camera with arrows
        loop.updatables.push(controls);

        //create light 
        const { mainLight, ambientLight, hemisphereLight, pointLight, spotLight} = createLights();
        scene.add( pointLight, ambientLight, spotLight);

    }

    render(){
        renderer.render(scene, camera);
    }

    start(){
        loop.start();
    }

    stop(){
       loop.stop();
    }

    async init(){
        const sun = await createPlanet('./assets/textures/2k_sun.jpg', 15, 0, 0, 0, 0.05);
          // Enable lighting for the sun and disable it for other planets
        sun.material.emissiveIntensity = 0.5; // Increase the emissive intensity to make it brighter
        sun.material.emissive = new Color(1, 1, 0); // Set the emissive color to white

        const mercury = await createPlanet('./assets/textures/2k_mercury.jpg', 1, -10, 10, 1, 0.5);
        const venus = await createPlanet('./assets/textures/2k_venus_surface.jpg', 2, -12, 12, 0.365, 0.3);
        const earth = await createPlanet('./assets/textures/2k_earth_daymap.jpg', 2.2, -16, 16, 0.311, 0.2);
        const mars = await createPlanet('./assets/textures/2k_mars.jpg', 1.6, -20, 20, 0.25, 0.2);
        const jupiter = await createPlanet('./assets/textures/2k_jupiter.jpg', 4, -25, 25, 0.136, 0.2);
        const saturn = await createPlanet('./assets/textures/2k_saturn.jpg', 3.2, -32, 32, 0.1, 0.2);
        const uranus = await createPlanet('./assets/textures/2k_uranus.jpg', 2.7, -35, 35, 0.075, 0.2);
        const neptune = await createPlanet('./assets/textures/2k_neptune.jpg', 2.55, -38, 38, 0.06, 0.2);

        const ufo = await createUFO();
        scene.add(ufo);
        loop.updatables.push(ufo);

        
        const ring = await createRing(5, 40);
        ring.rotation.x = Math.PI / 2;
        ring.rotation.y = Math.PI / 10;
        saturn.add(ring);
        
        const stars = createStars();
        scene.add(stars);
        loop.updatables.push(stars);

        scene.add(sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune);
        loop.updatables.push(sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune);
        
        var mer_flag = 0;
        var ven_flag = 0;
        var earth_flag = 0;
        var mar_flag = 0;
        var jup_flag = 0;
        var sat_flag = 0;
        var ura_flag = 0;
        var nep_flag = 0;


        window.addEventListener('click', this.onMouseMove.bind(this), false);

        document.addEventListener("keydown", function(event) {
            if(event.keyCode === 27){
                //Esc key was pressed                
                mer_flag=0;
                ven_flag=0;
                earth_flag=0;
                mar_flag=0;
                jup_flag=0;
                sat_flag=0;
                ura_flag=0;
                nep_flag=0;
        
           }
         });
         
         let intersects = [];

         const animate = () => {
            raycaster.setFromCamera(mouse, camera);

            window.addEventListener('click', onPointerClick, false);

            function onPointerClick(event){
                intersects = raycaster.intersectObjects([mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]);
            }

            console.log(intersects);

         if (intersects.length > 0) {
            console.log(intersects[0].object.geometry.id);
            switch(intersects[0].object.geometry.id){
                case 14:{
                    mer_flag=1;
                    break;
                }

                case 15:{
                    ven_flag=1;
                    break;
                }

                case 16:{
                    earth_flag=1;
                    break;
                }

                case 17:{
                    mar_flag=1;
                    break;
                }

                case 18: {
                    jup_flag=1;
                    break;
                }

                case 19: {
                    sat_flag=1;
                    break;
                }

                case 20:{
                    ura_flag=1;
                    break;
                }

                case 21:{
                    nep_flag=1;
                    break;
                }

                default: {
                    mer_flag=0;
                    ven_flag=0;
                    earth_flag=0;
                    mar_flag=0;
                    jup_flag=0;
                    sat_flag=0;
                    ura_flag=0;
                    nep_flag=0;
                }

            }   
          }
           
            if(mer_flag == 1){
                this.followPlanet(mercury);
            }

            else if(ven_flag == 1){
                this.followPlanet(venus);
            }

            else if(earth_flag == 1){
                this.followPlanet(earth);
            }

            else if(mar_flag == 1){
                this.followPlanet(mars);
            }

            else if(jup_flag == 1){
                this.followPlanet(jupiter);
            }

            else if(sat_flag == 1){
                this.followPlanet(saturn);
            }

            else if(ura_flag == 1){
                this.followPlanet(uranus);
            }

            else if(nep_flag == 1){
                this.followPlanet(neptune);
            }     

            requestAnimationFrame(animate);
          };

          animate();
        
    }

    followPlanet = function(name){
         camera.position.x = name.position.x + 5;
         camera.position.y = name.position.y ;
         camera.position.z = name.position.z + 5;
         camera.lookAt(name.position);
         controls.target.copy(name.position);
     }

     onMouseMove(event){
    
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    }

    



}
export{ World };
