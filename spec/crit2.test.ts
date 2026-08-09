import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";

// This week's published spec (crits/02-unsolicited-redesign) turned into
// tests, alongside the shipped invariants. Only the mechanically checkable
// lines are here — "yours is better in ways you can name" and "the
// organisation is real" are judged at the crit, not by a test.
const DIST = resolve("dist");

function htmlFiles(dir: string = DIST): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(path);
    return entry.name.endsWith(".html") ? [path] : [];
  });
}

const pages = htmlFiles().map((path) => ({
  name: relative(DIST, path),
  doc: new JSDOM(readFileSync(path, "utf8")).window.document,
}));

describe("static, no backend", () => {
  // A stray SSR adapter (or `output: "server"`) drops server entry points
  // into dist/ alongside the static pages — this asserts the build stays a
  // plain set of files with nothing to run on the server.
  it("emits no server entry points", () => {
    const serverArtifacts = ["server", "_worker.js", "_functions"];
    for (const name of serverArtifacts) {
      expect(existsSync(join(DIST, name)), `dist/${name} should not exist`).toBe(false);
    }
  });
});

describe("serves the organisation's real information", () => {
  it("is no longer the starter placeholder", () => {
    for (const { name, doc } of pages) {
      expect(
        doc.title.trim(),
        `${name}: replace the starter title with the organisation's`,
      ).not.toBe("COMP4020 prototype");
    }
  });

  it("says what the organisation does, somewhere a reader lands first", () => {
    const home = pages.find(({ name }) => name === "index.html");
    expect(home, "index.html should exist").toBeTruthy();
    const description = home?.doc.querySelector('meta[name="description"]');
    expect(
      description?.getAttribute("content")?.trim(),
      "add a meta description summarising who the organisation is and what they do",
    ).toBeTruthy();
  });

  it("gives a way to find them", () => {
    // "how to find them" — a real contact point, not just a link back to
    // the source material. A mailto/tel link or a mapped address covers the
    // common cases without pinning down the page's layout.
    const hasContactPoint = pages.some(({ doc }) =>
      Array.from(doc.querySelectorAll("a[href]")).some((a) => {
        const href = a.getAttribute("href") ?? "";
        return href.startsWith("mailto:") || href.startsWith("tel:");
      }) || doc.querySelector("address"),
    );
    expect(
      hasContactPoint,
      "add a mailto/tel link or an <address> so a visitor can find the organisation",
    ).toBe(true);
  });
});

describe("provides direct paths to official information", () => {
  it("uses a labelled visual anchor on the home page", () => {
    const home = pages.find(({ name }) => name === "index.html");
    const image = home?.doc.querySelector("img.hero-image");

    expect(image?.getAttribute("src")).toContain("images/inward-bound-navigation-hero.png");
    expect(image?.getAttribute("alt")).toContain("Illustrative scene");
    expect(home?.doc.querySelector(".hero-image-note")?.textContent).toContain("Illustrative");
  });

  it("provides an accessible mobile navigation control", () => {
    for (const { name, doc } of pages) {
      const mobileNav = doc.querySelector("details.mobile-nav");
      expect(mobileNav, `${name}: mobile navigation should use a details control`).toBeTruthy();
      expect(mobileNav?.querySelector("summary")?.textContent?.trim()).toBe("Menu");
      expect(mobileNav?.querySelector("nav")).toBeTruthy();
    }
  });

  it("sends prospective volunteers to the official volunteer information", () => {
    const home = pages.find(({ name }) => name === "index.html");
    expect(home?.doc.querySelector('a[href="https://anuinwardbound.com/volunteers/"]')).toBeTruthy();
  });

  it("uses the official race-weekend countdown date", () => {
    const home = pages.find(({ name }) => name === "index.html");
    const countdown = home?.doc.querySelector("[data-countdown-target]");

    expect(countdown?.getAttribute("data-countdown-target")).toBe("2026-10-09T09:00:00Z");
    expect(countdown?.textContent).toContain("Friday 9 October 2026");
  });

  it("uses a labelled visual for the race-weekend countdown", () => {
    const home = pages.find(({ name }) => name === "index.html");
    const image = home?.doc.querySelector("img.race-countdown-image");

    expect(image?.getAttribute("src")).toContain("images/inward-bound-race-weekend-countdown.png");
    expect(image?.getAttribute("alt")).toContain("Illustrative scene");
    expect(home?.doc.querySelector(".race-countdown-image-note")?.textContent).toContain("Illustrative");
  });

  it("links runner preparation cards to their official pages", () => {
    const runners = pages.find(({ name }) => name === "runners/index.html");
    const links = Array.from(runners?.doc.querySelectorAll("a[href]") ?? []).map((link) =>
      link.getAttribute("href"),
    );

    expect(links).toEqual(
      expect.arrayContaining([
        "https://anuinwardbound.com/rules/",
        "https://anuinwardbound.com/runners/gear/",
        "https://anuinwardbound.com/runners/first-aid-kit-contents/",
      ]),
    );
  });

  it("includes the latest published result and links each year to its source", () => {
    const results = pages.find(({ name }) => name === "results/index.html");
    const cards = Array.from(results?.doc.querySelectorAll(".event-card") ?? []);

    expect(cards[0]?.textContent).toContain("2025");
    for (const card of cards) {
      expect(card.querySelector('a[href*="anuinwardbound.com/"][href$="/"]')).toBeTruthy();
      expect(card.querySelector('a[href="https://anuinwardbound.com/"]')).toBeFalsy();
    }
  });
});
