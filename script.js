function randomColor() {
    let colors = ["red", "blue", "green", "purple", "orange", "pink", "yellow"];
    document.getElementById("text-wechsler1").style.color =
      colors[Math.floor(Math.random() * colors.length)];
  }
  setInterval(randomColor, 1000);