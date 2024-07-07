import animateText from './animateText.js';
import startAnimation from './startAnimation.js';

const tagline = document.getElementById('tagline');

let startTagline = null;
const initialTopTagline = -50;
const finalTopTagline = 32.02;
const initialFontSize = 11;
const finalFontSize = 20.528;
const appearanceDuration = 600;
const zoomDuration = 600;

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function animateTagline(timestamp) {
  if (!startTagline) startTagline = timestamp;
  const progress = (timestamp - startTagline) / appearanceDuration;
  const easedProgress = easeInOut(Math.pow(progress, 1));

  if (progress < 0.8) {
    const newTop =
      initialTopTagline + (finalTopTagline - initialTopTagline) * easedProgress;
    tagline.style.top = `${newTop}px`;
    requestAnimationFrame(animateTagline);
  } else {
    tagline.style.top = `${finalTopTagline}px`;
    startZooming();
  }
}

function startZooming() {
  let startZoom = null;

  function zoomTagline(timestamp) {
    if (!startZoom) startZoom = timestamp;
    const progress = (timestamp - startZoom) / zoomDuration;
    const easedProgress = easeInOut(Math.pow(progress, 3));

    if (progress < 1) {
      const newFontSize =
        initialFontSize + (finalFontSize - initialFontSize) * easedProgress;
      tagline.style.fontSize = `${newFontSize}px`;
      requestAnimationFrame(zoomTagline);
    } else {
      tagline.style.fontSize = `${finalFontSize}px`;
      requestAnimationFrame(animateText);
      startAnimation();
    }
  }

  requestAnimationFrame(zoomTagline);
}

tagline.style.top = `${initialTopTagline}px`;
tagline.style.fontSize = `${initialFontSize}px`;
requestAnimationFrame(animateTagline);
