import TimerUI from "./components/TimerUI/TimerUI";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>WireTimer</h1>
        <TimerUI />
      </div>
    </>
  );
}

export default App;
