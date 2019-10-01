import React from "react";
import Nav from "./Nav";
import eventImage from "../images/eventImage-default.jpg";

class Event extends React.Component {
  state = {};
  render() {
    return (
      <div className="backgroundGrid">
        <div className="eventCard">
          <div
            className="eventImage"
            style={{
              backgroundImage: `url(${eventImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "50vw",
              height: "50vh"
            }}
          ></div>
          <h1>Event Name</h1>
          <h3>Date</h3>
          <h3>Venue</h3>
          <h3>Doors</h3>
          <h3>Price</h3>
          <h3>City</h3>
          <h3>Organizer</h3>
          <p>Description about event</p>
          <button></button>
        </div>
        <Nav />
      </div>
    );
  }
}

export default Event;
