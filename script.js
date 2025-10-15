// ======== Kiểm tra ngày sinh ==========
function checkBirthday() {
  const input = document.getElementById("birth-input").value;
  const error = document.getElementById("error");
  const checkPage = document.getElementById("birthday-check");
  const birthdayPage = document.getElementById("birthday-page");

  // 👉 Thay ngày sinh thật của cô ấy tại đây (định dạng YYYY-MM-DD)
  const correctDate = "2003-11-10";

  if (input === correctDate) {
    checkPage.classList.add("hidden");
    birthdayPage.classList.remove("hidden");
  } else {
    error.textContent = "Hmm… hình như chưa đúng ngày đặc biệt của em 😉";
  }
}

// ======== Phát nhạc và pháo hoa ==========
function playMusic() {
  const music = document.getElementById("music");
  music.play();
  launchFireworks();
}

// ======== Hiệu ứng pháo hoa ==========
function launchFireworks() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createFirework() {
    const x = random(0, canvas.width);
    const y = random(0, canvas.height / 2);
    const color = `hsl(${random(0, 360)},100%,70%)`;
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: x,
        y: y,
        angle: Math.random() * 2 * Math.PI,
        speed: random(1, 6),
        radius: random(1, 3),
        color: color,
        opacity: 1,
      });
    }
  }

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.opacity -= 0.01;

      if (p.opacity <= 0) particles.splice(i, 1);

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();
    });

    if (particles.length < 200) createFirework();
    requestAnimationFrame(draw);
  }

  draw();
}
