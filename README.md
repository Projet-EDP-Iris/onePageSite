# Iris - One Page Website

A modern, minimalistic one-page website for Iris, a productivity app that helps users organize their life with one click.

## Features

- **Modern Design**: Clean, minimalistic interface with glassmorphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**:
  - Cursor-following gradient glow effect
  - Smooth scroll animations
  - Interactive FAQ accordion
  - Scroll-to-top button
- **Calendar Carousel**: Beautiful carousel showcasing calendar analysis features
- **Pricing Cards**: Three-tier pricing structure (Free, Pro, Enterprise)
- **Admin Dashboard**: Secure admin panel with login authentication

## Tech Stack

- **React** - Frontend library
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **CSS3** - Styling with modern features (backdrop-filter, gradients, animations)
- **Montserrat Font** - Primary typography

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd onePageSite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Project Structure

```
onePageSite/
├── public/
│   └── image/          # Static images
├── src/
│   ├── components/     # Reusable components
│   │   ├── CalendarCarousel.jsx
│   │   ├── CalendarCarousel.css
│   │   ├── PricingCard.jsx
│   │   └── PricingCard.css
│   ├── pages/         # Page components
│   │   ├── Admin.jsx
│   │   └── Admin.css
│   ├── App.jsx        # Main app component
│   ├── App.css        # Main styles
│   ├── main.jsx       # Entry point with routing
│   └── index.css      # Global styles
├── index.html
├── package.json
└── README.md
```

## Routes

- **/** - Main landing page
- **/admin** - Admin dashboard (requires login)

## Admin Access

The admin panel can be accessed at `/admin`.

**Demo Credentials:**
- Username: `admin`
- Password: `admin123`

**Note:** In production, implement proper backend authentication with secure password hashing and JWT tokens.

## Key Sections

### Hero Section
- Eye-catching headline with gradient text
- Background image with blur overlay
- Call-to-action download button
- Cursor-following glow effect

### Trusted By Section
- Showcases partner/client logos

### Calendar Carousel
- Interactive carousel displaying 3 calendar analysis cards
- Navigation arrows with disabled states
- Warm brown color scheme (#3a2a1c to #4a3321)
- Card dimensions: 420px × 480px

### App Integrations
- Displays major app integrations (Gmail, Google Calendar, Slack)
- Hover animations on app icons

### Pricing Section
- Three pricing tiers with glassmorphism cards
- "Most Popular" badge on Pro plan
- Savings calculator
- Feature lists with checkmarks

### About Us
- Team and mission cards
- FAQ accordion with smooth animations

### Footer
- Contact information (irisapp42@gmail.com)
- Social media links (LinkedIn)
- Privacy & Cookie policies
- Copyright notice

## Customization

### Colors
The primary color scheme uses orange gradients:
- Primary: `#ff8a2b`
- Accent: `#ff3d00`

### Fonts
The website uses Montserrat font family. To change fonts, update the Google Fonts link in `index.html` and the CSS `font-family` declarations.

### Images
Replace images in the `public/image/` directory with your own assets. Update the `src` attributes in the components accordingly.

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## Deployment

This project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

### Environment Variables
For production deployment with real authentication, you'll need to set up:
- Backend API endpoints
- Authentication service
- Database connections

## Future Enhancements

- [ ] Real backend authentication
- [ ] Database integration for admin dashboard
- [ ] User analytics tracking
- [ ] Email integration for contact forms
- [ ] Blog section
- [ ] Multi-language support
- [ ] Dark/Light theme toggle

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

Email: irisapp42@gmail.com

## Acknowledgments

- React team for the amazing library
- Vite for the blazing fast build tool
- Montserrat font by Julieta Ulanovsky
