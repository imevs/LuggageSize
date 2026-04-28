# SkyBag AI Instructions & Coding Standards

This document serves as a guide for AI agents and coding assistants working on the SkyBag codebase. Adhering to these standards ensures consistency, performance, and maintainability.

## 🛠 Tech Stack
- **Languages:** TypeScript (Strict Mode), HTML5
- **Styling:** Vanilla CSS (CSS Variables, Flexbox/Grid)
- **Bundler:** Vite
- **Testing:** Vitest
- **Scripts:** Tsx (for data pipeline)

## 🏗 Architecture Principles
1. **Component Pattern:** UI components are located in `src/components/`. They should be pure functions that return HTML strings based on a given state.
2. **State Management:** Centralized state in `src/main.ts` using the `AppState` interface in `src/types.ts`.
3. **Vanilla UI State:** Use CSS classes (e.g., `card--selected`, `modal--active`) and the `hidden` attribute to manage UI visibility rather than destructive DOM manipulation.
4. **Utility First:** Keep business logic (dimensions, unit conversions, search) in `src/utils/`.

## 🎨 Styling & Design
- **Single Source of Tokens:** All colors, spacing, and transition durations must use the CSS variables defined in `src/styles/index.css`.
- **Glassmorphism:** Use `backdrop-filter: var(--glass-blur)` and semi-transparent backgrounds for a premium feel.
- **Micro-animations:** Always include subtle hover effects and transitions (`var(--transition)`) for interactive elements.
- **Dark Mode:** Support is mandatory. Ensure every class has appropriate `:where(.theme-dark)` or `.theme-dark .class` overrides.

## 🧬 Data Pipeline workflow
SkyBag uses an automated pipeline to collect baggage data:
1. **Scraping:** `npm run fetch-baggage` triggers `scripts/fetch-baggage.ts`. This uses heuristic regex parsing to find dimensions/weights on airline websites.
2. **Merging:** `npm run merge-baggage` triggers `scripts/merge-data.ts`. This injects the scraped results into `src/data/airlines.ts` after validating against TypeScript types.
3. **Manual Override:** If an airline blocks the scraper (e.g., 403 Forbidden), the merge script is designed to safely fallback to existing data while scrubbing legacy fields like `notes`.

## ✅ Coding Rules
- **No Placeholders:** Never use placeholder images. Use the airline logo CDN or generated CSS initials.
- **Strict Types:** Always update `src/types.ts` if adding new data properties.
- **Unit Testing:** Any new business logic (especially dimension/weight math) MUST have a corresponding test in the `tests/` directory.
- **Clean UI:** Avoid cluttered summaries or "notes" fields. Let the structured data (Dimensions, Weight, Quantity) speak for itself.

## 🎒 "My Bag" Checker logic
When working on the dimension checker:
- Use `src/utils/baggage.ts` for comparison logic.
- Dimension comparison MUST be "best-fit" (sorted dimensions check).
- Highlighting is handled via the `.card--exceeds` CSS class.
