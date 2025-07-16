import React, { useState } from 'react';
import Hero from './components/Hero';
import About from "./components/About";
import Services from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading && (
        <Loader onLoadingComplete={handleLoadingComplete} />
      )}
      {!isLoading && (
        <>
          <Header />
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;