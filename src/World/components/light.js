import { DirectionalLight, PointLight, SpotLight, AmbientLight, HemisphereLight } from "https://cdn.skypack.dev/three@0.132.2";

function createLights() {

const mainLight = new DirectionalLight('white', 2); // Two parameters: color and intensity
const ambientLight = new AmbientLight('white', 0.7);
const hemisphereLight = new HemisphereLight(
    'white',
    'darkslategrey',
    2
);
const pointLight = new PointLight('white', 2);
const spotLight = new SpotLight('white');
return {mainLight, ambientLight, hemisphereLight, pointLight, spotLight};
}

export { createLights  };