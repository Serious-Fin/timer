interface PeriodCalculatorProps {
  totalTimeInSeconds: number;
}

export default function PeriodCalculator({
  totalTimeInSeconds,
}: PeriodCalculatorProps) {
  const periods = Math.floor(totalTimeInSeconds / 1500);
  const overtime = Math.floor((totalTimeInSeconds % 1500) / periods);
  const addedTime = overtime > 180 ? 0 : overtime;

  const periodTimes = [];
  periodTimes.push(1500);

  for (let i = 0; i < periods; i++) {
    periodTimes.push(300);
    periodTimes.push(1500 + addedTime);
  }

  if (addedTime === 0 && overtime !== 0) {
    periodTimes.push(300);
    periodTimes.push(overtime);
  }

  return periodTimes;
}
