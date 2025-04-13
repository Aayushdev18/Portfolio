import "./app.scss"
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax"


const App = () => {
  return <div>
  <section id="Homepage">
    <Navbar/>
    <Hero/>
  </section>
  <section id="Services"><Parallax type="services"/></section>
  <section>Services</section>
  <section id="Portfolio"><Parallax type="Portfolio"/></section>
  <section>Parallax</section>
  <section>Portfolio1</section>
  <section>Portfolio2</section>
  <section>Portfolio3</section>
  <section id="Contact">Contact</section>
  <section id="About">Parallax</section>
</div>;
};

export default App;