const imageRoot = "assets/images/";
const firstBatchRoot = "assets/first-batch/";

const firstBatch = Array.from({ length: 94 }, (_, index) => {
  const id = index + 22;
  return {
    id,
    title: `First-batch doodle ${id}`,
    image: `doodle-${id}.webp`,
    belief: "One Brittany teaching was turned into a visual idea a woman could recognize in a glance.",
    category: `THE FIRST VISUAL HARVEST · DOODLE ${id}`,
    use: "A visual seed for an article, email, video, webinar, social post, curriculum moment or future keystone.",
    status: "One of 94 rendered doodles from the original 100-idea sprint. The later manifesto pass added full-copy context, pacing and heart."
  };
});

const manifestoVisuals = [
  {
    title: "Your Safety System",
    image: "manifesto-v-08-hidden-safety-system-v1-selected.webp",
    belief: "The pattern is not random. A safety system can keep running on information learned long ago.",
    category: "FROM THE MANIFESTO",
    use: "The keystone mechanism in a sales letter, webinar, article or opening YouTube explanation.",
    status: "Approved visual from the manifesto."
  },
  {
    title: "Food's Job Badge",
    image: "manifesto-v-07-foods-job-badge-v1-selected.webp",
    belief: "Food may be doing a protective job rather than proving that she is weak.",
    category: "FROM THE MANIFESTO",
    use: "Emotional-eating education, webinar teaching, nurture email or social carousel.",
    status: "Approved visual from the manifesto."
  },
  {
    title: "How the Chain Begins",
    image: "manifesto-v-04-chain-v1-selected.webp",
    belief: "An unsafe moment can change the software; protection may then keep running by itself.",
    category: "FROM THE MANIFESTO",
    use: "Trauma reframing, limiting-belief education, opening mechanism or mini-lesson sequence.",
    status: "Approved visual from the manifesto."
  },
  {
    title: "The Echo Filing Cabinet",
    image: "manifesto-v-05-echo-filing-cabinet-v1-selected.webp",
    belief: "A present cue can pull an old file and make yesterday feel current.",
    category: "FROM THE MANIFESTO",
    use: "Trigger explanation, article illustration, live coaching recap or webinar slide.",
    status: "Approved visual from the manifesto."
  },
  {
    title: "The Urge Is a Wave",
    image: "manifesto-v-10-craving-wave-v1-selected.webp",
    belief: "An urge rises, crests and passes; intensity is not permanence.",
    category: "FROM THE MANIFESTO",
    use: "Craving education, screen-share teaching, short-form video or printable reminder.",
    status: "Approved visual from the manifesto."
  },
  {
    title: "Who's Really at the Counter?",
    image: "manifesto-v-13-whos-at-the-counter-v1-selected.webp",
    belief: "The child carrying the echo and the old parent voice can be present before the adult walks into the room.",
    category: "FROM THE MANIFESTO",
    use: "Night-eating lesson, inner-parts explanation, webinar sequence or long-form article.",
    status: "Approved visual from the manifesto."
  },
  {
    title: "One Mountain. Three Questions.",
    image: "manifesto-v-15-one-mountain-three-questions-v1-selected.webp",
    belief: "Quiet the noise, rewrite the software and reclaim the life are stages of one journey.",
    category: "FROM THE MANIFESTO",
    use: "Offer architecture, keynote roadmap, webinar close or program orientation.",
    status: "Approved visual from the manifesto."
  },
  {
    title: "The Fences Are Everywhere",
    image: "manifesto-v-18-fences-everywhere-v1-selected.webp",
    belief: "Old programming can limit far more than food—it can fence off voice, love, visibility, money and desire.",
    category: "FROM THE MANIFESTO",
    use: "Whole-life positioning, manifesto finale, brand expansion or authority content.",
    status: "Approved visual from the manifesto."
  }
];

