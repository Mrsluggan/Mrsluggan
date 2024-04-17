import React, { useState } from 'react';

export default function Secret() {
    let audio = new Audio("/Shitpost.mp3");
    const start = () => {
        audio.play();
        setIsPlaying(!isPlaying);
        setTimeout(() => {
            setIsPlaying(false);
        }, 14000);
    };
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <>
            {isPlaying && (
                <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50'>
                    <img src='bro.png' className='fade-in' alt='Bild av bro' />
                </div>
            )}

            <button onClick={start} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Don't Press me
            </button>
        </>
    );
}
