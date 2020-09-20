import React from "react";
import logo from "../../../../assets/img/580b57fcd9996e24bc43c529.png";
import Button from "../button/Button";
import Background from "../../../../assets/img/bg.jpg";
import "./header.scss";

function Header() {
  const headerStyle = {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${Background})`,
  };

  return (
    <div className="header" style={headerStyle}>
      <div className="header__container">
        <img src={logo} alt="netflix logo" />
        <Button>Conectare</Button>
      </div>
      <div className="header__content">
        <h1 className="header__title">
          Divertisment 100%. <br /> 0,99 EUR pentru primele 30 de zile.{" "}
        </h1>
        <h2 className="header__subtitle">
          Vizioneaza oriunde. Anuleaza oricand.
        </h2>
        <div className="header__email-container">
          <p className="header__text">
            Esti gata de vizionare? Introdu adresa de e-mail pentru a te abona
            sau pentru a reactiva abonamentul.
          </p>

          <form>
            <input type="email" name="email" placeholder="Adresa de e-mail" />
            <Button>Incearca acum cu 0,99 EUR</Button>
          </form>

          <p className="header__text">
            Doar noii abonati sunt eligibili pentru aceasta oferta.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
