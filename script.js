// CI/CD Interactive Demo — script.js

const lines = [
  "$ git push origin main",
  "✓ Changes pushed to GitHub...",
  "⚙️  GitHub Actions workflow triggered",
  "✓ Checking required files...",
  "  → index.html found ✅",
  "  → style.css  found ✅",
  "  → script.js  found ✅",
  "✓ All required files found OK",
  "📦 Uploading site artifact...",
  "🚀 Deploying to GitHub Pages...",
  "✅ Deployment successful!",
  "🌐 Your site is LIVE at: https://deyaabatsh.github.io/cloud-beginner-cicd-pages-DeyaaAlBatsh/"
];

let running = false;

function triggerDemo() {
  if (running) return;
  running = true;

  const msgEl = document.getElementById("msg");
  const btn = document.getElementById("btn");

  btn.disabled = true;
  btn.textContent = "⏳ Running...";
  msgEl.className = "";
  msgEl.innerHTML = "";

  let i = 0;
  const interval = setInterval(() => {
    if (i < lines.length) {
      msgEl.innerHTML += (i === 0 ? "" : "\n") + lines[i];
      // color the last line green
      if (i === lines.length - 1) {
        msgEl.style.color = "#22d3a5";
      } else {
        msgEl.style.color = "#94a3b8";
      }
      i++;
    } else {
      clearInterval(interval);
      btn.textContent = "✅ Done!";
      btn.style.background = "linear-gradient(135deg, #22d3a5, #059669)";
      running = false;
    }
  }, 260);
}

function resetDemo() {
  const msgEl = document.getElementById("msg");
  const btn = document.getElementById("btn");

  running = false;
  msgEl.textContent = "$ waiting for input...";
  msgEl.className = "terminal-placeholder";
  msgEl.style.color = "";

  btn.disabled = false;
  btn.textContent = "🚀 Trigger Deploy";
  btn.style.background = "";
}
