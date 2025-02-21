import "../app/styles/globals.css";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="fixed top-0 w-full flex justify-between items-center px-10 py-4 bg-black z-50 border-b border-gray-800">
          <h1 className="text-2xl font-bold">Mohammed Naseeruddin Taufiq</h1>
          <nav className="flex gap-6">
            <Link href="/" className="hover:scale-110">Home</Link>
            <Link href="/projects" className="hover:scale-110">Projects</Link>
            <Link href="/contact" className="hover:scale-110">Contact</Link>
          </nav>
        </header>
        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}
