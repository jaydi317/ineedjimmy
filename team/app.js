const API='https://webhook.davisdash.com/watkins-team';
let auth='';
let activeCategory='all';
let statusMap={};
const receiptTimers=new Map();

const questions=[
  {id:'V1',cat:'Vocabulary',q:'What is the one approved name for the paid membership: Thrive or Thrive Membership?',owner:'Brittany · Linas validates',why:'The meeting stopped twice because the same offer had different names.',unlock:'Every tag, product record, workflow, and report.',block:true},
  {id:'V2',cat:'Vocabulary',q:'Should every current record called “Echo Tapping Reinvention” become “Inner Circle,” with the old name kept only as an alias?',owner:'Brittany · Linas applies',why:'Two system records appear to describe one product.',unlock:'Clean reporting and Sophia’s training scope.',block:true},
  {id:'V3',cat:'Vocabulary',q:'Is the $6,000 program the same offer as Thrive Membership? What exact name should Sophia use?',owner:'Brittany · Joel',why:'Three names were used for what may be one offer.',unlock:'Sophia’s booking page, payment links, and reporting.',block:true},
  {id:'V4',cat:'Vocabulary',q:'What is the complete current offer list—with one public name, one internal short name, price, and old aliases for each?',owner:'Brittany · Linas',why:'No one place currently holds the live offer language.',unlock:'The company data dictionary.',block:true},

  {id:'S1',cat:'Lead Journey',q:'Which lead doorways must be tracked right now?',owner:'Joel proposes · Brittany approves',why:'The team named webinar registration, attendance, purchases, and calendar bookings, but not the complete list.',unlock:'A small stable source vocabulary.',block:true},
  {id:'S2',cat:'Lead Journey',q:'For attribution, do we need the first source, the latest source, every dated touch—or all three?',owner:'Joel · Linas',why:'Permanent tags cannot safely represent an unlimited event history.',unlock:'A data model that does not become 100 tags per person.',block:true},
  {id:'S3',cat:'Lead Journey',q:'What exact action makes someone a “hot lead,” and how fast should a human respond?',owner:'Brittany · Joel',why:'The webinar hand-raiser is valuable only if the response promise is clear.',unlock:'The high-intent response lane.',block:true},
  {id:'S4',cat:'Lead Journey',q:'What five customer-journey questions must Close answer at a glance?',owner:'Joel',why:'Tracking everything is not the same as making the data useful.',unlock:'The minimum viable CRM view.',block:false},

  {id:'C1',cat:'Systems',q:'Which system is the source of truth for identity, offer access, pipeline state, payment state, and support state?',owner:'Brittany · Joel · Linas',why:'Close, Stripe, Ontraport, the admin panel, and spreadsheets currently overlap.',unlock:'The current-state architecture.',block:true},
  {id:'C2',cat:'Systems',q:'Which systems currently write information into Close?',owner:'Linas',why:'We should map reality before changing it.',unlock:'The integration inventory.',block:true},
  {id:'C3',cat:'Systems',q:'Which Zaps are active, who owns each one, and when did each last succeed or fail?',owner:'Linas · Joel verifies',why:'Old pipeline stage names may still be receiving data.',unlock:'The read-only Zap audit.',block:true},
  {id:'C4',cat:'Systems',q:'Which Close fields, tags, stages, and workflows are active, stale, duplicated, or half-built?',owner:'Joel · Linas',why:'Joel’s concern is abandoned automation—not a lack of automation.',unlock:'A safe cleanup plan with rollback.',block:true},
  {id:'C5',cat:'Systems',q:'Is Ontraport still active? If so, what is it responsible for?',owner:'Brittany · Linas',why:'It was named as part of the stack but its present job is unknown.',unlock:'Keep, integrate, or retire decision.',block:false},

  {id:'SO1',cat:'Sophia',q:'Does Sophia start with her own booking page or a round-robin page with Jimmy?',owner:'Joel recommends · Brittany approves',why:'Linas cannot build the page until this is decided.',unlock:'Calendar routing.',block:true},
  {id:'SO2',cat:'Sophia',q:'What single offer may Sophia sell at launch?',owner:'Brittany',why:'Thrive, the $6K program, and Inner Circle were discussed together.',unlock:'Her first safe sales scope.',block:true},
  {id:'SO3',cat:'Sophia',q:'Who owns her confirmation, reminder, no-show, and post-call messages?',owner:'Joel drafts · Brittany approves',why:'A booking page is a customer journey, not just a calendar link.',unlock:'Her complete appointment flow.',block:true},
  {id:'SO4',cat:'Sophia',q:'What may Sophia promise, discount, refund, customize, or escalate?',owner:'Brittany · Joel',why:'Training alone does not define authority.',unlock:'A one-page sales authority sheet.',block:true},
  {id:'SO5',cat:'Sophia',q:'Does she send payment links, enter payment details, or use both—and under what rules?',owner:'Linas explains · Brittany approves',why:'The meeting contained two possible processes.',unlock:'A safe payment procedure.',block:true},
  {id:'SO6',cat:'Sophia',q:'What does “ready for the first call” mean?',owner:'Joel · Brittany',why:'Readiness must be observable, not a feeling.',unlock:'Her launch checklist.',block:true},
  {id:'SO7',cat:'Sophia',q:'Who reviews her first ten calls and what three measures define success?',owner:'Joel · Jimmy',why:'The smallest proof should teach the system before it expands.',unlock:'A bounded ten-call pilot.',block:true},
  {id:'SO8',cat:'Sophia',q:'Did the end-of-day form successfully reach Slack in Joel’s promised test?',owner:'Joel verifies · Linas fixes',why:'A commitment was made during the meeting; its receipt should be visible.',unlock:'A trustworthy daily reporting loop.',block:false},

  {id:'W1',cat:'Webinars',q:'For the next webinar, will there be a live Inner Circle checkout path?',owner:'Brittany',why:'A high-intent buyer explicitly asked to purchase during a prior webinar.',unlock:'A simple immediate-buy path.',block:true},
  {id:'W2',cat:'Webinars',q:'Who owns same-day contact with webinar nonbuyers?',owner:'Brittany · Joel',why:'The idea was approved in spirit but no trained owner was named.',unlock:'The follow-up owner and SLA.',block:true},
  {id:'W3',cat:'Webinars',q:'What phrases or actions count as a live hand raise?',owner:'Brittany · Joel',why:'The system needs a clear trigger before it can route anything.',unlock:'A high-intent lead rule.',block:false},
  {id:'W4',cat:'Webinars',q:'If the primary person is unavailable, where does a live hand-raiser go?',owner:'Joel',why:'A scalable path needs a fallback.',unlock:'The September live-response pilot.',block:false},

  {id:'P1',cat:'Money',q:'Where is the one approved payment-link library, and who may use each link?',owner:'Linas · Brittany',why:'Links appear to exist in both an admin panel and a spreadsheet.',unlock:'A reliable seller payment flow.',block:true},
  {id:'P2',cat:'Money',q:'Where is salesperson attribution recorded for every payment?',owner:'Joel · Linas',why:'Reporting fails if the sale and the seller are disconnected.',unlock:'Accurate rep reporting.',block:true},
  {id:'P3',cat:'Money',q:'Which financing paths are approved, in which countries, and what may a salesperson say about them?',owner:'Brittany · Jimmy · Joel',why:'Affirm and Coach Financing solve different moments and carry different claims.',unlock:'A financing playbook.',block:true},
  {id:'P4',cat:'Money',q:'If Coach Financing is used, who receives the handoff and what response time is promised?',owner:'Jimmy',why:'The proposed “transfer to a person” must be real before Sophia promises it.',unlock:'A verified financing handoff.',block:true},
  {id:'P5',cat:'Money',q:'Who owns failed payments today?',owner:'Brittany names · Linas maps',why:'The current safety net appears to be one manual Monday check by one person.',unlock:'A primary owner and backup.',block:true},
  {id:'P6',cat:'Money',q:'How are failed payments detected, assigned, followed up, and closed?',owner:'Linas · Joel',why:'A single-person manual process is a load-bearing risk.',unlock:'The failed-payment loop.',block:true},
  {id:'P7',cat:'Money',q:'What five numbers would let Brittany understand the week without opening a spreadsheet?',owner:'Brittany',why:'A useful report begins with the decisions it should support.',unlock:'The weekly executive scorecard.',block:false},
  {id:'P8',cat:'Money',q:'What currently causes transactions to be categorized incorrectly?',owner:'Linas · Joel',why:'Brittany said the monthly categories are unreliable.',unlock:'A reporting repair ticket.',block:false},

  {id:'SU1',cat:'Support',q:'Who is on the support team, what does each person own, and who manages them?',owner:'Mimi answers · Brittany approves',why:'Two support team members were unnamed in the meeting.',unlock:'The support ownership map.',block:true},
  {id:'SU2',cat:'Support',q:'Which inboxes, numbers, and Close channels receive customer questions?',owner:'Mimi · Linas',why:'Messages currently cross sales, VIP support, regular support, and Jimmy’s number.',unlock:'The channel inventory.',block:true},
  {id:'SU3',cat:'Support',q:'What belongs to VIP support, regular support, billing, sales, and Jimmy?',owner:'Mimi · Brittany',why:'Routing cannot be automated until the categories are defined.',unlock:'The support routing matrix.',block:true},
  {id:'SU4',cat:'Support',q:'What response time is promised for each kind of message?',owner:'Brittany · Mimi',why:'“Faster” and “not that fast” are not service levels.',unlock:'Visible response standards.',block:true},
  {id:'SU5',cat:'Support',q:'What must always be escalated to a human?',owner:'Brittany · Mimi · Joel',why:'Human handoff is the safety valve for any future automation.',unlock:'The escalation guardrail.',block:true},
  {id:'SU6',cat:'Support',q:'Where do support agents record approved answers to common questions?',owner:'Mimi',why:'The team needs one shared answer library, not individual memory.',unlock:'A support knowledge base.',block:false},

  {id:'PE1',cat:'Ownership',q:'Who owns Close, Ontraport, Stripe, Zapier, the admin panel, Monday, Slack, Fathom, the password vault, webinars, hosting, calendar, and financing?',owner:'Brittany · Joel',why:'Every system needs one person accountable when it breaks.',unlock:'The systems ownership chart.',block:true},
  {id:'PE2',cat:'Ownership',q:'Is 1Password the approved company vault, and who administers it?',owner:'Linas · Brittany',why:'The current answer was uncertain.',unlock:'A credential standard.',block:true},
  {id:'PE3',cat:'Ownership',q:'Are logins individual, role-based, or shared—and what should the rule be?',owner:'Joel · Linas',why:'Usability and offboarding both depend on this.',unlock:'The access matrix.',block:false},
  {id:'PE4',cat:'Ownership',q:'Who owns each automation after it launches?',owner:'Joel',why:'“Built” without an operator is how systems become archaic.',unlock:'A maintenance owner on every ticket.',block:true},
  {id:'PE5',cat:'Ownership',q:'Where should SOPs, Looms, decision records, and system maps live?',owner:'Joel recommends · Brittany approves',why:'One page cannot become another orphaned documentation island.',unlock:'The documentation home.',block:true},
  {id:'PE6',cat:'Ownership',q:'Who is Sophia’s one manager and escalation point?',owner:'Brittany',why:'She currently appears to have multiple partial owners.',unlock:'Clear rep support.',block:true},

  {id:'J1',cat:'Council Pilot',q:'What is the one workflow the Council should prove first?',owner:'Jimmy proposes · Brittany and Joel approve',why:'A small governed proof will communicate more than a large future vision.',unlock:'Pilot scope.',block:true},
  {id:'J2',cat:'Council Pilot',q:'What exactly counts as Jimmy’s approval: a button, a reply, or something else?',owner:'Jimmy · Joel',why:'Approval must be auditable and unambiguous.',unlock:'The intake gate.',block:true},
  {id:'J3',cat:'Council Pilot',q:'Who on the team may ask the Council a question?',owner:'Brittany · Jimmy',why:'Open access without routing can create a second backlog.',unlock:'Team intake permissions.',block:false},
  {id:'J4',cat:'Council Pilot',q:'What customer data must never enter a Council packet?',owner:'Joel recommends · Brittany approves',why:'The pilot needs an explicit privacy boundary.',unlock:'A safe data-handling rule.',block:true},
  {id:'J5',cat:'Council Pilot',q:'What ten-case result would earn expansion—and what result would stop the pilot?',owner:'Joel · Jimmy',why:'A pilot without an exit rule quietly becomes permanent.',unlock:'The proof standard.',block:true},
  {id:'J6',cat:'Council Pilot',q:'Who can pause, roll back, or reject a Council-built workflow?',owner:'Brittany · Joel',why:'Governance includes a visible off switch.',unlock:'The control boundary.',block:true},

  {id:'A1',cat:'Access',q:'Can the Council receive a read-only Close view or export plus one anonymized customer journey?',owner:'Linas · Brittany approves',why:'The current system must be observed before it is redesigned.',unlock:'The customer-journey audit.',block:false},
  {id:'A2',cat:'Access',q:'Can the Council receive Stripe reporting access with no refund or write permissions?',owner:'Linas · Brittany approves',why:'Revenue and failed-payment questions need source evidence.',unlock:'The payment-state map.',block:false},
  {id:'A3',cat:'Access',q:'Can Joel and the Council receive the promised admin-panel walkthrough and a read-only view?',owner:'Linas',why:'This was explicitly committed to in the meeting.',unlock:'The reporting audit.',block:false},
  {id:'A4',cat:'Access',q:'Can the Council receive a Zapier workflow list with run and error history?',owner:'Linas',why:'A read-only audit is safer than rebuilding from memory.',unlock:'The integration health map.',block:false},
  {id:'A5',cat:'Access',q:'Which sales calls, approved templates, SOPs, support examples, and baseline metrics may be used in the pilot?',owner:'Brittany · Joel',why:'The Council needs representative evidence, not unlimited data.',unlock:'The pilot source packet.',block:false},
  {id:'A6',cat:'Access',q:'Which Slack channels should receive team questions, Jimmy approvals, and verified receipts?',owner:'Brittany · Joel · Jimmy',why:'Two clear channels beat a flood of notifications.',unlock:'The human-visible routing layer.',block:false}
];

