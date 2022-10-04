import Tictactoe from "./Tictactoe.js";
import './App.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const boxVariant = {
    visible: { opacity: 1, scale: 1, x: '0px', transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 1, x: '0px' },
  }

const Box = ({ num, projectClass, project, children }) => {
    const control = useAnimation()
    const [ref, inView] = useInView({
      threshold: 0.6,
    });
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <>
        <motion.div variants={boxVariant}
          className={`project-container`}
          initial="hidden"
          animate={control}
          ref={ref}
        >
          {children}
        </motion.div>
        </>
      );
    }

export default Box;