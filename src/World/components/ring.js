import { BoxBufferGeometry, DoubleSide,  Mesh, MeshStandardMaterial, TorusGeometry , MathUtils, TextureLoader, SphereBufferGeometry, Group, RingGeometry  } 
from 'https://cdn.skypack.dev/three@0.132.2';

async function createRing(radius, tubular ){
    const geometry = new RingGeometry(radius, radius + 2, tubular); 
    const textureLoader =  new TextureLoader();  //textureloader
    const texture = await textureLoader.load('./assets/textures/rings.jpg');
    const material = new MeshStandardMaterial( {map: texture, side: DoubleSide } );
    const ring = new Mesh(geometry, material);
    ring.material.opacity = 1;

// Enable transparency for the mesh material
    ring.material.transparent = true;

    return ring;
}


export{ createRing };