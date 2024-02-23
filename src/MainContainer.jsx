/** @format */

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const MainContainer = () => {
  return (
    <Canvas>
      <color attach="background" args={["#111111"]} />
      <Stars />
    </Canvas>
  );
};

export default MainContainer;
