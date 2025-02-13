
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-2xl font-space-grotesk font-bold">
            JEWELRY
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="nav-link">
              Collections
            </Link>
            <Link href="/products" className="nav-link">
              Shop
            </Link>
            <Link href="/about" className="nav-link">
              Our Story
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="relative animated-btn"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-white flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium hover:text-primary"
            >
              Collections
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 text-base font-medium hover:text-primary"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium hover:text-primary"
            >
              Our Story
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