const gate=document.getElementById('gate'),app=document.getElementById('app');
function unlock(user,pass){
  if(user.toLowerCase()==='team'&&pass==='team'){
    auth='Basic '+btoa(user+':'+pass);sessionStorage.setItem('wv-team','1');
    gate.hidden=true;app.hidden=false;document.body.classList.remove('locked');render();syncStatus();return true;
  }return false;
}
document.getElementById('gate-form').addEventListener('submit',e=>{e.preventDefault();if(!unlock(document.getElementById('username').value.trim(),document.getElementById('password').value))document.getElementById('gate-error').textContent='That username or password is not correct.'});
document.getElementById('logout').addEventListener('click',()=>{sessionStorage.removeItem('wv-team');location.reload()});
if(sessionStorage.getItem('wv-team')==='1')unlock('team','team');

function render(){
  const categories=[...new Set(questions.map(x=>x.cat))];
  document.getElementById('question-count').textContent=questions.length;
  document.getElementById('category-count').textContent=categories.length;
  document.getElementById('filters').innerHTML=['all',...categories].map(c=>`<button class="filter ${c===activeCategory?'active':''}" data-filter="${esc(c)}">${c==='all'?'All questions':esc(c)}</button>`).join('');
  document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{activeCategory=b.dataset.filter;render()});
  const visible=questions.filter(x=>activeCategory==='all'||x.cat===activeCategory);
  document.getElementById('question-list').innerHTML=visible.map(x=>{
    const approved=['APPROVED_FOR_COUNCIL','COUNCIL_RECEIVED','VERIFIED'].includes(statusMap[x.id]);
    return `<article class="question-card ${approved?'approved':''}"><div class="question-id">${x.id}</div><div><h3>${esc(x.q)}</h3><p>${esc(x.why)} <b>Unlocks:</b> ${esc(x.unlock)}</p></div><div class="question-owner"><small>Best answered by</small><b>${esc(x.owner)}</b></div><button class="answer-button" data-open-question="${x.id}">${approved?'✓ Approved':'Answer · type or voice'}</button></article>`
  }).join('');
  document.querySelectorAll('[data-open-question]').forEach(b=>b.onclick=()=>openQuestion(b.dataset.openQuestion));
  updateProgress();
}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

