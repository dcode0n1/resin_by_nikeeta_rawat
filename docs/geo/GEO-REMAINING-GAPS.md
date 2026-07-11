# Remaining GEO Gaps & Editorial Recommendations

**Nikeeta Rawat Resin Studio**  
*Reported: July 12, 2026*

The following gaps represent items that cannot be safely automated. They require business strategy, branding decisions, or editorial review to implement.

---

## P1 — High Impact (Requires Business/Editorial Review)

### 1. Studio Location Clarification
* **Description**: The Contact page metadata previously referenced a "Gurugram resin studio," while the actual coordinates, address, and maps links point to "Kotdwar, Uttarakhand." We normalized this to "Kotdwar, Uttarakhand."
* **Action Required**: The business must verify if there is an active secondary drop-off point or consulting studio in Gurugram/Delhi NCR. If yes, we should add a second `LocalBusiness` schema profile and list it explicitly to capture Delhi-NCR search queries. If no, the Kotdwar location is now correctly established as the single source of truth.

### 2. High-Fidelity Asset Sourcing
* **Description**: Portfolio and gallery pages reference raw-staging paths (`/images/raw-staging/artwork-...`). While alt tags and lazy loading are optimized, these files should be compressed to modern **WebP** or **AVIF** formats.
* **Action Required**: Sourced files should be run through compression scripts, reducing file sizes from MBs to KBs to maximize Core Web Vitals and crawl speeds.

---

## P2 — Medium Impact (Requires Branding & Content Strategy)

### 3. Pricing Tier Verification
* **Description**: The `/investment` pricing guide details starting points (from ₹1,800 to ₹45,000). These are represented in structured schemas.
* **Action Required**: Review starting prices seasonally to ensure programmatic data matches current commercial rates.

---

## P3 — Low Impact (Requires Ongoing Content Curation)

### 4. Client Case Studies & Story Curation
* **Description**: While we have testimonials, AI search engines cite detailed, long-form stories.
* **Action Required**: Add detailed, step-by-step case studies to the Journal. For example: "Preserving Meera's Mumbai Jaimala - A Case Study in Rose Preservation." Detail the species of rose, the dehydration timeline, the casting layout, and the final dimensions.
