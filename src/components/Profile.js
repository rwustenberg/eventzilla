import React from "react";
import Nav from "./Nav";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="form-info">
          <div className="group">
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div className="user" placeholder="">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
        </div>
        <div className="eventGrid"></div>
        <div className="eventsICreated">
          <div className="group">
            <label>Event Title</label>
            <label>Tickets Sold</label>
            <label>Tickets Remaining</label>
            <label>Revenue to Date</label>
          </div>
        </div>
        <Nav />
      </div>
    );
  }
}

export default Profile;
