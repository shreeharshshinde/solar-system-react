/** @format */

import { useHelper } from "@react-three/drei";
import AnimationStars from "./AnimationStars";
import Earth from "./Scenes/Earth/Earth";
import { useRef } from "react";
import * as THREE from "three";

const MainContainer = () => {
  const directionLightRef = useRef();
  const directionLightRefTwo = useRef();
  useHelper(directionLightRef, THREE.DirectionalLightHelper, 1, "hotpink");
  useHelper(directionLightRefTwo, THREE.DirectionalLightHelper, 1, "hotpink");
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <AnimationStars />
      <directionalLight
        castShadow
        ref={directionLightRef}
        position={[0, 0, 10]}
        intensity={5}
      />
      <Earth displacementScale={0.15} />
    </>
  );
};

export default MainContainer;
