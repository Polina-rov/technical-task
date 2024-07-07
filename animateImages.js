let startImage = null;
const duration = 1500;

function animateImages(element, initialRotation, finalRotation, timestamp) {
  if (!startImage) startImage = timestamp;
  const progress = timestamp - startImage;
  const halfDuration = duration / 2;
  let rotation;

  if (progress <= halfDuration) {
    rotation =
      initialRotation +
      (finalRotation - initialRotation) * (progress / halfDuration);
  } else {
    const returnProgress = progress - halfDuration;
    rotation =
      finalRotation +
      (initialRotation - finalRotation) * (returnProgress / halfDuration);
  }

  element.style.transform = `rotate(${rotation}deg)`;

  if (progress < duration) {
    requestAnimationFrame((timestamp) =>
      animateImages(element, initialRotation, finalRotation, timestamp)
    );
  }
}
export default animateImages;
