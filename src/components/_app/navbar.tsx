"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Gamepad2, Menu, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Loja", href: "/loja" },
    { name: "Times", href: "/times" },
    { name: "Campeonatos", href: "/campeonatos" },
    { name: "Seja Membro", href: "/register" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="F13 Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-[#d4a853] transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/loja"
              className="p-2 text-white/70 hover:text-[#d4a853] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
            </Link>
            <Link
              href={"/auth/dashboard"}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#d4a853] text-black font-semibold rounded-lg hover:bg-[#e5b964] transition-all duration-300"
            >
              <User className="w-4 h-4" />
              <span className="text-sm">Sou Membro</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white/70 hover:text-[#d4a853] transition-colors py-2 text-lg"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={"/auth/dashboard"}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#d4a853] text-black font-semibold rounded-lg mt-4"
              >
                <User className="w-4 h-4" />
                <span>Sou Membro</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
