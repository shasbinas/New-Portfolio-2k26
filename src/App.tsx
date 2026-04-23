import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Education } from "./sections/Education";
import { Stats } from "./sections/Stats";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { Loading } from "./components/Loading";
import { ScrollProgress, BackToTop } from "./components/ScrollUtils";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {isLoading && <Loading key="loading" />}
      </AnimatePresence>

      <ScrollProgress />
      <CustomCursor />
      <BackToTop />
      
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Stats />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
