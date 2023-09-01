import InputLogic from "../../hooks/InputLogic";
import { useState } from "react";
import Session from "../Session/Session";
import styles from "./TimerUI.module.css";

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

  const handleActiveSession = (e: React.FormEvent) => {
    e.preventDefault();

    const hoursAsNumber = Number(hours);
    const minutesAsNumber = Number(minutes);
    const secondsAsNumber = Number(seconds);

    setTimeInSeconds(
      hoursAsNumber * 3600 + minutesAsNumber * 60 + secondsAsNumber
    );
    setActiveSession(true);
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
        <div className={styles.container}>
          <h1 className={styles.title}>INPUT FIELD</h1>

          <form onSubmit={handleActiveSession} className={styles.formContainer}>
            <div className={styles.inputContainer}>
              <input
                type="number"
                value={hours}
                onChange={handleHoursChange}
                onBlur={normalizeHours}
                className={styles.input}
                placeholder="hh"
              />
              <div className={styles.colonSeparator}>:</div>
              <input
                type="number"
                value={minutes}
                onChange={handleMinutesChange}
                onBlur={normalizeMinutes}
                className={styles.input}
                placeholder="mm"
              />
              <div className={styles.colonSeparator}>:</div>
              <input
                type="number"
                value={seconds}
                onChange={handleSecondsChange}
                onBlur={normalizeSeconds}
                className={styles.input}
                placeholder="ss"
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Start Session
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
