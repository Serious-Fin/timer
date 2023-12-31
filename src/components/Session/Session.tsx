import PeriodCalculator from "../../helpers/PeriodCalculator";
import { useState, useEffect } from "react";
import TimerFormat from "../../helpers/TimerFormat";
import { Dispatch, SetStateAction } from "react";
import styles from "./Session.module.css";

interface SessionProps {
  timeInSeconds: number;
  setActiveSession: Dispatch<SetStateAction<boolean>>;
}

export default function Session({
  timeInSeconds,
  setActiveSession,
}: SessionProps) {
  const [chunkIndex, setChunkIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const timetable: number[] = PeriodCalculator(timeInSeconds);

  // function to pause the timer
  function handlePause() {
    setPaused(!paused);
  }

  // Handle session end when timer ends
  const handleSessionEnd = () => {
    setTimeout(() => {
      setActiveSession(false);
    }, 500);
  };

  // Cancel session manually
  const cancelSession = () => {
    setActiveSession(false);
  };

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
          console.log("Session is over");
          handleSessionEnd();
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
    <div key={chunkIndex} className={styles.container}>
      <p className={styles.timer}>{timeString}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handlePause}>
          {paused ? "Resume" : "Pause"}
        </button>
        <button className={styles.button} onClick={cancelSession}>
          Cancel
        </button>
      </div>
    </div>
  );
}
