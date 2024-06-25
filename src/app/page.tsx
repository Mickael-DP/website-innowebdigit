import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TechCarousel from "./components/TechCarousel/TechCarousel";
import Expertise from "./components/Expertise/Expertise";


export default function Home() {
  return (
    <main className={styles.main}>
     <Navbar />
     <Hero />
     <TechCarousel />
     <Expertise />
    </main>
  );
}
