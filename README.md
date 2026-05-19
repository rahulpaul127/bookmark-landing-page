# Frontend Mentor - Bookmark landing page

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

---

## Overview

### Screenshot

| ![Desktop design](./design/desktop-design.jpg) | ![Mobile design](./design/mobile-design.jpg) |
| :--: | :--: |
| Desktop | Mobile |

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions)
- Live Site URL: [GitHub Pages](https://rahulpaul127.github.io/bookmark-landing-page-master/)

---

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (design tokens)
- CSS Flexbox & CSS Grid
- Mobile-first responsive workflow
- Vanilla JavaScript (for interactivity & validation)

### What I learned

- Implementing an **interactive tabbed interface** to switch between different feature panels efficiently without relying on external libraries. The state is fully managed by swapping `aria-selected` attributes and managing `hidden` classes for accessibility.
- Creating a functional **FAQ Accordion** using CSS grid animations (`grid-template-rows: 0fr` to `1fr`) combined with JavaScript state management (`aria-expanded`) to create perfectly smooth collapsing and expanding behaviors without fixed heights.
- Adding **client-side form validation** for an email input with visual error states (red border, exclamation icon, and error message block) using JavaScript regular expressions and CSS state classes (`.error`).
- Managing intricate **SVG shapes and background blobs** (`.bg-shape`) using absolute positioning, sizing percentages, and `z-index` to perfectly replicate the visual background effects behind the hero and feature illustrations.
- Building an **interactive mobile navigation menu** with vanilla JavaScript. It handles opening a full-screen overlay, modifying accessibility attributes, explicitly locking the `body` scroll (`overflow: hidden`), and dynamically altering the inline SVG logo colors via CSS inheritance based on the menu's active state.

### Continued development

- Add the deployed live links after publishing the project to GitHub Pages.
- Refine form validation to include live feedback as the user types, rather than just on submission.

## Author

- Frontend Mentor - [@rahulpaul127](https://www.frontendmentor.io/profile/rahulpaul127)
- Twitter - [@rahulpaul127](https://x.com/rahulpaul127)
