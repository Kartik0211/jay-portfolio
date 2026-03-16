# Jay Wadekar Design - Portfolio Website

## Overview

A sophisticated and modern single-page portfolio website showcasing the luxurious and industrial design work of Jay Wadekar. The website will serve as a visual biography and case study showcase for high-end clients and collaborators. It will use React and Framer Motion for a deeply animated, responsive, and engaging user experience.

---

# Product Requirements Document (PRD)

| **Version:** | 1.0 (Initial Draft) |
| --- | --- |
| **Owner:** | Jay Wadekar |
| **Target Audience:** | High-end interior design clients, architects, developers, collaborators. |
| **Key Objectives:** | 1. Showcase Jay Wadekar's portfolio in a unique and luxurious way. |
|  | 2. Communicate his core values: Luxury and Industrial. |
|  | 3. Provide an intuitive user experience with heavy, sleek animations. |
|  | 4. Generate high-quality leads via a Contact Us feature. |
|  | 5. Ensure complete mobile responsiveness and accessibility. |

## 1. Scope

* Single-page React application (though can be expanded to multi-page later).
* Based directly on the provided design image.
* "Jay Wadekar" will be the primary name used throughout.
* Sections: Header, Hero, Stats, Showroom/About, Portfolio Highlights, Diagonal Social Strip, Footer.
* Includes detailed animations: hover, enter-in, loading, and additional custom effects.

## 2. Feature Details

### Global Elements

* **Header:** Contains the logo "JAY WADEKAR DESIGN", links (Home, Projects, About, Studio, Journal), and a "Contact Us" button. *All text is customizable.*
* **Footer:** Dark background with key contact details, links, copyright info, and massive "CONTACTS + US" text.
* **Animations:** Staggered enter animations for nav links and button. Gentle parallax on the main body.

### 2.1 Homepage Sections

#### Section A: Header & Hero

* **Main Headline:** "Luxurious Interior And Industrial Design" in very large, bold font.
* **Main Hero Image:** High-quality visual of the core design aesthetic (modern living area).
* **Scroll Button:** "Best View" button (which will scroll down or could be linked to a video).
* **Founders Area:** Profile photos of Jay Wadekar and an Associate, with names below (e.g., "Founder and Principal Jay Wadekar" and "Associate Designer Sarah Chen"). *Users can change names and photos.* Text details about his achievements (e.g., "The 6K+ Specialized in Luxury").
* **Animations:** Split text reveal for the headline. Image enter from the bottom. Profile images fade and scale in. Staggered reveal for text blocks. "Best View" button has a pulse effect.

#### Section B: Stats & Image

* **Vertical Stats:** Image of a room on the left, with numerical stats and descriptions on the right (e.g., "14 Projects Done", "9 Current Works"). All numbers and text are configurable.
* **Description Text & Read More:** General bio or description text with a "Read More" button.
* **Animations:** Image enter with a subtle zoom. Stats numbers "count up" from zero. Text blocks fade and slide up. Button hover effect.

#### Section C: "Visit Our Showroom" / About

* **Layout:** Image on the right (e.g., modern showroom or dining space). Text block on the left with a "About Us" button.
* **Content:** Title "Visit Our Showroom", descriptive subtext. The button link will lead to a more detailed 'About' section or sub-page.
* **Animations:** Image enter with slide-in from right. Text block fade and slide up from left. Button hover effect (arrow animation).

#### Section D: Text Strip

* **Content:** Scrolling text bar with "LUXURIOUS INTERIOR + / MIAMI-BASED INTERIOR DESIGN". (Location text is customizable).
* **Animations:** Continuous horizontal text scroll (marquee effect).

#### Section E: Portfolio Highlights

* **Layout:** Grid-like display. A primary featured project on the left (e.g., "Miami Modern Villa", large image, "Britto Living Room" text). A dynamic, vertical list of other key projects on the right. Project data includes Name, Location, Description, and Link. All data is editable.
* **Animations:** Staggered enter animation for project cards. Image zoom on hover. Project text reveals on hover over the project card. Arrow buttons have elegant animation.

#### Section F: Diagonal Social Link Strip

* **Content:** A diagonal strip of rotating/moving social media names and search terms (Vimeo, Pinterest, Facebook, Twitter, Instagram, Linkedin, Youtube). Circular search icons.
* **Animations:** continuous diagonal scrolling text (like the text strip but rotated), with circular icons that might have a pulse effect.

## 3. Non-Functional Requirements

### Mobile Friendliness & Responsiveness

* The entire site must adapt perfectly to all screen sizes (desktop, tablet, mobile).
* Layouts must change based on viewport (e.g., stats vertical grid becomes horizontal or stacks, showroom section stacks text then image).