const dialog=document.getElementById('answer-dialog');
document.getElementById('dialog-close').addEventListener('click',()=>dialog.close());
function openQuestion(id){
  const x=questions.find(q=>q.id===id);if(!x)return;
  document.getElementById('dialog-id').value=x.id;document.getElementById('dialog-category').textContent=x.cat+' · '+x.id;
  document.getElementById('dialog-question').textContent=x.q;document.getElementById('dialog-why').textContent=x.why+' This unlocks '+x.unlock.toLowerCase();
  document.getElementById('answer-status').textContent='';document.getElementById('answer-text').value='';dialog.showModal();
}

function savedReceipts(){
  try{return JSON.parse(sessionStorage.getItem('wv-team-receipts')||'[]').filter(x=>/^WV-\d{8}-[A-F0-9]{6}$/.test(x.id)&&x.receipt).slice(0,8)}catch{return []}
}
function rememberReceipt(id,label,receipt){
  const items=savedReceipts().filter(x=>x.id!==id);items.unshift({id,receipt,label:String(label||'Team request').slice(0,120),at:new Date().toISOString()});
  sessionStorage.setItem('wv-team-receipts',JSON.stringify(items.slice(0,8)));renderReceipts();
}
const receiptStages={
  WAITING_FOR_JIMMY:{at:1,label:'Saved · waiting for Jimmy'},
  APPROVED_FOR_COUNCIL:{at:2,label:'Jimmy approved · routing to the Council'},
  COUNCIL_RECEIVED:{at:3,label:'Council has it · preparing the readback'},
  VERIFIED:{at:4,label:'Answer ready'},
  REJECTED_BY_JIMMY:{at:1,label:'Jimmy sent this one back'}
};
function receiptCard(item,data){
  const stage=receiptStages[data?.status]||receiptStages.WAITING_FOR_JIMMY;
  const steps=['Saved','Jimmy decides','Council reads','Answer ready'];
  const alertPending=data?.status==='WAITING_FOR_JIMMY'&&data?.notification_sent===false;
  const stateLabel=alertPending?'Saved · Jimmy’s alert is retrying':stage.label;
  const alertNote=alertPending?'<p class="receipt-alert">Your answer is safely stored. The alert did not confirm on the first try, so the system is retrying instead of pretending Jimmy saw it.</p>':'';
  return `<article class="receipt-card" data-receipt="${esc(item.id)}"><div class="receipt-head"><div><small>RECEIPT</small><b>${esc(item.id)}</b></div><span class="receipt-state">${esc(stateLabel)}</span></div><p class="receipt-label">${esc(item.label)}</p>${alertNote}<div class="receipt-steps">${steps.map((s,i)=>`<span class="${i<stage.at?'done':i===stage.at?'current':''}"><i>${i<stage.at?'✓':i+1}</i>${s}</span>`).join('')}</div>${data?.status==='VERIFIED'&&data.response?`<div class="council-readback"><small>${esc(data.response_by||'Council intake')}</small><div>${esc(data.response).replace(/\n/g,'<br>')}</div></div>`:''}</article>`
}
async function fetchReceipt(item){
  const r=await fetch(API+'/item/'+encodeURIComponent(item.id)+'?receipt='+encodeURIComponent(item.receipt),{headers:{'Authorization':auth}});if(!r.ok)throw new Error();return r.json();
}
async function updateReceipt(item){
  const host=document.querySelector(`[data-receipt="${item.id}"]`);if(!host)return;
  try{const data=await fetchReceipt(item);host.outerHTML=receiptCard(item,data);if(data.status==='VERIFIED'||data.status==='REJECTED_BY_JIMMY'){clearInterval(receiptTimers.get(item.id));receiptTimers.delete(item.id)}}catch{host.querySelector('.receipt-state').textContent='Saved · status check will retry'}
}
function renderReceipts(){
  const items=savedReceipts(),section=document.getElementById('recent-receipts'),list=document.getElementById('receipt-list');if(!section||!list)return;
  section.hidden=!items.length;list.innerHTML=items.map(item=>receiptCard(item,{status:'WAITING_FOR_JIMMY'})).join('');
  items.forEach(item=>{updateReceipt(item);if(!receiptTimers.has(item.id))receiptTimers.set(item.id,setInterval(()=>updateReceipt(item),10000))});
}

