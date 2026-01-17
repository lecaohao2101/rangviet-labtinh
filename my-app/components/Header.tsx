"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * Header component với navigation menu và search icon
 * Responsive design với mobile menu
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const menuItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Sản phẩm & Dịch vụ", href: "/san-pham-dich-vu" },
    { label: "Đối Tác", href: "/doi-tac" },
    { label: "Tin tức", href: "/tin-tuc" },
    { label: "Video", href: "/video" },
    { label: "Liên hệ", href: "/lien-he" },
    { label: "Kiểm tra bảo hành", href: "/kiem-tra-bao-hanh" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background shadow-sm transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Răng Việt Logo"
                width={200}
                height={70}
                className="h-14 w-auto object-contain sm:h-16 lg:h-20"
                priority
              />
            </Link>
            {/* Slogan - Hidden on mobile, visible on tablet and up */}
            <div className="hidden md:flex flex-col justify-center border-l border-border pl-3 ml-3">
              <p className="text-xs sm:text-sm font-semibold text-primary leading-tight">
                TINH HOA
              </p>
              <p className="text-xs sm:text-sm font-semibold text-primary leading-tight">
                BÀN TAY VIỆT
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 md:flex">
            {menuItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "no-hover bg-primary text-white hover:bg-primary-dark hover:text-white"
                      : "text-foreground hover:bg-accent-light hover:text-primary-dark"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Search Icon & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="rounded-md p-2 text-foreground transition-colors hover:bg-accent-light hover:text-primary"
              aria-label={theme === "light" ? "Chuyển sang chế độ tối" : "Chuyển sang chế độ sáng"}
            >
              {theme === "light" ? (
                // Moon icon - Dark mode
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                // Sun icon - Light mode
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>

            {/* Search Icon */}
            <button
              onClick={toggleSearch}
              className="rounded-md p-2 text-foreground transition-colors hover:bg-accent-light hover:text-primary"
              aria-label="Tìm kiếm"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="rounded-md p-2 text-foreground transition-colors hover:bg-accent-light hover:text-primary md:hidden"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar (Expandable) */}
        {isSearchOpen && (
          <div className="border-t border-border py-4 transition-colors duration-300">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full rounded-md border border-border bg-background px-4 py-2 pl-10 text-sm text-foreground placeholder:text-foreground-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20 transition-colors duration-300"
                autoFocus
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-foreground-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="border-t border-border py-4 md:hidden transition-colors duration-300">
            <div className="flex flex-col space-y-1">
              {menuItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "no-hover bg-primary text-white hover:bg-primary-dark hover:text-white"
                        : "text-foreground hover:bg-accent-light hover:text-primary-dark"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
