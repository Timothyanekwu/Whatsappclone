import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Whatsapp",
  description: "A real-time chat application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${inter.className} bg-primaryDark`}>
        {children}
      </body>
    </html>
  );
}
