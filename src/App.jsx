import './App.css';
import Header from "./components/header/Header";
import Navi from "./components/navi/Navi";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

const App =() => {
  return (
    <>
      <Header />
      <Navi />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
