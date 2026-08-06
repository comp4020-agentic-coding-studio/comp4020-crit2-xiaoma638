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
