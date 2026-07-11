# Generative Engine Optimization (GEO) Audit

**Nikeeta Rawat Resin Studio**  
*Audit Performed: July 12, 2026*

This document outlines the results of the complete Generative Engine Optimization (GEO) audit performed on the repository. The objective is to make the site fully discoverable, understandable, and highly citeable by modern AI engines (ChatGPT, Google AI Overviews, Gemini, Claude, Perplexity, Copilot, DeepSeek).

---

## 1. Audit Executive Summary

A comprehensive scan of the repository was conducted, covering:
* **Routes & Layouts** (Next.js 16 structure)
* **Metadata** (Static metadata objects and dynamic metadata generators)
* **Structured Data** (JSON-LD schemas)
* **Technical Setup** (robots.txt, sitemap.xml, sitemap.ts, manifest)
* **Content & Semantics** (Heading structures, comparative data, FAQ sections)
* **Images & Assets** (Alt attributes, lazy loading properties)

The codebase was found to have a solid visual structure and initial SEO setup, but several critical gaps existed that limited its ability to rank well in AI search answers and retrieve citations properly.

---

## 2. Identified Gaps & Vulnerabilities

### A. Crawlability & Indexability
* **Status**: Moderate.
* **Findings**:
  * The `sitemap.ts` file lacked static index entries for the new service directories and location landing pages.
  * The site lacked a proper Web App Manifest (`manifest.json` or `manifest.ts`), leaving mobile indexing signals and theme colors under-configured.
  * *Broken Link*: The About Page linked to `/ #process` to direct users to the technical curation flowchart, but the section on the home page did not possess the `id="process"` anchor tag, creating a broken internal link path.

### B. Metadata Duplication & Inconsistencies
* **Status**: Critical.
* **Findings**:
  * **Location Mismatch**: The Contact page (`app/contact/page.tsx`) meta description specified a "Gurugram resin studio," whereas the actual address, text coordinates, and Google Maps links point directly to **Kotdwar, Uttarakhand**. Such contradictions degrade AI trust signals and cause entity resolution failures.
  * **Default Fallbacks**: The home page was set as a Client Component (`"use client"`), which prohibited the export of custom static Metadata. Page description fallback was handled solely by the layout metadata, failing to target specific brand positioning and keywords for homepage-level queries.

### C. Structured Data (JSON-LD)
* **Status**: Critical.
* **Findings**:
  * The homepage was missing essential `Organization`, `WebSite`, and `LocalBusiness` schemas. AI models couldn't resolve details like the founder (Nikeeta Rawat), geographic boundaries (Kotdwar, Uttarakhand), operating hours, or direct phone coordinates programmatically.
  * Catalog pages (`/collections` and `/gallery`) had list structures but lacked `CollectionPage` and `ItemList` JSON-LD schemas, preventing AI crawler crawlers from mapping out services and prices cleanly.
  * The `/investment` page had detailed pricing guidelines, but lacked a structured pricing list schema.

### D. Content & AI Retrieval Readiness
* **Status**: Moderate.
* **Findings**:
  * LLMs querying "What is the difference between air drying and professional resin preservation?" or "Why choose Nikeeta Rawat Resin Studio?" would have to scrape conversational text. The site lacked structured tables and explicit comparison datasets.
  * Core FAQs about curing cycles, shipping logistics, and resin safety were buried in nested text, lacking semantic wrappers (`FAQPage` schema) or a dedicated FAQ section on the home page.

### E. Image Optimization & Core Web Vitals
* **Status**: Minor.
* **Findings**:
  * The masonry grid in `GalleryClient.tsx` used custom native `<img>` tags to facilitate flexible auto-height rendering, but lacked explicit `loading="lazy"` and `decoding="async"` attributes, risking larger Cumulative Layout Shifts (CLS) and slower initial crawl rendering speeds.

---

## 3. GEO Action Plan

To transition the repository to a state of optimal AI-discovery and citation readiness, the following actions have been planned and executed:
1. **Refactor Home Page to Server Component**: Split state-based process steps into a standalone client component, freeing `app/page.tsx` to handle static metadata and complex structured schemas.
2. **Inject Rich Schema Markup**: Install JSON-LD schema blocks across all major entry pages (Home, About, Contact, Gallery, Collections, Investment).
3. **Normalize Entities & Locations**: Fix the Gurugram vs. Kotdwar address conflict to enforce geo-consistent data.
4. **Create AI-Citation Content**: Implement structured comparison tables (Drying vs. Resin Curation) and a clean FAQ list on the homepage.
5. **Optimize Technical crawling**: Deploy a `manifest.ts` file, update the static sitemap indexes, fix the broken `#process` link, and insert lazy loading tags on portfolio images.
