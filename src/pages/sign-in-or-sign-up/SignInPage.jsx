import React from "react";
import logo from "../../assets/img/580b57fcd9996e24bc43c529.png";
import "./signInPage.scss";
import Background from "../../assets/img/bg.jpg";
import Button from "../welcome-page/components/button/Button";

function SignInPage() {
  const pageStyle = {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${Background})`,
  };

  return (
    <div className="signin" style={pageStyle}>
      <div className="logo">
        <img src={logo} alt="netflix logo" />
      </div>

      <form className="signin__form">
        <p className="form__title">Conectare</p>

        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Parola" />
        <Button>Conectare</Button>

        <p className="signin__link">
          Esti nou la Netflix? <a href="#">Inregistreaza-te acum</a>
        </p>

        <p className="signin__captcha">
          Aceasta pagina este protejata prin Google reCAPTCHA pentru a ne
          asigura ca nu esti un robot.
        </p>
      </form>

      <div className="signin__footer">
        <div className="signin__footer-content">
          <p className="footer__call">Ai intrebari? Suna la 0800-672-120</p>

          <div className="footer__grid">
            <a href="#" className="footer__link">
              Intrebari frecvente
            </a>
            <a href="#" className="footer__link">
              Preferinte de cookie
            </a>
            <a href="#" className="footer__link">
              Asistenta
            </a>
            <a href="#" className="footer__link">
              Informatii legate de companie
            </a>
            <a href="#" className="footer__link">
              Conditii de utilizare
            </a>
            <a href="#" className="footer__link">
              Declaratia de confidentialitate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
