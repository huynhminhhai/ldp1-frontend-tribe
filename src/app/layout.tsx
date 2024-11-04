import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing page 1 - Frontend Tribe",
  description: "Langding page with Nextjs, TailwindCss and Framer Motion",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        {children}
      </body>
    </html>
  );
}