### Accessibility (a11y)

* Ensure proper contrast ratios for text.
* All images should have descriptive alt text.
* All interactive elements must be keyboard-accessible.

### Content Management

* The codebase should be structured to make it easy for non-developers to change text, images, and project data (e.g., via a JSON file or integrated with a CMS later).

## 4. Risks and Mitigation

* **Performance:** The heavy animations could slow down the site. **Mitigation:** Optimize image sizes and use a performant animation library like Framer Motion with efficient logic.
* **Cross-browser compatibility:** Ensure all CSS and JavaScript effects work across modern browsers.
* **Content update ease:** **Mitigation:** Design component props and data structure carefully for easy content changes.

---

# Design Specification Document

## Tech Stack

* **Framework:** React (Single Page Application, potentially with React Router).
* **Styling:** Tailwind CSS (or styled-components) for utilities and layout.
* **Animation Library:** Framer Motion (for entering, hovering, and continuous animations).
* **State Management:** Local component state or simple hooks (e.g., `useState`, `useEffect`).

## Project Folder Structure

```text
/my-portfolio-app
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero/
│   │   │   │   ├── hero-visual.jpg
│   │   │   │   ├── best-view-image.jpg
│   │   │   ├── founders/
│   │   │   │   ├── jay-wadekar-portrait.jpg
│   │   │   │   ├── associate-designer-portrait.jpg
│   │   │   ├── stats/
│   │   │   │   ├── stats-visual.jpg
│   │   │   ├── showroom/
│   │   │   │   ├── showroom-visual.jpg
│   │   │   ├── portfolio/
│   │   │   │   ├── project1/ (large)
│   │   │   │   │   ├── project1-main.jpg
│   │   │   │   ├── project2/
│   │   │   │   ├── project3/
│   │   │   │   ├── project4/
│   │   │   │   ├── project5/ (medium/small)
│   │   │   │   │   ├── project5-thumb.jpg
│   │   │   ├── icons/
│   │   │   │   ├── logo-text.svg
│   │   │   │   ├── arrows.svg
│   │   │   │   ├── social-icons/ (facebook, twitter, instagram, etc.)
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.js
│   │   │   ├── TextStrip.js
│   │   ├── layout/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   ├── sections/
│   │   │   ├── HeroSection.js
│   │   │   ├── FoundersSection.js
│   │   │   ├── StatsSection.js
│   │   │   ├── ShowroomSection.js
│   │   │   ├── PortfolioSection.js
│   │   │   ├── DiagonalStrip.js
│   ├── pages/
│   │   ├── HomePage.js
│   ├── styles/
│   │   ├── main.css (Tailwind or global styles)
│   ├── utils/
│   │   ├── data.json (or config.js for site data)
│   ├── App.js
│   ├── index.js
├── tailwind.config.js
├── package.json

```

## Styling & Layout

