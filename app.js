const court = document.getElementById("court");
const container = document.getElementById("court-container");
const overallText = document.getElementById("overall");

let shots = [];  // {x, y, made: true/false}

court.addEventListener("click", (e) => {
  const rect = court.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const made = confirm("成功しましたか？ OK=成功 / キャンセル=失敗");

  shots.push({x, y, made});
  drawShot(x, y, made);
  updateOverall();
});

function drawShot(x, y, made) {
  const dot = document.createElement("div");
  dot.classList.add("shot");
  dot.style.left = x + "px";
  dot.style.top = y + "px";
  dot.style.backgroundColor = made ? "blue" : "red";
  container.appendChild(dot);
}

function updateOverall() {
  const total = shots.length;
  const made = shots.filter(s => s.made).length;
  const pct = total > 0 ? (made / total * 100).toFixed(1) : 0;
  overallText.textContent = `${made}/${total} (${pct}%)`;
}

