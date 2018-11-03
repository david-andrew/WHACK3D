//To-Do -> prune until good starting test file for making sure the python server works
//e.g. display a sphere
//Perhaps actually just have the finished version in a folder and let them display that?
//if basic starting point, probably just the boilerplate, and verbally explain each item

//create the WebGL renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.sortObjects = false; //make it so that atmospheres don't occlude the planet inside

//include the WebGL renderer in index.html
document.body.appendChild( renderer.domElement );

//allow the window to be resized
window.addEventListener('resize', function()
{
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});


//set up scene, camera, and camera controls
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 100000000 );
camera.position.z = 30;
var controls = new THREE.OrbitControls( camera )
controls.update();






// var scale = 1/5000; //scale down the sizes of planets and their orbits
// sun_scale = 1/169;       //useful for making sun bigger/smaller
// earth_scale = 1;     //useful for making earth bigger/smaller



// //object to hold all sun parameters + meshes
// var sun = 
// {
//     radius:             6.95700e5,         //km 
//     rotation_rate:     1.0791e-2,          //radians/hour
// };

// var earth = 
// {
//     radius:             6.3781e3,           //km
//     rotation_rate:     2.629e-1,            //radians/hour
//     axial_tilt:         4.090926e-1,        //radians
//     orbit_radius:       1.496e8,            //km
//     orbit_rate:         7.173e-4,           //radians/hour      
// };







// //Create geometry for each object

// //Sun Geometry
// sun.surf = new THREE.Mesh(
//     new THREE.SphereBufferGeometry( sun.radius * scale, 64, 64),
//     new THREE.MeshBasicMaterial( { color: 0xFFFFFF } )
// );
// sun.atmo = new THREE.Mesh(
//     new THREE.SphereBufferGeometry( sun.radius * scale * 1.01, 64, 64),
//     new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('textures/2k_sun.jpg'), transparent: true, opacity: .5, side: THREE.DoubleSide } )
// );


// //Earth Geometry
// earth.surf = new THREE.Mesh(
//     //new THREE.SphereBufferGeometry( 4.99, 64, 64),
//     new THREE.SphereBufferGeometry( earth.radius * scale, 64, 64),
//     new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load('textures/2k_earth_w_clouds.jpg') } )
// );
// earth.atmo = new THREE.Mesh(
//     //new THREE.SphereBufferGeometry( 4.995, 64, 64),
//     new THREE.SphereBufferGeometry( earth.radius * scale * 1.0001, 64, 64),
//     new THREE.MeshLambertMaterial( { color: 0x000080, transparent: true, opacity: 0.2 } )
// );
// earth.cloud = new THREE.Mesh(
//     new THREE.SphereBufferGeometry( earth.radius * scale  * 1.0002, 64, 64),
//     //sphere_geometry,
//     new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load('textures/2k_earth_clouds_trans.png'), transparent: true, opacity: 1.0 } )
// );



// //Skybox geometry
// var skybox = new THREE.Mesh(
//     new THREE.CubeGeometry(100000000, 100000000, 100000000),
//     [                                                                                       
//         new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('textures/skyboxes/MilkyWayXP.jpg'), side: THREE.DoubleSide } ),
//         new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('textures/skyboxes/MilkyWayXN.jpg'), side: THREE.DoubleSide } ),
//         new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('textures/skyboxes/MilkyWayYP.jpg'), side: THREE.DoubleSide } ),
//         new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('textures/skyboxes/MilkyWayYN.jpg'), side: THREE.DoubleSide } ),
//         new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('textures/skyboxes/MilkyWayZP.jpg'), side: THREE.DoubleSide } ),
//         new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('textures/skyboxes/MilkyWayZN.jpg'), side: THREE.DoubleSide } ),
//     ]
// );




// //Add the earth/sun geometry to the scene
// scene.add(sun.surf)
// scene.add(sun.atmo)
// scene.add(earth.surf)
// scene.add(earth.atmo)
// scene.add(earth.cloud)

// //add skybox to the scene
// scene.add(skybox);

// //add light to the scene
// var point_light = new THREE.PointLight(0xFFFFFF, 1, 0); //white point light with intensity=1, max distance = 0 (i.e. infinity)
// scene.add(point_light)








// //create a time object for keeping track of scene time
// // var time = new Date( 2000, 0, 1, 12, 0, 0 ).getTime(); //current epoch in milliseconds
// var time = 0;
// var step = (1/60) * 10; //hours every frame

// //var focus = 'earth' //earth or sun
// var bodies = { earth:  0, sun: 1};
// var focus = bodies.earth;  //camera looks at this body


// var keyCodes = {esc: 27, tab: 9, space:32, w:87, a:65, s:83, d:68, left:37, up:38, right:39, down:40}; //codes to recognize specific keypress