const dataStories = [
  {
    title: "The tool stopped. The old program remained.",
    image: "data-story-v-c1-medication-program-data-story.webp",
    belief: "An intervention can change appetite while it is active without changing the program beneath it.",
    category: "DATA STORY 01",
    use: "A science-aware sales argument about the difference between changing symptoms and changing drivers.",
    status: "Finished data-story visual. Source and qualification remain visible."
  },
  {
    title: "The women succeeding were the ones leaving.",
    image: "data-story-v-c2-ace-study-mystery-data-story.webp",
    belief: "Success itself may activate a protection problem that the visible treatment never addressed.",
    category: "DATA STORY 02",
    use: "The ACE Study origin story, self-sabotage reframing, protection lesson or keynote reveal.",
    status: "Finished illustrative data story. Clearly labeled illustrative rather than plotted statistical data."
  },
  {
    title: "Knowing wasn't enough.",
    image: "data-story-v-c3-heart-bypass-9-of-10-data-story.webp",
    belief: "Even life-or-death knowledge may not be enough to change the system producing behavior.",
    category: "DATA STORY 03",
    use: "Willpower objection, behavior-change education, sales mechanism or webinar belief shift.",
    status: "Finished pictogram. The source remains qualified as an attributed clinical observation."
  },
  {
    title: "Everything got better. We didn't feel it.",
    image: "data-story-v-c4-paradox-of-progress-data-story.webp",
    belief: "External progress does not automatically create an improved internal experience.",
    category: "DATA STORY 04",
    use: "Whole-life authority, hedonic adaptation, fulfillment article or manifesto expansion.",
    status: "Finished directionally accurate data story with source notes retained."
  }
];

