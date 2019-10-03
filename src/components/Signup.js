import React from "react";
import Nav from "./Nav";
import Form from "./Form";
import backgroundDefault from "../images/background-default.jpg";

class Signup extends React.Component {
  state = {};

  render() {
    return (
      <div
        className="b-ground"
        style={{
          backgroundImage: `url(${backgroundDefault})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "120vh"
        }}
      >
        <div
          className="page-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr "
          }}
        >
          <Nav />
          <Form />
        </div>
      </div>
    );
  }
}

export default Signup;
