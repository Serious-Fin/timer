import { useState, useEffect } from "react";

interface TimerProps {
  initialTime: number;
}

export default function TimerLogic({ initialTime }: TimerProps) {
  const [time, setTime] = useState(initialTime);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const timer = setInterval(() => {
      setTime((time) => time - 1);

      if (time - 1 === 0) {
        setPaused(true);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [paused, time]);

  const handlePause = () => {
    if (time > 0) {
      setPaused(!paused);
    }
  };

  const handleReset = () => {
    setTime(initialTime);
    setPaused(true);
  };

  return { time, paused, handlePause, handleReset };
}
