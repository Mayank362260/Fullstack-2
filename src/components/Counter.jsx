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
        <h1 style={styles.title}>React Counter</h1>
        <h2 style={styles.counter}>{count}</h2>

        <div style={styles.buttons}>
          <button style={styles.inc} onClick={increment}>Increment</button>
          <button style={styles.dec} onClick={decrement}>Decrement</button>
          <button style={styles.reset} onClick={reset}>Reset</button>
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
    background: "linear-gradient(135deg,#667eea,#764ba2)"
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  },
  title: {
    marginBottom: "20px"
  },
  counter: {
    fontSize: "50px",
    marginBottom: "20px"
  },
  buttons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center"
  },
  inc: {
    background: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer"
  },
  dec: {
    background: "#f44336",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer"
  },
  reset: {
    background: "#2196F3",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Counter;