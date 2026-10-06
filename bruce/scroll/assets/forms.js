/* Shared mockup form behavior for the three Bruce scroll-worlds.
   Nothing is sent anywhere: every submit shows "Draft: nothing was sent." */
(function () {
  const DRAW_TYPES = ['corporate', 'fundraiser', 'festival'];

  // multi-select chips (alert regions) and single-select chips (night kind)
  document.querySelectorAll('[data-chips]').forEach(group => {
    const single = group.dataset.chips === 'one';
    group.addEventListener('click', e => {
      const b = e.target.closest('button[aria-pressed]');
      if (!b) return;
      if (single) group.querySelectorAll('button[aria-pressed]').forEach(x => x.setAttribute('aria-pressed', 'false'));
      b.setAttribute('aria-pressed', single ? 'true' : String(b.getAttribute('aria-pressed') !== 'true'));
      const hidden = group.querySelector('input[type=hidden]');
      if (hidden) hidden.value = [...group.querySelectorAll('button[aria-pressed=true]')].map(x => x.dataset.v || x.textContent.trim()).join(', ');
      group.dispatchEvent(new CustomEvent('chips', { bubbles: true, detail: hidden ? hidden.value : '' }));
    });
  });

  function done(form, html) {
    const box = form.querySelector('.done');
    form.querySelectorAll('.fields').forEach(f => (f.hidden = true));
    if (box) { box.innerHTML = html; box.hidden = false; box.setAttribute('tabindex', '-1'); box.focus({ preventScroll: true }); }
  }

  document.querySelectorAll('form[data-alert]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (form.querySelector('.hp')?.value) return; // spam trap
      if (!form.reportValidity()) return;
      done(form, '<b>You\'re on the list.</b> Bruce will tell you first, a few times a year, before it sells out.<small>Draft: nothing was sent.</small>');
    });
  });

  document.querySelectorAll('form[data-book]').forEach(form => {
    const ev = form.querySelector('[name=event]');
    const draw = form.querySelector('.draw');
    const sync = () => { if (draw) draw.hidden = !DRAW_TYPES.includes(ev.value); };
    ev && ev.addEventListener('change', sync); sync();
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (form.querySelector('.hp')?.value) return;
      if (!form.reportValidity()) return;
      const name = (form.querySelector('[name=name]')?.value || '').split(' ')[0];
      done(form, `<b>Got it${name ? ', ' + name.replace(/[<>&"]/g, '') : ''}.</b> Bruce's team replies within [reply time: CONFIRM who answers and how fast]. While you wait: <a href="#alert">get a Bruce Alert</a> so you hear about public shows too.<small>Draft: nothing was sent.</small>`);
    });
  });

  // "Book the Piano Bar / Full Band" buttons preselect the night kind
  document.querySelectorAll('[data-night]').forEach(a => a.addEventListener('click', () => {
    const v = a.dataset.night;
    document.querySelectorAll('form[data-book] [data-chips=one] button').forEach(b => {
      if ((b.dataset.v || '') === v) b.click();
    });
  }));

  // date inputs: no past dates
  const t = new Date(); const iso = new Date(t.getTime() - t.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
  document.querySelectorAll('input[type=date]').forEach(i => (i.min = iso));
})();
