import { useEffect } from 'react';
import img from '../OrbitViewer/World_Map.png'
import * as THREE from 'three';
import * as satellite from 'satellite.js';
import * as d3 from 'd3';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as console from 'console';


/* =============================================== */
  /* =============== CLOCK ========================= */
  /* =============================================== */

  /**
   * Factory function for keeping track of elapsed time and rates.
   */
function clock() {
    var rate = 60; // 1ms elapsed : 60sec simulated
    var date = d3.now();
    var elapsed = 0;

    function clock() {}
  
    clock.date = function(timeInMs: number) {
      if (!arguments.length) return date + (elapsed * rate);
      date = timeInMs;
      return clock;
    }
  
    clock.elapsed = function(ms: number) {
      if (!arguments.length) return date - d3.now(); // calculates elapsed
      elapsed = ms;
      return clock;
    }
  
    clock.rate = function(secondsPerMsElapsed: number) {
      if (!arguments.length) return rate;
      rate = secondsPerMsElapsed;
      return clock;
    }
  
    return clock;
}

const radiansToDegrees = (radians: number) => {
    return radians * 180 / Math.PI;
}

const satelliteVector = (satrec: any, date: Date) => {
    var xyz = satrecToXYZ(satrec, date);
    var lambda = xyz[0];
    var phi = xyz[1];
    var cosPhi = Math.cos(phi);
    var r = ((xyz[2] + 6371) / 6371) * 228;
    return new THREE.Vector3(
      r * cosPhi * Math.cos(lambda),
      r * cosPhi * Math.sin(lambda),
      r * Math.sin(phi)
    );
}

const satrecToXYZ = (satrec: satellite.SatRec, date: Date) => {
    var positionAndVelocity = satellite.propagate(satrec, date);
    var gmst = satellite.gstime(date);
    if(positionAndVelocity.position == false || positionAndVelocity.position == true){
        throw Error("Division By 0");
    }
    var positionGd = satellite.eciToGeodetic(positionAndVelocity.position, gmst);
    return [positionGd.longitude, positionGd.latitude, positionGd.height];
}

export const OrbitViewer = () => {
    var satrecs: satellite.SatRec[];

    const API = {
        lightProbeIntensity: 1.0,
        directionalLightIntensity: 0.2,
        envMapIntensity: 1
    };
    
    useEffect(() => {
        // === THREE.JS CODE START ===
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 60, 1000/1000, 1, 2000 );
        var renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
        scene.background = null;
        renderer.setSize( 1000, 1000);

        var element = document.getElementById('threejsRender');
        if(element != null)
        {
            element.appendChild(renderer.domElement);
        }

        // earth Mesh 
        const material = new THREE.MeshBasicMaterial();
        material.map = new THREE.TextureLoader().load(img);
        const geometry = new THREE.SphereGeometry(50, 50, 50, 0, Math.PI * 2);
        const earth = new THREE.Mesh( geometry, material );
        
        // Orbit item mesh
        var satMaterial = new THREE.MeshBasicMaterial({color:'#f08080'});
        var satGeometry = new THREE.SphereGeometry(2, 10, 10, 0, Math.PI * 2);
        const satelite = new THREE.Mesh( satGeometry, satMaterial );
        satelite.position.x = 100;

        earth.add(satelite);
        scene.add( earth );

        /*
        var TLE_DATA_DATE = new Date(2018, 0, 26).getTime();

        var activeClock  = clock().rate(1000)

        var satGeometry1 = new THREE.BufferGeometry().setFromPoints(satrecs.map(function(satrec) {return satelliteVector(satrec, new Date(2018, 0, 26));}));
        //var date = new Date(activeClock.date(TLE_DATA_DATE));
        var satellites = new THREE.Points(satGeometry1, new THREE.PointsMaterial( { color: 0x000000, size: 20 } ));
        scene.add(satellites);
*/
        camera.position.z = 300;

        const controls = new OrbitControls( camera, renderer.domElement );

        controls.enableZoom = true;

        controls.maxZoom = 5.0;

        var animate = function () {
            requestAnimationFrame( animate );
            
            satelite.position.set(0, 0, 0);
            satelite.rotateY(0.03)
            satelite.translateX(100);

            earth.position.set(0, 0, 0);
            earth.rotation.y += 0.001;

            renderer.render( scene, camera );
        };

        // https://va3c.github.io/three.js/examples/textures/land_ocean_ice_cloud_2048.jpg
        animate();
        // === THREE.JS EXAMPLE CODE END ===
    });

    return (
        <div id="threejsRender">
            
        </div>
    );
}


