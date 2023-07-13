# SolarSystem
This project is a simple if not boring simulation of the solar system. It will show you what the solar system may look like and how beautiful it is in space. 
You can have a closer look at a planet by clicking on it. 


## Installation

- Download the project
- Run the project on a server
 
## How to view the planet
- Click on the planet to change the camera's view. Sometimes you have to click twice since the planet is moving 'fast'. 
- If you are viewing a planet and want to exit from the locked camera. Press and hold key 'Esc' and click the mouse to move somewhere else. 
- Use mouse wheel to zoom in or out. 
- You can pan the camera by pressing right click and move mouse. But please don't do it. 
- There is also a button in top-right corner, to stop or continue the animation. 


## Lessons Learned

This is perhaps not the first time that I've  programmed a 3D scene, however this time I had to create everything from scratch and structure the project myself. Although this is just a small project to applied what i have learned in threejs, it definitely taught me a lot. 

1. How to structure a project:'
- This is important, since a well designed project structure improves readability and mantainability. 

2. Three.js 
- The whole 3D World of this project is created by three.js which is a powerful library in javascript that facilitates the process of creating and incorporating 3D elements. 
- I've learned how to create each pieces of elements that contruct the whole 3D World. 
  + I've now known how to render a scene or even how to create this scene, what to do with the camera, light and 
  + I know to create a mesh, add it to the scene and animate it.
  + I become familiar with adding texture and loading the models to the scene. 
  and many more...

3. HTML/CSS and javascript
- I feel more comfortable working with javascript and how to use them alltogether to create a cool project. 
- In javascript, I've learned a lot about asynschronous function and classes. 


## Problems 

And of course, I've also encounterd problems when working on the projects. There are many of them that made me frustrated, but here are some that drove me crazy :) 
- The problem with the camera when user clicks on a planet. It was quite tricky to implement this feature and it is still not perfect. The hard part is that the planet's moving constantly, so finding its positions and changing it is not as easy as it may sound like. The orbitscontrol should also be taken into account when changing camera's position.
-  I was also struggling how to get a planet clicked on. Luckily, I found out about the existence of Raycaster.
- Now, the light is also challenging. As we all know, the sun is the only light source in the space. Which means how should I make it 'shine' if there is no light therein

Well, at least I got everything appear on the screen. Yayyy :D 

## Authors

- [@jameshnl232](https://github.com/jameshnl232/)


## Demo
A gif would be too heavy, here's a screenshot
![alt text](https://github.com/jameshnl232/SolarSystem/blob/main/solarsystem.PNG)

## License

Feel free share the knowledge to others.
