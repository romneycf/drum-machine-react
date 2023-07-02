import "./instrumentKeyBoard.module.css";
import InstrumentKey from "../instrumentKey/instrumentKey";

export default function InstrumentKeyBoard({
  sounds,
  play,
  power,
  deactivateAudio,
}: {
  sounds: any;
  play: any;
  power: any;
  deactivateAudio: any;
}) {
  return (
    <div className="keyboard">
      {power
        ? sounds.map((sound: any) => (
            <InstrumentKey
              sound={sound}
              play={play}
              deactivateAudio={deactivateAudio}
            />
          ))
        : sounds.map((sound: any) => (
            <InstrumentKey
              sound={{ ...sound, url: "#" }}
              play={play}
              deactivateAudio={deactivateAudio}
            />
          ))}
    </div>
  );
}
