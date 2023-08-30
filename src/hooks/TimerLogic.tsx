import { useState, useEffect } from "react";

interface TimerProps {
  initialTime: number;
  paused: boolean;
}

export default function TimerLogic({ initialTime, paused }: TimerProps) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (paused) {
      return;
    }

    const timer = setInterval(() => {
      setTime((time) => time - 1);

      if (time - 1 === 0) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [paused, time]);

  return { time };
}
