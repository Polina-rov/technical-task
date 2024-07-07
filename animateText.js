const text = document.getElementById('text');
let startText = null;
const initialLeftText = -text.offsetWidth;
const finalLeftText = 59.02;

function animateText(timestamp) {
  if (!startText) startText = timestamp;
  const progress = timestamp - startText;
  const posX = Math.min(initialLeftText + progress * 0.4, finalLeftText);

  text.style.left = `${posX}px`;

  if (posX < finalLeftText) {
    requestAnimationFrame(animateText);
  }
}

text.style.left = `${initialLeftText}px`;

export default animateText;
