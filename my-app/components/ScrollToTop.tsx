"use client";

import { useEffect, useState } from "react";

/**
 * Scroll to Top Button Component
 * Hiển thị khi scroll xuống và cho phép scroll về đầu trang
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Hiển thị button khi scroll xuống hơn 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-[10000] p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-xl hover:shadow-primary/50 group no-hover"
      aria-label="Lên đầu trang"
    >
      <svg
        className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
