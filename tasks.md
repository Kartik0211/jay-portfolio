# Jay Wadekar Design Portfolio - Implementation Tasks

This is a comprehensive to-do list derived from the `prd.md` document, guiding the development of the React webpage from scratch.

## 1. Project Setup & Configuration
- [ ] Initialize a new React project (e.g., using `vite` or `create-react-app`).
- [ ] Install required dependencies:
  - `tailwindcss` (for styling)
  - `framer-motion` (for animations)
  - `react-router-dom` (optional, if planning for future multi-page expansion)
- [ ] Configure Tailwind CSS:
  - Set up brand colors (Background: `#FFFFFF`, Text: `#111111`, Accent: `#C29C5D`, Secondary: `#555555`).
  - Add required font families (e.g., Playfair Display, Montserrat, Inter).
- [ ] Set up the folder structure as defined in the PRD (`src/components`, `src/pages`, `src/utils`, `src/styles`, `public/assets`).

## 2. Asset & Data Preparation
- [ ] Gather and place all required images into their respective `public/assets/images/` subfolders (Hero, Founders, Stats, Showroom, Portfolio).
- [ ] Gather and place SVG icons (logo, arrows, social media icons, search) into `public/assets/icons/`.
- [ ] Create `src/utils/data.json` (or `data.js`) to store all customizable content:
  - Site copy and localized text.
  - Founder details and roles.
  - Portfolio project details (Name, Location, Description, Image paths).
  - Stat numbers and descriptions.
  - Social media links and marquee text blocks.

## 3. Global Components
- [ ] Build **Button** component: Reusable button with color shift and arrow icon hover animations.
- [ ] Build **Header** component: Top navigation with logo, staggered enter link animations, and "Contact Us" button.
- [ ] Build **Footer** component: Dark background, massive "CONTACTS + US" typography, and footer data links.
- [ ] Build **TextStrip** component: Reusable continuous horizontal scrolling marquee effect.
- [ ] Build **Loading Screen**: Custom monogram ("JW") loading animation that fades out upon mount.

## 4. Homepage Sections Development
- [ ] **HeroSection**:
  - Implement split text reveal for the main headline.
  - Add enter animation (slide up/zoom) for the hero image and parallax on scroll.
  - Create a pulsing "Best View" button.
- [ ] **FoundersSection**:
  - Add profile photos with staggered scale/fade-in animations.
  - Render dynamic text details from `data.json`.
- [ ] **StatsSection**:
  - Add side image with slide-in from left.
  - Implement the "count up" animation for stat numbers.
  - Add fading/sliding up subtext and "Read More" button.
- [ ] **ShowroomSection**:
  - Create the split-screen layout (text left, image right).
  - Add slide-in/fade animations triggered on scroll.
- [ ] **PortfolioSection**:
  - Build the grid format (Featured project on the left, smaller list on the right).
  - Implement complex hover animations: image zoom, overlay fade, and text reveal.
  - Add staggered entrance animations when scrolled into view.
- [ ] **DiagonalStrip**:
  - Build a rotated container combining two looping marquees (social platforms and search terms with pulsing icons).

## 5. Page Assembly (HomePage.js)
- [ ] Build `HomePage.js` and stack all the created section components sequentially.
- [ ] Add Framer Motion's `whileInView` to each section wrapper to ensure entering animations trigger correctly on scroll.
- [ ] Integrate the custom loading screen on initial mount.

## 6. Responsiveness & Accessibility
- [ ] Ensure perfect responsiveness across Desktop, Tablet, and Mobile breakpoints using Tailwind utility classes.
- [ ] Check color contrast, semantic HTML, and image `alt` attributes for general a11y compliance.
- [ ] Ensure interactive elements are keyboard accessible.

## 7. Final Polish
- [ ] Test cross-browser compatibility.
- [ ] Optimize image loading and framer motion performance.
- [ ] Verify content populates correctly purely from the centralized `data.json` file.
