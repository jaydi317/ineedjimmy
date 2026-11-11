/*
  EXCELL FAQ: THE ONE APPROVED ANSWER LIST
  ----------------------------------------
  Every question and answer on the site lives here, and only here.
  The "Your first visit" section, the FAQ page, the membership page and the
  chat helper all read this same list, so changing an answer here changes it everywhere.

  Rules for anyone editing:
  - Only Dr. McCray's approved answers. No medical advice. No patient information.
  - Anything not yet confirmed stays inside [DOC TO CONFIRM: ...]. The site shows it highlighted.
  - "source" says where the answer came from, so we can check it later.
  - "keys" are the words the chat helper listens for. "combo" = every group must match (e.g. x-ray AND cost).
  - Prices live ONCE, in EXCELL_PRICES below. Answers say {exam}, {plan2} etc. and the site fills them in.
    Until Dr. McCray OKs them, "confirmed" stays false and the First Visit page shows one price check box.
*/
window.EXCELL_PRICES = {
  "confirmed": false,
  "source": "Dr. McCray, Sept 29 voice answers (m1, m2). Replace the older $129/$65/$80 found online.",
  "exam": "$150",
  "adj": "$75",
  "firstVisit": "$225",
  "xray": "$90 per area",
  "therapy": "$65",
  "followup": "$75 to $140",
  "plan2": "$106",
  "plan4": "$212",
  "perVisit": "$53",
  "planDiscount": "10%"
};

