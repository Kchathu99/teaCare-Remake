import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TeaCare+",
  description: "Created by NDT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="flex flex-col max-h-screen bg-[#D8E9A8] ">
        <Navbar />
        <main className="flex-grow mt-8">{children}</main>
        <Footer />
    </body>
  </html>
  );
}
