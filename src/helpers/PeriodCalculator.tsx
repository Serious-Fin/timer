export default function PeriodCalculator(totalTimeInSeconds: number) {
  const timetable: number[] = [];

  if (totalTimeInSeconds <= 1800) {
    timetable.push(totalTimeInSeconds);
    return timetable;
  }

  const breaktime = Math.floor(totalTimeInSeconds * 0.16666667);
  const worktime = totalTimeInSeconds - breaktime;

  const workPeriods = Math.ceil(worktime / 1500);
  const breakPeriods = workPeriods - 1;

  const workPeriodTime = Math.floor(worktime / workPeriods);
  const breakPeriodTime = Math.floor(breaktime / breakPeriods);

  timetable.push(workPeriodTime);

  for (let i = 0; i < breakPeriods; i++) {
    timetable.push(breakPeriodTime);
    timetable.push(workPeriodTime);
  }

  return timetable;
}
