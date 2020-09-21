import React from "react";
import Row from "./components/row/Row";
import urls from "./urls";
import Banner from "./components/banner/Banner";
import Nav from "./components/nav/Nav";
import Footer from "../welcome-page/components/footer/Footer";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />

        <Banner />

        <div className="rows">
          <Row name="Seriale" fetchUrl={urls.fetchSerial} />
          <Row name="Populare pe Netflix" fetchUrl={urls.fetchPopular} />
          <Row
            name="Titluri originale Netflix"
            fetchUrl={urls.fetchOriginal}
            largeRow
          />
          <Row name="Actiune si aventura" fetchUrl={urls.fetchAction} />
          <Row name="Comedii" fetchUrl={urls.fetchComedy} />
          <Row name="Filme Romantice" fetchUrl={urls.fetchRomance} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default MainPage;
