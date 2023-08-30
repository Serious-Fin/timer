import "./App.css";
import Timer from "./components/Timer";
import TimeInput from "./components/TimeInput";
import PeriodCalculator from "./helpers/PeriodCalculator";

function App() {
  const timetable = PeriodCalculator(1800);
  return (
    <>
      <div>
        <h1>Main App</h1>
        <hr />
        <TimeInput />
        <hr />
        <Timer initialTime={5} />
        <hr />
        {console.log(timetable)}
      </div>
    </>
  );
}

export default App;
