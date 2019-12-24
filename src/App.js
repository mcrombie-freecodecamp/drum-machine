import React from 'react';
import logo from './logo.svg';
import './App.css';

class DrumMachine extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          on: true,
          triggered: "No sound made yet"
      }
      this.handleClick = this.handleClick.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleClick(event) {
      console.log(event.target.id)
      switch (event.target.id) {
          case "Heater-1":
              document.getElementById("Q").play();
              break;
          case "Heater-2":
              document.getElementById("W").play();
              break;
          case "Heater-3":
              document.getElementById("E").play();
              break;
          case "Heater-4":
              document.getElementById("A").play();
              break;
          case "Clap":
              document.getElementById("S").play();
              break;
          case "Open-HH":
              document.getElementById("D").play();
              break;
          case "Kick-hat":
              document.getElementById("Z").play();
              break;
          case "Kick":
              document.getElementById("X").play();
              break;
          case "Closed-HH":
              document.getElementById("C").play();
              break;
          default:
              console.log("Shucks")
      }
      this.setState({
          triggered: event.target.id
      })

  }

  handleKeyPress(event) {
      switch (event.keyCode) {
          case 81:
              document.getElementById("Heater-1").click();
              break;
          case 87:
              document.getElementById("Heater-2").click();
              break;
          case 69:
              document.getElementById("Heater-3").click();
              break;
          case 65:
              document.getElementById("Heater-4").click();
              break;
          case 83:
              document.getElementById("Clap").click();
              break;
          case 68:
              document.getElementById("Open-HH").click();
              break;
          case 90:
              document.getElementById("Kick-hat").click();
              break;
          case 88:
              document.getElementById("Kick").click();
              break;
          case 67:
              document.getElementById("Closed-HH").click();
              break;
      }
  }

  render() {
      return (
          <div id="container">
                      <div class="text-display-container">
          <h1 id="title" class="text-center">Drum Machine</h1>
          <div id="display">{this.state.triggered}</div>
          <div id="description">This is the drum machine project from <a
                  href="https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-drum-machine">free
                  code camp</a>. 
                        </div>
      </div>
<div class="pad-container">
        <div id="Heater-1" class="drum-pad" onClick={this.handleClick}>
          <div class="pad-text">
          Q
          </div>
          <audio class="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" controls
              autoplay></audio>
      </div>
      <div id="Heater-2" class="drum-pad" onClick={this.handleClick}>
        <div class="pad-text">
          W
          </div>
          <audio class="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" controls
              autoplay></audio>
      </div>

      <div id="Heater-3" class="drum-pad" onClick={this.handleClick}>
        <div class="pad-text">
          E
          </div>
          <audio class="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" controls
              autoplay></audio>
      </div>
      <div id="Heater-4" class="drum-pad" onClick={this.handleClick}>
        <div class="pad-text">
          A
          </div>
          <audio class="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" controls
              autoplay></audio>
      </div>
      <div id="Clap" class="drum-pad" onClick={this.handleClick}>
        <div class="pad-text">
          S
          </div>
          <audio class="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" controls
              autoplay></audio>
      </div>
      <div id="Open-HH" class="drum-pad" onClick={this.handleClick}>
        <div class="pad-text">
          D
          </div>
          <audio class="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" controls
              autoplay></audio>
      </div>
      <div id="Kick-hat" class="drum-pad" onClick={this.handleClick}>
        <div class="pad-text">
          Z
          </div>
          <audio class="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" controls
              autoplay></audio>
      </div>
      <div id="Kick" class="drum-pad" onClick={this.handleClick}>
        <div class="pad-text">
          X
          </div>
          <audio class="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" controls
              autoplay></audio>
      </div>
      <div id="Closed-HH" class="drum-pad" onClick={this.handleClick}>
        <div class="pad-text">
          C
          </div>
          <audio class="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" controls
              autoplay></audio>
      </div>
          </div>
          </div>
      )
  }
}

// ReactDOM.render(<DrumMachine />, document.getElementById("drum-machine"));

export default DrumMachine;
