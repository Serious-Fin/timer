import InputLogic from "../hooks/InputLogic";
import { useState } from "react";
import Session from "./Session";

export default function TimerUI() {
  const {
    hours,
    minutes,
    seconds,
    handleHoursChange,
    handleMinutesChange,
    handleSecondsChange,
    normalizeHours,
    normalizeMinutes,
    normalizeSeconds,
  } = InputLogic();

  const [activeSession, setActiveSession] = useState(false);
  const [timeInSeconds, setTimeInSeconds] = useState(0);

  const handleActiveSession = () => {
    const hoursAsNumber = Number(hours);
    const minutesAsNumber = Number(minutes);
    const secondsAsNumber = Number(seconds);

    setTimeInSeconds(
      hoursAsNumber * 3600 + minutesAsNumber * 60 + secondsAsNumber
    );
    setActiveSession(!activeSession);
  };

  return (
    <div>
      {activeSession && (
        <Session
          timeInSeconds={timeInSeconds}
          setActiveSession={setActiveSession}
        />
      )}

      {!activeSession && (
        <div>
          <h1>INPUT FIELD</h1>

          <form onSubmit={handleActiveSession}>
            <input
              type="number"
              value={hours}
              onChange={handleHoursChange}
              onBlur={normalizeHours}
            />
            <input
              type="number"
              value={minutes}
              onChange={handleMinutesChange}
              onBlur={normalizeMinutes}
            />
            <input
              type="number"
              value={seconds}
              onChange={handleSecondsChange}
              onBlur={normalizeSeconds}
            />
            <button type="submit">Start Session</button>
          </form>
        </div>
      )}
    </div>
  );
}
