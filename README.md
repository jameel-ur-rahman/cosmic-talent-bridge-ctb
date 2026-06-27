# Cosmic Talent Bridge Website

Robert-Half-inspired staffing/recruitment homepage rebuilt with Cosmic Talent Bridge details.

## Run

Use these commands in Windows PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run build
npm.cmd run start
```

## Edit Your Company Details

Main replace file:

- data/siteConfig.js

This file controls:

- brand
- date
- company contact info
- hero text
- navigation labels
- stats and specialization labels

## Replace Generated Images

Current visuals are generated SVG placeholders in public/images.
Replace them any time with your own files at matching paths.

- public/images/hero
- public/images/services
- public/images/trends
- public/images/resources
- public/images/about
- public/images/specializations

## Backend Hook Points

- pages/api/mock.js
- TODO markers in components and pages

Search for this comment to connect real backend endpoints:

- TODO: attach backend API here
