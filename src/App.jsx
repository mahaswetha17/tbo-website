import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Domains from "./components/Domains";
import Connect from "./components/Connect";
import OfficeBearers from "./components/OfficeBearers";
import Gallery from "./components/Gallery";


function App() {
  return (
    <>
      <Navbar />

      <Hero />
      

      <Section
        title="About The Box Office (TBO)"
        content={`The Box Office (TBO) is the official dramatics and literary club of Madras Institute of Technology, Anna University. We foster creativity and intellectual growth through drama, debates, films, writing and public speaking. At TBO, ideas turn into memorable creative experiences.`}
      />

      <Section
        title="Vision & Mission"
        content={`We aim to cultivate a vibrant community of storytellers and critical thinkers. TBO empowers students to perform, debate and engage with diverse narratives. Our goal is to host impactful festivals that identify student talent, inspire artistic viewpoints and spark meaningful conversations.`}
      />


      <Section
        title="Our Ventures"
        content={`Sivaranjani Drama • MITiMUN • Mitafest Drama • O’See Matinee • Samhita Escape Room • Aval Anthology of Short Films • Airport Awareness Street Play`}
      />

      <Section
        title="Achievements"
        content={`MITiMUN'25 attracted over 130 participants across more than 10 colleges. Our Escape Room event had 150+ participants. Our dramas and Aval anthology gained overwhelming positive responses campus-wide.`}
      />

  

      <Domains />
<OfficeBearers />
<Gallery />
<Connect />

      <Footer />
    </>
  );
}

export default App;
