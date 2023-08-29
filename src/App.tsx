import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <div>
        <h1>Main App</h1>
        <Timer initialTime={5} />
      </div>
    </>
  );
}

export default App;
