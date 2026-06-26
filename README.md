# Cosmic Talent Bridge (CTB)

Professional staffing and recruiting website built with Next.js (Pages Router).

## Project Goals

- Present a clean, professional company website for Cosmic Talent Bridge.
- Keep business content easy to edit from one central file.
- Include SEO essentials (meta tags, Open Graph, structured data, robots, sitemap).
- Keep the app simple with no paid API dependencies.

## Tech Stack

- Next.js 14 (Pages Router)
- React 18
- CSS Modules

## Project Structure

- `src/pages/index.js`: Main homepage layout and SEO metadata.
- `src/pages/index.module.css`: Homepage styling.
- `src/config/siteContent.js`: Editable company content and section data.
- `public/logo.svg`: Company logo asset.
- `public/robots.txt`: Crawler rules.
- `public/sitemap.xml`: Sitemap entry.

## Getting Started (Windows)

Install dependencies:

```powershell
npm.cmd install
```

Start development server (localhost):

```powershell
npm.cmd run dev
```

Start development server for mobile testing on same Wi-Fi:

```powershell
npm.cmd run dev -- -H 0.0.0.0 -p 3000
```

Run lint:

```powershell
npm.cmd run lint
```

Run production build:

```powershell
npm.cmd run build
```

Run production server after build:

```powershell
npm.cmd run start
```

## Editing Content

Update all business text and sections in:

- `src/config/siteContent.js`

Replace brand logo file when needed:

- `public/logo.svg`

If your production domain changes, update:

- `src/config/siteContent.js` (`company.siteUrl`)
- `public/robots.txt`
- `public/sitemap.xml`

## Mobile Preview on Same Wi-Fi

1. Start the app with host binding:
	- `npm.cmd run dev -- -H 0.0.0.0 -p 3000`
2. Find your PC IPv4 address on Wi-Fi.
3. Open on mobile:
	- `http://<YOUR_WIFI_IP>:3000`
4. Ensure phone and PC are connected to the same router.

## Notes

- `npm.cmd` is recommended on this Windows environment.
- Do not expose the local dev server publicly until deployment is ready.
