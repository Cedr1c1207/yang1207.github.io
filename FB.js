
const hateButton = document.getElementById('hate');

document.addEventListener('mousemove', (event) => {
  const rect = hateButton.getBoundingClientRect();
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // 計算滑鼠到按鈕的距離
  const distanceX = Math.abs(mouseX - (rect.left + rect.width / 2));
  const distanceY = Math.abs(mouseY - (rect.top + rect.height / 2));

  if (distanceX < rect.width / 2 + 40 && distanceY < rect.height / 2 + 40) {
    // 隨機移動按鈕到新位置
    const randomX = Math.random() * (window.innerWidth - rect.width);
    const randomY = Math.random() * (window.innerHeight - rect.height);
    hateButton.style.left = `${randomX}px`;
    hateButton.style.top = `${randomY}px`;
  }
});