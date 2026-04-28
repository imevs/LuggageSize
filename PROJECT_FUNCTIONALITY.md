# SkyBag: Project Functionality & Features Overview

SkyBag is a premium web application developed to help travelers explore, compare, and sort airline luggage allowances worldwide. Below is a comprehensive breakdown of the application's functionality.

## Core Features
1. **Dynamic Airline Search & Discovery**
   - **Fuzzy Search:** Look up airlines instantaneously by airline name, IATA code, or country mapping.
   - **Regional Multiselect Filtering:** A prominent dashboard panel dynamically detects and maps all available geographical regions (e.g., Europe, North America, Oceania). You can concurrently "multiselect" these to cross-filter carriers by continent.  
   - **Smart Sorting Options:** Sort airlines by sheer generosity of their baggage terms (Generous -> Strict), alphabetically by Name, or sequentially by total weight limit variations.

2. **Personalized "My Bag" Size Checker**
   - **Custom Dimension Entry:** Users can input their bag's exact Length, Width, Height, and Weight via a dedicated "🎒 My Bag" modal.
   - **Real-Time Compatibility Highlighting:** The application automatically cross-references your bag's dimensions (using a best-fit rotation algorithm) against every airline's allowance.
   - **Visual Warning System:** Airlines where your bag exceeds free limits or size constraints are instantly flagged with a **red-tinted warning background** and an "Exceeds allowance" banner.

3. **Automated Baggage Data Pipeline**
   - **Heuristic Regex Scraper:** A robust Node.js-based collection script (`scripts/fetch-baggage.ts`) that fetches official policy pages and extracts dimensions/weights using sophisticated regex heuristics.
   - **Data Integration Script:** A transformation engine (`scripts/merge-data.ts`) that maps raw scraped results into the strictly-typed TypeScript application core, ensuring a single source of truth.

4. **Luggage Category Views**
   - Seamless toggling views to evaluate limits strictly for:
     - 🎒 **Carry-on** (cabin) rules
     - 🧳 **Checked** baggage allowances
     - 👜 **Personal Item** restrictions

5. **Intelligent Geolocation**
   - The application invokes the Browser Geolocation API coupled with an IP-fallback to determine the user's location automatically. 
   - Upon initial load, the app prioritizes projecting airlines native to the user's geographical country (e.g., loading Delta and American Airlines first for US visitors).
   - "Change Location" allows manually overriding physical coordinates to inspect foreign airline dominance.

6. **Detailed Luggage Manifests (Modals)**
   - Selecting any specific airline card unfolds a detailed summary modal for in-depth viewing.
   - **Visual Class Separation:** Supports splitting dimensions and weight rules across varied flight classes including *Economy*, *Business*, and *First Class* tabs.
   - **Snappy Tabbed Interface:** Optimized CSS logic ensures smooth, instantaneous switching between cabin class allowances.

7. **Side-by-Side Comparison Engine**
   - You can inject up to three unique airlines simultaneously into the 'Comparison Engine'.
   - Reveals an expanding, fixed-header side-by-side data table highlighting differences in dimension strictness, included weights, quantities, and general generosity metrics so travelers can make fast economic decisions.

8. **Generosity Grading System**
   - A proprietary badging system actively tags each carrier:
     - 🟢 **Generous:** Friendly policies usually enabling larger complementary scopes.
     - 🟡 **Moderate:** Fair standard rules mirroring traditional industry scopes. 
     - 🔴 **Strict:** Tightly managed configurations associated commonly with restrictive Low Cost Carriers (e.g., Ryanair/Spirit).

9. **Preference Memory & Localization**
   - **Measurements Engine:** Support for instant metric (cm/kg) & imperial (in/lb) mathematical toggling.
   - **Dark / Light Mode:** Fully adaptive high-fidelity dark or light user interfaces utilizing glassmorphism elements. 
   - Uses `localStorage` tracking to permanently save user configurations seamlessly across persistent visits.

10. **Advanced UI & Logos**
    - **Global Logo CDN:** Live injection of highly optimized carrier logos directly linked via official global flight databases.
    - **Graceful Fallbacks:** Elegant initial-based placeholders locally generated if external logo images fail to load.
    - Fully optimized grid breakpoints matching desktop orientations seamlessly down to mobile experiences.
