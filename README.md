# Tenpoints Braille Website

A modern, bilingual web application designed to make learning and teaching Braille accessible to everyone. Built with Next.js 15, this platform provides comprehensive resources for Braille education across multiple Indian and international languages.

## 🌟 About Tenpoints Braille

Tenpoints Braille is an innovative tool that offers the ideal solution for the challenges faced in learning and teaching Braille. It makes it easy for anyone to read Braille, even without prior knowledge of the language.

### Why "Tenpoints"?

When you select the Tenpoints Braille font in software like Adobe Illustrator, Photoshop, InDesign, or Microsoft Word and set the font size to 10 points, it prints letters in Braille's worldwide standard size. This standardization ensures that reading Braille with fingertips remains comfortable and consistent.

## ✨ Features

- **Bilingual Interface**: Complete support for English and Hindi
- **Multi-Language Braille Support**: 
  - English
  - Hindi/Marathi
  - Bengali/Assamese
  - Gujarati
  - Gurmukhi (Punjabi)
  - Kannada
  - Malayalam
  - Oriya
  - Tamil
  - Telugu
- **Interactive Learning**: Video tutorials and visual comparisons
- **Font Downloads**: Access to Braille fonts for all supported languages
- **How-to Guides**: Step-by-step instructions for using Braille fonts
- **Contact Form**: Easy communication for inquiries and support
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode Support**: Enhanced viewing experience

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom components with [Lucide React](https://lucide.dev/) icons
- **Image Optimization**: Next.js Image component with AVIF format
- **Code Quality**: ESLint, Prettier with Tailwind plugin
- **Performance**: Turbopack for faster builds

## 📋 Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tenpointsbraille-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
tenpointsbraille-website/
├── app/
│   ├── (english)/          # English language routes
│   │   ├── about/          # About page
│   │   ├── book/           # Book information
│   │   ├── contact/        # Contact form
│   │   ├── download/       # Download resources
│   │   ├── fonts/          # Font overview
│   │   └── howtouse/       # Usage instructions
│   ├── (hindi)/            # Hindi language routes
│   │   ├── hindidownload/  # Hindi downloads
│   │   ├── hindifonts/     # Hindi fonts
│   │   ├── pustak/         # Book (Hindi)
│   │   ├── sampark/        # Contact (Hindi)
│   │   ├── upyog/          # Usage (Hindi)
│   │   └── vishesh/        # About (Hindi)
│   ├── components/         # Reusable components
│   │   ├── ui/             # UI components
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileNavbar.tsx
│   │   ├── SidebarEnglish.tsx
│   │   └── SidebarHindi.tsx
│   ├── lib/                # Utilities and constants
│   ├── types/              # TypeScript type definitions
│   └── [language]Font/     # Individual font pages
├── public/                 # Static assets
│   ├── Font/              # Font images and resources
│   ├── icons/             # Icon assets
│   └── languages/         # Language-specific images
└── ...config files
```

## 🎨 Key Components

- **PageLayout**: Consistent layout wrapper for all pages
- **VideoSection**: Embedded video player for tutorials
- **BrailleComparison**: Side-by-side comparison of standard and Tenpoints Braille
- **FontButton**: Interactive buttons for language/font selection
- **SidebarEnglish/SidebarHindi**: Navigation sidebars for respective languages
- **MobileNavbar**: Responsive navigation for mobile devices
- **ContactForm**: Form for user inquiries

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Environment Variables

Create a `.env.local` file in the root directory if you need to add environment-specific variables.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

### Code Quality

Before submitting a PR, ensure:
- Code passes type checking: `npm run type-check`
- Code follows linting rules: `npm run lint`
- Code is properly formatted: `npm run format`

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

### Braille Resources
Visit the website to learn more about Tenpoints Braille and download fonts for your language.

## 📝 License

This project is private and proprietary. All rights reserved.

## 📧 Contact

For inquiries about Tenpoints Braille, please use the contact form on the website or reach out through the provided contact information.

---

Built with ❤️ for the visually impaired community
