# Crit 2 reflection

**The breakthrough** was realising, partway through critiquing my first
target org, that "the agent executed the plan competently" isn't the same
question as "did I pick a plan worth executing." The Canberra Runners
redesign checked every box and passed every test, but it wasn't a
distinctive enough response to be worth defending at a crit. Switching to
ANU Inward Bound and rewriting `CLAUDE.md` myself — rather than asking the
agent to fix the old direction — was the moment the week actually turned
into a design decision instead of a build task.

**What this changed** is how I think about my own role once an agent can
implement almost anything I ask for. The risk isn't that it writes bad code
— `pnpm check` catches that. The risk is that it's fluent enough to make a
mediocre direction look finished, and a fully green check suite gives no
signal about whether the underlying choice was any good. Watching myself
almost ship a technically-correct-but-forgettable redesign made me want to
hold the "is this actually the right call" question for longer before
handing it to the agent to build — and to keep making the calls that don't
have a test for them (which org, which facts are safe to use, whether real
photography is even mine to use) explicitly myself, in the harness, rather
than leaving them implicit in a prompt.