const keystones = [
  { id: 22, title: "The Parking Brake", image: "keystone-022-the-parking-brake.webp", filter: "protection", label: "PROTECTION", belief: "Trying harder feels exhausting when an unseen protective brake is still engaged.", use: "Sales letters, resistance lessons, webinars and any moment where “try harder” must be replaced." },
  { id: 23, title: "The Tiny Rope", image: "keystone-023-the-tiny-rope.webp", filter: "protection", label: "OLD BELIEFS", belief: "Present strength can still be governed by an old conclusion.", use: "Limiting-belief articles, stage stories, social posts and the opening of a transformation sequence." },
  { id: 24, title: "The Root", image: "keystone-024-the-root.webp", filter: "food", label: "ROOT CAUSE", belief: "Repeated surface fixes do not last while the generating root remains.", use: "Diet differentiation, sales mechanisms, webinar teaching and article navigation." },
  { id: 26, title: "Her Empty Chair", image: "keystone-026-her-empty-chair.webp", filter: "whole-life", label: "SELF-ABANDONMENT", belief: "Caring for everyone can quietly become leaving herself out of her own life.", use: "Whole-life identity work, boundaries, motherhood and a signature brand-expansion message." },
  { id: 37, title: "The Hidden Agreement", image: "keystone-037-the-hidden-agreement.webp", filter: "protection", label: "SAFETY", belief: "An unseen safety agreement can outweigh a conscious goal without proving weakness.", use: "The core hidden-agreement campaign, self-sabotage teaching, quiz result and sales-letter mechanism." },
  { id: 39, title: "The Warning Light", image: "keystone-039-the-warning-light.webp", filter: "food", label: "SYMPTOM VS. SIGNAL", belief: "Silencing a symptom is different from addressing what it reports.", use: "Food-as-messenger content, root-cause education, short videos and opening analogies." },
  { id: 45, title: "Tiny Kept Promises", image: "keystone-045-tiny-kept-promises.webp", filter: "change", label: "SELF-TRUST", belief: "Self-trust is rebuilt through evidence rather than speeches.", use: "Habit support, onboarding, nurture emails, curriculum and post-purchase encouragement." },
  { id: 47, title: "One Root, Many Ripples", image: "keystone-047-one-root-many-ripples.webp", filter: "whole-life", label: "LEVERAGE", belief: "Addressing one generating pattern can affect several areas of life.", use: "Whole-life positioning, program promise, webinar map and authority articles." },
  { id: 55, title: "The Emotional Backpack", image: "keystone-055-the-emotional-backpack.webp", filter: "whole-life", label: "OVERWHELM", belief: "Some exhaustion comes from carrying feelings and responsibilities that belong to other people.", use: "Boundaries, resentment, people-pleasing, caregiver content and social recognition posts." },
  { id: 56, title: "The Invisible Ceiling", image: "keystone-056-the-invisible-ceiling.webp", filter: "whole-life", label: "VISIBILITY", belief: "A woman may keep shrinking beneath a limit that is no longer actually there.", use: "Success, visibility, receiving, identity expansion and self-sabotage content." },
  { id: 65, title: "The Receiving Door", image: "keystone-065-the-receiving-door.webp", filter: "whole-life", label: "RECEIVING", belief: "Wanting support is different from feeling safe enough to receive it.", use: "Support, intimacy, delegation, asking for help and whole-life coaching." },
  { id: 68, title: "The Borrowed Emergency", image: "keystone-068-the-borrowed-emergency.webp", filter: "whole-life", label: "BOUNDARIES", belief: "Another person's urgency is information—not automatic ownership.", use: "Boundaries, family dynamics, burnout, resentment and high-performing-woman content." },
  { id: 70, title: "The Wrong Key", image: "keystone-070-the-wrong-key.webp", filter: "change", label: "METHOD", belief: "More willpower cannot unlock a problem whose lock is asking for understanding.", use: "Solution-aware marketing, objection handling, method explanation and sales webinars." },
  { id: 76, title: "The Scale Runs the Day", image: "keystone-076-the-scale-runs-the-day.webp", filter: "food", label: "WEIGHT & MOOD", belief: "One number can become more than information when it is allowed to steer the whole day.", use: "Scale anxiety, body image, morning routines, social posts and diagnostic articles." },
  { id: 86, title: "The Inherited Recipe", image: "keystone-086-the-inherited-recipe.webp", filter: "whole-life", label: "FAMILY PATTERNS", belief: "A woman can love her family and revise an emotional recipe she inherited.", use: "Generational patterns, motherhood, limiting beliefs, family loyalty and healing content." },
  { id: 89, title: "The Mental Tax Meter", image: "keystone-089-the-mental-tax-meter.webp", filter: "food", label: "FOOD NOISE", belief: "The food argument can cost attention and life—not just calories or pounds.", use: "Food-noise hooks, problem-aware articles, webinar openings and sales-letter stakes." },
  { id: 97, title: "The All-or-Nothing Switch", image: "keystone-097-the-all-or-nothing-switch.webp", filter: "food", label: "RIGID RULES", belief: "A rigid on-off rule leaves no room for learning, adjustment or enough.", use: "Perfectionism, dieting, relapse, habit flexibility and social education." },
  { id: 109, title: "Data, Not a Verdict", image: "keystone-109-data-not-a-verdict.webp", filter: "change", label: "SHAME & LEARNING", belief: "An eating episode can become information for the next response rather than a final judgment about character.", use: "Post-slip support, shame reduction, curriculum, emails and coaching tools." },
  { id: 112, title: "Life on Layaway", image: "keystone-112-life-on-layaway.webp", filter: "whole-life", label: "DEFERRED LIVING", belief: "Waiting to live until the body changes can postpone the life worth reclaiming.", use: "Body-image messaging, identity work, program vision and emotionally powerful closings." },
  { id: 115, title: "Her Chair Is Filled", image: "keystone-115-her-chair-is-filled.webp", filter: "change", label: "TRANSFORMATION", belief: "Transformation includes placing herself back inside the life she has been serving.", use: "The closing frame to Her Empty Chair, program outcome, celebration email or keynote finale." }
];

