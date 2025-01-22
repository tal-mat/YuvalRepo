import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from './Scene.jsx' // Your Spline-generated scene

export default function App() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas shadows>
                <Scene />
                <OrbitControls />
            </Canvas>
        </div>
    )
}