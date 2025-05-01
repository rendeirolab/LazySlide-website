# LazySlide Website

This is the official website for [LazySlide](https://github.com/rendeirolab/lazyslide), a Python framework for whole slide image (WSI) analysis, designed to integrate seamlessly with the scverse ecosystem.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for static site generation
- [Mantine UI](https://mantine.dev/) - React components library
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lazyslide-website.git
   cd lazyslide-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Building for Production

To build the website for production:

```bash
npm run build
# or
yarn build
```

This will generate a static export in the `out` directory that can be deployed to any static hosting service.

## Deployment

The static site can be deployed to various platforms:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- Any static file hosting service

### Deploying to GitHub Pages

1. Push the repository to GitHub
2. Set up GitHub Pages to serve from the `out` directory
3. Configure your custom domain if needed

## Customization

- Primary color: `#C68FE6`
- Secondary color: `#7E698E`

These colors are defined in the theme configuration in `src/pages/_app.tsx`.

## License

This project is licensed under the MIT License - see the LICENSE file for details.