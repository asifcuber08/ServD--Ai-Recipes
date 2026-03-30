import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Servd - AI Recipes Platform",
  description: "AI-powered recipe platform for developers",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: neobrutalism }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} antialiased`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          {/* Footer */}
          <footer className="py-12 px-4 border-t bg-white">
            <div className="max-w-2xl mx-auto bg-stone-50 border rounded-xl py-6 px-6 flex flex-col items-center gap-4 text-center shadow-sm">
              {/* Logo + Brand */}
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Servd Logo"
                  width={45}
                  height={45}
                />
                
                
              </div>

              

              {/* Made by + GitHub */}
              <p className="text-stone-500 text-sm flex items-center gap-2">
                Made with 💗 by{" "}
                <a
                  href="https://portfolio-asif08.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-stone-700 hover:text-orange-600 transition-colors"
                >
                  Asif Shamim
                </a>
                <a
                  href="https://github.com/asifcuber08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-black transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
              0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754 
              -1.089-.745.082-.729.082-.729 1.205.085 1.838 1.237 1.838 1.237 
              1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605 
              -2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22 
              -.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23 
              .957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 
              2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176 
              .77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.624-5.475 5.921 
              .43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 
              0 .322.218.694.825.576C20.565 21.795 24 17.295 24 12 
              24 5.37 18.63 0 12 0z"
                    />
                  </svg>
                </a>
              </p>

              {/* Copyright */}
              <p className="text-stone-400 text-xs">
                © {new Date().getFullYear()} Servd. All rights reserved.
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
