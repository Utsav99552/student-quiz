import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;
  const name = localStorage.getItem("student");

  const handleRestart = () => {
    navigate("/");
  };

  const total = 3; // number of questions

  return (
    <div className="container">
      {/* 👤 Student Name */}
      <h2>🎉 Well Done, {name}!</h2>

      {/* 📊 Score */}
      <h1 style={{ fontSize: "40px", margin: "20px 0" }}>
        {score} / {total}
      </h1>

      {/* 💬 Message */}
      <h3>
        {score === total
          ? "🔥 Topper ho bhai!"
          : score >= 2
          ? "👍 Achha kiya!"
          : "😅 Thoda aur padh le!"}
      </h3>

      {/* 📈 Progress Bar */}
      <div style={{ margin: "20px 0" }}>
        <div
          style={{
            height: "12px",
            width: "100%",
            background: "#ddd",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              height: "12px",
              width: `${(score / total) * 100}%`,
              background: "limegreen",
              borderRadius: "10px",
              transition: "0.5s",
            }}
          ></div>
        </div>
      </div>

      {/* 🔄 Restart Button */}
      <button onClick={handleRestart}>🔁 Restart Quiz</button>
    </div>
  );
}

export default Result;