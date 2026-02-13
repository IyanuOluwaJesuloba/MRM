import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const duran = localFont({
  src: [{ path: "../public/assests/fonts/Duran-Medium.ttf", weight: "500" }],
  variable: "--font-duran",
  display: "swap",
});

const avante = localFont({
  src: [{ path: "../public/assests/fonts/AVANTE.woff", weight: "400" }],
  variable: "--font-avante",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mighty Refuge Ministries",
  description:
    "Experience spiritual transformation through authentic worship, discipleship, and Gospel proclamation at Mighty Refuge Ministries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${duran.variable} ${avante.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
