import React from "react";
import Nav from "./Nav";
import eventImage from "../images/eventImage-default.jpg";

class Event extends React.Component {
  state = {};
  render() {
    return (
      <div className="backgroundGrid">
        <Nav />
        <div
          className="eventImage"
          style={{
            backgroundImage: `url(${eventImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "50vw",
            height: "50vh",
            minmax: "250px auto",
            overflow: "visible"
          }}
        ></div>

        <div className="eventInfo">
          <div className="logo-box">
            <i className="fas fa-ticket-alt ticket-logo"></i>
          </div>
          <h3>Organizer Presents:</h3>
          <h1 className="title">Event Name</h1>
          <h3>
            <i
              className="far fa-calendar-check"
              style={{ color: "#EF5A00" }}
            ></i>{" "}
            Date:{" "}
          </h3>
          <h3>
            <i className="fas fa-dollar-sign" style={{ color: "#EF5A00" }}>
              {" "}
            </i>{" "}
            Price:{" "}
          </h3>
          <h3>
            <i className="fas fa-map-marker-alt" style={{ color: "#EF5A00" }}>
              {" "}
            </i>{" "}
            Venue:{" "}
          </h3>
          <h3>
            <i className="fas fa-clock" style={{ color: "#EF5A00" }}></i> Doors:{" "}
          </h3>
          <h3>
            <i
              className="fas fa-map-marker-alt"
              style={{ color: "#EF5A00" }}
            ></i>
            {"  "}City:{" "}
          </h3>
        </div>
        <div className="description">
          <p>
            <h3> Description: </h3>
            Description about event Description about event Description about
            event Description about event Description about event Description
            about event Description about event Description about event
            Description about event Description about event Description about
            event Description about event Description about event{" "}
          </p>
        </div>

        <button className="eventButton" onClick="/CheckoutForm">
          Purchase tickets
        </button>
      </div>
    );
  }
}

export default Event;
