# AI Tools Directory

## Overview
A responsive, searchable, categorized directory of AI tools.  
Designed to help users explore and access AI tools by category, with live filtering, a clean interface, and a toggle for light/dark themes.  
Works both as a standalone web app and as a Chrome extension.

---

## Features
- Light and dark mode toggle (with saved preference)
- Live search filtering by name and description
- Category filters showing real-time tool counts
- Responsive grid layout for desktop and mobile
- Opens external tool links in a new tab
- Functional as a web app or as a Chrome extension popup

---

## Installation

### As a Web App
1. Clone or download this repository.
2. Open `index.html` in any modern browser.

### As a Chrome Extension
1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select this project folder.
5. The extension icon will appear in your toolbar; click it to open the directory.

---

## Project Structure
.
├── index.html        # Main page  
├── index.css         # Styles and theme  
├── index.js          # Rendering, filtering, theme toggle  
├── manifest.json     # Chrome extension configuration  
├── icons/            # Extension icons  
└── README.md

---

## Customization
- Modify `index.css` to change the theme (colors, gradients, dark mode palette).
- Edit the `aiTools` array in `index.js` to add or remove AI tools.

---

## License
Licensed under the MIT License.

---

## Author
Created by [Annu Kumari].  
For issues, questions, or contributions, please open an issue on this repository.