async function submitItem(data,statusEl,button){
  statusEl.textContent='Sending to Jimmy’s approval queue…';button.disabled=true;
  try{
    const r=await fetch(API+'/submit',{method:'POST',headers:{'Content-Type':'application/json','Authorization':auth},body:JSON.stringify({...data,page:location.href,submitted_at:new Date().toISOString(),website:''})});
    if(!r.ok)throw new Error('Submission failed');const out=await r.json();
    statusEl.textContent=out.notification_sent?`Received · ${out.id} · Waiting for Jimmy’s approval.`:`Saved · ${out.id} · Jimmy’s alert is retrying.`;
    rememberReceipt(out.id,data.question||'Question for the Council',out.receipt);
    const saved=savedReceipts().find(x=>x.id===out.id);if(saved){statusEl.innerHTML=receiptCard(saved,{status:out.status||'WAITING_FOR_JIMMY'})}
    return out;
  }catch(err){statusEl.textContent='That did not reach the approval queue. Your words are still here—please try again.';return null}
  finally{button.disabled=false}
}

document.getElementById('answer-form').addEventListener('submit',async e=>{
  e.preventDefault();const id=document.getElementById('dialog-id').value,x=questions.find(q=>q.id===id),button=e.submitter;
  const name=document.getElementById('answer-name').value.trim(),answer=document.getElementById('answer-text').value.trim();
  if(!name||!answer)return;
  const out=await submitItem({kind:'answer',question_id:id,category:x.cat,question:x.q,name,answer},document.getElementById('answer-status'),button);
  if(out){statusMap[id]='WAITING_FOR_JIMMY'}
});

