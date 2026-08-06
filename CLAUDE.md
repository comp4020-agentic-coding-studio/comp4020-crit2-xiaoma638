# COMP4020 Crit 2 — CLAUDE.md

## Project

This repository contains a COMP4020 Crit 2 unsolicited redesign for **ANU Inward Bound**.

The project is built with **Astro** and must remain fully static.

The final site must:

- build completely to `dist/`
- deploy successfully to GitHub Pages
- work at `1920 × 1080`
- work at `390 × 844`
- pass the current course and repository checks
- use accurate information from official sources
- show a clear improvement over the existing website

The publicly deployed GitHub Pages site is the assessed artefact. A feature is not complete merely because it works locally.

---

## Course Brief

The Crit 2 task is to:

> Find a real organisation that you like with a website that you do not, and build them a better one.

The redesign must:

- represent a real organisation
- explain why the organisation was selected
- identify specific problems with the current website
- use and restructure the organisation's real information
- remain fully static
- be better than the original in ways that can be clearly explained
- pass the starter invariant checks
- show the development process through commits, `PROCESS.md`, and `reflections/crit-2.md`
- account for how the agent was directed, grounded, reviewed, and corrected

The current course specification is authoritative.

---

## Organisation

- **Organisation:** ANU Inward Bound
- **Original website:** https://anuinwardbound.com/
- **About page:** https://anuinwardbound.com/about/
- **Runner information:** https://anuinwardbound.com/runners/
- **Volunteer information:** https://anuinwardbound.com/volunteers/
- **Results:** https://anuinwardbound.com/results/
- **IB Live:** https://live.anuinwardbound.com/

ANU Inward Bound is a volunteer-run navigation and endurance footrace associated with the Australian National University.

Teams of four are transported blindfolded to an unknown location. They use maps, course notes, coordinates, and map-and-compass navigation to identify their Dropsite and travel through the Australian wilderness towards a secret Endpoint.

Official information describes race distances of approximately 30–100 kilometres, depending on the division and course.

Important factual details must be verified from official sources before publication.

---

## Why I Selected It

I selected ANU Inward Bound because:

- I have participated in Inward Bound training.
- I enjoy running and outdoor activities.
- The event is personally relevant to my experience as an ANU student.
- It is one of ANU's most distinctive traditions.
- Its combination of navigation, endurance, uncertainty, teamwork, and exploration creates a strong opportunity for visual storytelling.
- The existing website contains substantial useful information, but its navigation, information hierarchy, and visual presentation could be improved.

The redesign should remain respectful of the organisation and its volunteers.

The objective is not to mock the current website. The objective is to communicate the value of the event more effectively.

---

## Primary Design Goal

The primary goal is to **improve the visual appeal of the website**.

The new design should feel:

- adventurous
- confident
- atmospheric
- energetic
- mysterious
- connected to wilderness navigation
- recognisably related to ANU Inward Bound

Visual improvement must also support understanding.

A first-time visitor should be able to understand quickly:

- what Inward Bound is
- what makes it different from a normal trail race
- how the race works
- who can participate
- where to find runner information
- how to follow the race
- where to find history and results

Do not claim the redesign is better only because it looks newer.

---

## Core Redesign Statement

The existing website explains Inward Bound, but it does not immediately communicate the mystery, scale, energy, and visual identity of the event.

The redesign should:

> Present Inward Bound as a distinctive navigation and endurance challenge, then guide each visitor to the information they need.

---

## Primary Users

The redesign should consider:

1. **First-time visitors**
   - ANU students who have never heard of Inward Bound
   - people trying to understand the event quickly

2. **Prospective runners**
   - students deciding whether to participate
   - runners looking for rules, requirements, dates, gear, and preparation information

3. **Current runners**
   - participants returning for practical information
   - runners checking official documents and deadlines

4. **Volunteers and supporters**
   - students considering volunteering
   - friends and supporters looking for race information

5. **Spectators and followers**
   - people looking for IB Live
   - visitors looking for recent results

