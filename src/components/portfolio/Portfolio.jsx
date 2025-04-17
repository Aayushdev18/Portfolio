import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Restaurant Website",
    img: "/project1.png",
    desc: "A fully responsive and visually appealing restaurant website built with React. It includes dynamic food menus, image galleries, customer reviews, and an interactive table reservation system. Designed to deliver a seamless user experience with smooth animations, mobile optimization, and clean UI.",
    deployLink: "https://restaurant-mauve-gamma.vercel.app/",
    githubLink: "https://github.com/Aayushdev18/Restaurant"
  },
  {
    id: 2,
    title: "Music App",
    img: "/project2.png",
    desc: "A fully responsive and modern music streaming application built using React. It features real-time song search, curated playlists, genre-based browsing, and a sleek audio player with controls like play, pause, skip, and volume.",
    deployLink: "https://end-sem-project-spotify-clone-git-1c1cb9-aayushdev18s-projects.vercel.app/content",
    githubLink: "https://github.com/Aayushdev18/End-Sem-Project-Spotify-Clone---EndSem-Project-Spotify-Clone---hcr0iijitlxo"
  },
  {
    id: 3,
    title: "BMI Calculator",
    img: "/project3.png",
    desc: "A clean and user-friendly Body Mass Index (BMI) calculator built with React. Users can input their height and weight to instantly get their BMI value along with a health status category.",
    deployLink: "https://bmi-calculator-omega-weld.vercel.app/",
    githubLink: "https://github.com/Aayushdev18/BMI-Calculator"
  },
  {
    id: 4,
    title: "React Shopping Cart",
    img: "/project4.png",
    desc: "A dynamic and responsive shopping cart application built with React. It allows users to browse products, add or remove items from the cart, adjust quantities, and view total pricing in real-time.",
    deployLink: "https://shopping-cart-two-orpin.vercel.app/",
    githubLink: "https://github.com/Aayushdev18/Shopping-cart"
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
            <div className="buttons">
              <button onClick={() => window.open(item.deployLink, "_blank")}>Deploy Link</button>
              <button onClick={() => window.open(item.githubLink, "_blank")}>GitHub Link</button>
            </div>
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
