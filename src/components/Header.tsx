"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-heading text-xl font-bold">Bitiriyo</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/features" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Özellikler
          </Link>
          <Link 
            href="/blog" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Blog
          </Link>
          <Link 
            href="/faq" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            SSS
          </Link>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Tema değiştir"
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Giriş Yap</Link>
          </Button>
          
          <Button size="sm" asChild>
            <Link href="/register">Şimdi Başla</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header; 