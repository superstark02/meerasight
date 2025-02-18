import AppBar from "@/components/AppBar";
import MeeraLogo from "@/components/MeeraLogo";
import { MenuBar } from "@/components/MenuBar";
import { Typography } from "@mui/material";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { footer } from "./constants";
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
  title: "Eye Surgeon | Meerasight | New Delhi",
  description: "Generated by create next app",
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
        <header>
          <div className="mobile"><MenuBar /></div>
          <div className="desktop">
            <MeeraLogo />
            <AppBar />
          </div>
        </header>
        {children}
        <footer className="footer">
          <section className="icons">
            {footer.links.map((val, index) => (
              <a key={index} href={val.link} target="_blank">
                <div className="iconBox">{val.icon}</div>
              </a>
            ))}
          </section>
          <Typography>{footer.text}</Typography>
        </footer>
      </body>
    </html>
  );
}
