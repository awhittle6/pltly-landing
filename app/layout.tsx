import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "pltly - Your Personal Calorie Tracker",
  description: "Track your daily calorie intake, set health goals, and monitor your progress with pltly. Achieve a healthier lifestyle with our easy-to-use calorie tracking app.",
  keywords: "calorie tracker, health app, fitness goals, diet management, pltly, nutrition, weight loss",
  openGraph: {
    title: "pltly - Your Personal Calorie Tracker",
    description: "Achieve your health goals with pltly. Track calories, set goals, and monitor your progress effortlessly.",
    url: "https://www.pltly.com",
    type: "website",
    images: [
      {
        url: "https://www.pltly.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "pltly - Your Personal Calorie Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pltly",
    title: "pltly - Your Personal Calorie Tracker",
    description: "Track your daily calorie intake and achieve your health goals with pltly.",
    images: [
      {
        url: "https://www.pltly.com/twitter-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
