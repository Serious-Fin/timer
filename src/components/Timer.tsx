import { useState, useEffect } from "react";

interface TimerProps {
  initialTime: number;
}

function TimerLogic({ initialTime }: TimerProps) {
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

function TimerFormat(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  const formattedHours = String(h).padStart(2, "0");
  const formattedMinutes = String(m).padStart(2, "0");
  const formattedSeconds = String(s).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function Timer({ initialTime }: TimerProps) {
  const { time, paused, handlePause, handleReset } = TimerLogic({
    initialTime,
  });

  const timeString = TimerFormat(time);

  return (
    <div>
      <h2>SkillTimer</h2>
      <p>{timeString}</p>
      <button onClick={handlePause}>{paused ? "Resume" : "Pause"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Timer;
