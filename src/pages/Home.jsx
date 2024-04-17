import React from 'react'
import HomeAnimation from '../components/HomeAnimation'


export default function Home() {
    const textBoxStyle = "bg-gray-300 h-56"

    return (
        <>
            <div className='pl-44 pr-44 pt-20 mb-32'>
                <section className=''>
                    <div className='w-1/2'>
                        <h1 className='text-4xl'> Hello there, I'm <span className='text-red-500 text-5xl'>Sluggan</span></h1>
                        <p className='mt-5'>Also know as Eric, and a little about me, and im currently studing computer science. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, tenetur incidunt ea nam, cumque fuga, quis consequuntur magni odio recusandae est repellendus officia? Voluptas illo ea dicta unde aspernatur deserunt?</p>
                    </div>
                </section>

                <section>
                    <div className=' mt-40'>
                        <h1 className='text-4xl'>My <span className='text-red-500 text-5xl'>Portfolio</span></h1>
                        <p className='mt-5'>Also know as Eric, and a little about me, and im currently studing computer science. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, tenetur incidunt ea nam, cumque fuga, quis consequuntur magni odio recusandae est repellendus officia? Voluptas illo ea dicta unde aspernatur deserunt?</p>
                    </div>

                </section>

                <section>
                    <div className=' mt-40'>
                        <h1 className='text-4xl'>How to  <span className='text-red-500 text-5xl'>Contact</span> me</h1>
                        <p className='mt-5'>Also know as Eric, and a little about me, and im currently studing computer science. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, tenetur incidunt ea nam, cumque fuga, quis consequuntur magni odio recusandae est repellendus officia? Voluptas illo ea dicta unde aspernatur deserunt?</p>
                    </div>

                </section>
            </div>

        </>
    )
}
