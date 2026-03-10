import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>React Counter App</h1>

        <h2 style={styles.counter}>{count}</h2>

        <div style={styles.buttons}>
          <button style={styles.btnInc} onClick={increment}>
            Increment
          </button>

          <button style={styles.btnDec} onClick={decrement}>
            Decrement
          </button>

          <button style={styles.btnReset} onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
  },
  card: {
    background: "black",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
  },
  title: {
    marginBottom: "20px",
  },
  counter: {
    fontSize: "50px",
    marginBottom: "20px",
  },
  buttons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  btnInc: {
    padding: "10px 20px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  btnDec: {
    padding: "10px 20px",
    background: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  btnReset: {
    padding: "10px 20px",
    background: "#2196F3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Counter;