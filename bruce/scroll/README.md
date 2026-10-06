# Bruce the Piano Man: scroll-worlds homepage mockups

Built Oct 6, 2026. Three single-file homepages. Each has one drawn object that physically changes as you scroll, and the scroll is one night at Bruce's piano, from the opener to last call. Concepts and the ideas I cut are in `CONCEPTS.md`.

| | Direction | The central object | Live (noindex) |
|---|---|---|---|
| A | **88 Keys** (cinematic wow) | An 88-key keyboard runway you fly down. Each of 8 beats lights 11 keys; request notes land on the keys; the runway splits into 8 lanes for the band; the camera cranes back over all 88 lit keys and the key cover slides shut for last call. | ineedjimmy.com/bruce/scroll/a.html |
| B | **The Request Jukebox** (fun) | A cartoon jukebox. Each beat lights an arch segment, drops a new record, fills the bubble tubes and slaps a sticky note on the grille; it swaps to a cassette for the flashback; real photos get tucked into its frame. At the end it unlocks: tap a title and cartoon Bruce reacts. Type "IU" and he refuses it. | ineedjimmy.com/bruce/scroll/b.html |
| C | **Two Sides** (premium, bookers first) | A generic cassette. Tape physically winds reel to reel; the counter tells the story (7:00:00, 1:00:00, 0:15:00, 1995, 2026, 2027). Side A is the Piano Bar; it flips in 3D to Side B, the Full Band; the case insert unfolds into the 2026 show list; the tape runs out and the label goes blank for "your night." | ineedjimmy.com/bruce/scroll/c.html |

## My pick: A
A is the only one where the scroll *is* the product: a whole Bruce night in 30 seconds, and "a Bruce night is 88 keys long" is an idea no dueling-piano act can copy. Use B's jukebox as the toy section inside it, and C's label-style form on /book. If Bruce reads the cartoon as "kids' TV," C is the safe, premium fallback (it has no cartoon Bruce at all).

## Built to the brief
- Two doors on every screen: "Get a Bruce Alert" and "Book Bruce," plus a sticky two-button bar on phones.
- No public dates after Oct 3, 2026, so every version leads with "Get the heads-up" and "Book Bruce for 2027." The 2026 dates appear as a past archive.
- Booking form: the brief's 8 fields, no budget field, "draw a crowd or entertain one" shown only for company, fundraiser and festival events, hidden spam trap, thank-you screen states a reply time placeholder and offers the alert. Bruce Alert: email, region chips, optional class year. **Both forms are mockups and show "Draft: nothing was sent."**
- No tap-to-call: there's no public phone number in the research.
- Sound is off until tapped (A: each key plays its real piano note; B: jukebox clunk and chime). All sound is synthesized in the browser; no recordings.
- `prefers-reduced-motion`: scroll still drives the story, but smoothing, bubbles, slaps and bounces are off.
- `noindex,nofollow` on all three. Tested at 390x844 and 1440x900, no console errors, no sideways scroll.

