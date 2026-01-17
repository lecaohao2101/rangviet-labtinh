"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * Trang chi tiết: ĐỐI TÁC RĂNG XỨ ZICONIA - Đang cập nhật
 */
export default function DoiTacRangXuZiconiaPage() {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <ol className="flex items-center space-x-2 text-sm text-foreground-secondary">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Trang chủ
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/doi-tac" className="hover:text-primary transition-colors">
                Đối Tác
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground">ĐỐI TÁC RĂNG XỨ ZICONIA</li>
          </ol>
        </nav>

        {/* Coming Soon Content */}
        <div
          className={`bg-background-secondary border border-border rounded-lg p-8 sm:p-12 md:p-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-md mx-auto">
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Đang Cập Nhật
            </h1>

            {/* Description */}
            <p className="text-lg text-foreground-secondary mb-8">
              Nội dung về <strong>ĐỐI TÁC RĂNG XỨ ZICONIA</strong> đang được chúng tôi cập nhật. Vui lòng quay lại sau!
            </p>

            {/* Back Button */}
            <Link
              href="/doi-tac"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300 font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Quay lại trang Đối Tác
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
