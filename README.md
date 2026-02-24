# Disha Malhotra - Portfolio

A modern, production-quality React portfolio website built with a system-oriented design philosophy.

## Design Philosophy

**"Building Systems, Not Just Websites"**

This portfolio showcases a modular, system-oriented approach to web development with:
- Clean, grid-based layouts with strong alignment
- Sharp edges and geometric design elements
- Subtle micro-animations and professional aesthetics
- Elegant, calm, conference-style visual design

## Tech Stack

- **React 18** - Modern functional components with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first styling with custom design system
- **Framer Motion** - Smooth animations and transitions
- **ESLint** - Code quality and consistency

## Color Theme

- **Background**: `#070A14` (midnight blue)
- **Primary Accent**: `#8B8CFF` (soft lavender)
- **Text Primary**: `#E8EAFF`
- **Text Muted**: `#A8AACC`

## Features

### Sections
1. **Splash Screen** - Professional loading experience
2. **Hero** - System-oriented introduction
3. **About** - Engineering philosophy and principles
4. **Experience** - Professional timeline
5. **Projects** - System architecture showcase
6. **Skills** - Technical expertise with progress indicators
7. **Contact** - Professional contact form

### Animations
- Smooth fade-in and slide-up transitions
- Hover effects with subtle transforms
- Scroll-triggered animations
- Professional micro-interactions

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Portfolio_Disha_Malhotra
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

### Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx
│   ├── SplashScreen.tsx
│   └── Footer.tsx
├── sections/           # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── hooks/              # Custom React hooks
│   └── useSplashScreen.ts
├── types/              # TypeScript type definitions
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## Customization

### Colors
Update the color theme in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      'midnight': '#070A14',
      'lavender': '#8B8CFF',
      'text-primary': '#E8EAFF',
      'text-muted': '#A8AACC',
    }
  }
}
```

### Content
- Update personal information in each section component
- Modify project data in `Projects.tsx`
- Update experience timeline in `Experience.tsx`
- Customize skills and technologies in `Skills.tsx`

### Animations
Framer Motion animations can be customized in each component. Key animation properties:
- `initial` - Starting state
- `animate` - End state
- `transition` - Animation timing and easing
- `whileHover` - Hover interactions

## Performance

- Optimized bundle size with Vite
- Lazy loading of animations
- Efficient re-renders with React best practices
- Responsive images and assets

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this as a template for your own portfolio.

## Contact

For questions about this portfolio template:
- Email: disha.malhotra@email.com
- LinkedIn: linkedin.com/in/dishamalhotra
- GitHub: github.com/dishamalhotra