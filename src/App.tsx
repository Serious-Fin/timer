import "./App.css";
import Timer from "./components/Timer";
import TimeInput from "./components/TimeInput";

function App() {
  return (
    <>
      <div>
        <h1>Main App</h1>
        <hr />
        <TimeInput />
        <hr />
        <Timer initialTime={5} />
      </div>
    </>
  );
}

export default App;
