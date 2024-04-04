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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Urn3YLPwxoE?si=HmSty6eqqNX4NnbV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            </div>


        </>
    )
}