const sequences = [
  {
    id: "old-alarm",
    tab: "The Old Alarm",
    title: "The Old Alarm",
    deck: "A real reaction does not always mean the old danger is happening again.",
    question: "Why can my reaction feel bigger than the present moment?",
    frames: [
      { image: "sequence-062-old-alarm-1-real-fire.webp", beat: "FRAME 01", title: "There was a real fire", copy: "The alarm was installed for a reason." },
      { image: "sequence-063-old-alarm-2-burnt-toast.webp", beat: "FRAME 02", title: "Now there is burnt toast", copy: "A safer moment can activate the same system." },
      { image: "sequence-064-old-alarm-3-same-alarm.webp", beat: "FRAME 03", title: "Same alarm. Different danger.", copy: "The reaction is real; the original emergency may not be." }
    ]
  },
  {
    id: "two-hungers",
    tab: "Two Hungers",
    title: "Two Hungers",
    deck: "Two urges can feel similar while asking for completely different answers.",
    question: "How do I know what I actually need right now?",
    frames: [
      { image: "sequence-072-two-hungers-1-physical-hunger.webp", beat: "FRAME 01", title: "The body needs fuel", copy: "Physical hunger deserves food—not suspicion." },
      { image: "sequence-073-two-hungers-2-another-need.webp", beat: "FRAME 02", title: "Something else needs care", copy: "An urge may also be asking for relief, rest or connection." },
      { image: "sequence-074-two-hungers-3-different-answers.webp", beat: "FRAME 03", title: "Different need. Different answer.", copy: "Distinguish first. Respond second. Judge neither." }
    ]
  },
  {
    id: "food-again",
    tab: "Food Becomes Food",
    title: "Food Becomes Food Again",
    deck: "Freedom is not removing food. It is releasing the emotional jobs food was forced to carry.",
    question: "What would change if food did not have to do everything for me?",
    frames: [
      { image: "sequence-052-food-again-1-too-many-jobs.webp", beat: "FRAME 01", title: "Food carries too many jobs", copy: "Comfort, reward, escape, quiet, rebellion and company." },
      { image: "sequence-053-food-again-2-set-them-down.webp", beat: "FRAME 02", title: "Meet the needs directly", copy: "The extra jobs can begin to be set down." },
      { image: "sequence-054-food-again-3-just-food.webp", beat: "FRAME 03", title: "Food becomes food again", copy: "Still available. No longer responsible for everything." }
    ]
  },
  {
    id: "protection-upgrade",
    tab: "Protection Upgrade",
    title: "Protection Upgrade",
    deck: "Change is not destroying the protective part. It is giving her better tools.",
    question: "What if self-sabotage is an old form of protection?",
    frames: [
      { image: "sequence-077-protection-upgrade-1-the-old-shield.webp", beat: "FRAME 01", title: "Meet the old shield", copy: "The behavior may once have helped her feel safer." },
      { image: "sequence-078-protection-upgrade-2-thank-it.webp", beat: "FRAME 02", title: "Understand before changing", copy: "Protection can be respected without being obeyed forever." },
      { image: "sequence-079-protection-upgrade-3-new-tools.webp", beat: "FRAME 03", title: "Offer better protection", copy: "New tools make the old one less necessary." }
    ]
  },
  {
    id: "craving-wave",
    tab: "Craving Wave",
    title: "The Craving Wave",
    deck: "An urge has a shape in time. It is not a permanent command.",
    question: "Why does a craving feel as though it will never stop?",
    frames: [
      { image: "sequence-105-craving-wave-1-it-rises.webp", beat: "FRAME 01", title: "It rises", copy: "Intensity begins building." },
      { image: "sequence-106-craving-wave-2-it-crests.webp", beat: "FRAME 02", title: "It crests", copy: "The strongest moment is still a moment." },
      { image: "sequence-107-craving-wave-3-it-passes.webp", beat: "FRAME 03", title: "It passes", copy: "Time, attention and another response can change the wave." }
    ]
  }
];

const operatingManual = [
  { number: "00", title: "It's Not Your Fault", question: "Why do I keep doing this when I know better?", visual: "Background Programs" },
  { number: "01", title: "Two Systems", question: "How can I want change and fight it at the same time?", visual: "Gas & Brake" },
  { number: "02", title: "How a Program Gets Written", question: "How can one old moment affect me years later?", visual: "Little Her + Program Cards" },
  { number: "03", title: "When Now Feels Like Then", question: "Why is my reaction bigger than the present moment?", visual: "The Old Alarm" },
  { number: "04", title: "Meet the Protector", question: "Could self-sabotage be trying to protect me?", visual: "The Protector" },
  { number: "05", title: "The Many Jobs of Food", question: "Why do I reach for food when I am not physically hungry?", visual: "Food's Job Badge" },
  { number: "06", title: "What Kind of Urge Is This?", question: "Craving, body hunger or emotional eating?", visual: "Two Hungers" },
  { number: "07", title: "The Restrict–Rebel–Regret Loop", question: "Why am I good all day and out of control at night?", visual: "The Tightening Spring" },
  { number: "08", title: "Why Surface Solutions Wear Off", question: "Why does every plan work until it doesn't?", visual: "Faucet + Mop" },
  { number: "09", title: "The Last Domino", question: "What if weight is not the first thing to push on?", visual: "Domino Chain" },
  { number: "10", title: "Shame Is Not a Strategy", question: "Why doesn't criticizing myself create control?", visual: "The Shame Loop" },
  { number: "11", title: "Reclaiming the Driver's Seat", question: "How can an automatic pattern actually change?", visual: "The Update Desk" }
];

