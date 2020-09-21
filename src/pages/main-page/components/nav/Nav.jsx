import React from "react";
import "./nav.scss";
import Logo from "../../../../assets/img/580b57fcd9996e24bc43c529.png";
import SearchIcon from "../../../../assets/img/search (3).png";
import GiftIcon from "../../../../assets/img/gift.png";
import BellIcon from "../../../../assets/img/bell.png";
import AccountIcon from "../../../../assets/img/account.png";
import Arrow from "../../../../assets/img/arrowWhite.png";

class Nav extends React.Component {
  state = { transparent: true, inputOpened: false };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        this.setState({ transparent: false });
      } else {
        this.setState({ transparent: true });
      }
    });

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("nav__input")) {
        // do nothing
      } else if (e.target.className !== "nav__search-icon") {
        this.setState({ inputOpened: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  handleSearch = () => {
    this.setState((state) => {
      return {
        inputOpened: !state.inputOpened,
      };
    });
  };

  render() {
    const { transparent, inputOpened } = this.state;

    return (
      <div className={`nav ${transparent ? "" : "nav--black"}`}>
        <div className="nav__container">
          <img src={Logo} alt="netflix logo" className="nav__logo" />
          <a href="/#" className="nav__link">
            Pagina de pornire
          </a>
          <a href="/#" className="nav__link">
            Seriale
          </a>
          <a href="/#" className="nav__link">
            Filme
          </a>
          <a href="/#" className="nav__link">
            Cele mai recente
          </a>
          <a href="/#" className="nav__link">
            Lista mea
          </a>
        </div>

        <div className="nav__container nav__container--right">
          <div className="nav__search">
            <img
              onClick={this.handleSearch}
              src={SearchIcon}
              alt="search"
              className="nav__search-icon"
            />
            <input
              type="text"
              name="search"
              className={`nav__input ${
                inputOpened ? "" : "nav__input--closed"
              }`}
              placeholder="Titluri, persoane, genuri"
            />
          </div>

          <img src={GiftIcon} alt="gift" className="nav__gift" />

          <img src={BellIcon} alt="notifications" className="nav__notif" />

          <div className="nav__account">
            <img src={AccountIcon} alt="account" />
            <img src={Arrow} alt="arrow" style={{ width: "10px" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
