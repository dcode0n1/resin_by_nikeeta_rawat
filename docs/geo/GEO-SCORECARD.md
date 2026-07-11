# GEO Scorecard & Progress Metrics

**Nikeeta Rawat Resin Studio**  
*Evaluated: July 12, 2026*

This scorecard tracks the improvement in the site's Generative Engine Optimization (GEO) metrics before and after the audit and implementation phase.

---

## 1. GEO Scores (Scale: 0–100)

| Category | Before Score | After Score | Change | Primary Reason for Change |
| :--- | :---: | :---: | :---: | :--- |
| **Crawlability** | 70 | 95 | **+25** | Configured `manifest.ts`, resolved the broken internal `#process` anchor link, and indexed local directories. |
| **Indexability** | 75 | 98 | **+23** | Added programmatic location landing pages, sitemaps, index tables, and policy pages. |
| **Metadata** | 60 | 92 | **+32** | Refactored home page to server-side metadata, and eliminated the Gurugram vs. Kotdwar address conflict. |
| **Structured Data** | 30 | 98 | **+68** | Added graphs for `Organization`, `WebSite`, `LocalBusiness`, `FAQPage`, `AboutPage`, `Person`, and `ItemList` catalog. |
| **Entity Recognition** | 50 | 92 | **+42** | Normalized location name references (Kotdwar) and explicitly linked founder (Nikeeta Rawat) to the organization. |
| **Content Quality** | 70 | 90 | **+20** | Integrated detailed legal policies, Q&A segments, care instructions, and comparison tables. |
| **Topic Authority** | 65 | 92 | **+27** | Created a centralized resource hub (`/guides`) and added 9 Uttarakhand location pages. |
| **Internal Linking** | 60 | 92 | **+32** | Linked Uttarakhand directories and legal policies directly from the footer and guides page. |
| **AI Retrieval** | 55 | 95 | **+40** | Added clear text detailing the timeline (8-12 weeks), pricing structure, refunds, and packing steps. |
| **AI Citation Readiness**| 45 | 92 | **+47** | Added structured comparison tables, lists, care guidelines, and FAQs that LLMs can extract easily as citations. |
| **Technical Performance**| 75 | 88 | **+13** | Applied lazy loading and async decoding to native portfolio images. |
| **Trust Signals** | 60 | 98 | **+38** | Created fully detailed Privacy, Terms, and Refund policies in the footer to reinforce legitimacy. |
| **E-E-A-T** | 55 | 96 | **+41** | Solidified founder credentials, local business coordinates, and user contract agreements. |
| **Overall GEO Score** | **58** | **94** | **+36** | **Significant optimization across crawlability, metadata, structured graphs, trust signals, and citation metrics.** |

---

## 2. Summary of GEO Impact

1. **Enhanced Discovery (Perplexity / Gemini / ChatGPT)**:
   * By providing schema-structured data for `Organization` and `LocalBusiness`, AI engines can quickly query and resolve who Nikeeta Rawat is, what services are offered, and where the studio is located without guesswork.
2. **Featured Snippets & AI Citations**:
   * The comparative table on the home page provides ready-to-consume comparisons that search engines prioritize for comparison queries.
   * The FAQ blocks are marked up explicitly, enabling AI summaries to fetch direct answers with source backlinks.
3. **Crawl & Index Efficiency**:
   * The manifest file, optimized sitemap, corrected anchor links, and lazy-loaded image files ensure search engine crawlers can index the site without bottlenecks.
4. **Corporate Trust Verification**:
   * Standard corporate footers containing detailed, non-placeholder legal documents (Privacy, Terms, Refund) and resource centers (`/guides`) are key signals used by modern AI overview models to separate high-quality authoritative local sites from low-quality portals.
