import React from 'react'
import HomeAnimation from './HomeAnimation'
export default function Main() {
    let audio = new Audio("/SecretMusic.mp3")
    const start = () => {
        audio.play()
    }
    return (
        <>
            <HomeAnimation
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
            />



        </>
    )
}
