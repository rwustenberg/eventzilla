import React from "react";
import backgroundEvents from "../images/events-background.jpg";
import Card from "./Card";
import Nav from "./Nav";

class Events extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div
          className="backgroundEvents"
          style={{
            backgroundImage: `url(${backgroundEvents})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh"
          }}
        >
          <div className="cardGrid">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <Nav />
        </div>
      </>
    );
  }
}

export default Events;
