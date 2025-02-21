import "../app/styles/globals.css"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="fixed top-0 w-full flex justify-between items-center px-10 py-4 bg-black z-50 border-b border-gray-800">
        
          <h1 className="text-2xl font-bold ">Mohammed Naseeruddin Taufiq</h1>
          <nav className="flex gap-6">
            <a href="/" className="hover:scale-110">Home</a>
            <a href="/projects" className="hover:scale-110">Projects</a>
            <a href="/contact" className="hover:scale-110">Contact</a>
          </nav>
        </header>
        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}
