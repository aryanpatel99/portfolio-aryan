import "@/index.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "react-activity-calendar/tooltips.css";
import { Hanken_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingDockDemo from "@/components/floating-dock-demo";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://portfolio-aryan-delta.vercel.app"),
  title: {
    default: "Aryan Patel - Full Stack & AI Developer",
    template: "%s | Aryan Patel",
  },
  description:
    "Aryan Patel's portfolio - full-stack and AI projects, open source contributions, and real-world systems.",
  author: "Aryan Patel",
  verification: {
    google: "yFUncf0SGHMgPOMn-wZlF7qfhS9kOY9y6-ygco8Pmzo",
  },
  openGraph: {
    siteName: "Aryan Patel",
    type: "website",
    url: "https://portfolio-aryan-delta.vercel.app/",
    title: "Aryan Patel - Full Stack & AI Developer",
    description:
      "Aryan Patel's portfolio - full-stack and AI projects, open source contributions, and real-world systems.",
    images: [
      {
        url: "https://res.cloudinary.com/dqlhyupyr/image/upload/w_1200,h_630,c_fill/v1781869657/portfolio.png",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Patel — Full Stack & AI Developer",
    description:
      "Aryan Patel's portfolio — full-stack and AI projects, open source contributions, and real-world systems.",
    images: [
      "https://res.cloudinary.com/dqlhyupyr/image/upload/w_1200,h_630,c_fill/v1781869657/portfolio.png",
    ],
  },
  icons: {
    icon: "/logo-a.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${hankenGrotesk.variable} font-sans`}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <SmoothScroll>
            <div className="bg-background text-foreground min-h-screen">
              <Navbar />
              {children}
              <Footer />
              <FloatingDockDemo />
            </div>
            <Analytics />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
