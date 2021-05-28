import { RouteComponentProps } from "react-router-dom";
import { Component, useEffect } from 'react';
import { useQuery, UseQueryResult } from "react-query";
import img from '../OrbitViewer/World_Map.png'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'


export const OrbitViewer = () => {

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
