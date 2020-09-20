import React from "react";
import ReactDOM from "react-dom";
import WelcomePage from "./pages/welcome-page/WelcomePage";
import "./index.scss";

function App() {
  return <WelcomePage />;
}

ReactDOM.render(<App />, document.querySelector("#root"));
