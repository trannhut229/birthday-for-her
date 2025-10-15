document.getElementById("surprise-btn").addEventListener("click", function () {
  const surprise = document.getElementById("surprise");
  surprise.classList.remove("hidden");
  this.style.display = "none";

  // Tạo hiệu ứng bong bóng bay
  for (let i = 0; i < 30; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), 6000);
  }
});

// Tạo bong bóng CSS
const style = document.createElement("style");
style.innerHTML = `
  .balloon {
    position: fixed;
    bottom: -50px;
    width: 20px;
    height: 30px;
    background: #99ccff;
    border-radius: 50%;
    opacity: 0.7;
    animation: rise 5s linear infinite;
  }
  @keyframes rise {
    from { transform: translateY(0) rotate(0deg); }
    to { transform: translateY(-110vh) rotate(360deg); }
  }
`;
document.head.appendChild(style);
