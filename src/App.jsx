import { useRef } from "react";
import "./app.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

const App = () => {
  const portfolioRef = useRef(null);

  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      

      <section id="Services">
        <Parallax type="services" />
      </section>

      <section>
        <Services />
      </section>

      <section id="Portfolio">
        <Parallax type="Portfolio" />
      </section>

      <div ref={portfolioRef}>
        <Portfolio />
      </div>

      <section id="Contact">
        <Contact />
      </section>
      <section id="About">
        <About scrollToPortfolio={() => portfolioRef.current?.scrollIntoView({ behavior: "smooth" })} />
      </section>
    </div>
  );
};

export default App;
