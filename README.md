# Sticky Notes App

A modern, feature-rich sticky note application built with vanilla HTML, CSS, and JavaScript. Create, manage, and organize your notes with a beautiful dark theme interface and persistent local storage.

## Features

- ✨ **Add Notes** - Quickly create new sticky notes with a single click
- 🎨 **Color Customization** - Choose from 7 vibrant colors for each note:
  - Yellow, Teal, Pink/Red, Purple, Orange, Light Blue, and White
- 💾 **Persistent Storage** - All notes are automatically saved to browser's local storage
- 🗑️ **Delete Notes** - Remove notes you no longer need
- 📝 **Real-time Editing** - Edit note content instantly with auto-save functionality
- 🎯 **Responsive Grid Layout** - Notes arrange beautifully across different screen sizes
- 🌙 **Dark Theme** - Eye-friendly dark interface with modern styling

## Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS custom properties and Grid layout
- **JavaScript (Vanilla)** - Pure JS without external dependencies
- **Google Fonts** - Outfit font for clean typography
- **SVG Icons** - Lightweight, scalable icons for UI elements

## Project Structure

```
Sticky-NoteApp/
├── index.html      # HTML structure
├── script.js       # JavaScript functionality
├── style.css       # Styling and layout
└── README.md       # This file
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start creating notes!

## Usage

### Creating a Note
- Click the **Add Note** button in the top-right corner
- A new note will appear at the top of your collection
- Start typing to add content

### Customizing a Note
- Click on any color option at the bottom of a note to change its color
- The color change is saved automatically

### Deleting a Note
- Click the trash icon at the bottom-right of any note
- The note will be deleted immediately

### Saving Notes
- All notes are automatically saved to your browser's local storage
- Your notes will persist even after closing and reopening the browser

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Data Storage

Notes are stored in the browser's `localStorage` under the key `sticky-notes`. Each note contains:
- `id` - Unique identifier (timestamp)
- `content` - The note text
- `color` - Selected color value in hex format

## Customization

### Change Colors
Edit the `COLORS` array in `script.js` to modify the available color options.

### Modify Styling
Update the CSS custom properties in `style.css` (`:root` section):
- `--bg-color` - Main background color
- `--text-color` - Primary text color
- `--accent-color` - Button and accent color
- `--font-main` - Font family

## Performance

- No external dependencies - Lightweight and fast
- Optimized DOM updates to prevent flickering
- Smooth animations and transitions
- Efficient local storage usage

## Future Enhancements

Potential features for future versions:
- Search/filter functionality
- Note categories or tags
- Drag and drop to reorder notes
- Export notes as JSON or PDF
- Dark/Light theme toggle
- Pin important notes to the top
- Rich text editing support

## License

This project is open source and available for personal and educational use.

## Author

Created as a simple HTML/CSS/JS project for learning and daily use.

---

**Enjoy organizing your thoughts with Sticky Notes!** 📝✨
