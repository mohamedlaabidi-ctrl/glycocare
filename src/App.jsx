import React from 'react';
import { RamadanProvider } from './context/RamadanContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Marathon from './components/Marathon';
import MapSection from './components/MapSection';
import Events from './components/Events';
import Partners from './components/Partners';
import Team from './components/Team';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import RamadanToggle from './components/RamadanToggle';

function App() {
  return (
    <RamadanProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Impact />
        <Marathon />
        <MapSection />
        <Events />
        <Partners />
        <Team />
        <RegistrationForm />
        <Footer />
        <RamadanToggle />
      </div>
    </RamadanProvider>
  );
}

export default App;