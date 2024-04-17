import React from 'react'
import HomeAnimation from './HomeAnimation'
import Secret from './Secret'
export default function Main() {
    let audio = new Audio("/SecretMusic.mp3")
    const start = () => {
        audio.play()
    }
    return (
        <>
            <div class=" flex items-center justify-center">
                Don't Press me <Secret />
            </div>

            <HomeAnimation
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
            />



        </>
    )
}
