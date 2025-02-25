"use client";
import "../app/styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="fixed top-0 w-full flex items-center justify-between px-4 sm:px-10 py-4 bg-black z-50 border-b border-gray-800">
          {/* Logo and Name */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Image
              src="/images/Latest_pic-modified.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h1 className="text-xl sm:text-2xl font-bold">M.N.Taufiq</h1>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Navigation Links */}
          <nav
            className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 p-4 md:p-0 transition-all ${
            menuOpen ? "block" : "hidden"
            } md:flex`} // 👈 Ensure it's always visible on larger screens
          >
            <Link href="/" className="neon-button">Home</Link>
            <Link href="/projects" className="neon-button">Projects</Link>
            <Link href="/contact" className="neon-button">Contact</Link>
          </nav>
        </header>

        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}