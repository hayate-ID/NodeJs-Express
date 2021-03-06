import React, { Component } from "react";
class Slide extends Component {
  render() {
    const slide = this.props.slide;
    const type = slide.type ? "title" : "...";

    return <h1> {slide.title} </h1>;
  }
}
export default Slide;
