import { defineConfig } from "astro/config";

// The deployed site lives under https://<user>.github.io/comp4020-crit2-xiaoma638/,
// so `base` has to match the repo name exactly or every asset 404s once deployed
// even though it looks fine in local dev.
export default defineConfig({
  base: "/comp4020-crit2-xiaoma638/",
});
