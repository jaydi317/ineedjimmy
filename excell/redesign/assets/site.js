/* Excell site behaviour. Reads settings from config.js and every answer from faq-data.js. No tracking, no cookies, nothing sent anywhere. */
(function(){
  var C = window.EXCELL_CONFIG || {};
  var FAQ = window.EXCELL_FAQ || [];
  var P = window.EXCELL_PRICES || {};
  var ROOT = document.body.getAttribute('data-root') || '';

  /* ---------- helpers ---------- */
  function esc(s){ return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
  // Plain answer text -> safe HTML, with [DOC TO CONFIRM: ...] highlighted
  function price(k){ return P[k] ? '<span class="price'+(P.confirmed ? '' : ' pending')+'"'+(P.confirmed ? '' : ' title="Waiting on Dr. McCray\'s price check"')+'>'+esc(P[k])+'</span>' : '{'+k+'}'; }
  function fmt(s){ return esc(s).replace(/\[DOC TO CONFIRM:([^\]]*)\]/g,'<span class="dtc">[DOC TO CONFIRM:$1]</span>').replace(/\{(\w+)\}/g,function(m,k){ return price(k); }); }
  // Prices in page HTML: <span data-price="exam"></span>
  document.querySelectorAll('[data-price]').forEach(function(el){ el.innerHTML = price(el.getAttribute('data-price')); });
  // One price check box for Dr. McCray, shown until prices are confirmed
  document.querySelectorAll('[data-price-check]').forEach(function(el){
    if(P.confirmed){ el.hidden = true; return; }
    el.innerHTML = '<span class="dtc">[DOC TO CONFIRM: price check. These are your Sept 29 answers. Still right, and OK to show on the site? New-patient exam '+esc(P.exam)+' · adjustment '+esc(P.adj)+' · typical first visit '+esc(P.firstVisit)+' · X-rays '+esc(P.xray)+' · added therapy '+esc(P.therapy)+' · follow-ups '+esc(P.followup)+' · plans '+esc(P.plan2)+' a month for 2 visits and '+esc(P.plan4)+' for 4 · '+esc(P.planDiscount)+' off other services and products · decompression '+esc(P.decomp)+' · hyperbaric '+esc(P.hbot)+']</span>';
  });
  function bookBtn(label,cls){ return '<a class="btn btn-book '+(cls||'')+'" href="'+esc(C.bookUrl)+'" target="_blank" rel="noopener">'+(label||'Book My First Visit')+'</a>'; }
  window.EXCELL_FMT = fmt;

  /* ---------- booking + phone links everywhere ---------- */
  document.querySelectorAll('[data-book]').forEach(function(a){ a.href = C.bookUrl; a.target = '_blank'; a.rel = 'noopener'; });
  document.querySelectorAll('[data-tel]').forEach(function(a){ a.href = 'tel:' + C.phoneTel; });

  /* ---------- toasts for placeholders ---------- */
  var toast = document.getElementById('toast'), tt;
  function say(msg){ if(!toast) return; toast.textContent = msg; toast.classList.add('show'); clearTimeout(tt); tt = setTimeout(function(){ toast.classList.remove('show'); }, 3400); }
  document.addEventListener('click', function(e){
    var t = e.target.closest('[data-toast]'); if(!t) return; e.preventDefault(); say(t.getAttribute('data-toast'));
  });

  /* ---------- mobile menu ---------- */
  var burger = document.querySelector('.burger'), mnav = document.getElementById('mnav');
  if(burger && mnav){
    burger.addEventListener('click', function(){ var o = mnav.classList.toggle('open'); burger.setAttribute('aria-expanded', o ? 'true' : 'false'); });
    mnav.addEventListener('click', function(e){ if(e.target.closest('a')){ mnav.classList.remove('open'); burger.setAttribute('aria-expanded','false'); } });
  }

  /* ---------- FAQ blocks (all read the one data file) ---------- */
  function faqItem(f){
    return '<details id="q-'+esc(f.id)+'"><summary>'+esc(f.q)+'</summary><p class="ans">'+fmt(f.a)+'</p></details>';
  }
  document.querySelectorAll('[data-faq]').forEach(function(box){
    var mode = box.getAttribute('data-faq'), list;
    if(mode === 'home') list = FAQ.filter(function(f){ return f.home; });
    else if(mode.indexOf('cat:') === 0){ var cat = mode.slice(4); list = FAQ.filter(function(f){ return f.cat === cat; }); }
    else if(mode === 'grouped'){
      var cats = []; FAQ.forEach(function(f){ if(cats.indexOf(f.cat) < 0) cats.push(f.cat); });
      box.innerHTML = cats.map(function(cat){
        return '<div class="faq-group"><h3>'+esc(cat)+'</h3><div class="faq">'+FAQ.filter(function(f){return f.cat===cat;}).map(faqItem).join('')+'</div></div>';
      }).join('');
      return;
    } else list = FAQ;
    box.innerHTML = list.map(faqItem).join('');
  });
  // open a question from a #q-... link
  if(location.hash.indexOf('#q-') === 0){ var d = document.querySelector(location.hash); if(d && d.tagName === 'DETAILS') d.open = true; }

  /* ---------- Google rating + review count, live from Google ---------- */
  function setReviews(rating, count, url){
    document.querySelectorAll('[data-g-rating]').forEach(function(el){ el.textContent = rating.toFixed(1); });
    document.querySelectorAll('[data-g-count]').forEach(function(el){ el.textContent = count.toLocaleString(); });
    document.querySelectorAll('[data-g-live]').forEach(function(el){ el.hidden = false; });
    document.querySelectorAll('[data-g-wait]').forEach(function(el){ el.hidden = true; });
    if(url) document.querySelectorAll('[data-g-link]').forEach(function(a){ a.href = url; });
  }
  document.querySelectorAll('[data-g-link]').forEach(function(a){ a.href = C.googleReviewsUrl; a.target = '_blank'; a.rel = 'noopener'; });
  if(C.googleMapsKey && C.googlePlaceId && document.querySelector('[data-g-rating],[data-g-count]')){
    window.__excellMaps = function(){
      google.maps.importLibrary('places').then(function(lib){
        var place = new lib.Place({ id: C.googlePlaceId });
        return place.fetchFields({ fields: ['rating','userRatingCount','googleMapsURI'] }).then(function(){
          if(place.rating && place.userRatingCount) setReviews(place.rating, place.userRatingCount, place.googleMapsURI);
        });
      }).catch(function(){ /* keep the "see reviews on Google" fallback */ });
    };
    var s = document.createElement('script');
    s.src = 'https://maps.googleapis.com/maps/api/js?key=' + encodeURIComponent(C.googleMapsKey) + '&v=weekly&loading=async&callback=__excellMaps';
    s.async = true; document.head.appendChild(s);
  }

  /* ---------- Hello from Dr. McCray video ---------- */
  var hb = document.getElementById('hello-play'), hv = document.getElementById('hello-video');
  if(hb && hv){
    hb.addEventListener('click', function(){
      if(C.helloVideo){
        hv.innerHTML = '<video controls autoplay playsinline src="'+esc(ROOT + C.helloVideo)+'"></video>';
      } else {
        say('Coming soon: a 45-second hello from Dr. McCray, filmed on a phone in the office at the photo visit.');
      }
    });
  }

  /* ---------- Out-of-office banner (Dr. McCray texts it; demo: add ?out=1 to any page) ---------- */
  var OUT = C.outOfOffice || {};
  var forceOut = /[?&]out=1\b/.test(location.search);
  if(OUT.show || forceOut){
    var msg = OUT.show ? OUT.message : (OUT.demoMessage || 'Dr. McCray is out of the office Thursday. Book online for Friday or later.');
    var bar = document.createElement('div'); bar.className = 'oob'; bar.setAttribute('role','status');
    bar.innerHTML = '<span class="oob-dot" aria-hidden="true"></span><span>' + esc(msg) + '</span><a href="' + esc(C.bookUrl) + '" target="_blank" rel="noopener">See open times</a>' + (forceOut && !OUT.show ? '<em>Demo</em>' : '');
    document.body.insertBefore(bar, document.body.firstChild);
    window.EXCELL_OUT_MSG = msg;
  }

  /* ---------- Send this to a friend (no rewards, just the link) ---------- */
  document.addEventListener('click', function(e){
    var sb = e.target.closest('[data-share]'); if(!sb) return;
    var url = C.shareUrl || location.href.split('?')[0].split('#')[0];
    var text = "You need to go see my chiropractor, Dr. McCray at Excell Sports Chiropractic. Book here:";
    if(navigator.share){ navigator.share({ title: 'Excell Sports Chiropractic', text: text, url: url }).catch(function(){}); }
    else if(navigator.clipboard){ navigator.clipboard.writeText(text + ' ' + url).then(function(){ say('Link copied. Paste it in a text to your friend.'); }, function(){ say(url); }); }
    else { say(url); }
  });

  /* ---------- App links + QR code ---------- */
  document.querySelectorAll('[data-app="iphone"]').forEach(function(a){
    if(C.appIphoneUrl){ a.href = C.appIphoneUrl; a.target = '_blank'; a.rel = 'noopener'; }
    else { a.href = '#'; a.setAttribute('data-toast','Placeholder: iPhone App Store link from Dr. McCray.'); a.classList.add('pending'); }
  });
  document.querySelectorAll('[data-app="android"]').forEach(function(a){
    if(C.appAndroidUrl){ a.href = C.appAndroidUrl; a.target = '_blank'; a.rel = 'noopener'; }
    else { a.href = '#'; a.setAttribute('data-toast','Placeholder: Google Play link from Dr. McCray.'); a.classList.add('pending'); }
  });
  document.querySelectorAll('[data-qr]').forEach(function(box){
    if(typeof qrcode !== 'function') return;
    var q = qrcode(0, 'M'); q.addData(C.appQrTarget); q.make();
    box.insertAdjacentHTML('afterbegin', q.createSvgTag({ scalable: true, margin: 0 }));
  });
  document.querySelectorAll('[data-if-links-pending]').forEach(function(el){ el.hidden = !!C.appLinksConfirmed; });

  /* ---------- "Where does it hurt?" body map (home only) ---------- */
  var map = document.getElementById('bodymap');
  if(map){
    var AREAS = [
      {id:'head',name:'Headaches',x:50,y:8.6},
      {id:'neck',name:'Neck',x:50,y:16.2},
      {id:'shoulder',name:'Shoulder',x:30,y:21},
      {id:'upper-back',name:'Upper back',x:50,y:27.5},
      {id:'elbow',name:'Elbow',x:76,y:35.2,page:'conditions/elbow-pain.html'},
      {id:'low-back',name:'Low back',x:50,y:44},
      {id:'wrist',name:'Wrist & hand',x:81,y:50.2},
      {id:'hip',name:'Hip',x:36,y:52.6},
      {id:'knee',name:'Knee',x:60,y:73.8,page:'conditions/knee-pain.html'},
      {id:'foot',name:'Foot & ankle',x:39,y:95}
    ];
    var chips = document.getElementById('chips'), panel = document.getElementById('panel');
    AREAS.forEach(function(a){
      var b = document.createElement('button'); b.type='button'; b.className='hs'; b.style.left=a.x+'%'; b.style.top=a.y+'%';
      b.setAttribute('aria-label', a.name); b.setAttribute('aria-pressed','false'); b.dataset.id=a.id; b.innerHTML='<i></i>';
      b.addEventListener('click', function(){ pick(a.id, true); }); map.appendChild(b);
      var c = document.createElement('button'); c.type='button'; c.className='chip'; c.textContent=a.name; c.dataset.id=a.id; c.setAttribute('aria-pressed','false');
      c.addEventListener('click', function(){ pick(a.id, false); }); chips.appendChild(c);
    });
    function pick(id, fromMap){
      var a = AREAS.filter(function(x){ return x.id === id; })[0];
      document.querySelectorAll('#bodymap [data-id], #chips [data-id]').forEach(function(el){ el.setAttribute('aria-pressed', el.dataset.id === id ? 'true' : 'false'); });
      var read = a.page ? '<a class="btn btn-navy" href="'+a.page+'">Read about '+esc(a.name.toLowerCase())+' pain</a>'
                        : '<a class="btn btn-ghost" href="#" data-toast="Page planned: '+esc(a.name)+' pain. Elbow and knee are written first.">'+esc(a.name)+' page coming</a>';
      panel.innerHTML = '<span class="tag">You tapped</span><h3 style="margin-top:6px">'+esc(a.name)+'</h3>'+
        '<p style="margin:10px 0 0;color:var(--muted)">Dr. McCray examines it first, finds where it\'s really coming from, and tells you what he recommends before any treatment. If someone else should see you, he\'ll tell you that too.</p>'+
        '<div class="acts">'+bookBtn()+read+'</div>';
      if(fromMap && window.innerWidth < 900) panel.scrollIntoView({behavior:'smooth', block:'nearest'});
    }
    pick('low-back', false);
  }

  /* ---------- Chat helper: DEMO, answers only from faq-data.js ---------- */
  var aib = document.getElementById('aibtn'), aip = document.getElementById('aipanel');
  if(aib && aip){
    var log = document.getElementById('ailog'), form = document.getElementById('aiform'), inp = document.getElementById('aiinput');
    var started = false;
    var HEALTH = /\b(pain|hurt|hurts|hurting|ache|aching|sore|injur\w*|symptom\w*|diagnos\w*|medic\w*|pill|pills|drug\w*|surgery|surgeon|pregnan\w*|numb\w*|tingl\w*|swollen|swelling|broke|broken|fracture\w*|sprain\w*|strain\w*|torn|tear|herniat\w*|disc|sciatica|arthritis|condition|should i|is it safe|my (back|neck|knee|elbow|shoulder|hip|foot|ankle|wrist|head))\b/i;
    var EMERG = /\b(emergency|chest pain|can'?t breathe|cannot breathe|stroke|passed out|faint\w*|suicid\w*|overdose|911)\b/i;
    function add(html, who){ var d = document.createElement('div'); d.className = 'msg ' + (who || 'bot'); d.innerHTML = html; log.appendChild(d); log.scrollTop = log.scrollHeight; return d; }
    function menu(){
      var picks = ['first-visit-what','first-visit-cost','xrays','insurance','membership','book'];
      var html = '<div class="ai-chips">' + picks.map(function(id){ var f = FAQ.filter(function(x){return x.id===id;})[0]; return f ? '<button class="chip" type="button" data-ask="'+id+'">'+esc(f.q)+'</button>' : ''; }).join('') + '</div>';
      add('Tap a question, or type one below.' + html);
    }
    function answer(f){
      add('<span class="q">'+esc(f.q)+'</span>' + fmt(f.a) + '<br>' + bookBtn());
    }
    function match(text){
      var t = ' ' + text.toLowerCase().replace(/[^a-z0-9$\- ]/g,' ').replace(/\s+/g,' ') + ' ';
      var best = null, bestScore = 0;
      FAQ.forEach(function(f){
        var score = 0;
        (f.keys || []).forEach(function(k){ if(t.indexOf(k.toLowerCase()) > -1) score += k.length; });
        if(f.combo && f.combo.every(function(g){ return g.some(function(k){ return t.indexOf(k) > -1; }); })) score += 30;
        if(score > bestScore){ bestScore = score; best = f; }
      });
      return bestScore >= 3 ? best : null;
    }
    function start(){
      if(started) return; started = true;
      add('Hi! I answer common questions about the first visit, X-rays, costs and booking, using the office\'s approved answers. I can\'t give medical advice, so please don\'t type personal health details.');
      menu();
    }
    function open(o){ aip.classList.toggle('open', o); aib.setAttribute('aria-expanded', o ? 'true' : 'false'); if(o){ start(); setTimeout(function(){ inp.focus(); }, 50); } }
    aib.addEventListener('click', function(){ open(!aip.classList.contains('open')); });
    document.getElementById('aiclose').addEventListener('click', function(){ open(false); aib.focus(); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && aip.classList.contains('open')){ open(false); aib.focus(); } });
    log.addEventListener('click', function(e){
      var b = e.target.closest('[data-ask]'); if(!b) return;
      var f = FAQ.filter(function(x){ return x.id === b.getAttribute('data-ask'); })[0];
      if(f){ add(esc(f.q), 'me'); answer(f); }
    });
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var text = inp.value.trim(); inp.value = '';           // cleared right away, never saved or sent
      if(!text) return;
      if(EMERG.test(text)){ add('<i>Message hidden for your privacy.</i>', 'me'); add('<b>If this is an emergency, call 911 now.</b> This helper can\'t help with urgent medical problems.'); return; }
      var health = HEALTH.test(text), f = match(text);
      add(health ? '<i>Health question hidden for your privacy.</i>' : esc(text), 'me');
      if(health){
        add('I can\'t give medical advice or look at symptoms. That\'s what the first visit is for: Dr. McCray examines you and tells you what he finds before any treatment.' + (f ? '' : '<br>' + bookBtn()));
        if(f) answer(f);
        return;
      }
      if(f && f.id === 'hours' && window.EXCELL_OUT_MSG){ add('<b>Heads up:</b> ' + esc(window.EXCELL_OUT_MSG)); }
      if(f){ answer(f); return; }
      add('I don\'t have an approved answer for that one yet. The front desk can help at ' + esc(C.phoneDisplay) + ', or you can book and ask Dr. McCray in person.<br>' + bookBtn());
      menu();
    });
  }
})();
