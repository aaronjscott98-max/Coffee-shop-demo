Tay Tides Coffee Roasters | Artisan Brewing in Dundee
Tay Tides is a bespoke front-end web application designed for a conceptual high-end coffee roastery. It is a technical showcase of 2026 design trends, moving away from generic templates to provide a high-performance, "Editorial Minimalist" digital experience.

### 🔗 Project Links
* **Live Demo**: [View Tay Tides Live](http://aaronjscott98-max.github.io/Coffee-shop-demo/)
* **Developer Portfolio**: [Visit My Portfolio](https://aaronjscott.co.uk/)

Why This Project Matters
In a saturated digital market, a "working" website is no longer enough. This project was built to bridge the "Digital Gap", the space where a brand's physical beauty is lost in a clunky web experience.

By using Vanilla JavaScript and Advanced CSS Stacking, Tay Tides provides an "app-like" fluidity that remains lightning-fast, ensuring the user's journey from discovering a roast to finding the shop is friction free.

The Professional Edge: Problem Solving
The true value of a developer is the ability to debug complex interactions. This project highlights four critical "Full Stack Thinking" moments:

1. Architectural Integrity: The JS-HTML Bridge
The Challenge: A silent failure in the mobile menu due to a naming mismatch between the HTML structure (menutoggle) and the external logic engine (mobile-toggle).

The Professional Fix: I harmonised the DOM identifiers and implemented a DOMContentLoaded wrapper. This ensures the script is robust and prevents "Race Conditions" where the code tries to run before the browser is ready.

2. Intelligent Data Flow: The Bento Grid Fix
The Challenge: High impact "Bento Box" layouts often collapse on mobile, squashing content and ruining the brand narrative.

The Professional Fix: I engineered a responsive override that transitions the grid into a single column flex-stack. I used the CSS order property to ensure Value Propositions, such as the 100% Compostable stat, are prioritised visually over decorative imagery.

3. User Protection: Solving the "Scroll Trap"
The Challenge: Interactive elements like Google Maps often hijack a user's touch-scroll on mobile, making it impossible to reach the footer.

The Professional Fix: I implemented a "Safe-Scroll" logic using pointer-events: none, re-enabling interactivity only upon an explicit user tap. This respects the user's intent and improves mobile accessibility.

4. Advanced UI Layering: Glassmorphism & Z-Index
The Challenge: Complex overlays, such as blurred menus, often suffer from "clipping" where elements disappear behind the background.

The Professional Fix: I designed a tiered z-index hierarchy, reaching 10001 for critical controls, to manage a sophisticated "Stacking Context," ensuring the UI remains stable across all devices.

Technical Specifications
Performance First: Built with zero frameworks or heavy libraries for a near-perfect Lighthouse score.

Visual Polish: Hardware-accelerated CSS filters for custom map theming and backdrop-filter for premium glass effects.

Clean Code: Modularised CSS and JS for easy maintenance and future scalability.

Deployment
GitHub Pages: Seamless deployment via the main branch.

Vercel/Netlify: Instant-on static hosting with automatic SSL.
