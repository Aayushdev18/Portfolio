import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      {/* Tagline */}
      <motion.div className="textContainer" variants={variants}>
        <p>
          Building responsive and dynamic websites
          <br /> to power your online presence
        </p>
        <hr />
      </motion.div>

      {/* Title */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Custom</motion.b> Websites
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Built For</motion.b> You.
          </h1>
          <button>WHAT I DO</button>
        </div>
      </motion.div>

      {/* Services List */}
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Frontend Development</h2>
          <p>Modern UI using React, responsive and user-friendly.</p>
          <button>GO</button>
        </motion.div>

        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Backend Development</h2>
          <p>Secure APIs with Node.js and Express.</p>
          <button>GO</button>
        </motion.div>

        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Full-Stack Integration</h2>
          <p>Connecting frontend and backend seamlessly.</p>
          <button>GO</button>
        </motion.div>

        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Deployment</h2>
          <p>Optimized for speed & SEO on platforms like Vercel.</p>
          <button>GO</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
