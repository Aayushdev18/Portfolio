import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Restaurant Website",
    img: "/project1.png",
    desc: "A fully responsive and visually appealing restaurant website built with React. It includes dynamic food menus, image galleries, customer reviews, and an interactive table reservation system. Designed to deliver a seamless user experience with smooth animations, mobile optimization, and clean UI."
  },
  
  
  {
    id: 2,
    title: "React Dashboard",
    img: "/project2.png",
    desc: "An interactive admin dashboard with charts."
  },
  {
    id: 3,
    title: "React Admin",
    img: "/project3.png",
    desc: "A powerful admin panel using React."
  },
  {
    id: 4,
    title: "React Blog",
    img: "/project4.png",
    desc: "A modern blog site made with React."
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container" ref={ref}>
        <div className="wrapper">
          <motion.div className="imageContainer" style={{ y }}>
            <img src={item.img} alt={item.title} />
          </motion.div>
          <motion.div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
