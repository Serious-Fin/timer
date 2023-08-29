export default function TimerFormat(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  const formattedHours = String(h).padStart(2, "0");
  const formattedMinutes = String(m).padStart(2, "0");
  const formattedSeconds = String(s).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
