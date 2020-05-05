import React, { Component } from "react";
import Countdown from "react-countdown-now";
import { IconContext } from "react-icons";
import { RiHomeHeartLine } from "react-icons/ri";
import "./App.css";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {days} Days {hours} Hours:{minutes} Minutes:{seconds} Seconds
      </span>
    );
  }
};

class App extends Component {
  render() {
    const end = Date.parse("2020-05-30T00:00:00");
    return (
      <div className="App">
        <header className="App-header">
          <IconContext.Provider value={{ size: "3em" }}>
            <div>
              <RiHomeHeartLine />
            </div>
          </IconContext.Provider>
          <h1>What if life is not of xdays ?</h1>
          <Countdown date={end} renderer={renderer} />
        </header>
      </div>
    );
  }
}

export default App;
