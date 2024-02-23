/** @format */

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AnimationStars from "./AnimationStars";

const MainContainer = () => {
  return (
    <Canvas>
      <color attach="background" args={["#111111"]} />
      <OrbitControls />
      <AnimationStars />
    </Canvas>
  );
};

export default MainContainer;
