import React from 'react'
import HomeAnimation from '../components/HomeAnimation'


export default function Home() {
    return (
        <>
            <HomeAnimation
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
            />
            <div class="h-screen flex items-center justify-center">

                <video width="320" height="240" controls>
                    <source src="glock.mov" type="video/mp4"></source>

                </video>

            </div>


        </>
    )
}