window.EXCELL_FAQ = [
  {
    "id": "first-visit-what",
    "cat": "Your first visit",
        "q": "What happens at my first visit?",
    "a": "Dr. McCray listens first: what hurts, when it started, what you've tried and what you want to get back to. Then he does a physical exam with orthopedic and neurological tests specific to your main complaint. He tells you what he found and what he recommends before any treatment is given. If the exam shows no reason to wait, he treats you that same visit.",
    "source": "excellsportschiro.com Physical Examination page + FAQ",
    "keys": ["first visit", "first appointment", "what happens", "expect", "new patient", "exam", "examination", "evaluation", "consult"]
  },
  {
    "id": "same-day",
    "cat": "Your first visit",
    "q": "Can I be treated the same day as my exam?",
    "a": "Yes, as long as the exam shows no reason not to. After the exam, Dr. McCray goes straight into the treatment that fits what he found.",
    "source": "excellsportschiro.com FAQ",
    "keys": ["same day", "treated today", "treatment that day", "adjusted the first", "right away"]
  },
  {
    "id": "first-visit-length",
    "cat": "Your first visit",
    "q": "How long does the first visit take?",
    "a": "[DOC TO CONFIRM: about how long a first visit takes, from check-in to checkout]",
    "source": "Needs Dr. McCray",
    "keys": ["how long", "length", "minutes", "duration", "take long"]
  },
  {
    "id": "forms",
    "cat": "Your first visit",
    "q": "Do I fill out paperwork before I come in?",
    "a": "[DOC TO CONFIRM: whether new-patient forms are filled out online after booking or at the front desk, and how early to arrive]",
    "source": "Needs Dr. McCray",
    "keys": ["paperwork", "forms", "intake", "arrive early", "bring"]
  },
  {
    "id": "not-just-adjustments",
    "home": true,
    "cat": "Your first visit",
        "q": "Is it just an adjustment?",
    "a": "No. The exam comes first, and the plan comes from what the exam shows. Depending on what's going on, care can include adjustments of the spine or the extremities (Dr. McCray is a Certified Chiropractic Extremity Practitioner), soft tissue work such as myofascial release, cupping or dry needling, exercise rehabilitation, assisted stretching, or spinal decompression.",
    "source": "Dr. McCray, Nov 2 website review (exam and diagnosis first, not just adjustments) + service list on excellsportschiro.com",
    "keys": ["just adjust", "only adjust", "crack", "pop", "what do you do", "treatments", "services", "options"]
  },
  {
    "id": "refer-out",
    "cat": "Your first visit",
        "q": "What if chiropractic isn't the right fit for my problem?",
    "a": "Then Dr. McCray tells you, and refers you to the right provider. You'll leave knowing what's going on and who should see you next.",
    "source": "Dr. McCray, Nov 2 website review (we refer out when appropriate) + excellsportschiro.com FAQ",
    "keys": ["refer", "referral out", "specialist", "not right", "wrong place", "someone else", "surgeon", "physical therapist"]
  },
  {
    "id": "long-plan",
    "home": true,
    "cat": "Your first visit",
    "q": "Do I have to sign up for a 6 to 12 month treatment plan?",
    "a": "No. Your plan is built around your goals and changes as you progress. There is no preset plan.",
    "source": "excellsportschiro.com FAQ",
    "keys": ["contract", "treatment plan", "commit", "12 month", "6 month", "sign up", "long term", "how many visits"]
  },
  {
    "id": "neck",
    "cat": "Your first visit",
    "q": "Do I have to have my neck adjusted?",
    "a": "No. If your neck isn't the problem, it doesn't get adjusted. If it is, there are other techniques that can be used instead.",
    "source": "excellsportschiro.com FAQ",
    "keys": ["neck", "scared", "nervous", "afraid"]
  },
  {
    "id": "doctor-referral",
    "cat": "Your first visit",
    "q": "Do I need a referral from my doctor?",
    "a": "[DOC TO CONFIRM: that patients can book directly with no doctor's referral]",
    "source": "Needs Dr. McCray",
    "keys": ["need a referral", "doctor's referral", "physician referral", "prescription", "doctor send"]
  },
  {
    "id": "xrays",
    "home": true,
    "cat": "X-rays",
        "q": "Will I need X-rays?",
    "a": "Only when there's a clinical reason. Dr. McCray takes X-rays if something could make a treatment unsafe, if something could limit your progress, or if he thinks you may need to be referred to another provider. Plenty of patients never need them.",
    "source": "excellsportschiro.com FAQ (\"we take x-rays when clinically indicated\")",
    "keys": ["x-ray", "xray", "x ray", "imaging", "radiograph", "scan"]
  },
  {
    "id": "xray-cost",
    "cat": "X-rays",
    "q": "What do X-rays cost?",
    "a": "{xray}, and only if the exam shows you need them.",
    "source": "Dr. McCray, Sept 29 voice answers (m1)",
    "keys": ["x-ray cost", "xray cost", "x-ray price", "cost of x", "how much x"],
    "combo": [["x-ray", "xray", "x ray"], ["cost", "price", "how much", "fee", "charge"]]
  },
  {
    "id": "mri",
    "cat": "X-rays",
    "q": "Can I bring X-rays or an MRI I already had?",
    "a": "[DOC TO CONFIRM: whether patients should bring past X-rays, MRI reports or imaging discs to the first visit]",
    "source": "Needs Dr. McCray",
    "keys": ["mri", "old x-ray", "previous", "already had", "bring my"]
  },
  {
    "id": "first-visit-cost",
    "home": true,
    "cat": "Costs and fees",
        "q": "What does the first visit cost?",
    "a": "A typical first visit is {firstVisit}: the new-patient exam ({exam}) plus an adjustment ({adj}) if the exam shows it's safe. X-rays only if you need them, {xray}. Any added therapy Dr. McCray recommends is {therapy}. Pay by card, cash, check or HSA/FSA card.",
    "source": "Dr. McCray, Sept 29 voice answers (m1). Replaces older $129/$65/$80 figures found online.",
    "keys": ["cost", "price", "how much", "fee", "fees", "charge", "expensive", "afford", "pay for"],
    "combo": [["first", "new patient", "initial", "exam", "consult"], ["cost", "price", "how much", "fee", "charge"]]
  },
  {
    "id": "follow-up-cost",
    "cat": "Costs and fees",
    "q": "What do visits after the first one cost?",
    "a": "Follow-up visits run {followup}, depending on what's done. Patients who come regularly can save with a monthly maintenance plan.",
    "source": "Dr. McCray, Sept 29 voice answers (m1)",
    "combo": [["follow", "after the first", "next visit", "each visit", "regular"], ["cost", "price", "how much", "fee", "charge"]],
    "keys": ["follow up", "follow-up", "next visit", "after the first", "return visit", "regular visit"]
  },
  {
    "id": "insurance",
    "home": true,
    "cat": "Costs and fees",
        "q": "Do you take insurance?",
    "a": "We are in network with Cigna only. We bill auto insurance after an accident when you have an open claim with an assigned adjuster and a claim number, or an attorney lien. For any other health plan, you pay at the visit and we give you an itemized receipt so you can submit it to your insurance yourself. We do not accept Medicare or Medicaid.",
    "source": "excellsportschiro.com FAQ + Insurance section; Dr. McCray confirmed no Medicare/Medicaid (Nov 4)",
    "keys": ["insurance", "cigna", "in network", "out of network", "medicare", "medicaid", "anthem", "united", "aetna", "blue cross", "humana", "auto accident", "car accident", "attorney", "lien", "claim"]
  },
  {
    "id": "hsa",
    "cat": "Costs and fees",
    "q": "Can I use my HSA or FSA card?",
    "a": "Yes. We accept HSA and FSA as payment.",
    "source": "excellsportschiro.com Insurance section",
    "keys": ["hsa", "fsa", "health savings", "flex spending", "flexible spending"]
  },
  {
    "id": "payment",
    "cat": "Costs and fees",
    "q": "How do I pay?",
    "a": "You pay at each visit by card, cash, check, or HSA/FSA card.",
    "source": "Night Shift closing check (Square card + cash + checks) + Insurance section",
    "keys": ["how do i pay", "payment", "credit card", "cash", "check", "pay"]
  },
  {
    "id": "membership",
    "cat": "Membership",
    "q": "Do you have a monthly plan?",
    "a": "Yes. Once your problem is under control, a monthly plan keeps you on a regular schedule for less than paying visit by visit: {plan2} a month for 2 adjustments or {plan4} a month for 4, about {perVisit} a visit either way, plus {planDiscount} off other services and products.",
    "source": "Dr. McCray, Sept 29 voice answers (m2); excellsportschiro.com (\"monthly maintenance plans\")",
    "keys": ["membership", "member", "monthly", "maintenance", "plan", "subscription", "package", "discount", "save"]
  },
  {
    "id": "membership-terms",
    "cat": "Membership",
    "q": "Is there a contract? Can I cancel?",
    "a": "[DOC TO CONFIRM: whether plans are month to month, how to cancel, and how billing works]",
    "source": "Needs Dr. McCray",
    "keys": ["cancel", "commitment", "month to month", "billing", "auto pay"],
    "combo": [["membership", "plan", "monthly", "member"], ["cancel", "contract", "commit", "stop", "pause"]]
  },
  {
    "id": "membership-start",
    "cat": "Membership",
    "q": "Can I start a plan at my first visit?",
    "a": "[DOC TO CONFIRM: whether a new patient needs the first exam (and any initial care) before joining a plan]",
    "source": "Needs Dr. McCray",
    "keys": ["start a plan", "join", "sign up for membership", "new patient plan"]
  },
  {
    "id": "book",
    "cat": "Booking and visiting",
        "q": "How do I book?",
    "a": "Book online any time. It takes about a minute and you pick the time that works. You can also call the office at (317) 661-3478 during office hours.",
    "source": "ChiroTouch online booking portal + office phone",
    "keys": ["book", "schedule", "appointment", "make an appointment", "sign up", "availability", "open slot", "online"]
  },
  {
    "id": "hours",
    "cat": "Booking and visiting",
    "q": "What are your hours?",
    "a": "Monday 9 to 1 and 3 to 6. Tuesday 1 to 6. Wednesday 9 to 1 and 3 to 6. Thursday 10 to 2. Friday 9 to 5. Closed Saturday and Sunday.",
    "source": "excellsportschiro.com footer",
    "keys": ["hours", "open", "close", "closed", "saturday", "sunday", "weekend", "monday", "friday", "when are you"]
  },
  {
    "id": "location",
    "cat": "Booking and visiting",
    "q": "Where are you?",
    "a": "1315 W 86th St, Suite D, Indianapolis, IN 46260. We're inside Invoke Wellness Center.",
    "source": "excellsportschiro.com footer",
    "keys": ["where", "address", "location", "directions", "invoke", "86th", "find you"]
  },
  {
    "id": "app",
    "cat": "Booking and visiting",
    "q": "Do you have an app?",
    "a": "Yes. Search \"Excell Sports Chiropractic\" in the App Store, or scan the QR code on our home page or at the front desk. [DOC TO CONFIRM: the Android (Google Play) link, and what patients can do in the app]",
    "source": "App Store listing (developer: Marcus McCray); Dr. McCray Nov 5 automation vision",
    "keys": ["app", "iphone", "android", "download", "google play", "app store"]
  }
];
