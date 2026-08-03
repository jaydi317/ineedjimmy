const API='https://webhook.davisdash.com/watkins-team';
const AUTH='Basic '+btoa('team:team');
const STORAGE='kasey-workday-map-v1';

const questions=[
  {id:'week',chapter:'Your real week',label:'THE BIG PICTURE',title:'Walk us through a normal week—from the moment work starts pulling on you.',help:'Don’t organize it. Tell the story: calls, messages, prep, follow-up, emergencies, and the things you remember after you were supposed to be done.'},
  {id:'roles',chapter:'Your real week',label:'WHAT YOU CARRY',title:'What are all the jobs you actually do—even if they are not in your job title?',help:'Include the invisible things: keeping people calm, finding answers, covering calls, remembering exceptions, coordinating coaches, or catching problems.'},
  {id:'systems',chapter:'Your real week',label:'WHERE WORK LIVES',title:'Which apps, calendars, spreadsheets, groups, inboxes, and documents do you touch?',help:'Tell us where you look for information and where you have to enter the same thing twice.'},

  {id:'before',chapter:'The coaching work',label:'BEFORE A SESSION',title:'What do you do before a coaching call so you can show up prepared?',help:'What do you look up, remember, reread, ask someone, or wish you knew before the person appears?'},
  {id:'after',chapter:'The coaching work',label:'AFTER A SESSION',title:'What should happen after a call—and what actually happens when the day gets busy?',help:'Notes, promised links, homework, follow-up, escalations, scheduling, team updates, or anything you carry in your head.'},
  {id:'group-calls',chapter:'The coaching work',label:'TEACHING & COVERAGE',title:'What goes into hosting buddy, orientation, study, specialty, or Inner Circle calls?',help:'Include preparation, choosing topics, coverage changes, calendar conflicts, links, reminders, attendance, replay handling, and follow-up.'},
  {id:'human-only',chapter:'The coaching work',label:'PROTECT THE MAGIC',title:'Which parts of your work should always feel deeply human?',help:'What requires your intuition, presence, relationship, judgment, or voice—and should never be handed to an automated system?'},

  {id:'questions',chapter:'Invisible administration',label:'REPEATED QUESTIONS',title:'What questions do students or teammates ask you over and over?',help:'Think about WhatsApp, Slack, booking, access dates, what call to attend, program rules, links, extensions, or “who do I ask?”'},
  {id:'chasing',chapter:'Invisible administration',label:'THE CHASING',title:'What information or people do you repeatedly have to chase?',help:'What are you waiting on? Which answer changes depending on who you ask? Where do you follow up more than once?'},
  {id:'scheduling',chapter:'Invisible administration',label:'CALENDAR FRICTION',title:'What makes scheduling calls and coverage harder than it should be?',help:'Conflicts, time zones, spreadsheets, calendar updates, Zoom links, coach availability, last-minute changes, or unclear ownership.'},
  {id:'fall-through',chapter:'Invisible administration',label:'THE CRACKS',title:'What tends to fall through the cracks—even when everyone has good intentions?',help:'This is not about blame. We want the moments where the system relies on someone remembering.'},
  {id:'repeating',chapter:'Invisible administration',label:'COPY–PASTE WORK',title:'What messages, notes, explanations, or updates do you write repeatedly?',help:'Anything you keep retyping, searching for, copying, or rewriting for a slightly different person.'},

  {id:'love',chapter:'Energy & resistance',label:'MORE OF THIS',title:'What parts of the job make you feel useful, energized, or proud?',help:'What work would you happily do more of if the administrative weight disappeared?'},
  {id:'hate',chapter:'Energy & resistance',label:'LESS OF THIS',title:'What work creates resistance, dread, or “I’ll do it later” energy?',help:'Mundane tasks count. So do awkward follow-ups, unclear requests, context switching, and work that should not need your brain.'},
  {id:'drain',chapter:'Energy & resistance',label:'THE HIDDEN COST',title:'What drains more time or emotional energy than the team probably realizes?',help:'What follows you after hours? What makes it harder to be fully present with the next student?'},

  {id:'wish',chapter:'The lighter version',label:'WAVE A WAND',title:'If one annoying part of your week simply handled itself, what would you choose?',help:'Describe the dream outcome. Don’t worry yet about whether AI can do it.'},
  {id:'assistant',chapter:'The lighter version',label:'YOUR IDEAL ASSISTANT',title:'If you had a brilliant assistant beside you all week, what would you ask it to notice and handle?',help:'What would it prepare, remind you about, summarize, draft, organize, route, or protect you from forgetting?'},
  {id:'first-win',chapter:'The lighter version',label:'THE FIRST PROOF',title:'What is one small improvement we could build first that would make you say, “Oh—that actually helps”?',help:'Choose something safe and real enough to test within a week or two. We will build from proof, not promises.'}
];

const chapters=[...new Set(questions.map(q=>q.chapter))];
let state=load();
let index=Math.min(state.index||0,questions.length-1);
let listening=null;

