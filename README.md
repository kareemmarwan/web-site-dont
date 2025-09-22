# Gaza Family Emergency Fund - Donation Campaign Website

A professional, bilingual (Arabic RTL + English LTR) donation campaign website built with Next.js for a Palestinian family in Gaza.

## Features

- **Bilingual Support**: Full Arabic (RTL) and English (LTR) support with language toggle
- **Responsive Design**: Mobile-first design optimized for all devices
- **SEO Optimized**: Complete meta tags, structured data, and accessibility features
- **Palestinian Visual Identity**: Authentic colors, keffiyeh patterns, and cultural elements
- **Donation Integration**: Ready for PayPal integration with customizable amounts
- **Progress Tracking**: Visual progress bar and campaign statistics
- **Updates System**: Photo and document sharing capabilities
- **FAQ Section**: Comprehensive frequently asked questions
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom Palestinian color palette
- **Components**: shadcn/ui component library
- **Internationalization**: Custom i18n implementation with JSON locale files
- **Images**: Next.js Image optimization
- **Deployment**: Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

### Payment Links

Replace the placeholder payment links in `components/donation-section.tsx`:

\`\`\`tsx
// Replace [PAYMENT_LINK_PAYPAL] with your actual PayPal donation link
const paypalLink = `https://www.paypal.com/donate?amount=${amount}&currency_code=USD&business=YOUR_PAYPAL_EMAIL`
\`\`\`

### Campaign Data

Update campaign statistics in `components/progress-section.tsx`:

\`\`\`tsx
const CAMPAIGN_DATA = {
  raised: 15420,    // Current amount raised
  goal: 50000,      // Campaign goal
  supporters: 287   // Number of supporters
}
\`\`\`

### Content Updates

- **Locale Files**: Edit `locales/en.json` and `locales/ar.json` for all text content
- **Images**: Replace placeholder images in the `public` folder
- **Updates**: Modify `SAMPLE_UPDATES` in `components/updates-section.tsx`

### SEO Configuration

Update SEO settings in `app/layout.tsx`:

- Meta titles and descriptions
- Open Graph images
- Structured data
- Verification codes

## Deployment

### Static Site Generation

This site is optimized for static generation:

\`\`\`bash
npm run build
npm run export
\`\`\`

### Vercel Deployment

1. Connect your repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Custom Domain

1. Add your domain in Vercel dashboard
2. Update `metadataBase` in `app/layout.tsx`
3. Update canonical URLs and Open Graph URLs

## Customization

### Colors

The Palestinian color palette is defined in `app/globals.css`:

- Primary: #007A3D (Dark Green)
- Secondary: #D80000 (Red)
- Neutrals: White, Black, Grays

### Typography

Using Geist Sans and Geist Mono fonts. Update in `app/layout.tsx` if needed.

### Layout

All components are modular and can be rearranged in `app/page.tsx`.

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus management

## Internationalization

- RTL/LTR layout support
- Date and currency formatting
- Proper text direction handling
- Language-specific fonts if needed

## Support

For technical support or questions about implementation:

- Check the component documentation
- Review the locale files for content updates
- Test thoroughly on mobile devices
- Validate accessibility with screen readers

## License

This project is created for humanitarian purposes. Feel free to adapt for similar causes while respecting the cultural elements and maintaining the dignity of the cause.
