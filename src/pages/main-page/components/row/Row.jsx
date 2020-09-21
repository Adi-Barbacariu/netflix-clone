import React from "react";
import fetch from "../../fetch";
import "./row.scss";

class Row extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: false };
  }

  async componentDidMount() {
    const data = await fetch(this.props.fetchUrl);

    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    const { largeRow } = this.props;

    const imgSrc = largeRow ? "poster_path" : "backdrop_path";

    return (
      <div className="row">
        <h2 className="row__title">{this.props.name}</h2>
        <div className="row__movies">
          {data
            ? data.results.map((current) => {
                return (
                  <img
                    key={current.id}
                    src={`https://image.tmdb.org/t/p/w200/${current[imgSrc]}`}
                    alt={current.title}
                  />
                );
              })
            : ""}
        </div>
      </div>
    );
  }
}

export default Row;
