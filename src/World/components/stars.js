import { BoxBufferGeometry, Mesh, MeshStandardMaterial, MeshBasicMaterial, MeshNormalMaterial, MathUtils, TextureLoader, SphereBufferGeometry, Group  } 
from 'https://cdn.skypack.dev/three@0.132.2';

function createStars(){
    const group = new Group();

    const geometry = new SphereBufferGeometry(0.03, 8, 8);
    const material = new MeshBasicMaterial({ color: 0xffffff });

  
    for (let i = 0; i < 10000; i++) {
      const star = new Mesh(geometry, material);
  
      // Generate random positions for stars
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      const z = Math.random() * 200 - 100;
  
      star.position.set(x, y, z);

      group.tick = (delta) => {
        group.position.z += delta*5;
        if(group.position.z > 100){
            group.position.z = Math.random() * 200 - 100;
        }
      }

      group.add(star);
    }
  
    return group;
}

export { createStars };