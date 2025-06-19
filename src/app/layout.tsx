import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Aditya // Code",
  description: "First-year CS student focusing on Applied ML, MLOps, and Data Analytics. View my projects, skills, and journey.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light-background dark:bg-dark-background text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <AnimationProvider>
          <CustomCursor />
          <Navigation />
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
