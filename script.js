function animateChange(el, value) {
  if (el.textContent== String(value)) return;
  
  el.style.opacity = "0";
  el.style.transform = "scale(0.9)";
  
  setTimeout(() => {
    el.textContent = value;
    el.style.opacity = "1";
    el.style.transform = "scale(1)";
  }, 150);
}
function updateTimer() {
  const targetDate = new Date("2026-07-11T10:30:00").getTime();
  const now = new Date().getTime();
  
  let diff = targetDate - now;
  if (diff < 0) diff = 0;
  
  const days = Math.floor(diff / (1000 * 60 * 60 *24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
animateChange(document.getElementById("days"), days);
  
animateChange(document.getElementById("hours"), hours);

animateChange(document.getElementById("minutes"), minutes);
  
animateChange(document.getElementById("seconds"), seconds);
}

updateTimer();
setInterval(updateTimer, 1000);
</script>
</body>
