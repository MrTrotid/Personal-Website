import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Wrapper from './wrapper';
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | MrTrotid',
    default: 'MrTrotid - Portfolio',
  },
  description: "Personal Website",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-[#0a0a0a]`}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
