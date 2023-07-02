import { useState } from "react";
import "./App.css";
import InstrumentKeyBoard from "./components/instrumentKeyBoard/instrumentKeyBoard";

function App() {
  const firstSoundsGroup = [
    {
      keyCode: 81,
      key: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      key: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      key: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      key: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      key: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      key: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      key: "Z",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      key: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
  ];

  const secondSoundsGroup = [
    {
      keyCode: 81,
      key: "Q",
      id: "Chord-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      keyCode: 87,
      key: "W",
      id: "Chord-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      keyCode: 69,
      key: "E",
      id: "Chord-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      keyCode: 65,
      key: "A",
      id: "Shaker",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      keyCode: 83,
      key: "S",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      keyCode: 68,
      key: "D",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      keyCode: 90,
      key: "Z",
      id: "Punchy-Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      keyCode: 88,
      key: "X",
      id: "Side-Stick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      keyCode: 67,
      key: "C",
      id: "Snare",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ];

  const soundsGroup = {
    heaterKit: firstSoundsGroup,
    smoothPianoKit: secondSoundsGroup
  }

  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(1);
  const [soundName, setSoundName] = useState("");
  const [soundType, setSoundType] = useState("heaterKit");
  const [sounds, setSounds] = useState(soundsGroup[soundType]);

  const styleActiveKey = (key) => {
    key.parentElement.style.backgroundColor = "#000000";
    key.parentElement.style.color = "#ffffff";
  };

  const deActivatedKey = (audio) => {
    audio.parentElement.style.backgroundColor = "#ffffff";
    audio.parentElement.style.color = "#000000";
  };

  const deactivateAudio = (audio) => {
    setTimeout(() => {
      audio.parentElement.style.backgroundColor = "#ffffff";
      audio.parentElement.style.color = "#000000";
    }, 300);
  };

  const play = (key, sound) => {
    setSoundName(sound);
    const audio = document.getElementById(key);
    styleActiveKey(audio);
    audio.currentTime = 0;
    audio.play();
    deactivateAudio(audio);
  };

  const stop = () => {
    setPower(!power);
  };

  const changeSoundGroup = () => {
    setSoundName("");
    if (soundType === "heaterKit") {
      setSoundType("smoothPianoKit");
      setSounds(soundsGroup.smoothPianoKit);
    } else {
      setSoundType("heaterKit");
      setSounds(soundsGroup.heaterKit);
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const setKeyVolume = () => {
    const audioes = sounds.map((sound) => document.getElementById(sound.key));
    audioes.forEach((audio) => {
      if (audio) {
        audio.volume = volume;
      }
    });
  };

  return (
    <>
      <div id="drum-machine" className="container">
        <p id="display">DISPLAY</p>
        <div className="controls-container">
          <div className="control">
            <p>Power</p>
            <div className="select">
              <div className="inner"></div>
            </div>
          </div>
          <div className="volume-slider">
            <input
              max="1"
              min="0"
              step="0.01"
              type="range"
              value="0.48"
            ></input>
          </div>
          <div className="control">
            <p>Bank</p>
            <div className="select">
              <div className="inner"></div>
            </div>
          </div>
        </div>
        <div className="pad-bank">
          <InstrumentKeyBoard
            sounds={sounds}
            play={play}
            power={power}
            deactivateAudio={deactivateAudio}
          />
          {/* <div id="Heater-1" className="drum-pad">
            <audio
              className="clip"
              id="Q"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            ></audio>
            Q
          </div>
          <div id="Heater-2" className="drum-pad">
            <audio
              className="clip"
              id="W"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            ></audio>
            W
          </div>
          <div id="Heater-3" className="drum-pad">
            <audio
              className="clip"
              id="E"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            ></audio>
            E
          </div>
          <div id="Heater-4" className="drum-pad">
            <audio
              className="clip"
              id="A"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            ></audio>
            A
          </div>
          <div id="Clap" className="drum-pad">
            <audio
              className="clip"
              id="S"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            ></audio>
            S
          </div>
          <div id="Open-HH" className="drum-pad">
            <audio
              className="clip"
              id="D"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            ></audio>
            D
          </div>
          <div id="Kick-n'-Hat" className="drum-pad">
            <audio
              className="clip"
              id="Z"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            ></audio>
            Z
          </div>
          <div id="Kick" className="drum-pad">
            <audio
              className="clip"
              id="X"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            ></audio>
            X
          </div>
          <div id="Closed-HH" className="drum-pad">
            <audio
              className="clip"
              id="C"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            ></audio>
            C
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