function modalPayload(item) {
  return {
    title: item.title,
    image: item.image,
    belief: item.belief,
    category: item.category || item.label || "VISUAL CONCEPT",
    use: item.use || "Article, webinar, sales letter, email, social post or teaching sequence.",
    status: item.status || "Concept prototype · the belief and visual metaphor are ready for KEEP / REWORK / KILL selection."
  };
}

function renderManifesto() {
  const grid = document.querySelector("#manifestoGrid");
  grid.innerHTML = manifestoVisuals.map((item) => `
    <button type="button" class="manifesto-tile" data-modal="${item.title}">
      <img src="${imageRoot}${item.image}" alt="${item.title}" loading="lazy">
      <span class="tile-caption"><strong>${item.title}</strong><span>Open the idea ↗</span></span>
    </button>
  `).join("");
}

function renderFirstBatch() {
  const grid = document.querySelector("#firstBatchGrid");
  grid.innerHTML = firstBatch.map((item) => `
    <button type="button" class="batch-thumb" data-batch-id="${item.id}" aria-label="Open first-batch doodle ${item.id}">
      <img src="${firstBatchRoot}${item.image}" alt="First-batch Brittany visual ${item.id}" loading="lazy">
      <span>${String(item.id).padStart(3, "0")}</span>
    </button>
  `).join("");
}

function renderDataStories() {
  const grid = document.querySelector("#dataGrid");
  grid.innerHTML = dataStories.map((item, index) => `
    <button type="button" class="data-card" data-data-index="${index}">
      <img src="${imageRoot}${item.image}" alt="${item.title}" loading="lazy">
      <span class="data-card-copy"><span>0${index + 1}</span><span><strong>${item.title}</strong><p>${item.belief}</p></span></span>
    </button>
  `).join("");
}

function renderKeystones() {
  const grid = document.querySelector("#keystoneGrid");
  grid.innerHTML = keystones.map((item) => `
    <button type="button" class="keystone-card" data-filter="${item.filter}" data-search="${(item.title + " " + item.label + " " + item.belief).toLowerCase()}" data-keystone-id="${item.id}">
      <img src="${imageRoot}${item.image}" alt="${item.title}" loading="lazy">
      <span class="keystone-card-copy"><span>${item.label}</span><strong>${item.title}</strong></span>
    </button>
  `).join("");
}

