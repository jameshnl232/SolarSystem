import { BoxBufferGeometry, Mesh, MeshStandardMaterial, MeshNormalMaterial, MathUtils, TextureLoader, SphereBufferGeometry, Group  } 
from 'https://cdn.skypack.dev/three@0.132.2';

async function createPlanet(texture, radius , position, distance, orbitSpeed, rotate_speed){
    //material
    const textureLoader =  new TextureLoader();  //textureloader
    const planet_texture = await textureLoader.load( texture);
    const material = new MeshStandardMaterial({map: planet_texture,})
    const geometry = new SphereBufferGeometry(radius, 50, 50)
    const planet = new Mesh(geometry, material);
    planet.position.x = position;
    planet.scale.set(0.5,0.5,0.5);
    

    planet.tick = (delta, elapsed_time) => {
      planet.rotation.y += delta * rotate_speed;

      const angle = elapsed_time * orbitSpeed; // Calculate the angle based on elapsed time and orbit speed
      const x = Math.cos(angle) * distance; // Calculate x-coordinate of new position
      const z = Math.sin(angle) * distance; // Calculate z-coordinate of new position

      planet.position.set(x, 0, z); // Update the position of mercury
    }

    return planet;

}


    


export{ createPlanet };