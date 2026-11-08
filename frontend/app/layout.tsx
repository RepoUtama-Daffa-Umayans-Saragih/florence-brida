import 'mapbox-gl/dist/mapbox-gl.css';
import './globals.css';

export const viewport = { themeColor: '#1e3a8a' };

export const metadata = {
  manifest: '/manifest.webmanifest',
  appleWebApp: { capable: true, title: 'FLORENCE', statusBarStyle: 'default' },
  title: 'FLORENCE — Flood Early Warning',
  description: 'Flood localization, observation, risk early-warning, and navigation for city ecosystems.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
