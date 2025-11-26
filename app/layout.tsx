import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "networkzone - Remote IT Support Platform",
  description:
    "networkzone is a remote IT support platform to help small businesses fix issues online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-zinc-50`}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-zinc-900/80 bg-black/80 backdrop-blur-sm">
            <div className="mx-auto w-full max-w-5xl px-4 py-4 flex items-center justify-between gap-4">
              <Link href="/" className="flex flex-col items-start gap-0.5">
                <span className="text-xs uppercase tracking-[0.25em] text-yellow-400/80">
                  networkzone
                </span>
                <span className="text-[11px] text-zinc-400">Remote IT support platform</span>
              </Link>
              <nav className="flex items-center gap-4 text-xs sm:text-sm text-zinc-300">
                <Link href="/" className="hover:text-yellow-400 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="hover:text-yellow-400 transition-colors">
                  About
                </Link>
                <Link href="/pricing" className="hover:text-yellow-400 transition-colors">
                  Pricing
                </Link>
                <Link href="/contact" className="hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
                <Link
                  href="/download"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Download tool
                </Link>
                <Link
                  href="/request-remote"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Request session
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-1 flex items-stretch justify-center px-4">
            <div className="w-full max-w-5xl py-8">{children}</div>
          </main>

          <footer className="border-t border-zinc-900/80 bg-black/90 text-[11px] text-zinc-500">
            <div className="mx-auto w-full max-w-5xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
              <p className="text-center sm:text-left">
                © {new Date().getFullYear()} networkzone. Remote IT support for small businesses.
              </p>
              <div className="flex flex-col sm:items-end gap-1 text-center sm:text-right">
                <p>Contact: <span className="text-zinc-300">support@networkzone.example</span></p>
                <p>WhatsApp: <span className="text-zinc-300">+20 100 000 0000</span></p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
