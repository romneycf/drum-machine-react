import './App.css'

function App() {
  
  return (
    <>
      <div id="drum-machine" className='container'>
        <p id="display">DISPLAY</p>
        <div className="controls-container">
          <div className="control">
            <p>Power</p>
            <div className="select">
              <div className="inner"></div>
            </div>
          </div>
          <div className="volume-slider">
            <input max="1" min="0" step="0.01" type="range" value="0.48"></input>
          </div>
          <div className="control">
            <p>Bank</p>
            <div className="select">
              <div className="inner"></div>
            </div>
          </div>
        </div>
        <div className="pad-bank">
          <div id="Heater-1" className="drum-pad">
            <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
            Q
          </div>
          <div id="Heater-2" className="drum-pad">
            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
            W
          </div>
          <div id="Heater-3" className="drum-pad">
            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
            E
          </div>
          <div id="Heater-4" className="drum-pad">
            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
            A
          </div>
          <div id="Clap" className="drum-pad">
            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
            S
          </div>
          <div id="Open-HH" className="drum-pad">
            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
            D
          </div>
          <div id="Kick-n'-Hat" className="drum-pad">
            <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
            Z
          </div>
          <div id="Kick" className="drum-pad">
            <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
            X
          </div>
          <div id="Closed-HH" className="drum-pad">
            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
            C
          </div>
        </div>
      </div>
    </>
  )
}

export default App
