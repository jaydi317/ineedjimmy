/* Al Christy phone tour — shared behavior.
   Each tour page: <body data-page="N"> and an empty <div id="tour-next"></div> before </body>.
   Provides: top chrome (All pages chip + N/10), next-page card, scroll reveals, pick storage, toast. */
(function(){
  var PAGES = [
    {n:1,  file:'index.html',          title:'The Door',      hook:'You’re here.'},
    {n:2,  file:'p2-legend.html',      title:'The Legend',    hook:'Your story, as the record tells it.'},
    {n:3,  file:'p3-fitting.html',     title:'The Fitting',   hook:'The company grew. Did the voice?'},
    {n:4,  file:'p4-creed.html',       title:'The Creed',     hook:'Sixty seconds, written to be read out loud.'},
    {n:5,  file:'p5-orchard.html',     title:'The Orchard',   hook:'Direction one. Roots and the first yes.'},
    {n:6,  file:'p6-summit.html',      title:'The Summit',    hook:'Direction two. The climb.'},
    {n:7,  file:'p7-original.html',    title:'The Original',  hook:'Direction three. The work still ahead.'},
    {n:8,  file:'p8-machine.html',     title:'The Machine',   hook:'AI that finds your next deal.'},
    {n:9,  file:'p9-unveiling.html',   title:'The Unveiling', hook:'Where your 25th year begins.'},
    {n:10, file:'thanks.html',         title:'The Receipt',   hook:'What went into this, and one question.'}
  ];
  var TOTAL = PAGES.length;
  var KEY = 'al25.pick';
  var DIRS = {orchard:{n:1,name:'The Orchard'}, summit:{n:2,name:'The Summit'}, original:{n:3,name:'The Original'}};

  function store(){ try{ return window.localStorage; }catch(e){ return null; } }
  var AL = window.AL = {
    pages: PAGES, total: TOTAL, dirs: DIRS,
    getPick: function(){ var s=store(); try{ var v=s&&s.getItem(KEY); return DIRS[v]?v:null; }catch(e){ return null; } },
    setPick: function(v){ var s=store(); try{ if(s) s.setItem(KEY,v); }catch(e){} AL.toast('Saved: '+DIRS[v].name+'. You can change it on the last page.'); },
    toast: function(msg){
      var t=document.querySelector('.toast'); if(!t){ t=document.createElement('div'); t.className='toast'; t.setAttribute('role','status'); document.body.appendChild(t); }
      t.textContent=msg; requestAnimationFrame(function(){ t.classList.add('show'); });
      clearTimeout(t._h); t._h=setTimeout(function(){ t.classList.remove('show'); }, 2800);
    },
    pad: function(n){ return (n<10?'0':'')+n; }
  };

  function chrome(n){
    if(document.querySelector('.tour-chrome') || n===1) return;
    var c=document.createElement('div'); c.className='tour-chrome';
    c.innerHTML='<a class="chip" href="index.html#map" aria-label="All pages"><span aria-hidden="true">←</span> All pages</a>'+
                '<span class="chip" aria-label="Page '+n+' of '+TOTAL+'"><span class="mono">'+AL.pad(n)+' / '+TOTAL+'</span></span>';
    document.body.insertBefore(c, document.body.firstChild);
  }

  function nextCard(n){
    var host=document.getElementById('tour-next'); if(!host) return;
    var nxt=PAGES[n]; // n is 1-based, so PAGES[n] is the next page
    var dots=PAGES.map(function(p){ return '<li class="'+(p.n<n?'on':'')+(p.n===n?' now':'')+'"></li>'; }).join('');
    if(!nxt){ host.innerHTML=''; return; }
    host.className='tour-next';
    host.innerHTML='<div class="tn"><ul class="tn-dots" aria-hidden="true">'+dots+'</ul>'+
      '<p class="tn-kick">That was '+n+' of '+TOTAL+' · Next</p>'+
      '<p class="tn-title">'+nxt.title+'</p>'+
      '<p class="tn-hook">'+nxt.hook+'</p>'+
      '<a class="btn" href="'+nxt.file+'">Continue <span class="arrow" aria-hidden="true">→</span></a></div>';
  }

  function reveals(){
    var els=[].slice.call(document.querySelectorAll('.reveal'));
    if(!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches){ els.forEach(function(e){e.classList.add('in');}); return; }
    var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }); },{rootMargin:'0px 0px -8% 0px',threshold:.08});
    els.forEach(function(e){ io.observe(e); });
  }

  document.addEventListener('DOMContentLoaded', function(){
    var n=parseInt(document.body.getAttribute('data-page')||'0',10);
    if(n){ chrome(n); nextCard(n); }
    reveals();
  });
})();
