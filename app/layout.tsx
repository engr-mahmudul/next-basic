

import "./globals.css";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        <nav className="border-b border-gray-400 p-4 mb-4">
           <ul className="flex gap-5">
            <ul>Home</ul>
            <ul>Contact</ul>
            <ul>About</ul>
          </ul>
          </nav>
        {children}
      </body>
    </html>
  );
}
