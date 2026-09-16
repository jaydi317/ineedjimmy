document.querySelectorAll('.t-stagger').forEach((block) => {
  block.classList.remove('is-hiding', 'is-shown');
  void block.offsetHeight;
  block.classList.add('is-shown');
});

for (const frame of document.querySelectorAll('.mini-screen iframe')) {
  const resize = () => {
    const scale = frame.parentElement.clientWidth / 1440;
    frame.style.transform = `scale(${scale})`;
    frame.parentElement.style.height = `${900 * scale}px`;
  };
  new ResizeObserver(resize).observe(frame.parentElement);
  resize();
}
