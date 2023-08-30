import "./App.css";
import Timer from "./components/Timer";
import TimeInput from "./components/TimeInput";
import Session from "./components/Session";

function App() {
  return (
    <>
      <div>
        <h1>Main App</h1>
        <hr />
        <TimeInput />
        <hr />
        <Session timeInSeconds={1801} />
      </div>
    </>
  );
}

export default App;
