import { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../Components/Button'

const About = () => {

  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-2 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">Hi, I'm Joel</p>
                        <p className="grid-subtext">I am a full stack developer based in Toronto, Canada, with a passion for learning and creating.</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">I specialize in building robust and responsive web applications using the latest technologies.</p>
                    </div>
                </div>
            </div>
            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">My Passion for Coding</p>
                        <p className="grid-subtext">I love solving problems and building through code. Coding isn't just a job for me, it's a way of life.</p>
                    </div>
                </div>  
            </div>
        </div>
    </section>
  )
}

export default About