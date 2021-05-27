import { RouteComponentProps } from "react-router-dom";
import { Component, useEffect } from 'react';
import { useQuery, UseQueryResult } from "react-query";
import img from '../OrbitViewer/world_shaded_43kv2.jpg'
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

        const geometry = new THREE.SphereGeometry(200, 50, 50, 0, Math.PI * 2);
        const material = new THREE.MeshBasicMaterial();
        material.map = new THREE.TextureLoader().load(img);
        const sphere = new THREE.Mesh( geometry, material );
        scene.add( sphere );

        // var pivotPoint = new THREE.Object3D();
        // sphere.add(pivotPoint);

        camera.position.z = 500;

        // var satGeometry = new THREE.SphereGeometry();
        // var satMaterial = new THREE.MeshBasicMaterial();
        // const satmesh = new THREE.Mesh( satGeometry, satMaterial );
        // pivotPoint.add(satmesh);

        const controls = new OrbitControls( camera, renderer.domElement );

        var animate = function () {
            requestAnimationFrame( animate );
            //sphere.rotation.x += 0.002;
            //sphere.rotation.y += 0.002;
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
