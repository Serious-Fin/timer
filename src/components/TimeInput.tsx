import InputLogic from "../hooks/InputLogic";

export default function TimeInput() {
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

  return (
    <div>
      <h1>INPUT FIELD</h1>
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
    </div>
  );
}
