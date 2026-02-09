#  Receipt Shopping Cart

A fully functional shopping cart application built with vanilla JavaScript, styled to look like an old-school paper receipt. This project demonstrates DOM manipulation, state management, LocalStorage persistence, and advanced CSS styling.

## Overview
<img width="1919" height="953" alt="image" src="https://github.com/user-attachments/assets/f6a6d665-00ae-4506-a6dd-246da849d6ff" />

The interface mimics a physical receipt with:
- **Typewriter Typography** (Courier Prime).
- **Textured Paper Background** using CSS gradients.
- **Jagged "Torn" Bottom Edge** generated with pure CSS.
- **Dashed Coupon Borders**.

## Features

### Functionality
- **Add Items**: Select products from the general store catalog.
- **Remove Items**: Delete specific entries from the receipt.
- **Auto-Calculation**: Instantly updates Subtotal, Tax (18%), and Grand Total.
- **Persistence**: Uses `localStorage` so your cart survives page refreshes.

### UI / UX
- **Skeuomorphic Design**: Realistic paper texture and shadow effects.
- **Responsive**: Centers perfectly on the screen.
- **Visual Feedback**: Hover states for buttons and list items.

## 🛠️ Tech Stack

- **HTML5**: Semantic structure.
- **CSS3**: 
    - `linear-gradient` for paper texture.
    - `::after` pseudo-elements for the jagged sawtooth border.
    - `outline-offset` for the decorative inner border.
- **JavaScript (ES6+)**: 
    - `localStorage` API.
    - `Array.map`, `Array.reduce`, and `Array.filter` for data handling.

## File Structure

```text
/vintage-cart
│
├── index.html    # Main HTML structure + Google Fonts link
├── style.css     # Vintage styling (gradients, borders, animations)
├── script.js     # Logic (Add/Remove items, math, storage)
└── README.md     # Project documentation
