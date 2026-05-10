# SkyBag: Features Overview

SkyBag is an advanced web app to explore, compare, and sort airline luggage allowances worldwide.

## Core Features

1. **Search & Discovery**: Instantly find airlines via fuzzy search (name/IATA/country), multiselect regional filters, or sort by Generosity, Name, and Weight.
2. **"My Bag" Checker**: Enter your bag's dimensions/weight to auto-verify compatibility against all airlines. Carriers are visually flagged in red if your bag exceeds limits.
3. **Automated Data Pipeline**: A Node.js regex scraper (`scripts/fetch-baggage.ts`) fetches official policies, and a merger (`scripts/merge-data.ts`) integrates them into the app.
4. **Category Views**: Toggle between rules for 🎒 Carry-on, 🧳 Checked, and 👜 Personal Items.
5. **Geolocation**: Auto-detects user location via browser/IP to prioritize local airlines upon load, with a manual override option.
6. **Detailed Modals**: Click any airline to view full dimensions and weights across *Economy*, *Business*, and *First Class*.
7. **Comparison Engine**: Compare up to three airlines side-by-side to easily spot differences in dimensions, weight limits, and fees.
8. **Generosity Grading**: Airlines are badged as 🟢 Generous, 🟡 Moderate, or 🔴 Strict based on policy restrictiveness.
9. **Preferences & Localization**: Instantly toggle Metric/Imperial and Dark/Light modes. Settings are preserved via `localStorage`.
10. **Advanced UI**: Features live global airline logo injection (with elegant fallbacks) and a fully responsive layout.
11. **Grid & Table Views**: Seamlessly switch between an interactive 3D "Grid View" and a dense "Table View" that highlights the exact dimension/weight your bag exceeds.
