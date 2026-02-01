import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aishwarya H Iyer",
    template: "%s · Aishwarya H Iyer",
  },
  description:
    "Personal website of Aishwarya H Iyer — Computer Science student and AI researcher. Projects, research, and creative experiments.",
  keywords: [
    "Aishwarya H Iyer",
    "Computer Science",
    "AI",
    "Machine Learning",
    "Research",
    "Portfolio",
  ],
  authors: [{ name: "Aishwarya H Iyer" }],
  creator: "Aishwarya H Iyer",

  metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    title: "Aishwarya H Iyer — Developer & Researcher",
    description:
      "Projects, research, and creative experiments in AI and computer science.",
    url: "https://yourdomain.com",
    siteName: "Aishwarya H Iyer",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Aishwarya H Iyer — Personal Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aishwarya H Iyer — Developer & Researcher",
    description:
      "Projects, research, and creative experiments in AI and computer science.",
    images: ["/og.png"],
  },

  icons: {
    icon: "/aish-logo.png",
    shortcut: "/aish-logo.png",
    apple: "/aish-logo.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-background
          text-foreground
        `}
      >
        {children}
      </body>
    </html>
  );
}
