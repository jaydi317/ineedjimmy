const paths = {
  new: ['Start with a conversation.', 'New to tumbling? You don’t have to know a class name or skill level. Ask the team about a beginner starting point and a visit to the gym.'],
  skills: ['Give that energy a direction.', 'Tell the AirBound team what your child has tried and what they want to learn. Ask which tumbling class fits their experience, age, and current goals.'],
  team: ['Find out about cheer.', 'AirBound welcomes inquiries from beginners and experienced cheer athletes. Ask about current teams, placements, practice commitments, and total costs.']
};
for (const button of document.querySelectorAll('[data-path]')) {
  button.addEventListener('click', () => {
    for (const item of document.querySelectorAll('[data-path]')) item.setAttribute('aria-pressed', String(item === button));
    const [title, text] = paths[button.dataset.path];
    document.querySelector('[data-result-title]').textContent = title;
    document.querySelector('[data-result-text]').textContent = text;
  });
}
const dialog = document.querySelector('dialog');
for (const button of document.querySelectorAll('[data-inquiry]')) button.addEventListener('click', () => dialog.showModal());
document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
// Keep the complete desktop composition visible in each gallery preview.
for (const frame of document.querySelectorAll('.mini-screen iframe')) {
  const resize = () => { const scale = frame.parentElement.clientWidth / 1440; frame.style.transform = `scale(${scale})`; frame.parentElement.style.height = `${960 * scale}px`; };
  new ResizeObserver(resize).observe(frame.parentElement);
  resize();
}
