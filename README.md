# PixelForge

> Digital marketing landing page built using Vibe Coding and the Bolt.diy tool

---

## Table of Contents

- [About](#about)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running Locally](#running-locally)  
  - [Building / Deployment](#building--deployment)  
- [Features](#features)  
- [How It Works](#how-it-works)  
- [Customization & Configuration](#customization--configuration)  
- [Contributing](#contributing)  
- [Contact](#contact)  

---

## About

PixelForge is a sleek, high-conversion **digital marketing landing page** created using **Vibe Coding** and **Bolt.diy**.  
It’s built to be clean, fast, and easy to customize.

Live demo: [pixelforgebyyash.netlify.app](https://pixelforgebyyash.netlify.app)  

---

## Tech Stack

Below are the main technologies and tools powering PixelForge:

| Layer | Technology / Tool |
|---|---|
| Frontend | TypeScript, React (or framework used via Vibe) |
| Styling | Tailwind CSS (or CSS + utility-first approach) |
| Build / Bundling | Vibe build pipeline / toolchain |
| Tooling | Bolt.diy (for no-code / low-code site composition) |
| Deployment | Netlify (or your preferred hosting) |

From the repo’s language breakdown: ~98.6% TypeScript, ~1.2% CSS, ~0.2% JavaScript  

---

## Project Structure

Here’s a high-level overview of how the code is organized:

/
├── app/
├── components/
├── hooks/
├── lib/
├── public/
├── styles/
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md

markdown
Copy code

- `app/` — Entry point / pages (if using Next-style or Vibe’s routing)  
- `components/` — Reusable UI components  
- `hooks/` — Custom React hooks  
- `lib/` — Utility functions, API wrappers, etc.  
- `public/` — Static assets (images, icons, etc.)  
- `styles/` — Tailwind overrides or global styles  
- Configuration files — e.g. build settings, Tailwind config, etc.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v16+ recommended)  
- npm or yarn  
- (Optional) Vibe CLI / tooling (if needed to scaffold or build)  
- (Optional) Bolt.diy account / setup (if part of your workflow)

### Installation

```bash
git clone https://github.com/yashsanodiya89/PixelForge.git
cd PixelForge
npm install
# or
yarn install
Running Locally
bash
Copy code
npm run dev
# or
yarn dev
Once the development server is up, open your browser at http://localhost:3000 (or as defined in your config).

Building / Deployment
bash
Copy code
npm run build
# or
yarn build
Then deploy the static output or server (depending on setup) to your hosting provider (Netlify, Vercel, etc.).
Ensure environment variables (if any) are configured in your deployment settings.

Features
Responsive, mobile-first design

Fast loading, performance-optimized

Modular component-based architecture

Easy customization through Bolt.diy / configuration layers

SEO-friendly markup

Integration-ready sections (lead capture, hero, features, testimonials, etc.)

How It Works
Bolt.diy composition — You design the page structure using Bolt.diy’s visual tool, defining sections, content blocks, and layouts.

Vibe Code translation — The Bolt.diy setup is compiled / translated into Vibe’s component-driven code.

UI components — Reusable components (hero, cards, forms) are defined in components/.

Data & hooks — Custom hooks and utility modules in hooks/ and lib/ manage dynamic data or interactivity.

Styling / Theming — Styles via Tailwind or utility classes. You can override themes or styles via config.

Build & deploy — Vibe’s build system (or underlying bundler) produces optimized output which you host.

Customization & Configuration
To make PixelForge your own:

Override colors, spacing, typography in tailwind.config.ts

Swap or reorder sections defined in bolt settings or component tree

Replace content (images, text, calls-to-action) in component props

Add or remove features or sections by editing component imports or config files

Extend hooks or utility functions for new data / API integrations

Contributing
I appreciate your interest! To contribute:

Fork the repository

Create a feature branch (git checkout -b feature/YourFeature)

Make changes & test locally

Submit a pull request

Please keep changes isolated to a logical feature or fix, and maintain consistency with the existing style / conventions.

Contact
Made by Yash

GitHub: yashsanodiya89

Live site: pixelforgebyyash.netlify.app
