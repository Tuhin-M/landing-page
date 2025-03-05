import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import AppShowcase from "./components/AppShowcase";

const App = () => (
  <div>
    <Navbar />
    <main>
      <Header />
      <Features />
      <HowItWorks />
      <About />
      <Stats />
      <AppShowcase />
      <FAQ />
      <Testimonials />
    </main>
    <Footer />
  </div>
);
export default App;
