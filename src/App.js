// src/App.js
import React from "react";
import Header from "./components/Header";
import DestinationList from "./components/DestinationList";
import BenefitsSection from "./components/BenefitsSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main className="container mx-auto p-4">
        <DestinationList />
        <BenefitsSection />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
