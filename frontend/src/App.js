import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ParallaxBackground, ScrollProgress } from "./components/ParallaxBackground";
import { MarqueeStrip } from "./components/MarqueeStrip";
import { SectionTransition, FloatingSection } from "./components/SectionTransition";
import { SmoothScroll } from "./components/SmoothScroll";

const Home = () => {
  return (
    <main className="relative" data-testid="home-page">
      <SmoothScroll />
      <ParallaxBackground />
      <ScrollProgress />
      <Header />
      <Hero />
      <MarqueeStrip />

      <SectionTransition className="my-8 sm:my-12">
        <FloatingSection>
          <Portfolio />
        </FloatingSection>
      </SectionTransition>

      <SectionTransition className="my-8 sm:my-12">
        <FloatingSection>
          <About />
        </FloatingSection>
      </SectionTransition>

      <SectionTransition className="my-8 sm:my-12">
        <Contact />
      </SectionTransition>

      <Footer />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
