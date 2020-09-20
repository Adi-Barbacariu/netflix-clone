import React from "react";
import "./FAQ.scss";
import Question from "../question-box/Question";
import qa from "../../qa";
import Button from "../button/Button";

function FAQ() {
  return (
    <div className="faq">
      <h2 className="faq__title">Intrebari frecvente</h2>
      <div className="faq__questions">
        {qa.map((current) => {
          return <Question key={current.id} q={current.q} a={current.a} />;
        })}
      </div>

      <h2 className="faq__subtitle">
        Esti gata de vizionare? Introdu adresa de e-mail pentru a te abona sau
        pentru a reactiva abonamentul.
      </h2>
      <form>
        <input type="email" name="email" placeholder="Adresa de e-mail" />
        <Button>INCEPE</Button>
      </form>
    </div>
  );
}

export default FAQ;
