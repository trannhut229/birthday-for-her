// 🌸 Hàm kiểm tra ngày sinh khi nhấn nút
function checkBirthday() {
  const input = document
    .getElementById("birth-input")
    .value.trim()
    .replace(/\D/g, "");
  const error = document.getElementById("error");
  const checkPage = document.getElementById("birthday-check");
  const birthdayPage = document.getElementById("birthday-page");

  // 🎯 Nhập đúng ngày sinh thật của cô ấy ở đây (định dạng: DDMMYYYY)
  const correctDate = "10112006";

  if (input === correctDate) {
    // Ẩn phần nhập
    checkPage.classList.add("hidden");
    // Hiện phần chúc mừng
    birthdayPage.classList.remove("hidden");

    // 💖 Gọi hiệu ứng tim bay khi nhập đúng
    createHearts();
  } else {
    error.textContent = "Sai ròi nhập lại đi cô😉";
  }
}

// 🌸 Hiệu ứng tim bay khi nhập đúng
function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💙";
    document.body.appendChild(heart);

    const x = Math.random() * window.innerWidth;
    const duration = 3 + Math.random() * 3;

    heart.style.left = `${x}px`;
    heart.style.animationDuration = `${duration}s`;

    setTimeout(() => heart.remove(), duration * 1000);
  }
}
