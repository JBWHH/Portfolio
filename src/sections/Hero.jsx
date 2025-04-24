import { PerspectiveCamera, Ring } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../Components/HackerRoom";
import CanvasLoader from "../Components/CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../Components/Target";
import ReactLogo from "../Components/ReactLogo";
import Cube from "../Components/Cube";
import Rings from "../Components/Rings";
import HeroCamera from "../Components/HeroCamera";
import Button from "../Components/Button";
import Developer from "../Components/Developer";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet, isDesktop);


  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Joel <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> enable when needed */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            

            <HeroCamera isMobile={isMobile}>
              <Developer 
                position={sizes.deskPosition} 
                scale={sizes.deskScale} 
                rotation={[0, -Math.PI, 0]}
                animationName="untitled" 
              />  
            </HeroCamera>
            
           

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={7} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[0, 5, 0]} intensity={0.5} />
          </Suspense>
        </Canvas>  
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Take a Look!" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>
      </div>
    </section>
  );
};

export default Hero;
