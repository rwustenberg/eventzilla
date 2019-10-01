import React from "react";
import { Link } from "react-router-dom";
import cardDefault from "../images/card-default.jpg";

class card extends React.Component {
  render() {
    return (
      <card>
        <div className="card-container">
          <div className="flipper">
            <div
              className="front"
              style={{
                background: `url(${cardDefault})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="wrap">
                <h2>
                  <strong>Event Name</strong>
                </h2>
                <small className="venue">
                  <i
                    className="fas fa-map-marker-alt"
                    style={{ color: "#EF5A00" }}
                  ></i>
                  Venue
                </small>
              </div>
            </div>
            <div className="back">
              {/* <div className="logo-wrapper">
                <i className="fas fa-ticket-alt" ></i>
              </div> */}
              <div className="head-wrap">
                <h1>Event Name</h1>
              </div>
              <p>
                <i
                  className="fas fa-map-marker-alt"
                  style={{ color: "#EF5A00" }}
                ></i>{" "}
                Venue
              </p>
              <p>
                <i
                  className="fas fa-map-marker-alt"
                  style={{ color: "#EF5A00" }}
                ></i>{" "}
                City
              </p>
              <p>
                <i
                  className="far fa-calendar-check"
                  style={{ color: "#EF5A00" }}
                ></i>{" "}
                Date:
              </p>
              <p>
                <i
                  className="fas fa-dollar-sign"
                  style={{ color: "#EF5A00" }}
                ></i>{" "}
                Price
              </p>
              <p>
                <i className="fas fa-clock" style={{ color: "#EF5A00" }}></i>{" "}
                Doors
              </p>
              <p>
                <small>Catagory</small>
              </p>
              <Link to="#">
                <button type="button" className="card-button">
                  <strong>Go To Event</strong>
                </button>
              </Link>
            </div>
          </div>
        </div>{" "}
      </card>
    );
  }
}

export default card;
