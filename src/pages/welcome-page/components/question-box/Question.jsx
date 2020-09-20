import React from "react";
import "./question.scss";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => {
      return { open: !state.open };
    });
  }

  render() {
    const { q, a } = this.props;
    return (
      <>
        <button onClick={this.handleClick} className="question-box">
          <p className="question">{q}</p>
          <span className="answer-btn">+</span>
        </button>
        <div className={`answer ${this.state.open ? "" : "closed"}`}>
          <span>{a}</span>
        </div>
      </>
    );
  }
}

export default Question;
