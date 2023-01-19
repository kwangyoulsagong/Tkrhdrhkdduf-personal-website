import { Sphere ,MeshDistortMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import React from "react";
export default function threed(){
   
  
    return <Sphere visible args={[1, 100, 200]} scale={2}>
       
        <meshLambertMaterial attach='material' color={'black'}/>
        <MeshDistortMaterial color="rgb(0, 153, 192)" attach="material" distort={0.5} speed={2}/>
        

    </Sphere>
}