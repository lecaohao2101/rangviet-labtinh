"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider - Quản lý theme state cho toàn bộ ứng dụng
 * Mặc định: light mode
 * Lưu preference vào localStorage
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Chỉ chạy trên client side sau khi component mount
  useEffect(() => {
    // Lấy theme từ localStorage hoặc mặc định là light
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const root = document.documentElement;
    
    let initialTheme: Theme = "light";
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      initialTheme = savedTheme;
      // Áp dụng theme ngay lập tức
      if (savedTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    } else {
      // Mặc định là light mode
      root.classList.remove("dark");
    }
    
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  // Cập nhật DOM khi theme thay đổi
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    // Thêm fade overlay để tạo smooth transition
    const root = document.documentElement;
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--background);
      z-index: 9999;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease-in-out;
    `;
    document.body.appendChild(overlay);

    // Trigger fade in
    requestAnimationFrame(() => {
      overlay.style.opacity = "1";
      
      // Đợi fade in hoàn tất rồi mới toggle theme
      setTimeout(() => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        
        // Fade out sau khi theme đã thay đổi
        setTimeout(() => {
          overlay.style.opacity = "0";
          setTimeout(() => {
            document.body.removeChild(overlay);
          }, 200);
        }, 100);
      }, 150);
    });
  };

  // Luôn render Provider để tránh lỗi "useTheme must be used within a ThemeProvider"
  // Giá trị mặc định sẽ được cập nhật sau khi mounted
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook để sử dụng theme context
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
