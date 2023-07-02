import { useEffect } from "react";
import "./instrumentKey.module.css";

export interface InstrumentKeyPropsInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  play: any;
  deactivateAudio: any;
  sound: { id: any; key: any; url: any; keyCode: any };
}

export default function InstrumentKey({
  play,
  deactivateAudio,
  sound
}: InstrumentKeyPropsInterface) {

  const handleKeydown = (e: any) => {
    if (sound.keyCode === e.keyCode) {
      const audio = document.getElementById(sound.key);
      play(sound.key, sound.id);
      deactivateAudio(audio);
    }
  };

  useEffect(() => {
      document.addEventListener('keydown', handleKeydown);
  }, [])

  return (
    <button value="test" id={sound.keyCode} className="drum-pad" onClick={() => play(sound.key, sound.id)}>
    <audio className="clip" src={sound.url} id={sound.key} />
    {sound.key}
    </button>
  );
}
