import React, { Fragment, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Stars,
  Html,
  OrbitControls,
} from "@react-three/drei";
import style from "./Background.module.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";


const Background = () => {
  const [step, setStep] = useState(0);
  const aboutMe = () => {
    setStep(1);
  };
  const projects = () => {
    setStep(2);
  };
  const contact = () => {
    setStep(3);
  };

  
  let context = <div>
    <h1>Welcome</h1>
    <br/>
    <div className={style.block}>
        <button onClick={aboutMe}>About Me</button>
        <button onClick={projects}>Projects</button>
        <button onClick={contact}>Contact </button>
      </div>
  </div>;
  if (step === 1){
    context = <AboutMe/>
  }
  if (step === 2){
    context = <Projects/>
  }
  if (step === 3){
    context = <Contact/>
  }
  return (
    <Fragment>
      <div className={step === 0 ? style.hidden : style.navbar}>
        <button onClick={aboutMe}>About Me</button>
        <button onClick={projects}>Projects</button>
        <button onClick={contact}>Contact</button>
      </div>
    <Canvas> 
      <Html
        as="div" // Wrapping element (default: 'div')
        prepend // Project content behind the canvas (default: false)
        center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
        fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
        distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
        zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
        transform // If true, applies matrix3d transformations (default=false)
        sprite // Renders as sprite, but only in transform mode (default=false)
        onOcclude={(visible) => null} // Callback when the visibility changes (default: undefined)
        className={style.container}
      >
        {/* <h1 onClick={handleStep}>hello</h1>  */}
        <div className={style.test}>{context}</div>
      </Html>
      {console.log("Helloooo")}
      <OrbitControls autoRotate/>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={7}
        saturation={0}
        fade
      />
    </Canvas>
    </Fragment>
  );
};
export default Background;
