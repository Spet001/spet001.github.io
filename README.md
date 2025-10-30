# Eduardo Gelain - Portfolio Website

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://spet001.github.io)
[![GitHub Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-blue.svg)](https://pages.github.com/)
[![React](https://img.shields.io/badge/react-18-61DAFB.svg?logo=react)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, interactive portfolio website showcasing software development and game development projects. Built with React and featuring an animated starfield background, bilingual support (Portuguese/English), and an easter egg surprise.

![Portfolio Preview](assets/e.png)

## 🌟 Features

### Interactive Design
- **Dynamic Starfield Background**: A mesmerizing animated space scene with moving stars and a controllable moon
- **Arrow Key Controls**: Use ↑ ← ↓ → keys to move the moon across the starfield
- **Smooth Animations**: Fade-in effects for all sections with intersection observer
- **Responsive Layout**: Fully responsive design that works on all devices

### Content Features
- **Bilingual Support**: Complete Portuguese (PT-BR) and English (EN) translations
- **Project Showcase**: Three-tier project categorization:
  - **Featured Projects**: Major works and contributions
  - **Other Projects**: Side projects and experiments
  - **Studies & Challenges**: Learning exercises and bootcamp projects
- **Technology Tags**: Visual representation of technologies used in each project
- **Direct Links**: Quick access to GitHub repositories, live demos, Steam pages, and Nexus Mods
- **Downloadable Resume**: Available in both languages

### Special Features
- **Easter Egg**: Hidden DOOM game - find and click the easter egg trigger!
- **Custom Logo**: Animated SVG logo for SpetGames
- **Status Indicator**: Real-time availability status
- **Social Links**: Direct connections to GitHub, LinkedIn, and email

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library (loaded via CDN)
- **Babel Standalone** - JSX transformation in the browser
- **Vanilla CSS** - Custom styling with modern CSS features
- **Font Awesome 6** - Icon library
- **Google Fonts (Inter)** - Typography

### Development
- **No Build Step**: Pure HTML/CSS/JS setup for simplicity
- **GitHub Pages**: Static site hosting
- **Git**: Version control

### APIs and External Resources
- **Skillicons.dev**: Technology skill icons
- **Steam API**: Game store integration
- **Nexus Mods**: Mod repository links
- **webDOOM**: Embedded DOOM game for easter egg

## 📁 Project Structure

```
spet001.github.io/
├── index.html              # Main HTML file with React setup
├── app.js                  # React application (main component logic)
├── index.css               # Global styles and component styling
├── .gitignore             # Git ignore rules
├── README.md              # This file
└── assets/                # Static assets
    ├── curriculo.pdf                      # Portuguese resume
    ├── Translated_CV_EduardoGelain.docx  # English resume
    ├── Outcaster1.jpg                    # Project screenshots
    ├── cadeirante-simulator.gif          # Project demos
    ├── demotranslate.gif                 # Project demos
    ├── ff13-traducao.png                 # Project images
    └── [other project assets]            # Additional images
```

### File Descriptions

#### `index.html`
The entry point of the application. Contains:
- Meta tags for SEO and responsive design
- External library imports (React, Babel, Font Awesome)
- Custom SVG favicon
- Root div for React mounting

#### `app.js`
Main React application file containing:
- **Project Data**: Complete list of all projects with bilingual descriptions
- **React Components**:
  - `Starfield`: Animated background with interactive moon
  - `Header`: Hero section with name, title, and social links
  - `About`: About section with skills showcase
  - `Projects`: Project grid with filtering by category
  - `ProjectCard`: Individual project display
  - `EasterEggTrigger`: Hidden DOOM game trigger
  - `Footer`: Contact information
- **Context API**: Language management system
- **Custom Hooks**: Fade-in animations with intersection observer

#### `index.css`
Comprehensive styling including:
- CSS variables for theming
- Responsive grid layouts
- Animation keyframes
- Component-specific styles
- Mobile-first responsive breakpoints

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic text editor (VS Code, Sublime Text, etc.)
- Git (for cloning and version control)
- Optional: Live Server extension for development

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Spet001/spet001.github.io.git
   cd spet001.github.io
   ```

2. **Open in your browser**
   
   **Option A: Direct File Access**
   ```bash
   # Simply open index.html in your browser
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

   **Option B: Local Server (Recommended)**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js http-server
   npx http-server -p 8000
   
   # Using PHP
   php -S localhost:8000
   ```
   
   Then navigate to `http://localhost:8000`

3. **Start developing**
   - Edit `app.js` to modify content and functionality
   - Edit `index.css` to change styling
   - Edit `index.html` to modify the structure or add libraries

## 📝 Usage

### Basic Navigation
- Scroll through the page to view different sections
- Use **arrow keys** (↑ ← ↓ →) to control the moon in the background
- Click the **language switcher** (PT/EN) to change languages
- Click **project cards** to view more details
- Click **Repository** or **Live Demo** buttons on projects to visit links

### Viewing Projects
Projects are organized into three categories:
1. **Featured Projects**: Main professional work and contributions
2. **Other Projects**: Additional side projects and experiments
3. **Studies & Challenges**: Learning projects and bootcamp exercises

### Finding the Easter Egg
Look for the "No Easter Eggs Here" sign at the bottom of the page... or is there? 🤔

## 🎨 Customization

### Adding Your Own Projects

Edit the `allProjects` array in `app.js`:

```javascript
const allProjects = [
    {
        id: 'unique-project-id',           // Unique identifier
        image: "path/to/image.jpg",        // Project thumbnail
        technologies: ["Tech1", "Tech2"],  // Technology tags
        repoUrl: "https://github.com/...", // GitHub repository
        liveUrl: "https://...",            // Live demo URL (optional)
        liveUrlTextKey: "liveUrlText",     // Translation key for button
        category: 'relevant',              // 'relevant' or 'minor'
        pt: {                              // Portuguese content
            title: "Project Title PT",
            description: "Description in Portuguese..."
        },
        en: {                              // English content
            title: "Project Title EN",
            description: "Description in English..."
        }
    },
    // Add more projects...
];
```

### Modifying Personal Information

1. **Update Header Information**
   - Edit the translations object in `LanguageProvider` component
   - Modify `title`, `subtitle`, and `aboutText` keys

2. **Update Social Links**
   - Find the `Header` and `Footer` components
   - Replace URLs in the anchor tags:
     ```javascript
     <a href="mailto:your-email@example.com">
     <a href="https://github.com/yourusername">
     <a href="https://linkedin.com/in/yourprofile">
     ```

3. **Update Resume Files**
   - Replace `assets/curriculo.pdf` with your Portuguese resume
   - Replace `assets/Translated_CV_EduardoGelain.docx` with your English resume
   - Update the `resumeUrl` logic in the `Header` component if needed

### Changing Color Scheme

Edit CSS variables in `index.css`:

```css
:root {
    --primary-color: #00aaff;      /* Main accent color */
    --background-color: #0a0a0a;   /* Background */
    --text-color: #e0e0e0;         /* Text color */
    --card-bg: #1a1a1a;            /* Card background */
    /* Add more custom colors */
}
```

### Modifying Technology Icons

The portfolio uses [Skillicons.dev](https://skillicons.dev/). To change the displayed icons:

```javascript
const TechIcons = () => {
    const techs = ['cs', 'python', 'unity', 'c', 'cpp', 'js'];
    // Add more: 'java', 'react', 'nodejs', 'docker', etc.
    // ...
};
```

Available icons: Visit [skillicons.dev](https://skillicons.dev/) for the complete list.

### Customizing the Starfield

Modify the `Starfield` component in `app.js`:

```javascript
const numStars = 500;        // Number of stars
const speed = 3;             // Moon movement speed
// Adjust star sizes, colors, and animation speeds
```

## 🌐 Deployment

### GitHub Pages (Current Setup)

This site is already configured for GitHub Pages:

1. **Automatic Deployment**
   - Push changes to the `main` branch
   - GitHub Pages automatically deploys from the root directory
   - Site will be live at `https://yourusername.github.io`

2. **Custom Domain (Optional)**
   ```bash
   # Add a CNAME file with your domain
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```
   
   Then configure your DNS provider to point to GitHub Pages.

### Alternative Hosting Options

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Traditional Web Hosting
- Upload all files via FTP/SFTP
- Ensure directory structure is maintained
- Point your domain to the hosting directory

## 🔧 Development Tips

### Browser Compatibility
- Tested on Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- Uses modern JavaScript features (ES6+)
- CSS Grid and Flexbox for layouts

### Performance Optimization
- Images are optimized but can be further compressed
- Consider lazy loading for project images
- React is loaded from CDN (consider local hosting for production)

### Debugging
```javascript
// Enable React DevTools in browser
// Add console logs in app.js
console.log('Debug info:', variable);

// Check for JavaScript errors in browser console
// Inspect network requests for failed resources
```

### Making Changes
1. Edit files locally
2. Test in browser (use local server)
3. Commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```
4. Wait for GitHub Pages to update (usually 1-2 minutes)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

You are free to:
- Use this template for your own portfolio
- Modify it to fit your needs
- Distribute copies
- Use it for commercial purposes

**Attribution appreciated but not required!**

## 🤝 Contributing

While this is a personal portfolio, contributions are welcome!

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Ideas
- Bug fixes
- Performance improvements
- New animation effects
- Accessibility enhancements
- Cross-browser compatibility fixes
- Documentation improvements

## 🐛 Known Issues

- Easter egg DOOM game may not work on some mobile browsers
- Very old browsers (IE11 and below) are not supported
- Some external images may load slowly depending on network

## 📞 Contact

**Eduardo Gelain**
- Email: [gelain15mj@gmail.com](mailto:gelain15mj@gmail.com)
- GitHub: [@Spet001](https://github.com/Spet001)
- LinkedIn: [eduardo-gelain](https://www.linkedin.com/in/eduardo-gelain/)
- Portfolio: [spet001.github.io](https://spet001.github.io)

## 🙏 Credits and Acknowledgments

### Technologies and Libraries
- [React](https://reactjs.org/) - UI library
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Inter font family
- [Skillicons.dev](https://skillicons.dev/) - Technology icons
- [webDOOM](https://github.com/Ustymukhman/webDOOM) - Easter egg DOOM game

### Inspiration and Resources
- Portfolio design inspired by modern developer portfolios
- Starfield animation based on classic parallax effects
- Color scheme designed for readability and aesthetics

### Special Thanks
- To the open-source community for amazing tools and libraries
- To everyone who provided feedback on the portfolio design

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

**Made with ❤️ and lots of ☕ by Eduardo Gelain**

*Last updated: October 2025*

</div>
