import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const xSway = useTransform(scrollYProgress, [0, 0.5, 1], ["-10%", "10%", "-10%"]);

  const springY = useSpring(yText, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <div
      className={`parallax ${type === "services" ? "servicesBg" : "portfolioBg"}`}
      ref={ref}
    >
      <motion.h1
        style={{ y: springY }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>

      <motion.div
        className="mountains"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      ></motion.div>

      <motion.div
        className="planets"
        style={{
          y: yBg,
          rotate,
          scale,
          backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`,
        }}
      ></motion.div>

      <motion.div
        className="stars"
        style={{ x: xSway }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
