import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <body>
          <div id="wrapper">
            <input
              type="checkbox"
              id="menu"
              name="menu"
              class="menu-checkbox"
            />
            <div className="menu">
              <label className="menu-toggle" for="menu">
                <span>Toggle</span>
              </label>
              <ul>
                <li>
                  <div className="logo-container">
                    <i className="fas fa-ticket-alt" id="ticket"></i>
                  </div>
                </li>
                <li>
                  <label>Login</label>
                  <input type="checkbox" className="menu-checkbox" />
                </li>
                <li>
                  <label>Events</label>
                  <input type="checkbox" className="menu-checkbox" />
                </li>
                <li>
                  <label>Profile</label>
                  <input type="checkbox" className="menu-checkbox" />
                </li>
                <li>
                  <label>Create Event</label>
                  <input type="checkbox" className="menu-checkbox" />
                </li>
              </ul>
            </div>
            <div className="titlebar">
              <i className="fas fa-ticket-alt ticketTitle"></i>
              Eventzilla
            </div>
          </div>
        </body>
      </nav>
    );
  }
}

export default Nav;