function renderSequence(index = 0) {
  const sequence = sequences[index];
  const tabs = document.querySelector("#sequenceTabs");
  const stage = document.querySelector("#sequenceStage");
  tabs.innerHTML = sequences.map((item, itemIndex) => `
    <button type="button" class="sequence-tab ${itemIndex === index ? "active" : ""}" role="tab" aria-selected="${itemIndex === index}" data-sequence-index="${itemIndex}">${item.tab}</button>
  `).join("");
  stage.innerHTML = `
    <div class="sequence-header">
      <div><span class="chapter-label coral">THREE-FRAME EXPLANATION</span><h3>${sequence.title}</h3><p>${sequence.deck}</p></div>
      <div class="sequence-question"><span>THE QUESTION SHE IS ASKING</span><strong>${sequence.question}</strong></div>
    </div>
    <div class="sequence-frames">
      ${sequence.frames.map((frame) => `
        <article class="sequence-frame">
          <img src="${imageRoot}${frame.image}" alt="${frame.title}" loading="lazy">
          <span>${frame.beat}</span><strong>${frame.title}</strong><p>${frame.copy}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function renderManual() {
  const path = document.querySelector("#manualPath");
  path.innerHTML = operatingManual.map((item) => `
    <article class="manual-card">
      <span class="manual-number">${item.number}</span>
      <span class="manual-status">MAPPED</span>
      <h3>${item.title}</h3>
      <p>${item.question}</p>
      <span class="manual-visual">VISUAL SPINE · ${item.visual}</span>
    </article>
  `).join("");
}

const modal = document.querySelector("#imageModal");
const modalImage = document.querySelector("#modalImage");
const modalTitle = document.querySelector("#modalTitle");
const modalBelief = document.querySelector("#modalBelief");
const modalCategory = document.querySelector("#modalCategory");
const modalUse = document.querySelector("#modalUse");
const modalStatus = document.querySelector("#modalStatus");

function openModal(item) {
  const data = modalPayload(item);
  modalImage.src = item.batch ? `${firstBatchRoot}${data.image}` : `${imageRoot}${data.image}`;
  modalImage.alt = data.title;
  modalTitle.textContent = data.title;
  modalBelief.textContent = data.belief;
  modalCategory.textContent = data.category;
  modalUse.textContent = data.use;
  modalStatus.textContent = data.status;
  document.body.classList.add("modal-open");
  modal.showModal();
}

function closeModal() {
  modal.close();
  document.body.classList.remove("modal-open");
}

const ecosystemRoutes = {
  email: {
    doorTitle: "A Tuesday email",
    doorCopy: "Names the exact 9 p.m. kitchen moment she recognizes.",
    hubTitle: "The emotional-eating explainer",
    hubCopy: "The doodle, stories, evidence and next step live together.",
    rooms: ["LEARN", "STORIES", "SCIENCE", "THRIVE"],
    conclusion: "“This is not a willpower problem.”",
    story: "She was not pushed through a funnel. She followed her own curiosity—and every page became another witness."
  },
  youtube: {
    doorTitle: "A twelve-minute explainer",
    doorCopy: "Brittany draws the loop while describing a real woman’s Thursday night.",
    hubTitle: "The visual lesson page",
    hubCopy: "The complete drawing, sources and related explanations wait below the video.",
    rooms: ["LEARN", "SCIENCE", "STORIES"],
    conclusion: "“My reaction has a shape—and a reason.”",
    story: "The video earns attention. The linked visual world turns a passing view into a new way of seeing herself."
  },
  social: {
    doorTitle: "One screenshotable doodle",
    doorCopy: "A familiar object makes an invisible struggle obvious in three seconds.",
    hubTitle: "The keystone explanation",
    hubCopy: "The caption opens the doorway; the full article finishes the belief change.",
    rooms: ["LEARN", "STORIES"],
    conclusion: "“That picture is exactly what I do.”",
    story: "The image travels because it names her. The ecosystem catches the curiosity the image creates."
  },
  letter: {
    doorTitle: "A manifesto sales letter",
    doorCopy: "Copy and drawings make the argument feel discovered instead of announced.",
    hubTitle: "The proof ecosystem",
    hubCopy: "Every unfamiliar idea has a warm, optional rabbit hole instead of a long detour.",
    rooms: ["LEARN", "SCIENCE", "STORIES", "THRIVE"],
    conclusion: "“They understand my problem better than I do.”",
    story: "The letter can stay emotionally clean because the deeper explanations already have homes of their own."
  },
  webinar: {
    doorTitle: "A live drawing on a webinar",
    doorCopy: "One line, one object and one reveal carry the explanation while Brittany teaches.",
    hubTitle: "The lesson and replay library",
    hubCopy: "After the webinar, the same map keeps answering the next question.",
    rooms: ["LEARN", "STORIES", "THRIVE"],
    conclusion: "“I can finally see why the old plans wore off.”",
    story: "The drawing becomes the memory hook. The hub becomes the place she goes when she is ready for more."
  },
  stage: {
    doorTitle: "One keystone on a giant screen",
    doorCopy: "The room sees the relationship before Brittany says the sentence that changes it.",
    hubTitle: "The after-talk journey",
    hubCopy: "A QR code leads to the picture, the story and the next layer of the map.",
    rooms: ["LEARN", "STORIES", "SCIENCE"],
    conclusion: "“I will remember that picture.”",
    story: "A speech ends. A visual language stays—and gives every future encounter with Brittany a feeling of recognition."
  },
  book: {
    doorTitle: "A book on her nightstand",
    doorCopy: "The complete worldview arrives as a story she can live with, mark up and share.",
    hubTitle: "The operating manual",
    hubCopy: "Every chapter connects to deeper examples, stories, evidence and tools.",
    rooms: ["LEARN", "STORIES", "SCIENCE", "THRIVE"],
    conclusion: "“My whole life finally makes sense.”",
    story: "The book is not a separate project. It is the most complete doorway into the same visual universe."
  }
};

function renderEcosystemRoute(routeName = "email") {
  const route = ecosystemRoutes[routeName] || ecosystemRoutes.email;
  document.querySelector("#routeDoorTitle").textContent = route.doorTitle;
  document.querySelector("#routeDoorCopy").textContent = route.doorCopy;
  document.querySelector("#routeHubTitle").textContent = route.hubTitle;
  document.querySelector("#routeHubCopy").textContent = route.hubCopy;
  document.querySelector("#routeConclusion").textContent = route.conclusion;
  document.querySelector("#routeStory").textContent = route.story;

  document.querySelectorAll(".doorway-button").forEach((button) => {
    const selected = button.dataset.route === routeName;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-selected", String(selected));
  });

  document.querySelectorAll("#hubRoomRow em").forEach((room) => {
    room.classList.toggle("active", route.rooms.includes(room.textContent.trim()));
  });
}

function bindInteractions() {
  document.querySelector("#firstBatchGrid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-batch-id]");
    if (!card) return;
    const item = firstBatch.find((candidate) => candidate.id === Number(card.dataset.batchId));
    if (item) openModal({ ...item, batch: true });
  });

  document.querySelector("#manifestoGrid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-modal]");
    if (!card) return;
    const item = manifestoVisuals.find((candidate) => candidate.title === card.dataset.modal);
    if (item) openModal(item);
  });

  document.querySelector("#dataGrid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-data-index]");
    if (card) openModal(dataStories[Number(card.dataset.dataIndex)]);
  });

  document.querySelector("#keystoneGrid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-keystone-id]");
    if (!card) return;
    const item = keystones.find((candidate) => candidate.id === Number(card.dataset.keystoneId));
    if (item) openModal(item);
  });

  document.querySelector("#sequenceTabs").addEventListener("click", (event) => {
    const tab = event.target.closest("[data-sequence-index]");
    if (tab) renderSequence(Number(tab.dataset.sequenceIndex));
  });

  document.querySelector("#modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  modal.addEventListener("close", () => document.body.classList.remove("modal-open"));

  let activeFilter = "all";
  const searchInput = document.querySelector("#vaultSearch");
  const count = document.querySelector("#vaultCount");

  function filterVault() {
    const term = searchInput.value.trim().toLowerCase();
    let visible = 0;
    document.querySelectorAll(".keystone-card").forEach((card) => {
      const filterMatch = activeFilter === "all" || card.dataset.filter === activeFilter;
      const searchMatch = !term || card.dataset.search.includes(term);
      const show = filterMatch && searchMatch;
      card.classList.toggle("hidden", !show);
      if (show) visible += 1;
    });
    count.textContent = visible;
  }

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((candidate) => candidate.classList.remove("active"));
      button.classList.add("active");
      activeFilter = button.dataset.filter;
      filterVault();
    });
  });
  searchInput.addEventListener("input", filterVault);

  document.querySelector("#doorwayControls").addEventListener("click", (event) => {
    const button = event.target.closest("[data-route]");
    if (button) renderEcosystemRoute(button.dataset.route);
  });
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px" });
  elements.forEach((element) => observer.observe(element));
}

function initProgress() {
  const progress = document.querySelector("#scrollProgress");
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

renderFirstBatch();
renderManifesto();
renderDataStories();
renderKeystones();
renderSequence(0);
renderManual();
renderEcosystemRoute("email");
bindInteractions();
initReveal();
initProgress();

if (window.location.hash) {
  const scrollToHash = () => {
    const target = document.querySelector(window.location.hash);
    if (target) target.scrollIntoView({ block: "start" });
  };
  window.requestAnimationFrame(scrollToHash);
  window.addEventListener("load", () => window.setTimeout(scrollToHash, 180), { once: true });
}
