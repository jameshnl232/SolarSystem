import { GLTFLoader } 
from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';

import {MathUtils} from 'https://cdn.skypack.dev/three@0.132.2';

async function createUFO() {
    const loader = new GLTFLoader();
  
    const [ufoData] = await Promise.all([
      loader.loadAsync('/assets/models/ufo.glb'),

    ]);
  
    console.log('ufo!', ufoData);
  
    const ufo = ufoData.scene.children[0];
    ufo.scale.set(0.05, 0.05, 0.05);
    ufo.position.y = Math.random() + 10; // Adjusted range to 60 (100 - 40)
    ufo.position.x = Math.random() * 100 - 50; // Adjusted range to 200 (-100 - 100)

    ufo.tick = (delta) => {
        const swingSpeed = 0.05; // Adjust the swing speed as desired
        const angle = Math.sin(Date.now() * swingSpeed) * 0.5;
        ufo.rotation.y = MathUtils.degToRad(angle);

        ufo.position.x += delta*5;
        ufo.position.z += delta*7;

        if(ufo.position.z > 100){
            ufo.position.x = Math.random() * 100 - 50;
            ufo.position.y = Math.random() * 20 - 10;
            ufo.position.z = Math.random() * 40 - 10;

        }

    }

  
    return ufo;
     
  }  

export { createUFO };