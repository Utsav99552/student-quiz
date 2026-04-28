import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim() === "") {
      setError("⚠️ Please enter your name");
      return;
    }

    localStorage.setItem("student", name);
    navigate("/quiz");
  };

  return (
    <div className="container">
      {/* 🎓 Title */}
      <h1 style={{ fontSize: "32px" }}>🎓 Student Quiz App</h1>

      {/* 👋 Welcome */}
      <h3>Welcome! Enter your name to start</h3>

      {/* 🧾 Input */}
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError("");
        }}
      />

      {/* ❌ Error */}
      {error && <p style={{ color: "yellow" }}>{error}</p>}

      {/* 🚀 Button */}
      <button onClick={handleLogin}>
        🚀 Start Quiz
      </button>

      {/* 💡 Extra UI */}
      <p style={{ marginTop: "15px", fontSize: "14px", opacity: 0.8 }}>
        💡 Test your knowledge and improve skills!
      </p>
    </div>
  );
}

export default Login;