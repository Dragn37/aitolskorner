// This file is intentionally left without a default export to resolve
// a build conflict between the sitemap page (/sitemap) and the
// sitemap file generator (sitemap.ts -> /sitemap.xml).
// In Next.js, `app/sitemap.ts` and `app/sitemap/page.tsx` cannot coexist
// as they create a route conflict. By removing the default export,
// this file no longer registers as a page, resolving the conflict.

export {};
