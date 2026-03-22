# Modern React Portfolio

A premium, high-performance portfolio template built with **React 18**, **Vite**, and **Vanilla CSS**. Features a sleek dark theme, interactive animations, and a centralized data management system.

## 🚀 Key Features
- **Modern UI/UX**: Dark mode aesthetic with glassmorphism and smooth gradients.
- **Interactive Elements**: Custom ripple effects, parallax backgrounds, and hover animations.
- **Performance Focused**: Built with Vite for nearly instant hot-reloading and optimized production builds.
- **Easy Customization**: Manage all your content from a single data file.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports.

## 🛠️ Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (CSS Variables)
- **Icons**: SVG Path data
- **Animations**: CSS Keyframes & Intersection Observer API

## 🏁 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ayushkumar87/Porfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🎨 Customization Guide

### 1. Update Your Content
Open `src/data/portfolio.js` and update the `portfolioData` object with your information. You can change:
- Personal details (Name, Title, Social Links)
- Skills and Technologies
- Project details & live demo links
- Education and Certifications

### 2. Change Theme Colors
All colors are managed via CSS variables in `src/App.css`. Look for the `:root` section to update:
- `--primary-color`: The main accent color
- `--bg-primary`: The main background color
- `--text-primary`: Primary text color

### 3. Add New Sections
Each section is a standalone React component in `src/components/`. To add a new section:
1. Create a new `.jsx` file in `src/components/`.
2. Import and add it to `src/App.jsx`.

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

## 🛠️ Step-by-Step Personalization

If you want to use this portfolio for yourself, follow these exact steps:

1. **Clone the Repo**
   ```bash
   git clone https://github.com/ayushkumar87/Porfolio.git
   cd portfolio-react
   ```

2. **Install & Run**
   ```bash
   npm install
   npm run dev
   ```

3. **Inject Your Own Data**
   - Open `src/data/portfolio.js`.
   - Replace the `personal`, `skills`, `projects`, `education`, and `certifications` details with your own.
   - The UI will automatically update with your information thanks to Reactive data binding.

4. **Customize the Look**
   - Update your profile icons or tech tags in the `projects` section.
   - If you need to change the primary purple theme, edit the `--primary-color` in `src/App.css`.

5. **Deploy**
   - Run `npm run build` to generate a production-ready `dist` folder.
   - Deploy the `dist` folder to Vercel, Netlify, or GitHub Pages!

---
Created by [Ayush Kumar](https://github.com/ayushkumar87)