// //Keyboard control for switching the view, and speeding/slowing time
// document.addEventListener('keydown', function(event)
// {
//     //space switches to the other body
//     if (event.keyCode == keyCodes.space)
//     {
//         if (focus == bodies.earth)
//         {
//             focus = bodies.sun;
//         }
//         else
//         {
//             focus = bodies.earth;
//         }
//     }
    
//     //A and D speed up and slow down time
//     else if (event.keyCode == keyCodes.a)
//     {
//         step /= 2;
//     }
//     else if (event.keyCode == keyCodes.d)
//     {
//         step *= 2;
//     }


//     //W and S change the scale of the earth
//     else if (event.keyCode == keyCodes.w)
//     {
//         earth_scale *= 2;
//         update_scales();    
//     }
//     else if (event.keyCode == keyCodes.s)
//     {
//         earth_scale /= 2;
//         update_scales();
//     }

//     //up and down arrows change the scale of the sun
//     else if (event.keyCode == keyCodes.up)
//     {
//         sun_scale *= 2;
//         update_scales();
//     }
//     else if (event.keyCode == keyCodes.down)
//     {
//         sun_scale /= 2;
//         update_scales();
//     }

//     //
//     else if (event.keyCode == keyCodes.esc)
//     {
//         earth_scale = 1;
//         sun_scale = 1;
//         update_scales();
//     }
// });


// //apply axial tilt to the earth at the very beginning. This never changes, so we set it once
// earth.surf.rotateX(earth.axial_tilt);
// earth.cloud.rotateX(earth.axial_tilt);
// earth.atmo.rotateX(earth.axial_tilt);


// //move the earth to the correct position/orientation in the scene
// function move_earth(t)
// {
//     //set the position
//     if (focus == bodies.earth)
//     {
//         set_earth_pos(0,0,0); //place earth at origin
//     }
//     else //make the earth orbit the sun
//     {
//         orbit_angle = 2*Math.PI*t*earth.orbit_rate
//         set_earth_pos(Math.cos(orbit_angle)*earth.orbit_radius, 0, Math.sin(orbit_angle)*earth.orbit_radius); //orbit the earth around the sun
//     }


//     //set the rotation angle
//     spin_earth(earth.rotation_rate * step); //rotate earth by its rotation rate
// }

// function set_earth_pos(x,y,z)
// {
//     x*=scale; y*=scale; z*=scale;
//     earth.surf.position.set(x,y,z);
//     earth.cloud.position.set(x,y,z);
//     earth.atmo.position.set(x,y,z);
// }

// function spin_earth(angle)
// {
//     earth.surf.rotateY(angle);
//     earth.cloud.rotateY(angle);
//     earth.atmo.rotateY(angle);
// }


// //move the sun to the correct postion/orientation in the scene
// function move_sun(t)
// {
//     //set the compute position
//     if (focus == bodies.sun)
//     {
//         set_sun_pos(0,0,0); //place earth at origin
//     }
//     else //make the earth orbit the sun
//     {
//         orbit_angle = 2*Math.PI*t*earth.orbit_rate
//         set_sun_pos(Math.cos(orbit_angle)*earth.orbit_radius, 0, Math.sin(orbit_angle)*earth.orbit_radius); //orbit the earth around the sun
//     }

//     //set the rotation angle
//     spin_sun(sun.rotation_rate * step);
// }

// function set_sun_pos(x,y,z)
// {
//     x*=scale; y*=scale; z*=scale;
//     sun.surf.position.set(x,y,z);
//     sun.atmo.position.set(x,y,z);
//     point_light.position.set(x,y,z);
// }


// function spin_sun(angle)
// {
//     sun.surf.rotateY(angle);
//     sun.atmo.rotateY(angle);
// }

// function update_scales()
// {
//     var new_earth_scale = scale * earth_scale * earth.radius;
//     earth.surf.scale.set(new_earth_scale, new_earth_scale, new_earth_scale);
//     new_earth_scale *= 1.0001;
//     earth.cloud.scale.set(new_earth_scale, new_earth_scale, new_earth_scale);
//     new_earth_scale *= 1.0001;
//     earth.atmo.scale.set(new_earth_scale, new_earth_scale, new_earth_scale);

//     var new_sun_scale = scale * sun_scale * sun.radius;
//     sun.surf.scale.set(new_sun_scale, new_sun_scale, new_sun_scale);
//     new_sun_scale *= 1.0001;
//     sun.atmo.scale.set(new_sun_scale, new_sun_scale, new_sun_scale);
// }


// function animate()
// {
//     requestAnimationFrame( animate );

//     //make updates to the scene
//     time += step;
//     move_sun(time)
//     move_earth(time)

//     renderer.render( scene, camera );
// }

// animate();
