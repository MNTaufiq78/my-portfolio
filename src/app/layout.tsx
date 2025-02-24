import "../app/styles/globals.css";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="fixed top-0 w-full flex items-center gap-2 sm:gap-4 px-4 sm:px-10 py-4 bg-black z-50 border-b border-gray-800">
          <Image
          src="/images/Latest_pic-modified.png"
          alt="Logo"
          width={50}        // Adjust width
          height={50}       // Adjust height
          className="rounded-full"
          />
          <h1 className="text-xl sm:text-2xl font-bold">Mohammed Naseeruddin Taufiq</h1>
          
          <nav className="flex gap-4 sm:gap-6">
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
