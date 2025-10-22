import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokédex Next.js",
  description: "Pokédex técnica con Next.js y Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="relative min-h-screen flex flex-col text-slate-800 font-sans">
        {/* Fondo */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(255, 245, 230, 0.9) 0%, rgba(255, 240, 220, 0.8) 100%),
              linear-gradient(135deg, #fff7e6 0%, #ffe8cc 50%, #ffecd1 100%)
            `,
          }}
        ></div>

        <div
          className="absolute inset-0 opacity-10 -z-10 bg-repeat"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E
              %3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23e63946' stroke-width='6' /%3E
              %3Ccircle cx='50' cy='50' r='8' fill='%23e63946' /%3E
              %3C/svg%3E")
            `,
            backgroundSize: "120px 120px",
          }}
        ></div>

        {/* Navbar cliente */}
        <Navbar />

        {/* Contenido */}
        <main className="flex-grow max-w-6xl mx-auto px-4 py-6">{children}</main>

        {/* Footer */}
        <footer className="bg-red-600 text-white text-center py-3 text-sm shadow-inner">
          <p>
            © 2025 Pokédex Next.js — Hecho con ❤️ usando{" "}
            <span className="font-semibold">Tailwind CSS</span>
          </p>
        </footer>
      </body>
    </html>
  );
}
