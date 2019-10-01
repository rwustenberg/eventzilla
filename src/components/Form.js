import React from "react";
import { Link } from "react-router-dom";

class form extends React.Component {
  render() {
    return (
      <form>
        {" "}
        <div className="content">
          <div className="group logo3">
            <i
              className="fas fa-ticket-alt logo group logo3 ticket-form"
            ></i>

            <div className="form-info">
              <div className="group">
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </div>
              <div className="group" placeholder="">
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="group">
                <label>Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <div className="group">
                <label>City</label>
                <input type="text" placeholder="City" />
              </div>

              <button className="primary group logo3">
                <strong>Signup</strong>
              </button>
            </div>
            <p className="footer">
              Already have an account? <Link to="">Login</Link>
            </p>
          </div>
        </div>
      </form>
    );
  }
}

export default form;
