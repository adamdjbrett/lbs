  const countdownElement = document.getElementById('countdown');
  if (countdownElement) {
    let timeLeft = parseInt(countdownElement.textContent, 10);
    const timer = setInterval(() => {
      timeLeft--;
      countdownElement.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }