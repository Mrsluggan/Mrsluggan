import React from 'react'
import HomeAnimation from '../components/HomeAnimation'


export default function Home() {

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
            <div class="h-screen flex items-center justify-center">

            <button onClick={start}>Danger, dont press</button>


            </div>


        </>
    )
}
