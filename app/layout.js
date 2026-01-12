import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Brewed Tales",
  description: "A cozy online bookstore with great recommendations perfect for your studies or reference materials.",
};
<head>
<meta name="google-site-verification" content="Rfg6aAkoYvy4EBdubgO02deoGDsldd6F_Uqj8qad3Iw" />
</head>

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F2E0B2] text-[#311313]`}>
        <header className="border-b border-[#973519] bg-[#62261F] text-[#F2E0B2]">
          <div className="mx-auto max-w-6xl flex justify-between items-center p-4">
            <h1 className="text-xl font-semibold">Brewed Tales</h1>
            <nav className="space-x-4 text-sm">
              <Link className="hover:text-[#E6AD53]" href="/">Home</Link>
              <Link className="hover:text-[#E6AD53]" href="/about">About</Link>
              <Link className="hover:text-[#E6AD53]" href="/books">Books</Link>
              <Link className="hover:text-[#E6AD53]" href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl p-6">{children}</main>

        <footer className="text-center text-sm text-[#62261F] py-6">
          © 2026 Brewed Tales
        </footer>
      </body>
    </html>
  );
}