
import React from "react";
import "./globals.css";

import type { Metadata } from "next";
import {Inter} from "next/font/google";
import { AppTheme } from "./Contexts/ThemeContext";
import { ApiCall } from "./Contexts/APIcontext";



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
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <AppTheme>
        <ApiCall>
      <body className={`${inter.className}`}>
        {children}
      </body>
      </ApiCall>
      </AppTheme>

    </html>
  );
}