6. **Alumni**
   - people exploring past races, Endpoints, stories, and results

---

## Main User Needs

Users should be able to:

- understand the race concept quickly
- learn how Dropsite and Endpoint work
- understand the four-person team format
- distinguish Inward Bound from a marked trail race
- find runner preparation information
- find official rules and required gear
- find first-aid and navigation requirements
- find current key dates
- discover volunteer opportunities
- access IB Live
- explore event history
- find recent and historical results
- identify a clear next action

---

## Problems With the Existing Website

The following critique is based on the official website as inspected in August 2026. Re-check the original website before using these claims in the final submission.

### 1. The homepage underplays the event's distinctive concept

The current homepage describes Inward Bound as an annual navigation-based endurance running event.

That description is accurate but does not immediately communicate the most memorable elements:

- teams of four
- blindfolded transport
- an unknown Dropsite
- map-and-compass navigation
- long-distance wilderness travel
- a secret Endpoint

**User consequence:** A first-time visitor may not immediately understand why the event is unusual or exciting.

**Redesign response:** Use a strong hero image, concise headline, supporting explanation, and key race facts near the top of the homepage.

---

### 2. The navigation contains many destinations and overlapping labels

The existing navigation includes separate areas for:

- About
- Runners
- Volunteers
- current results
- IB Live
- History
- Results

About and Runners also contain several submenu items.

History, current results, general Results, and IB Live may appear related to users who simply want to follow or revisit a race.

**User consequence:** Visitors may not know which destination contains a race story, live updates, an Endpoint, a result table, or historical information.

**Redesign response:** Use a shorter primary navigation and clearer page names.

Preferred primary navigation:

- Home
- About the Race
- Runner Information
- History & Results

IB Live should remain a clear external action rather than being rebuilt.

---

### 3. Important runner information is fragmented

Runner information is currently distributed across:

- Key Information
- Race Rules
- Required Gear
- First Aid
- Division X
- external documents and services

**User consequence:** New runners may struggle to understand the overall preparation process or determine which requirements matter first.

**Redesign response:** Consolidate runner preparation into one structured page with clear sections and authoritative links.

---

### 4. Some content is difficult to scan

The About page contains valuable information about:

- the event concept
- Dropsite
- Endpoint
- race distance
- teamwork
- training
- safety
- land access
- environmental responsibility
- ANU and ANU Sport

Much of this appears in long paragraphs.

**User consequence:** Visitors must read substantial text before locating the central facts.

**Redesign response:** Rewrite and restructure the information into headings, short explanations, numbered steps, key facts, and supporting images.

---

### 5. Some time-sensitive information is inconsistent

As inspected in August 2026:

- the website footer and committee navigation refer to 2026
- the runner page still contains copy and key dates referring to 2025
- the About page contains a statement about the expected size of the 2024 race

**User consequence:** Visitors may be uncertain whether dates and requirements are current.

**Redesign response:** Avoid publishing uncertain event dates. Use verified current information only. Clearly label archival content and link to official current documents when necessary.

---

### 6. Results and historical content are lengthy and inconsistent

The general Results page combines summaries, stories, Endpoints, winners, division information, and links across many years.

Individual recent result pages can also be very long.

**User consequence:** A user looking for one year's Endpoint or winner may need to scroll through extensive content.

**Redesign response:** Use a structured year-based timeline or card layout. Show the most useful summary first and place detailed stories behind clear links or expandable sections.

---

### 7. The current visual design does not fully express the race identity

Inward Bound is associated with:

- wilderness
- night running
- navigation
- uncertainty
- endurance
- teamwork
- route choice
- reaching Endpoint

The current presentation resembles a general organisation website more than a distinctive endurance-event experience.

**User consequence:** The site does not create a strong first impression of the event's atmosphere.

**Redesign response:** Use authentic race imagery, map-inspired details, strong typography, restrained colour, and deliberate visual pacing.

---

## Redesign Scope

The redesign will include four main pages:

1. Home
2. About the Race
3. Runner Information
4. History & Results

This is a static informational prototype. Keep the scope realistic for one week.

---

## Page Requirements

### 1. Home

Purpose:

- create a strong first impression
- communicate the race concept quickly
- guide visitors towards the correct page

Recommended content:

- atmospheric hero image
- short headline
- concise race explanation
- primary and secondary calls to action
- key race facts
- “How It Works” overview
- pathways for runners, volunteers, and followers
- a clear link to IB Live
- selected history or results preview
- partners or supporting organisations where appropriate
- link to the original organisation website

Preferred hero direction:

> Dropped blindfolded.  
> Navigate the unknown.  
> Find Endpoint.

Supporting copy may explain that Inward Bound is an ANU team navigation and endurance race through the Australian wilderness.

Treat this wording as editable design copy, not an official quotation.

---

### 2. About the Race

Purpose:

- explain Inward Bound visually and clearly
- turn long source material into a scannable story

Recommended content:

- what Inward Bound is
- how the event begins
- Dropsite explanation
- navigation and route planning
- Endpoint explanation
- four-person teamwork
- approximate race distances
- race divisions
- history and tradition
- safety
- environmental responsibility
- connection to ANU and ANU Sport

Suggested “How It Works” structure:

1. **Blindfolded departure**  
   Teams are transported to an unknown location.

2. **Identify the Dropsite**  
   Teams use maps, course information, and navigation skills to determine where they are.

3. **Choose a route**  
   Each team plans its own route towards Endpoint.

4. **Travel as a team**  
   Four runners navigate and move together through the course.

5. **Reach Endpoint**  
   Teams race towards a finish location that changes each year.

Use official facts and rewrite them in original language.

---

### 3. Runner Information

Purpose:

- give runners a clear preparation overview
- consolidate information that is currently fragmented

Recommended sections:

- who can participate
- preparing to run
- key dates
- divisions
- navigator requirements
- race rules
- required gear
- first-aid requirements
- safety information
- official documents and external links
- contact or next step

Do not invent current dates, fees, eligibility conditions, or equipment requirements.

When official details may change:

- link to the authoritative source
- label the information clearly
- state when it was verified
- avoid presenting uncertain details as final

This page displays information only. It must not implement registration, payment, authentication, or nomination processing.

---

### 4. History & Results

Purpose:

- make past races easier to explore
- separate concise summaries from detailed race stories

Recommended content:

- year-based timeline or cards
- race year
- Endpoint
- overall winner where verified
- selected division results
- short race summary
- link to the full official result page
- link to archived IB Live content where available
- selected authentic historical photography

Use recent official result pages as sources.

Do not manually reproduce every result from every year unless it serves the design and can be verified accurately.

---

## Out of Scope

Do not build:

- a backend
- user accounts
- authentication
- runner registration
- team nomination processing
- volunteer application processing
- online payment
- a database
- a replacement for IB Live
- live GPS tracking
- real-time race updates
- an administrative system
- an interactive course planner
- an unverified current race calendar
- a complete archive of every historical result

External official services may be linked clearly.

---

## Visual Reference

Primary reference:

https://www.thelap.co.uk/

The Lap is a visual reference for presentation quality, not a template to copy.

Useful qualities to study:

- large authentic race photography
- a confident headline
- race information presented early
- a visible primary call to action
- concise event highlights
- generous spacing
- bold typography
- clear contrast
- simple navigation
- practical race information that is easy to reach

Do not copy:

- wording
- layout structure exactly
- colours exactly
- images
- branding
- icons
- component designs
- race claims

The redesign must remain recognisably ANU Inward Bound.

---

## Visual Direction for Inward Bound

The design should combine:

- The Lap's clarity and visual confidence
- Inward Bound's mystery and navigation identity
- authentic ANU Inward Bound content
- strong editorial typography
- large race photography
- subtle map-inspired graphics
- clear task-based navigation

Possible visual motifs:

