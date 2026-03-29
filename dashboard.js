const user = JSON.parse(localStorage.getItem("userProfile"));

const dashboard = document.getElementById("dashboard");

// SKILL MODE
if (user.goal === "skill") {
  dashboard.innerHTML = `
    <h2>🚀 Skill Learning</h2>
    <p>Skill: ${user.skill}</p>
    <button>Start Learning</button>
    <button>Take Quiz</button>
  `;
}

// EXAM MODE
if (user.goal === "exam") {
  dashboard.innerHTML = `
    <h2>📚 Exam Preparation</h2>
    <p>Exam: ${user.examType}</p>
    <button>View Study Plan</button>
    <button>Mock Test</button>
  `;
}
