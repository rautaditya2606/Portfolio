import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from '@/providers/AnimationProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Navigation } from '@/components/Navigation';

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const text = Instrument_Sans({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Aditya // Code",
  description: "First-year CS student focusing on Applied ML, MLOps, and Data Analytics. View my projects, skills, and journey.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='2' y='3' width='20' height='14' rx='2' ry='2'/><line x1='8' y1='21' x2='16' y2='21'/><line x1='12' y1='17' x2='12' y2='21'/></svg>",
  },
  openGraph: {
    title: "Aditya // Code",
    description: "First-year CS student focusing on Applied ML, MLOps, and Data Analytics. View my projects, skills, and journey.",
    url: "https://your-portfolio.com",
    siteName: "Aditya // Code",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya // Code",
    description: "First-year CS student focusing on Applied ML, MLOps, and Data Analytics. View my projects, skills, and journey.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme script removed - now handled by ThemeProvider */}
      </head>
      <body
        className={`${display.variable} ${text.variable} ${mono.variable} antialiased bg-light-background dark:bg-dark-background text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <ThemeProvider>
          <AnimationProvider>
            <CustomCursor />
            <Navigation />
            {children}
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
