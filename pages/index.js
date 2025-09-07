// pages/index.js
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");
  const [env, setEnv] = useState("");
  const [pingResult, setPingResult] = useState(null);

  useEffect(() => {
    // show build / runtime info (useful to verify deployment)
    setTime(new Date().toLocaleString());
    setEnv(process.env.NODE_ENV || "unknown");
  }, []);

  async function handlePing() {
    try {
      // simple client-side fetch to root (you can change to any API route)
      const res = await fetch("/");
      setPingResult(`OK — status ${res.status}`);
    } catch (err) {
      setPingResult(`Error: ${err.message}`);
    }
  }

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.h1}>🚀 Hello from Next.js on Azure cloud</h1>

        <div style={styles.row}>
          <div style={styles.box}>
            <strong>Build / Runtime:</strong>
            <div style={styles.small}>Time: {time}</div>
            <div style={styles.small}>NODE_ENV: {env}</div>
          </div>

          <div style={styles.box}>
            <strong>Site status</strong>
            <div style={styles.small}>
              Try the button below to test a client request from the browser.
            </div>
            <button style={styles.button} onClick={handlePing}>
              Ping site
            </button>
            {pingResult && <div style={styles.ping}>{pingResult}</div>}
          </div>
        </div>

        <footer style={styles.footer}>
          <small>
            Deployment: <code>main</code> — App Service: <code>nextjs-app-us</code>
          </small>
        </footer>
      </div>
    </main>
  );
}

const styles = {
  page: {
    fontFamily: "Inter, Roboto, -apple-system, system-ui, 'Segoe UI', Arial",
    background: "#0f172a",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    color: "#e6eef8",
  },
  card: {
    maxWidth: 900,
    width: "100%",
    background: "#0b1220",
    borderRadius: 12,
    padding: "2rem",
    boxShadow: "0 8px 24px rgba(2,6,23,0.6)",
    border: "1px solid rgba(255,255,255,0.03)",
  },
  h1: { margin: 0, fontSize: "1.9rem" },
  lead: { marginTop: "0.6rem", color: "#bcd4ee" },
  row: {
    display: "flex",
    gap: "1rem",
    marginTop: "1.4rem",
    flexWrap: "wrap",
  },
  box: {
    flex: "1 1 260px",
    background: "#071029",
    padding: "1rem",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.02)",
  },
  small: { marginTop: "0.5rem", color: "#9fb6d9", fontSize: "0.9rem" },
  button: {
    marginTop: "0.8rem",
    padding: "0.6rem 0.9rem",
    fontSize: "0.95rem",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    background: "#2563eb",
    color: "white",
  },
  ping: { marginTop: "0.6rem", color: "#cfe9b7" },
  footer: { marginTop: "1.6rem", color: "#7f9bb7" },
};
