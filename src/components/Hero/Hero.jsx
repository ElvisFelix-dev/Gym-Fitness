import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
//import componest
import Header from "../Header/Header";

//import css
import "./Hero.css";

//import static file
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const theBestVariants = {
  start: {
    x: 220,
  },
  end: {
    x: 7,
    transition: {
      type: "tween",
      duration: 3,
    },
  },
};

const heartRateVariants = {
  start: {
    right: "-1rem",
  },
  end: {
    // x: "-50px",
    right: "4rem",
    transition: {
      type: "tween",
      duration: 3,
    },
  },
};
const caloriesVariants = {
  start: {
    x: "-1rem",
  },
  end: {
    // x: "-50px",
    x: "5rem",
    transition: {
      type: "tween",
      duration: 3,
    },
  },
};

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best add */}
        <div className="the-best-ad">
          <motion.div
            variants={theBestVariants}
            initial="start"
            // animate="end"
            whileInView="end"
          ></motion.div>
          <span>a melhor academia da cidade</span>
        </div>

        {/* Hero headding  */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Modele </span>
            <span>seu</span>
          </div>
          <div>
            <span>corpo ideal</span>
          </div>
          <div>
            <span>
              aqui vamos ajudá-lo a moldar e construir seu corpo ideal e viver sua vida ao máximo
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figure">
          <div>
            <span>
              <CountUp end={140} start={100} delay={2} prefix="+" />
            </span>
            <span>treinamentos especializados</span>
          </div>
          <div>
            <span>
              <CountUp end={100} start={1} delay={2} prefix="+" />
            </span>
            <span>alunos</span>
          </div>
          <div>
            <span>
              <CountUp end={50} start={20} delay={2} prefix="+" />
            </span>
            <span>programa fitness </span>
          </div>
        </div>

        {/* herro button */}
        
      </div>
      <div className="right-h">
        
        <motion.div
          className="heart-rate"
          variants={heartRateVariants}
          initial="start"
          whileInView="end"
        >
          <img src={Heart} alt="" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero imgae */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image_back" />
        {/* hero calories */}
        <motion.div
          className="calories"
          variants={caloriesVariants}
          initial="start"
          // animate='end'
          whileInView="end"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories burn</span>
            <span>220 cal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
