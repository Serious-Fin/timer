import PeriodCalculator from "./../helpers/PeriodCalculator";
import Timer from "./Timer";
import { useState, useEffect } from "react";

interface SessionProps {
  timeInSeconds: number;
}

export default function Session({ timeInSeconds }: SessionProps) {
  const [chunkIndex, setChunkIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const timetable: number[] = PeriodCalculator(timeInSeconds);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!paused && chunkIndex < timetable.length) {
      timer = setInterval(() => {
        setChunkIndex((prevChunkIndex) => prevChunkIndex + 1);
      }, timetable[chunkIndex] * 10);

      return () => clearInterval(timer);
    }

    return undefined;
  }, [chunkIndex, paused, timetable]);

  // function to pause the timer
  function handlePause() {
    setPaused(!paused);
  }

  // Side effect to change the segment when previous one ends

  return (
    <div key={chunkIndex}>
      <Timer initialTime={timetable[chunkIndex]} paused={paused} />
      <button onClick={handlePause}>{paused ? "Resume" : "Pause"}</button>
      <p>Current session index: {chunkIndex}</p>
    </div>
  );
}
