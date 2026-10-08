import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const styles = {
    app: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      background:
        "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
      fontFamily: "Arial, sans-serif",
    },

    container: {
      width: "100%",
      maxWidth: "600px",
      padding: "40px",
      textAlign: "center",
      background: "#ffffff",
      borderRadius: "20px",
      boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
    },

    badge: {
      display: "inline-block",
      padding: "8px 16px",
      borderRadius: "20px",
      background: "#dbeafe",
      color: "#2563eb",
      fontSize: "12px",
      fontWeight: "bold",
      letterSpacing: "1px",
    },

    title: {
      margin: "20px 0 10px",
      color: "#0f172a",
      fontSize: "38px",
    },

    description: {
      color: "#64748b",
      lineHeight: "1.6",
      fontSize: "16px",
    },

    status: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
      margin: "25px 0",
      color: "#16a34a",
      fontWeight: "bold",
    },

    dot: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#22c55e",
    },

    card: {
      padding: "25px",
      background: "#f8fafc",
      borderRadius: "15px",
      border: "1px solid #e2e8f0",
    },

    cardTitle: {
      color: "#334155",
      marginTop: 0,
    },

    counter: {
      fontSize: "45px",
      fontWeight: "bold",
      color: "#2563eb",
      margin: "15px 0",
    },

    button: {
      padding: "12px 22px",
      margin: "5px",
      border: "none",
      borderRadius: "8px",
      background: "#2563eb",
      color: "#ffffff",
      fontSize: "15px",
      fontWeight: "bold",
      cursor: "pointer",
    },

    resetButton: {
      background: "#64748b",
    },

    features: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "30px",
      paddingTop: "25px",
      borderTop: "1px solid #e2e8f0",
    },

    feature: {
      color: "#475569",
      fontWeight: "bold",
    },

    check: {
      color: "#16a34a",
      fontSize: "20px",
      marginRight: "5px",
    },

    footer: {
      marginTop: "25px",
      color: "#94a3b8",
      fontSize: "13px",
    },
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <div style={styles.badge}>CI/CD DEMO</div>

        <h1 style={styles.title}>React CI Pipeline</h1>

        <p style={styles.description}>
          This is a simple React application created to test and
          demonstrate a Continuous Integration pipeline.
        </p>

        <div style={styles.status}>
          <span style={styles.dot}></span>
          Application is running
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Test Component</h2>

          <div style={styles.counter}>{count}</div>

          <button
            style={styles.button}
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>

          <button
            style={{
              ...styles.button,
              ...styles.resetButton,
            }}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>

        <div style={styles.features}>
          <div style={styles.feature}>
            <span style={styles.check}>✓</span>
            React
          </div>

          <div style={styles.feature}>
            <span style={styles.check}>✓</span>
            CI Ready
          </div>

          <div style={styles.feature}>
            <span style={styles.check}>✓</span>
            Build Ready
          </div>
        </div>

        <div style={styles.footer}>
          Demo project for Continuous Integration
        </div>
      </div>
    </div>
  );
}

export default App;