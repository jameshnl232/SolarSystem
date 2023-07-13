import {Color, Scene, TextureLoader} from "https://cdn.skypack.dev/three@0.132.2";


function createScene(){
    const scene = new Scene();

    const space = new TextureLoader
    scene.background = new TextureLoader().load('./assets/textures/abstract-geometric-background-shapes-texture.jpg',);

    return scene;
}

export {createScene};

