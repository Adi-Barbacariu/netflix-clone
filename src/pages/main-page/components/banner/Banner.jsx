import React, { Component } from "react";
import fetch from "../../fetch";
import urls from "../../urls";
import "./banner.scss";
import ArrowIcon from "../../../../assets/img/arrowBlack.png";
import InfoIcon from "../../../../assets/img/information.png";

export default class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = { data: null };
  }

  async componentDidMount() {
    const data = await fetch(urls.fetchPopularToday);
    const movie = data.results[0];

    this.setState({ data: movie });
  }

  render() {
    const { data } = this.state;

    let bannerStyle = {};

    if (data) {
      bannerStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${data.backdrop_path}")`,
      };
    }

    return (
      <div className="banner" style={bannerStyle}>
        <div className="banner__shadow"></div>
        <div className="banner__content">
          <h2 className="banner__title">{data ? data.title : ""}</h2>
          <p className="banner__desc">{data ? data.overview : ""}</p>
          <div className="banner__btns">
            <button className="btn-play">
              <img src={ArrowIcon} alt="play" /> Redare
            </button>
            <button className="btn-info">
              <img src={InfoIcon} alt="info" /> Mai multe informatii
            </button>
          </div>
        </div>
      </div>
    );
  }
}
