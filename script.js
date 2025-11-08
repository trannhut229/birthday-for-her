const $ = (s) => document.querySelector(s);

const nameInput = $("#name");
const startBtn = $("#start");
const openGiftBtn = $("#openGift");
const musicBtn = $("#musicBtn");
const music = $("#music");
const heroTitle = $("#heroTitle");
const heroSub = $("#heroSub");
const cards = $("#cards");
const ctaWrap = $("#ctaWrap");
const fireworksBtn = $("#fireworks");
const letter = $("#letter");
const reveal = $("#reveal");
const cardMsg = $("#cardMsg");
const cardLines = $("#cardLines");

function floatEmoji(x, y) {
  const e = document.createElement("div");
  e.className = "float";
  e.style.left = x + "px";
  e.style.top = y + "px";
  e.textContent = ["💖", "🎈", "✨", "🎂", "🫶", "🌷"][
    Math.floor(Math.random() * 6)
  ];
  document.body.appendChild(e);
  setTimeout(() => e.remove(), 2600);
}

// ========== CONFETTI =============
const cvs = document.getElementById("fx");
const ctx = cvs.getContext("2d");
let W = (cvs.width = innerWidth);
let H = (cvs.height = innerHeight);

addEventListener("resize", () => {
  W = cvs.width = innerWidth;
  H = cvs.height = innerHeight;
});

let confetti = [];

function spawnConfetti(x = W / 2, y = H / 2, count = 140) {
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const s = Math.random() * 5 + 2;
    confetti.push({
      x,
      y,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s,
      life: Math.random() * 80 + 60,
      size: Math.random() * 3 + 1,
      color: `hsl(${Math.random() * 360},90%,70%)`,
    });
  }
}

function tick() {
  ctx.clearRect(0, 0, W, H);
  for (let i = confetti.length - 1; i >= 0; i--) {
    const p = confetti[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.06;
    p.life--;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
    if (p.life <= 0 || p.y > H + 10) confetti.splice(i, 1);
  }
  requestAnimationFrame(tick);
}
tick();

// TYPEWRITER
async function typeText(el, text, speed = 22) {
  el.textContent = "";
  for (const ch of text) {
    el.textContent += ch;
    await new Promise((r) => setTimeout(r, speed));
  }
}

// START BTN
startBtn.addEventListener("click", () => {
  const nm = (nameInput.value || "").trim();
  const who = nm ? nm : "em";
  typeText(heroTitle, `Chúc mừng sinh nhật ${who} 🎂`);
  typeText(
    heroSub,
    "Anh muốn khác biệt nên chúc em theo cách này — nhẹ nhàng mà nhớ lâu."
  );

  cards.classList.remove("hidden");
  ctaWrap.classList.remove("hidden");
  letter.classList.remove("hidden");
  spawnConfetti(W / 2, H / 2, 200);
});

// OPEN GIFT
openGiftBtn.addEventListener("click", (e) => {
  spawnConfetti(e.clientX || W / 2, e.clientY || 60, 200);
  floatEmoji(e.clientX || W / 2, e.clientY || 60);
});

// FIREWORKS
fireworksBtn?.addEventListener("click", () => {
  spawnConfetti(W / 2, H * 0.65, 360);
});

// reveal
reveal.addEventListener("click", async () => {
  cardMsg.classList.remove("hidden");
  const nm = (nameInput.value || "").trim();
  const lines = [
    `${nm ? nm : "Em"} ơi, cảm ơn em vì đã xuất hiện.`,
    "Anh không hứa điều gì to lớn, nhưng anh hứa sẽ làm em cảm thấy vui vẻ mỗi ngày",
    "sẽ luôn làm em thấy an yên một chút.",
    "Chúc em tuổi mới nhẹ nhàng và thật nhiều thương 💗",
  ];
  cardLines.textContent = "";

  for (const l of lines) {
    await typeText(cardLines, cardLines.textContent + "\n" + l, 14);
  }

  spawnConfetti(W / 2, H / 2, 220);
});

// click emoji
addEventListener("click", (e) => {
  floatEmoji(e.clientX, e.clientY);
});
