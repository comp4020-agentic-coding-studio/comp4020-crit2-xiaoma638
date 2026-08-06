# Process overview

## What I built

An unsolicited redesign of the [ANU Inward Bound](https://anuinwardbound.com/)
site: a four-page static prototype (Home, About the Race, Runner Information,
History & Results) that replaces the org's fragmented, generic-looking pages
with a single clear information architecture, an atmospheric map/navigation
visual language, and copy grounded only in facts I could verify on the live
site — no invented dates, fees, results, or history.

## The moments that mattered

1. **Switching the whole target org mid-week.** I'd started the week critiquing
   a different club (Canberra Runners) and had a working prototype for it, but
   partway through re-running the critique steps I decided the response wasn't
   distinctive enough to be worth finishing, and the agent's proposed next step
   didn't fix that. Instead of re-prompting inside the old plan, I rewrote
   `CLAUDE.md` myself to redirect the entire project to ANU Inward Bound — new
   organisation, new critique, new page scope, new content rules — and had the
   agent rebuild against that harness rather than patch the old one.
   ([`8ea4ea8`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-xiaoma638/commit/8ea4ea8))
   I knew it was the right call because the new `CLAUDE.md` could name a
   specific, verifiable UX problem (six-plus nav items, inconsistent
   2023–2026 date references across the org's own pages) that the old
   direction couldn't.

2. **Real event photography vs. an illustrated visual language.** The
   redesign brief asked for "authentic race imagery," but Inward Bound's own
   photography is the club's property, not mine to redeploy on a public GitHub
   Pages site. Rather than either skip the visual upgrade or lift photos
   anyway, I decided upfront to render the whole "map-inspired" direction —
   contour lines, route traces, checkpoint dots — as CSS/inline-SVG motifs
   instead of images.
   ([`aa837a2`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-xiaoma638/commit/aa837a2))
   I checked this held by grepping the finished pages for `<img>` tags before
   shipping — there are none.

3. **A contrast bug the eye missed but the numbers didn't.** The first pass at
   the palette used off-white button text on the endpoint-orange accent
   colour, which read fine on screen but came out to roughly 2.6:1 contrast
   when I actually calculated it — well under the 4.5:1 WCAG AA text minimum.
   Rather than trust the look, I recalculated luminance for every
   text/background pairing in `global.css`, found the same failure mode had
   leaked into a `.join-cta` override, and fixed both plus two heading-level
   skips (`h2` sections containing more `h2` card titles instead of `h3`) in
   one pass.
   ([`316c5fe`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-xiaoma638/commit/316c5fe))
   `pnpm check` staying green before and after confirmed the fix didn't break
   the build, and the recalculated ratio (~6:1) is what told me it was actually
   fixed, not just moved.