document.getElementById('council-form').addEventListener('submit',async e=>{
  e.preventDefault();const f=e.currentTarget,button=e.submitter,name=f.name.value.trim(),question=f.question.value.trim();if(!name||!question)return;
  const out=await submitItem({kind:'council_question',name,answer:question,category:'Team question',question:'New question for the Council'},document.getElementById('council-status'),button);
  if(out){f.reset()}
});

function updateProgress(){
  const approved=questions.filter(q=>['APPROVED_FOR_COUNCIL','COUNCIL_RECEIVED','VERIFIED'].includes(statusMap[q.id])).length,pct=Math.round((approved/questions.length)*100);
  document.getElementById('answered-count').textContent=approved;document.getElementById('progress-copy').textContent=`${approved} of ${questions.length} decisions approved`;
  document.getElementById('progress-ring').style.setProperty('--progress',pct+'%');
}
async function syncStatus(){
  try{const r=await fetch(API+'/status-summary',{headers:{'Authorization':auth}});if(!r.ok)throw new Error();const data=await r.json();statusMap=data.question_status||{};document.getElementById('last-sync').textContent='Last receipt sync: '+new Date(data.generated_at).toLocaleString();render();renderReceipts()}
  catch{document.getElementById('last-sync').textContent='Approval queue is temporarily offline · page remains readable';}
}

