import type { Metadata } from "next";
import { Inconsolata, Open_Sans, Inter } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Sumayyah Khalid — Product & UX Designer";
const description =
  "CS + UX design student at Wilfrid Laurier. I design products and build them too.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sumkhalid.me"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://sumkhalid.me",
    siteName: "Sumayyah Khalid",
    images: [{ url: "/og.webp", width: 1200, height: 630}],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inconsolata.variable} ${openSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}