
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TechCarousel from "./components/TechCarousel/TechCarousel";
import Expertise from "./components/Expertise/Expertise";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
    <main className={styles.main}>
     <Navbar />
     <Hero />
     <TechCarousel />
     <Expertise />
     <About />
     <Contact />
     <Footer />
    </main>
  );
}
