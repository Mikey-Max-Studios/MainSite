import React from "react";
import ReactDOM from "react-dom";
import Animated from "react-native";

import "./styles.css";

var rotated = false;

class DemoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  rotatorBaby() {
    var deg = rotated ? 0 : 66;
    var pic = document.getElementById("image");
    //pic.src = '';
    //alert(pic.src);
    //console.log("Hello!");
    pic.style.webkitTransform = "rotate(" + deg + "deg)";
    //pic.style.mozTransform = "rotate(" + deg + "deg)";
    //pic.style.msTransform = "rotate(" + deg + "deg)";
    //pic.style.oTransform = "rotate(" + deg + "deg)";
    //pic.style.transform = "rotate(" + deg + "deg)";

    rotated = !rotated;
  }

  render() {
    return (
      <div className="App">
        <img
          id="image"
          alt="logo"
          src="MMC_Logo2.png"
          onClick={e => this.rotatorBaby(e)}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<DemoApp />, rootElement);
