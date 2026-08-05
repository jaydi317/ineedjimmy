(() => {
  const root = document.querySelector('[data-sales-journey]');
  if (!root) return;

  const tabs = [...root.querySelectorAll('[data-step]')];
  const panels = [...root.querySelectorAll('[data-panel]')];
  const previous = root.querySelector('[data-prev]');
  const next = root.querySelector('[data-next]');
  const current = root.querySelector('[data-current]');
  let index = 0;

  function show(nextIndex, moveFocus = false) {
    index = Math.max(0, Math.min(panels.length - 1, nextIndex));
    tabs.forEach((tab, i) => {
      const active = i === index;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel, i) => {
      panel.hidden = i !== index;
      panel.classList.toggle('active', i === index);
    });
    previous.disabled = index === 0;
    next.disabled = index === panels.length - 1;
    next.textContent = index === panels.length - 1 ? 'Journey complete' : 'Next step →';
    current.textContent = String(index + 1);
    tabs[index].scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'});
    if (moveFocus) tabs[index].focus({preventScroll: true});
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => show(i));
    tab.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight') { event.preventDefault(); show(index + 1, true); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); show(index - 1, true); }
    });
  });
  previous.addEventListener('click', () => show(index - 1));
  next.addEventListener('click', () => show(index + 1));
  show(0);
})();
