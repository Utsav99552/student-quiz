import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const navigate = useNavigate();
  const name = localStorage.getItem("student");

  const handleAnswer = (option) => {
    setSelected(option);

    const updatedScore =
      option === questions[current].answer ? score + 1 : score;

    setScore(updatedScore);

    setTimeout(() => {
      setSelected(null);

      const next = current + 1;

      if (next < questions.length) {
        setCurrent(next);
      } else {
        navigate("/result", { state: { score: updatedScore } });
      }
    }, 800); // delay for animation feel
  };

  return (
    <div className="container">
      {/* 👤 Welcome */}
      <h3>👋 Welcome, {name}</h3>

      {/* 📊 Progress Bar */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            height: "10px",
            width: "100%",
            background: "#ddd",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              height: "10px",
              width: `${((current + 1) / questions.length) * 100}%`,
              background: "#00ffcc",
              borderRadius: "10px",
              transition: "0.3s",
            }}
          ></div>
        </div>
      </div>

      {/* ❓ Question */}
      <h2>Question {current + 1}</h2>
      <h3>{questions[current].question}</h3>

      {/* 🔘 Options */}
      {questions[current].options.map((opt, index) => {
        let bgColor = "";

        if (selected) {
          if (opt === questions[current].answer) {
            bgColor = "green";
          } else if (opt === selected) {
            bgColor = "red";
          }
        }

        return (
          <button
            key={index}
            onClick={() => handleAnswer(opt)}
            style={{
              background: bgColor || undefined,
              transition: "0.3s",
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export default Quiz;