import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <p className="footer__call">Ai intrebari? Suna la 0800-672-120</p>

        <div className="footer__grid">
          <a href="#" className="footer__link">
            Intrebari frecvente
          </a>
          <a href="#" className="footer__link">
            Relatii cu investitorii
          </a>
          <a href="#" className="footer__link">
            Declaratia de confidentialitate
          </a>
          <a href="#" className="footer__link">
            Test de viteza
          </a>
          <a href="#" className="footer__link">
            Asistenta
          </a>
          <a href="#" className="footer__link">
            Cariere
          </a>
          <a href="#" className="footer__link">
            Preferinte de cookie
          </a>
          <a href="#" className="footer__link">
            Mentiuni legale
          </a>
          <a href="#" className="footer__link">
            Cont
          </a>
          <a href="#" className="footer__link">
            Modalitati de vizionare
          </a>
          <a href="#" className="footer__link">
            Informatii legate de companie
          </a>
          <a href="#" className="footer__link">
            Titluri originale Netflix
          </a>
          <a href="#" className="footer__link">
            Centru media
          </a>
          <a href="#" className="footer__link">
            Conditii de utilizare
          </a>
          <a href="#" className="footer__link">
            Contacteaza-ne
          </a>
        </div>

        {/* language selector */}

        <p className="footer__text">Netflix Romania</p>
      </div>
    </div>
  );
}

export default Footer;
