# Business Trends Dashboard

A standalone dashboard for visualizing long-term business trends across multiple quarters for restaurants.

## Features

- **6 Key Metrics**: OV, CV, MVD, ZVD, ADS, CMPO
- **9 Quarters of Data**: Q3 2023 to Q3 2025
- **4 Growth Comparisons**: QoQ, YoY, 2Y, YTD
- **Interactive Visualizations**: Area charts, line charts, bar charts
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Works on mobile, tablet, and desktop

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui (Radix UI + Tailwind CSS)
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Build

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Vercel

This project is configured for Vercel deployment with `vercel.json`.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

## Data Source

The dashboard loads data from `/public/business-trends-data.csv`. To update the data, replace this CSV file with your own data in the same format.

### CSV Format

- Columns 1-6: Restaurant details (Res ID, Name, Cuisine, Subzone, Zone, Account Manager)
- Columns 7-85: Metrics data (6 metrics × 13 columns each)
  - Each metric has 9 quarterly values + 4 growth comparisons

## Project Structure

```
trends-page/
├── src/
│   ├── components/
│   │   ├── business-trends/     # Chart components
│   │   ├── ui/                  # shadcn/ui components
│   │   └── DarkModeToggle.tsx
│   ├── types/
│   │   └── businessTrends.ts    # TypeScript types
│   ├── utils/
│   │   ├── parseTrendsData.ts   # CSV parser
│   │   └── metricMetadata.ts    # Metric configuration
│   ├── contexts/
│   │   └── ThemeContext.tsx     # Theme provider
│   ├── App.tsx                  # Main app component
│   └── main.tsx                 # Entry point
├── public/
│   └── business-trends-data.csv # Data source
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── vercel.json                  # Vercel configuration
```

## License

MIT

## Author

Zomato Dashboard Team

