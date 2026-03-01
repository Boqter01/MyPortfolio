import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Galaxy from "./components/Galaxy";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
