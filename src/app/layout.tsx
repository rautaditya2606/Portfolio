import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/providers/ThemeProvider';
import { AnimationProvider } from '@/providers/AnimationProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Navigation } from '@/components/Navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya - Data Science & ML Portfolio",
  description: "First-year CS student focusing on Applied ML, MLOps, and Data Analytics. View my projects, skills, and journey.",
  openGraph: {
    title: "Aditya - Data Science & ML Portfolio",
    description: "First-year CS student focusing on Applied ML, MLOps, and Data Analytics. View my projects, skills, and journey.",
    url: "https://your-portfolio.com",
    siteName: "Aditya's Portfolio",
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
    title: "Aditya - Data Science & ML Portfolio",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light-background dark:bg-dark-background text-gray-900 dark:text-gray-100 transition-colors duration-300`}
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
