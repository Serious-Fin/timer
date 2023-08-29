import TimerFormat from "../helpers/TimerFormat";
import TimerLogic from "../hooks/TimerLogic";

interface TimerProps {
  initialTime: number;
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
