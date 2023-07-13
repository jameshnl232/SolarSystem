import { World } from './World/World.js';

async function main(){

    const container = document.querySelector('#container');
    const button = document.querySelector('#button');

    const world = new World(container);

    await world.init();

    world.start(); //start the loop
    //world.render();   //this will render a single frame
    
    let isRotating = false;
    function toggleRotation(){
        isRotating = !isRotating    ;
        if(!isRotating){
            world.start();
            button.textContent = 'Stop';
        }
        else{
            world.stop();
            button.textContent = 'Move';
        }
    }
    
    button.addEventListener('click', toggleRotation);
    }

    main().catch((err) => {
        console.error(err);
      });