* **Fonts:** A combination of a strong, modern Sans-serif (like Montserrat or Inter) for headlines and a clean, elegant Serif (like Playfair Display) for accents or sub-headlines, and a basic Sans-serif for body text. **Headlines must use the oversize font style.**
* **Color Palette:**
* **Background:** White (#FFFFFF).
* **Text/Footer:** Deep Black/Charcoal (#111111).
* **Secondary Text/Subtle Elements:** Mid-to-Dark Grey (#555555).
* **Accent Color:** Gold/Copper (#C29C5D) (for things like table tops, accents, maybe a very thin border on some elements).
* **Action Color:** Accentuate key actions with hover states.



## Component Specifications

### Global Components

* **Header.js:** Flex layout. Left: "JAY WADEKAR DESIGN" logo. Center: Navigation links. Right: "Contact Us" button. Add entering fade and hover effect on all elements.
* **Footer.js:** Dark background. Massive, bold "CONTACTS + US" in huge letters. Smaller contact details, nav links, and copyright info.

### Section Components (HomePage.js)

* **HeroSection.js:**
* Main Headline (Large bold text). Split text for initial reveal animation.
* Main Hero Image container. Enter animation (e.g., slide up and zoom in).
* "Best View" pulse button.


* **FoundersSection.js:**
* Circular or stylized profile photos (Jay + Associate). Staggered enter from bottom. Text below fades in. Text details (like '6K+...') are dynamic.


* **StatsSection.js:**
* Image with rounded corners on left. Slide in from left.
* Vertical list of stats. Number elements have 'count up' animation. Subtext fades in.
* Read More button with hover animation.


* **ShowroomSection.js:**
* Split-screen grid. Left: text block, right: image.
* Headline and text fade and slide up. Image slides in from right.
* "About Us" button with arrow animation.


* **TextStrip.js:**
* A component that accepts a text string and repeats it for a continuous horizontal marquee effect.


* **PortfolioSection.js:**
* Nested grids or flexbox. Left: Feature Project card (large image, name, subtitle). Zoom on hover, text reveal on hover. Staggered enter. Right: a list of smaller project cards. Vertical staggered enter. Each smaller card has a similar hover effect. Arrows for pagination or detail view.


* **DiagonalStrip.js:**
* Rotated container. Two or more continuous marquee bands. One band for social platform names and one for search terms with icons. The strip moves diagonally. Icons have gentle pulse.



## Animations Plan (Framer Motion)

### Page Load

* A custom loading screen with a monogram (e.g., a stylized "JW") that animates and fades out to reveal the homepage.
* All homepage sections use staggered enter animations.

### Component Entering (Viewport-based)

* **Sections:** As a section comes into view, its elements will fade in and slightly slide up. Use `whileInView` prop in Framer Motion.
* **Elements within Sections:** Stagger animations for elements like the stats blocks or project cards.
* **Main Hero Image:** Subtle parallax effect on scroll.
* **Text Strip and Diagonal Strip:** Use CSS `animation` with `linear infinite` or Framer Motion for precise marquee effect.

### Hover Effects

* **Buttons:** Color shift, size change, subtle glow, or arrow icon animation.
* **Links:** Text color change, text reveal, or a modern underline effect.
* **Image Cards (Portfolio):** Subtle zoom, overlay fade in, text content appearing, scale change.
* **Stats Blocks:** Numbers might change color or get bigger slightly.

---

# Required Assets List

## Images

* **Public/assets/images/hero/**
* `hero-visual.jpg`: High-quality, high-resolution image of a modern living area (similar to the one in the design). Formats: `.jpg`, `.webp`. Size: 1920x1080px or higher.
* *(Optional: Could add images for different views or videos)*


* **Public/assets/images/founders/**
* `jay-wadekar-portrait.jpg`: Professional portrait of Jay Wadekar.
* `associate-designer-portrait.jpg`: Portrait of an associate designer. (Placeholders or actual photos).
* Formats: `.jpg`, `.webp`. Size: Minimum 400x400px. High-quality.


* **Public/assets/images/stats/**
* `stats-visual.jpg`: Image of a different room for the stats section. (Placeholders or actual photos). Formats: `.jpg`, `.webp`. Size: Min 600x600px.


* **Public/assets/images/showroom/**
* `showroom-visual.jpg`: High-resolution visual of a showroom or dining space. Formats: `.jpg`, `.webp`. Size: Min 1024x768px.


* **Public/assets/images/portfolio/**
* `project1/project1-main.jpg`: High-resolution, large image for the featured project. Formats: `.jpg`, `.webp`. Size: Min 1920x1080px.
* `project2/project2-thumb.jpg`: Smaller thumbnail image. Formats: `.jpg`, `.webp`. Size: Min 600x400px.
* `project3/`, `project4/`, `project5/`, etc.: Similar thumbnails for all other projects. Formats: `.jpg`, `.webp`.
* *(Include multi-resolution versions for responsiveness, e.g., `-sm.jpg`, `-md.jpg`)*



## Icons

* **Public/assets/icons/**
* `logo-text.svg`: SVG version of the "JAY WADEKAR DESIGN" logo.
* `arrows.svg`: Custom SVG arrows for buttons and pagination. (Left, Right, Down).
* `social-icons/`: SVGs for social platforms: `vimeo.svg`, `pinterest.svg`, `facebook.svg`, `twitter.svg`, `instagram.svg`, `linkedin.svg`, `youtube.svg`.
* `search.svg`: Custom search/magnifier icon for the diagonal strip.
* *(Optional: Monogram image for loading screen)*



## Fonts

* **Headlines/Large Text:** Use a modern serif (e.g., Playfair Display) for a luxurious feel, or a strong modern sans-serif (e.g., Montserrat) for a sleek, industrial look. Select one that best matches the oversized headline design.
* **Secondary Text/Sub-headlines:** Complementary sans-serif (e.g., Inter, Open Sans, Roboto).
* **Body Text:** Basic, readable sans-serif (e.g., Open Sans, Roboto).
* **File Formats:** Use `.woff` and `.woff2` for best performance. Define `@font-face` in `main.css`.

## Data

* `src/utils/data.json`: A simple JSON file or JS object to hold customizable content, including text for each section, project data (name, description, location, images, links), and founder names/roles. This ensures easy updates without changing the code.