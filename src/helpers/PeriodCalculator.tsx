export default function PeriodCalculator(totalTimeInSeconds: number) {
  const periods = Math.floor(totalTimeInSeconds / 1500);
  const overtime = Math.floor((totalTimeInSeconds % 1500) / periods);
  const addedTime = overtime > 180 ? 0 : overtime;

  const periodTimes = [];
  periodTimes.push(1200 + addedTime);

  for (let i = 1; i < periods; i++) {
    periodTimes.push(300);
    periodTimes.push(1200 + addedTime);
  }

  if (addedTime === 0 && overtime !== 0) {
    periodTimes.push(300);
    periodTimes.push(overtime);
  }

  return periodTimes;
}

// TODO: Fix a bug where time is 300 seconds less than set  because there is one less break than focus period
