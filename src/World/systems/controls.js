    import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas){
    const controls = new OrbitControls(camera, canvas);
    
    controls.enableDamping = true;
    //controls.autoRotate = true; // rotate the camera around target
    //controls.autoRotateSpeed = 40; //how fast it rotates

    //controls.minDistance =  //max zoom in
    //controls.maxDistance =  //max zoom out

    controls.tick = () => controls.update();

    return controls;
}



export {createControls};