/** @format */
import { OrbitControls } from "@react-three/drei";
import MainContainer from "./MainContainer";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";

function App() {
  return (
    <Canvas
      shadows
      camera={{ fov: 45, near: 0.1, far: 4000, position: [-10, -1, 10] }}
    >
      <OrbitControls />
      <MainContainer />
    </Canvas>
  );
}

export default App;
