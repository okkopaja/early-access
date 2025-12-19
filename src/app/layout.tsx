import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway, Courier_Prime } from "next/font/google"; // Import new fonts
import "./globals.css";
import { Providers } from "@/components/Providers";
import { ModalProvider } from "@/context/ModalContext";
import { EarlyAccessModal } from "@/components/EarlyAccessModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  weight: "400", // Courier Prime usually has 400 and 700
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fastcrew - On-demand Workforce Marketplace",
    template: "%s | Fastcrew",
  },
  description: "Connect hospitality partners with vetted talents",
  icons: {
    icon: "/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${courierPrime.variable} antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <ModalProvider>
            {children}
            <EarlyAccessModal />
          </ModalProvider>
        </Providers>
      </body>
    </html>
  );
}
