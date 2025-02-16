import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Wrapper from './wrapper';
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baman Guragai",
  description: "Personal Website",
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
