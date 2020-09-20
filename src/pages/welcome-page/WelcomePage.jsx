import React from "react";
import Header from "./components/header/Header";
import Section from "./components/section/Section";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/footer/Footer";
import img1 from "../../assets/img/tv.png";
import img2 from "../../assets/img/mobile-0819.jpg";
import img3 from "../../assets/img/device-pile.png";

function WelcomePage() {
  return (
    <div className="welcome-page">
      <Header />
      <Section
        message={[
          "Vizionare pe TV.",
          "Vizioneaza pe Smart TV, Playstation, Xbox, Chromecast, Apple TV, playere Blu-ray si altele.",
        ]}
        image={img1}
      />
      <Section
        message={[
          "Descarca serialele preferate pentru a le viziona offline.",
          "Salveaza cu usurinta titlurile preferate si vei avea mereu ceva de vizionat",
        ]}
        image={img2}
        centerSection
      />
      <Section
        message={[
          "Vizioneaza oriunde.",
          "Vizioneaza nelimitat filme si seriale pe telefon, tableta, laptop si televizor, fara alte costuri.",
        ]}
        image={img3}
      />
      <FAQ />
      <Footer />
    </div>
  );
}

export default WelcomePage;
