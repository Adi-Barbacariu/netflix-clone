import React from "react";
import ReactDOM from "react-dom";
import WelcomePage from "./pages/welcome-page/WelcomePage";
import SignInPage from "./pages/sign-in-or-sign-up/SignInPage";
import MainPage from "./pages/main-page/MainPage";
import "./index.scss";

function App() {
  return <MainPage />;
}

ReactDOM.render(<App />, document.querySelector("#root"));
