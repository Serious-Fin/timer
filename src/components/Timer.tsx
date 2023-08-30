import TimerFormat from "../helpers/TimerFormat";
import { useEffect, useState } from "react";

interface TimerProps {
  initialTime: number;
  paused: boolean;
}

function Timer({ initialTime, paused }: TimerProps) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!paused && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          }

          clearInterval(timer);
          return prevTime;
        });
      }, 10);

      return () => {
        clearInterval(timer);
      };
    }

    if (paused) {
      clearInterval(timer!);
    }

    return undefined;
  }, [paused, time]);

  const timeString = TimerFormat(time);

  return (
    <div>
      <h2>SkillTimer</h2>
      <p>{timeString}</p>
    </div>
  );
}

export default Timer;
