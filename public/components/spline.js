/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/AJFfNyuW9IifNkRq/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#525151']} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <OrthographicCamera
            name="Camera"
            makeDefault={true}
            zoom={0.9}
            far={100000}
            near={-100000}
            position={[7, -16, 1000]}
          />
          <mesh
            name="Sphere"
            geometry={nodes.Sphere.geometry}
            material={materials['Sphere Material']}
            visible={false}
            castShadow
            receiveShadow
            position={[1.68, -199.27, 183.69]}
            scale={0.76}
          />
          <group name="Particles" position={[5.51, 1.13, -69.55]} scale={1.5}>
            <particleSystem
              name="Particle Emitter 2"
              geometry={nodes['Particle Emitter 2'].geometry}
              material={materials['']}
              position={[0, -0.44, 275.88]}
            />
          </group>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[200, 300, 300]}
          />
          <OrthographicCamera name="1" makeDefault={false} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}