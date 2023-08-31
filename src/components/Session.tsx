import PeriodCalculator from "./../helpers/PeriodCalculator";
import { useState, useEffect } from "react";
import TimerFormat from "../helpers/TimerFormat";

interface SessionProps {
  timeInSeconds: number;
}

export default function Session({ timeInSeconds }: SessionProps) {
  const [chunkIndex, setChunkIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const timetable: number[] = PeriodCalculator(timeInSeconds);

  // function to pause the timer
  function handlePause() {
    setPaused(!paused);
  }

  // -----------vvvvvvvvv TIMER CODE vvvvvvvv-------------------
  const [time, setTime] = useState(timetable[chunkIndex]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!paused) {
      if (time > 0) {
        timer = setInterval(() => {
          setTime((prevTime) => {
            if (prevTime > 0) {
              return prevTime - 1;
            }

            clearInterval(timer);
            return prevTime;
          });
        }, 5);
      } else {
        setChunkIndex((prevIndex) => {
          if (prevIndex < timetable.length - 1) {
            setChunkIndex(prevIndex + 1);
            setTime(timetable[prevIndex + 1]);
            return prevIndex + 1;
          }
          return prevIndex;
        });
      }

      return () => {
        clearInterval(timer);
      };
    }

    return clearInterval(timer!);
  }, [paused, time, timetable]);

  const timeString = TimerFormat(time);

  // -----------^^^^^^^^ TIMER CODE ^^^^^^^^-------------------

  return (
    <div key={chunkIndex}>
      <p>{timeString}</p>
      <button onClick={handlePause}>{paused ? "Resume" : "Pause"}</button>
      <p>Current session index: {chunkIndex}</p>
    </div>
  );
}