function load(){try{return JSON.parse(localStorage.getItem(STORAGE))||{answers:{},index:0}}catch{return{answers:{},index:0}}}
function save(){state.index=index;localStorage.setItem(STORAGE,JSON.stringify(state));document.getElementById('save-state').textContent='Saved just now'}
function esc(s){return String(s||'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}

function render(){
  const q=questions[index],pct=((index+1)/questions.length)*100;
  document.getElementById('progress-number').textContent=`${index+1} of ${questions.length}`;
  document.getElementById('progress-category').textContent=q.chapter;
  document.getElementById('progress-bar').style.width=pct+'%';
  document.getElementById('question-label').textContent=q.label;
  document.getElementById('question-title').textContent=q.title;
  document.getElementById('question-help').textContent=q.help;
  document.getElementById('answer').value=state.answers[q.id]||'';
  document.getElementById('previous').disabled=index===0;
  document.getElementById('next').textContent=index===questions.length-1?'Review my answers →':'Save & continue →';
  document.getElementById('chapter-list').innerHTML=chapters.map(ch=>{
    const items=questions.filter(x=>x.chapter===ch),done=items.every(x=>state.answers[x.id]);
    return `<div class="chapter ${ch===q.chapter?'active':''} ${done?'done':''}">${esc(ch)}</div>`
  }).join('');
  document.getElementById('voice-status').textContent='Your phone keyboard microphone works too.';
  document.getElementById('voice-button').textContent='🎙 Speak instead';
  setTimeout(()=>document.getElementById('answer').focus({preventScroll:true}),50);
}

function capture(){state.answers[questions[index].id]=document.getElementById('answer').value.trim();save()}
function next(){capture();if(index<questions.length-1){index++;render();document.getElementById('interview').scrollIntoView()}else showReview()}
function previous(){capture();if(index>0){index--;render()}}
function skip(){document.getElementById('answer').value='';next()}

document.getElementById('next').onclick=next;
document.getElementById('previous').onclick=previous;
document.getElementById('skip').onclick=skip;
document.getElementById('answer').addEventListener('input',()=>{state.index=index;state.answers[questions[index].id]=document.getElementById('answer').value;localStorage.setItem(STORAGE,JSON.stringify(state))});

function showReview(){capture();document.querySelector('.interview-shell').hidden=true;const review=document.getElementById('review');review.hidden=false;
  document.getElementById('review-list').innerHTML=questions.map((q,i)=>`<article class="review-item"><button type="button" data-edit="${i}">Edit</button><strong>${esc(q.title)}</strong><p class="${state.answers[q.id]?'':'empty'}">${esc(state.answers[q.id]||'Skipped for now')}</p></article>`).join('');
  document.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>{index=Number(b.dataset.edit);review.hidden=true;document.querySelector('.interview-shell').hidden=false;render();document.getElementById('interview').scrollIntoView()});
  review.scrollIntoView({behavior:'smooth'});
}

document.getElementById('voice-button').onclick=()=>{
  const Speech=window.SpeechRecognition||window.webkitSpeechRecognition,button=document.getElementById('voice-button'),status=document.getElementById('voice-status'),box=document.getElementById('answer');
  if(!Speech){status.textContent='Tap the microphone on your phone keyboard and dictate into the answer box.';box.focus();return}
  if(listening){listening.stop();return}
  const original=box.value.trim();listening=new Speech();listening.continuous=true;listening.interimResults=true;listening.lang='en-US';
  listening.onstart=()=>{button.textContent='■ Stop recording';status.textContent='Listening… tell the story normally.'};
  listening.onresult=e=>{let final='',interim='';for(let i=e.resultIndex;i<e.results.length;i++){if(e.results[i].isFinal)final+=e.results[i][0].transcript+' ';else interim+=e.results[i][0].transcript}box.value=[original,final,interim].filter(Boolean).join(' ').trim();state.answers[questions[index].id]=box.value;localStorage.setItem(STORAGE,JSON.stringify(state))};
  listening.onerror=()=>{status.textContent='Voice stopped. Your words are still here.'};
  listening.onend=()=>{listening=null;button.textContent='🎙 Speak instead';status.textContent=box.value?'Transcript saved. Read it over whenever you want.':'Tap again whenever you’re ready.'};
  listening.start();
};

document.getElementById('submit-interview').onclick=async()=>{
  const consent=document.getElementById('consent'),status=document.getElementById('submit-status'),button=document.getElementById('submit-interview');
  if(!consent.checked){status.textContent='Please check the review box first.';return}
  const answered=questions.filter(q=>state.answers[q.id]);
  if(answered.length<3){status.textContent='Please answer at least three questions so Jimmy has enough context to help.';return}
  const answer=answered.map((q,i)=>`${i+1}. ${q.title}\n${state.answers[q.id]}`).join('\n\n');
  button.disabled=true;status.textContent='Sending your workday map to Jimmy…';
  try{
    const response=await fetch(API+'/submit',{method:'POST',headers:{'Content-Type':'application/json','Authorization':AUTH},body:JSON.stringify({kind:'kasey_discovery',question_id:'KASEY-DISCOVERY',category:'Kasey workday interview',question:'Kasey’s complete AI opportunity and workday interview',name:'Kasey Pickren',answer:`Email: ${document.getElementById('kasey-email').value.trim()||'not provided'}\nAnswered: ${answered.length} of ${questions.length}\n\n${answer}`,page:location.href,submitted_at:new Date().toISOString(),website:''})});
    if(!response.ok)throw new Error();const out=await response.json();
    status.innerHTML=`Received · <strong>${esc(out.id)}</strong><br>Jimmy will read this before anything goes to the Council. Nothing was automated.`;
    button.textContent='Workday map sent ✓';localStorage.removeItem(STORAGE);
  }catch{status.textContent='That did not reach Jimmy. Your answers are still saved on this device—please try again.';button.disabled=false}
};

render();
