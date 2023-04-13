        //Metodo para crear una escena y color de la misma
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0xFFFFFF);

        //Metodo para añadir una camara a la escena
        var camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth/window.innerHeight
        );

        //Parametros de rotacion y posicion de la camara

        camera.position.z = 5.8;
        camera.rotation.x = -0.30;
        camera.rotation.y = 0.10;
        camera.position.x = 2.5;
        camera.position.y = 5;

        //Creamos el render
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        //Metodo para añadir una geometria (cubo) y material a la escena 
        var geometry = new THREE.BoxGeometry(2,2,2);
        var material = new THREE.MeshBasicMaterial({color: 0xF14343, wireframe: false});
        var cube = new THREE.Mesh(geometry, material)

        scene.add(cube);

        //Metodo para añadir una geometria (cubo) y material a la escena 
        var geometry2 = new THREE.BoxGeometry(1,1,1);
        var material2 = new THREE.MeshBasicMaterial({color: 0x5ED500, wireframe: false});
        var cube2 = new THREE.Mesh(geometry2, material2);

        scene.add(cube2);

        //Metodo para añadir una geometria (cubo) y material a la escena 
        var geometry3 = new THREE.BoxGeometry(0.5,0.5,0.5);
        var material3 = new THREE.MeshBasicMaterial({color: 0xF3E953, wireframe: false});
        var cube3 = new THREE.Mesh(geometry3, material3);
        
        scene.add(cube3);


        document.addEventListener('keydown', function(event) {
            switch(event.keyCode) {
                case 37: // Flecha izquierda
                cube.position.x -= 0.1;
                break;
                case 38: // Flecha arriba
                cube.position.y += 0.1;
                break;
                case 39: // Flecha derecha
                cube.position.x += 0.1;
                break;
                case 40: // Flecha abajo
                cube.position.y -= 0.1;
                break;

         }
        });
        


        //Metodo para crear la plano cartesiano en la escena

        const axesHelper = new THREE.AxesHelper(10);
        scene.add( axesHelper );

        //Metodo para crear la maya en la escena
        const size = 100;
        const divisions = 50;
        const gridHelper = new THREE.GridHelper( size, divisions );
        scene.add( gridHelper );

        //Una funcion para ubicar las respectivas geometrias

        var setp=0
        function render() {
    setp += 0.05; 

    cube.position.x = (Math.sin(setp)+1)/2;
    cube.position.y = (Math.sin(setp)+1)/2;
    cube.position.z = (Math.sin(setp)+1)/2;

    cube2.position.x = (Math.sin(setp)+1)/2;
    cube2.position.y = ((Math.sin(setp)+1)*2.5)/2;
    cube2.position.z = (Math.sin(setp)+1)/2;

    cube3.position.x = (Math.sin(setp)+1)/2;
    cube3.position.y = ((Math.sin(setp)+1)*3.25)/2;
    cube3.position.z = (Math.sin(setp)+1)/2;
  
    renderer.render(scene, camera);

     setTimeout(()=>{requestAnimationFrame(render)}, 100);
  }
  requestAnimationFrame(render);

main();
