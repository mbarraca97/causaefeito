# Smooth Scroll Experience

A modern React website featuring smooth scrolling with opposite directional movement between left and right panels.

## Features

- ✨ **Smooth Scroll Snapping**: Fluid transitions between slides
- 🔄 **Opposite Direction Scrolling**: Left side scrolls up, right side scrolls down
- 📱 **Fully Responsive**: Works on desktop, tablet, and mobile
- 🎨 **Modern Design**: Using TailwindCSS with gradient backgrounds
- 🔤 **Google Fonts**: Josefin Sans typography
- 👆 **Touch Support**: Swipe gestures on mobile devices
- ⌨️ **Keyboard Navigation**: Arrow keys and Page Up/Down support
- 🎬 **Framer Motion Animations**: Smooth transitions and animations

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Josefin Sans)

## Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Slide.jsx       # Individual slide component
│   └── SlideContainer.jsx  # Container for slide animations
├── hooks/              # Custom React hooks
│   ├── useScrollSnap.js    # Main scroll behavior logic
│   └── useTouchGestures.js # Touch gesture handling
├── pages/              # Page components
│   └── Homepage.jsx    # Main homepage component
└── styles/             # Additional styles (if needed)
```

## How It Works

1. **Split Layout**: The homepage is divided into two 50% width sections
2. **Scroll Detection**: Mouse wheel, keyboard, and touch gestures are detected
3. **Opposite Movement**: When scrolling down:
   - Left side moves to previous slide (upward)
   - Right side moves to next slide (downward)
4. **Smooth Transitions**: Framer Motion provides fluid animations
5. **Responsive Design**: On mobile, sections stack vertically

## Customization

### Adding New Slides

Edit the `slides` array in `src/pages/Homepage.jsx`:

```jsx
const slides = [
  {
    title: "Your Title",
    content: "Your content here...",
    backgroundColor: "bg-gradient-to-br from-blue-500 to-purple-600",
    textColor: "text-white"
  },
  // Add more slides...
];
```

### Styling

- Modify TailwindCSS classes in components
- Update `tailwind.config.js` for custom themes
- Change fonts in `src/index.css`

### Animation Settings

Adjust timing and easing in:
- `src/hooks/useScrollSnap.js` (scroll timing)
- `src/components/SlideContainer.jsx` (transition animations)

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Performance

- Optimized with React's built-in performance features
- Smooth 60fps animations
- Minimal bundle size with tree-shaking
- Efficient scroll event handling with debouncing

## License

MIT License - feel free to use this project as a starting point for your own websites!