## Assets used (all already in the repo, from Jimmy's team)
Real photos (Jimmy's, MashCraft Fishers, Oct 3, 2026): `bruce-smile.jpg`, `bruce-wig-close.jpg`, `bruce-wig-scene.jpg`. I skipped `bruce-guitar.jpg` because it's blurry and includes another person.
Cartoon Bruce poses and comic panels: from the Codex art pack made for Jimmy (`bruce/art/`). Everything else (keyboard, jukebox, cassette, string lights, room) is drawn in code for these pages. No Purdue or Neon Cactus logos, no Sony/Walkman branding, no lyrics, no news photos, no re-hosted video, no Reddit or review quotes.

## Claims and sources

| Claim on the pages | Where | Source | Status |
|---|---|---|---|
| "Bruce plays the room." | A, B | Brand lens tagline (Ultimate Context) | Copy |
| "Nobody compares." (as a headline, unattributed) | A | Fans' own phrase; brief lists it as a headline idea, not a testimonial | Copy; no quote marks, no name |
| Since 1995; played the Neon Cactus 1995 to 2023 | A, B, C | Ultimate Context "Publish or confirm": safe ([Purdue Alumnus](https://www.purduealumnus.org/the-piano-man/alumni/)) | Safe |
| Purdue alum | C | Same | Safe |
| Solo piano bar and the 8-piece Bruce Barker Band | all | [J&C/AOL](https://www.aol.com/articles/free-concert-brings-bruce-barker-170036275.html), [MashCraft](https://mashcraft.com/events/bruce-barker-w-full-band/) | Safe |
| Free July 4, 2026 show at Columbian Park, 8-piece band | all | J&C/AOL | Safe |
| 2026 archive: Apr 18 MC (band), May 30 MashCraft, Jun 6 MC (sold out), Jul 4 Columbian Park, Jul 17 Fountain Park, Jul 25 MC (sold out), Aug 15 MashCraft (band), Sep 26 MC, Oct 3 MashCraft | all | Codex Research schedule table (venue pages, Fountain Park program, Bruce's Instagram poster for Jul 25). Oct 3 is backed by a search-index listing and Jimmy was there | Safe (Oct 3 seen in person). I left out Jul 11 and Sep 12 (search-index only) |
| "Two of the Madam Carroll nights sold out" / "The boat keeps selling out" | A, B, C | Jun 6 and Jul 25, 2026 marked sold out (venue page, Bruce's poster) | Safe |
| Opens with "Hail Purdue" (title only) | A, B | Jimmy's brief / Claude Handoff traditions table | Supplied tradition |
| No tips in the first hour; "Give them a free song!" | A, B, C | Same | Supplied tradition |
| Requests on sticky notes; most requested: Sweet Caroline, Piano Man, Livin' on a Prayer | A, B | Same | Supplied tradition |
| Groans at "If I Had a Million Dollars," 3x a night for 15 years | A, B | Same | Supplied tradition |
| "Creep" is his favorite to sing | B (toy) | Same | **CONFIRM** |
| "Say social!" whole-room toast | A, B, C | Same | **CONFIRM** (brief: confirm drinking framing) |
| Never touched a piano until freshman year; taught himself from a cassette player: 7 h, 1 h, 15 min | A, B, C | Purdue Alumnus via brief | **CONFIRM** year and first song |
| "I never mailed in a show." | C | Bruce quote supplied in Jimmy's brief | Confirm wording |
| About 1.5 million people have seen him (his estimate) | A (rising counter), C | Purdue podcast page | **CONFIRM** |
| Ends every night with "A Pirate Looks at Forty" | A, B, C | Exponent Q&A (true through 2023) | **CONFIRM** still true |
| Once turned down $100 to play two more songs after it | A, B, C | Jimmy's brief | Supplied anecdote |
| The wig bit | A, B, C | Jimmy's own photos, Oct 3, 2026 | Safe (photographed) |
| Package contents: "sound for the room," "stage, sound and lights" | A, B, C | Offer ladder in the brief is a proposal | **CONFIRM** |
| Reply time on the booking thank-you | all | None yet | **CONFIRM** who answers and how fast |
| Booker types (reunions, alumni clubs, fundraisers, company, festivals) | C | Money lens buyer ranking (an inference) | Positioning, not a claim |

## [CONFIRM] list for Bruce
1. Walkman story: the year and the first song (7 h / 1 h / 15 min).
2. "About 1.5 million people" (pick this or the Ross-Ade number; I used only 1.5M).
3. "Say social!" as a site feature, and how he wants the drinking part framed.
4. Still closes every show, solo and band, with "A Pirate Looks at Forty."
5. "Creep" as his favorite to sing (B's toy).
6. What's included in each package (sound; stage, sound and lights).
7. Who answers inquiries, and the reply time.
8. Wording of "I never mailed in a show."
9. OK with the cartoon Bruce (A and B) and the photos from Oct 3.

Left out on purpose: retirement jokes ("Retired. Mostly."), Feb 2028 birthday, "Cactus house act," the Ross-Ade count, 2020 stream numbers, show counts, prices, band-member names, Tod Baldwin / The Duel, Sabrina and family details, the booking reel (needs Gary's OK).

## Files
- `a.html`, `b.html`, `c.html`: the three pages (vanilla JS, Google Fonts, no other libraries).
- `assets/`: photos and art copied from `bruce/art` and `bruce/img`; `forms.js` (shared mockup form behavior).
- `screenshots/`: 1440x900 (`-d-`) and 390x844 (`-m-`) at track depths (`t0.3` = 30% through the night), plus toy and form tests. `ref-home-*` is the old home.html for comparison.
- `_tools/shoot.mjs`: `node _tools/shoot.mjs a.html a "t0,t0.5,#book" dm`. `_tools/toy.mjs` tests B's toy.
