/** @format */

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Earth = ({ displacementScale }) => {
  const earthRef = useRef();

  const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap] =
    useTexture([
      "/assets/2k_earth_daymap.jpg",
      "/assets/earth_normal.jpg",
      "/assets/earth_specular.jpg",
      "/assets/earth_displacement.jpg",
    ]);

  useFrame(() => {
    earthRef.current.rotation.y += 0.002;
  });
  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial
        map={earthTexture}
        normalMap={earthNormalMap}
        specularMap={earthSpecularMap}
        shininess={1000}
        displacementMap={earthDisplacementMap}
        displacementScale={displacementScale}
      />
    </mesh>
  );
};

export default Earth;