let recognition=null;
document.querySelectorAll('[data-voice-target]').forEach(button=>button.addEventListener('click',()=>startVoice(button)));
function startVoice(button){
  const Speech=window.SpeechRecognition||window.webkitSpeechRecognition,target=document.getElementById(button.dataset.voiceTarget),status=button.parentElement.querySelector('.voice-status');
  if(!Speech){status.textContent='Use the microphone on your phone keyboard to dictate here.';target.focus();return}
  if(recognition){recognition.stop();recognition=null;button.textContent='🎙 Speak instead';status.textContent='Stopped';return}
  const start=target.value.trim();recognition=new Speech();recognition.continuous=true;recognition.interimResults=true;recognition.lang='en-US';
  recognition.onstart=()=>{button.textContent='■ Stop recording';status.textContent='Listening… speak normally'};
  recognition.onresult=e=>{let final='',interim='';for(let i=e.resultIndex;i<e.results.length;i++){if(e.results[i].isFinal)final+=e.results[i][0].transcript+' ';else interim+=e.results[i][0].transcript}target.value=[start,final,interim].filter(Boolean).join(start?' ':'').trim()};
  recognition.onerror=()=>{status.textContent='Voice stopped. You can keep typing.'};
  recognition.onend=()=>{recognition=null;button.textContent='🎙 Speak instead';status.textContent=target.value?'Transcript ready to review.':'Tap again to speak.'};
  recognition.start();
}

setInterval(()=>{if(!app.hidden)syncStatus()},60000);
