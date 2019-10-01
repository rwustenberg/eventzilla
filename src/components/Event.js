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
          <div className="eventInfo">
            <h1>Event Name</h1>
            <h3>Date: </h3>
            <h3>Venue: </h3>
            <h3>Doors:</h3>
            <h3>Price</h3>
            <h4>City:</h4>
            <h4>Organizer</h4>
          </div>
          <p>
            <strong> Description </strong>
            Description about event Description about event Description about
            event Description about event Description about event Description
            about event Description about event Description about event
            Description about event Description about event Description about
            event Description about event Description about event{" "}
          </p>
          <button className="eventButton" onClick="/CheckoutForm">
            Purchase tickets
          </button>
        </div>
        <Nav />
      </div>
    );
  }
}

export default Event;
