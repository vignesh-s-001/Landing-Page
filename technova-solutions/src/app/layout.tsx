import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://technovasolutions.com"),
  title: "TechNova Solutions | Empowering Businesses Through Technology",
  description:
    "TechNova Solutions helps organizations build scalable digital products and innovative technology solutions. Web development, mobile apps, AI consulting, cloud solutions and more.",
  keywords: [
    "web development",
    "mobile app development",
    "AI consulting",
    "cloud solutions",
    "digital marketing",
    "UI/UX design",
    "TechNova Solutions",
  ],
  authors: [{ name: "TechNova Solutions" }],
  openGraph: {
    title: "TechNova Solutions | Empowering Businesses Through Technology",
    description:
      "We help organizations build scalable digital products and innovative technology solutions.",
    url: "https://technovasolutions.com",
    siteName: "TechNova Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechNova Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechNova Solutions | Empowering Businesses Through Technology",
    description:
      "We help organizations build scalable digital products and innovative technology solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
