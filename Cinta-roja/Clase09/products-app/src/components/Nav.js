import React, { Component } from "react";
import Button from "./Button";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: "Loading..."
    };
  }

  componentWillMount() {
    if (!document.getElementById("root")) {
      alert("No existe documento");
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ mensaje: "Hola mundo" });
    }, 3000);
  }
  
  render() {
    return (
      <div>
        <div>
          <h1>{this.state.mensaje}</h1>
          <Button pokemonName="pikachu" />
        </div>
      </div>
    );
  }
}
export default Nav;
