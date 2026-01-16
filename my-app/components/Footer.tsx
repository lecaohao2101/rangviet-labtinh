"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/**
 * Footer component với thông tin công ty, danh mục, fanpage và bản đồ
 * Responsive design với dark mode support
 * Có hiệu ứng fade-in và slide-up khi scroll vào view
 */
export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = footerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const menuItems = [
    { label: "Giới Thiệu", href: "/gioi-thieu" },
    { label: "Sản Phẩm & Dịch Vụ", href: "/san-pham-dich-vu" },
    { label: "Đối Tác", href: "/doi-tac" },
    { label: "Tin Tức", href: "/tin-tuc" },
    { label: "Video", href: "/video" },
    { label: "Liên Hệ", href: "/lien-he" },
  ];

  return (
    <footer
      ref={footerRef}
      className={`bg-background-secondary border-t border-border text-foreground transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Cột 1: Thông tin công ty */}
          <div
            className={`space-y-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-xl font-bold text-foreground">
              CÔNG TY TNHH RĂNG VIỆT
            </h3>
            <div className="space-y-2 text-sm text-foreground-secondary">
              <div className="flex items-start gap-2 group">
                <svg
                  className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  <strong>Địa Chỉ:</strong> M12A Khu QHNO, KP7, Phường Tân
                  Phong, Thành phố Biên Hoà, Tỉnh Đồng Nai
                </span>
              </div>
              {/* Hotline */}
              <div className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="space-y-1">
                  <div>
                    <strong>Hotline:</strong>{" "}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:0932379567"
                      className="hover:text-primary transition-all duration-300 hover:underline hover:scale-105 inline-block"
                    >
                      093.2379.567
                    </a>
                    (Mr.Định)
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:0902829186"
                      className="hover:text-primary transition-all duration-300 hover:underline hover:scale-105 inline-block"
                    >
                      090.2829.186
                    </a>{" "}
                    (Mr.Tình)
                  </div>
                </div>
              </div>
              {/* CSKH */}
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <div>
                  <strong>CSKH:</strong>{" "}
                  <a
                    href="tel:02516502727"
                    className="hover:text-primary transition-all duration-300 hover:underline hover:scale-105 inline-block"
                  >
                    02516502727
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>
                  <strong>Mã số Thuế:</strong> 3603780450
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <div>
                  <strong>Email:</strong>{" "}
                    <a
                      href="mailto:labtinh@gmail.com"
                      className="hover:text-primary transition-all duration-300 hover:underline hover:scale-105 inline-block"
                    >
                      labtinh@gmail.com
                    </a>
                </div>
              </div>
            </div>
          </div>

          {/* Cột 2: Danh mục */}
          <div
            className={`space-y-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-lg font-semibold text-foreground">DANH MỤC</h3>
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground-secondary hover:text-primary transition-all duration-300 hover:translate-x-2 hover:underline"
                  style={{
                    transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Cột 3: Fanpage */}
          <div
            className={`space-y-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-lg font-semibold text-foreground">FANPAGE</h3>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/profile.php?id=100086838522535"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-primary transition-all duration-300 hover:scale-105 group"
              >
                <svg
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="hover:underline">Facebook Fanpage</span>
              </a>
            </div>
          </div>

          {/* Cột 4: Bản đồ */}
          <div
            className={`space-y-4 transition-all duration-700 delay-400 md:col-span-2 lg:col-span-2 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-lg font-semibold text-foreground">BẢN ĐỒ</h3>
            <div className="space-y-2">
              <a
                href="https://www.google.com/maps/place/Lab+T%C3%ACnh+Bi%C3%AAn+H%C3%B2a/@10.9629522,106.8189037,15z/data=!4m6!3m5!1s0x3174dd7f685aeea5:0x91a06ac707939b70!8m2!3d10.9629522!4d106.8189037!16s%2Fg%2F11v0q8q8q8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-block mb-2 transition-all duration-300 hover:scale-105"
              >
                Xem bản đồ lớn hơn
              </a>
              <div className="w-full h-80 rounded-lg overflow-hidden border border-border transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31336.04446748851!2d106.81890367553015!3d10.962952191402293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174dd7f685aeea5%3A0x91a06ac707939b70!2zTGFiIFTDrG5oIEJpw6puIEjDsmE!5e0!3m2!1sen!2s!4v1768560281713!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Bản đồ Lab Tình Biên Hòa - M12A Khu QHNO, KP7, Phường Tân Phong, Biên Hòa"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`mt-8 pt-8 border-t border-border text-center text-sm text-foreground-secondary transition-all duration-700 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <p className="transition-colors duration-300 hover:text-foreground">
            © {new Date().getFullYear()} CÔNG TY TNHH RĂNG VIỆT. Tất cả quyền
            được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
