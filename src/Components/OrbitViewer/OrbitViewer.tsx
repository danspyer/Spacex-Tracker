import { RouteComponentProps } from "react-router-dom";
import { Component, useEffect } from 'react';
import { useQuery, UseQueryResult } from "react-query";
import { RocketInfoModel } from '../Vehicles/Interface/RocketIntfoModel'
import * as THREE from 'three';


export const OrbitViewer = () => {

    const API = {
        lightProbeIntensity: 1.0,
        directionalLightIntensity: 0.2,
        envMapIntensity: 1
    };
    
    useEffect(() => {
        // === THREE.JS CODE START ===
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, 1000/1000, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( 1000, 1000);

        const directionalLight = new THREE.DirectionalLight( 0xffffff, API.directionalLightIntensity );
        directionalLight.position.set( 10, 10, 10 );
        scene.add( directionalLight );

        var element = document.getElementById('threejsRender');
        if(element != null)
        {
            element.appendChild(renderer.domElement);
        }
        
        const geometry = new THREE.SphereGeometry(1.5, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
        const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        const sphere = new THREE.Mesh( geometry, material );
        scene.add( sphere );
        camera.position.z = 5;

        var animate = function () {
            requestAnimationFrame( animate );
            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
            renderer.render( scene, camera );
        };

        animate();
        // === THREE.JS EXAMPLE CODE END ===
    });

    return (
        <div id="threejsRender">
            
        </div>
    );
}