- contour lines
- topographic textures
- route traces
- coordinates
- compass details
- map grids
- checkpoint labels
- headlamp light
- night-running imagery
- Australian bush landscapes
- four-runner teams
- Endpoint arrival imagery

Use these elements with restraint.

Atmosphere must not reduce readability, contrast, accessibility, or navigation clarity.

---

## Suggested Colour Direction

The exact palette may change after testing.

Possible starting colours:

- deep forest: `#14261C`
- warm off-white: `#F3EFE4`
- endpoint orange: `#F36B32`
- map gold: `#D5B85A`
- near black: `#111713`

Requirements:

- confirm accessible contrast
- use orange or gold deliberately
- avoid making every section dark
- maintain readable body text
- keep colour roles consistent

Do not treat these colours as mandatory if testing shows a better solution.

---

## Photography

Prefer:

- authentic Inward Bound images
- official organisation images
- images supplied with clear permission or attribution
- photographs of real participants, landscapes, navigation, or Endpoint

Avoid:

- unrelated generic trail-running stock photos
- imagery from The Lap
- images that imply the course is marked
- images that misrepresent the organisation
- large unoptimised files

For every image:

- document its source
- verify reuse expectations where relevant
- optimise dimensions and file size
- use an appropriate format
- preserve aspect ratio
- write accurate alt text
- test cropping at both required viewports
- confirm the deployed asset path works

Decorative images should use empty alt text where appropriate. Informative images need meaningful alt text.

---

## Content Rules

Use official sources for factual claims.

Do not invent:

- event dates
- prices
- addresses
- contact details
- eligibility rules
- membership conditions
- navigator requirements
- gear requirements
- first-aid requirements
- race statistics
- winners
- Endpoints
- testimonials
- partner relationships
- organisational history

When a fact cannot be verified:

- flag it
- omit it
- or link to the official source

When rewriting:

- preserve factual meaning
- shorten dense text
- improve headings
- remove repetition
- group related information
- organise around user needs
- make calls to action specific
- preserve names, dates, locations, and contact details accurately

Avoid generic AI marketing language such as:

- “Embark on an unforgettable journey”
- “Discover a world of possibilities”
- “Where passion meets community”

Prefer clear, concrete, organisation-specific language.

---

## Source Log

Use these sources as starting points:

### Course

- https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/crits/02-unsolicited-redesign/

### ANU Inward Bound

- https://anuinwardbound.com/
- https://anuinwardbound.com/about/
- https://anuinwardbound.com/runners/
- https://anuinwardbound.com/volunteers/
- https://anuinwardbound.com/results/
- https://anuinwardbound.com/2025-results/
- https://anuinwardbound.com/2024results/
- https://anuinwardbound.com/results-2023/
- https://live.anuinwardbound.com/

### Visual reference

- https://www.thelap.co.uk/

Add other official sources to `PROCESS.md` when they are used.

Do not use this list as proof that every page remains current. Re-check facts before publication.

---

## Astro and Technical Constraints

Use the existing Astro project structure unless there is a strong project-specific reason to change it.

The project must:

- remain fully static
- build to `dist/`
- work on GitHub Pages under the repository base path
- preserve existing checks
- preserve deployment workflows
- keep `pnpm-lock.yaml` committed

Before changing Astro configuration, inspect:

- `astro.config.*`
- `package.json`
- GitHub Actions workflow files
- current asset paths
- repository name
- configured `site` and `base` values

Use Astro's configured base path or reliable path helpers.

Do not assume that a root-relative asset path working at localhost will work at:

`https://username.github.io/repository-name/`

Avoid unnecessary framework changes and dependencies.

---

## Code Quality

Prefer:

- semantic HTML
- focused Astro components
- reusable layouts
- reusable CSS classes
- CSS custom properties
- clear component names
- logical heading structure
- minimal JavaScript
- progressive enhancement
- existing repository conventions

Avoid:

- duplicated CSS
- unnecessary client-side scripts
- large unexplained components
- excessive animation
- inline styles without a reason
- unexplained magic numbers
- dead code
- unrelated refactors
- clickable `div` elements
- dependencies for behaviour that HTML or CSS can provide

Comments should explain non-obvious reasoning rather than restating the code.

---

## Accessibility and Invariants

Keep all starter invariant tests enabled and passing.

The rendered site must include:

- a valid document language
- meaningful page titles
- a mobile viewport declaration
- a navigation landmark
- exactly one top-level `h1` per page
- appropriate image alt text

Also maintain:

- semantic landmarks
- logical heading order
- keyboard-accessible controls
- visible focus states
- sufficient colour contrast
- descriptive link text
- buttons for actions
- links for navigation
- labels for form controls
- reduced-motion support where animation exists
- adequate touch target sizes

Do not remove or weaken tests to make incorrect code pass.

---

## Responsive Design

Both required viewports count in full.

### Desktop — 1920 × 1080

Check:

- content does not become excessively wide
- text lines remain readable
- images stay sharp
- image crops feel intentional
- hierarchy is obvious
- spacing is balanced
- important content appears early
- sections do not feel empty merely to fill the screen

### Mobile — 390 × 844

Check:

- no horizontal overflow
- readable type sizes
- usable navigation
- tap-friendly controls
- logical content order
- intentional image cropping
- no clipped or overlapping content
- primary actions appear early
- tables and result information remain usable
- decorative map graphics do not obscure text

Do not treat mobile as a scaled-down desktop design.

---

## Browser Verification

The rendered page is the ground truth.

For each major visual change:

1. run the site
2. inspect the desktop viewport
3. inspect the mobile viewport
4. identify visible problems
5. correct the highest-impact problems
6. inspect both viewports again

Also check:

- navigation
- internal links
- external links
- keyboard interaction
- focus states
- browser console errors
- image loading
- heading structure
- alt text
- GitHub Pages base-path behaviour

Do not judge visual quality only from source code.

---

## Working Method

For substantial tasks, follow this sequence.

### 1. Understand

Identify:

- the relevant course requirement
- the user need
- the problem in the existing website
- the relevant files
- the source information
- the verification method

Do not immediately modify several files after a broad request.

### 2. Plan

Before a major or multi-file change, provide a concise plan covering:

- intended user outcome
- content changes
- layout changes
- responsive behaviour
- accessibility
- files likely to change
- checks
- deployment risks

Keep the plan realistic.

### 3. Implement

- Work on one meaningful slice at a time.
- Prefer small, understandable changes.
- Do not modify unrelated files.
- Preserve working infrastructure.
- Keep content and code changes reviewable.

### 4. Verify

- Run relevant checks.
- Inspect the rendered result.
- Check both required viewports.
- Correct failures before continuing.
- Record meaningful decisions.

### 5. Document

Update process evidence while work is happening.

Do not reconstruct the entire process retrospectively at the end.

---

## Commands and Checks

Inspect `package.json` before running commands. Repository scripts are authoritative.

Expected commands may include:

```bash
pnpm dev
pnpm build
pnpm check
pnpm check:evidence
```

Before committing or deploying:

- run the relevant repository checks
- run a fresh production build
- inspect `dist/`
- check internal links if required by the repository workflow

When a check fails:

1. read the full output
2. identify the violated requirement
3. inspect the relevant file
4. fix the underlying cause
5. rerun the failed check
6. rerun the full relevant check set

Do not:

- delete failing tests
- weaken invariants
- hide errors
- disable rules without justification
- claim an unrun command passed

Never knowingly commit a broken state.

---

## Git and Commit Discipline

Commit meaningful stages rather than completing the entire project in one final commit.

Useful stages include:

- document organisation research
- record the original-site critique
- define the information architecture
- create the initial Astro page structure
- implement the homepage
- add About the Race
- consolidate runner information
- create History & Results
- improve mobile navigation
- improve accessibility
- optimise images
- correct deployment paths
- add process evidence
- complete the reflection

Use specific commit messages such as:

```text
Document Inward Bound content and navigation problems
Build image-led homepage for first-time visitors
Consolidate runner preparation information
Improve results timeline on mobile
Fix Astro asset paths for GitHub Pages
Add Crit 2 process evidence and reflection
```

Avoid vague messages such as:

```text
update
changes
final
fix stuff
```

Commit only after the relevant checks pass.

Do not rewrite history to create false process evidence.

---

## PROCESS.md

Maintain `PROCESS.md` during development.

It should record:

- what was built
- why ANU Inward Bound was selected
- the developer's personal connection to the event
- what the original website does well
- what the original website gets wrong
- intended users
- important user needs
- official sources consulted
- how content was selected and rewritten
- major information architecture decisions
- major visual decisions
- how The Lap influenced the work
- how the redesign remained distinct from The Lap
- why Astro was suitable
- how the site was tested
- important changes after browser review
- how the agent was directed
- how the agent was grounded
- weak or inaccurate agent output
- how the agent was corrected
- remaining limitations

Important claims must point to real evidence such as:

- commits
- commit ranges
- prompts
- screenshots
- browser checks
- `CLAUDE.md` changes

Do not claim that something happened unless repository evidence supports it.

---

## Reflection

The required reflection must be stored at:

```text
reflections/crit-2.md
```

Follow:

- the current course specification
- `reflections/README.md`

Use concrete examples from this project.

Discuss:

- the breakthrough that moved the work forward
- what the work changed about the developer the student wants to become
- what was attempted
- what worked
- what failed
- what changed after review
- what was learned about visual design
- what was learned about information architecture
- where the agent helped
- where the agent made poor assumptions
- how errors were detected
- how those errors were corrected
- what would be done differently next time

Avoid generic statements such as:

- “AI was helpful.”
- “I learned a lot.”
- “The website looks better.”

---

## Deployment

The public GitHub Pages URL is the final artefact.

Before shipping:

1. run the required checks
2. run a fresh production build
3. confirm required files are committed
4. confirm no secrets are committed
5. push with enough time for CI to complete
6. confirm check and deploy jobs are green
7. open the public GitHub Pages URL
8. inspect desktop
9. inspect mobile
10. verify images, scripts, styles, and links
11. verify page refreshes
12. inspect browser console output
13. confirm deployed content matches the latest commit

A locally working site with a broken deployed version is not complete.

An asset returning `404` on GitHub Pages is broken even if it works locally.

---

## Task Reports

Before a substantial task, briefly state:

- the requirement being addressed
- the likely files involved
- how the result will be checked

After a substantial task, briefly report:

- what changed
- why it changed
- files changed
- checks actually run
- whether desktop was inspected
- whether mobile was inspected
- whether the deployed site was inspected
- remaining limitations

Keep reports short for small edits.

Be honest about anything that was not checked.

---

## Prohibited Behaviour

Do not:

- invent facts
- silently use outdated event information
- copy official text wholesale
- copy The Lap's design
- add a backend
- add unnecessary dependencies
- rebuild IB Live
- delete or weaken tests
- claim visual quality without browser inspection
- claim accessibility without evidence
- claim deployment success without opening the public URL
- create one large final commit
- fabricate process evidence
- expose secrets or API keys
- make unrelated refactors

---

## Definition of Done

The project is complete only when:

- ANU Inward Bound is clearly identified
- the original website is linked
- the selection reason is documented
- the original website is specifically critiqued
- official information is used accurately
- content is rewritten and restructured
- the four planned pages are complete
- the design is visually stronger in explainable ways
- the design remains distinct from The Lap
- Astro builds successfully to `dist/`
- all required checks pass
- no secrets are committed
- desktop has been inspected
- mobile has been inspected
- no obvious accessibility or responsive problems remain
- Git history shows meaningful progress
- `PROCESS.md` cites real evidence
- `reflections/crit-2.md` is complete
- GitHub Actions completes successfully
- the public GitHub Pages site loads correctly
- deployed assets and links work
