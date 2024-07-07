import animateImages from './animateImages.js';
import animateText from './animateText.js';
const board = document.getElementById('board');
const shapes = document.getElementById('shapes');
const elements = document.getElementById('elements');
const stationery = document.getElementById('stationery');

function startAnimation() {
  requestAnimationFrame((timestamp) => {
    animateText(timestamp);
    animateImages(board, -12.758, -57, timestamp);
    animateImages(shapes, 114.98, 152, timestamp);
    animateImages(elements, 6.43, 50.43, timestamp);
    animateImages(stationery, 0, -44, timestamp);
  });
}
export default startAnimation;
