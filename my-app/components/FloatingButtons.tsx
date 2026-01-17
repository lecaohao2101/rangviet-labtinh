"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * FloatingButtons - Component với các nút liên hệ nhanh và AI tư vấn
 * Hiển thị ở góc dưới bên phải màn hình
 */
export default function FloatingButtons() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
    if (isAIOpen) setIsAIOpen(false);
  };

  const toggleAI = () => {
    setIsAIOpen(!isAIOpen);
    if (isContactOpen) setIsContactOpen(false);
  };

  // Đóng menu khi click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target as Node) &&
        isContactOpen
      ) {
        setIsContactOpen(false);
      }
      if (
        aiRef.current &&
        !aiRef.current.contains(event.target as Node) &&
        isAIOpen
      ) {
        setIsAIOpen(false);
      }
    };

    if (isContactOpen || isAIOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isContactOpen, isAIOpen]);

  // Đóng menu khi click vào link
  const handleLinkClick = () => {
    setIsContactOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">
        {/* Contact Toggle Menu */}
        <div className="relative" ref={contactRef}>
          {/* Contact Options */}
          {isContactOpen && (
            <div className="absolute bottom-16 right-0 mb-2 flex flex-col gap-2 z-[9999] animate-in fade-in slide-in-from-bottom-2 duration-200">
             {/* Messenger */}
             <a
               href="https://m.me/100086838522535"
               target="_blank"
               rel="noopener noreferrer"
               onClick={handleLinkClick}
               className="flex items-center justify-center gap-3 bg-white dark:bg-background-secondary border border-border rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 group no-hover"
               title="Messenger"
             >
               <Image
                 src="/messenger-icon.png"
                 alt="Messenger"
                 width={24}
                 height={24}
                 className="h-6 w-6"
               />
             </a>

             {/* Zalo */}
             <a
               href="https://zalo.me/0932379567"
               target="_blank"
               rel="noopener noreferrer"
               onClick={handleLinkClick}
               className="flex items-center justify-center gap-3 bg-white dark:bg-background-secondary border border-border rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 group no-hover"
               title="Zalo"
             >
               <Image
                 src="/zalo-icon.png"
                 alt="Zalo"
                 width={24}
                 height={24}
                 className="h-6 w-6"
               />
             </a>

            {/* Gọi điện */}
            <a
              href="tel:0932379567"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-3 bg-white dark:bg-background-secondary border border-border rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 group no-hover"
              title="Gọi điện"
            >
              <svg
                className="h-6 w-6 text-primary"
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
            </a>

            {/* Liên hệ */}
            <Link
              href="/lien-he"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-3 bg-white dark:bg-background-secondary border border-border rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 group no-hover"
              title="Liên hệ"
            >
              <svg
                className="h-6 w-6 text-primary"
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
            </Link>
          </div>
        )}

        {/* Contact Toggle Button */}
        <button
          onClick={toggleContact}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
            isContactOpen
              ? "bg-primary text-white rotate-45"
              : "bg-white dark:bg-background-secondary text-primary border border-border hover:bg-accent-light"
          }`}
          aria-label="Liên hệ nhanh"
        >
          {isContactOpen ? (
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* AI Tư vấn Toggle */}
      <div className="relative" ref={aiRef}>
        {/* AI Chat Interface */}
        {isAIOpen && (
          <div className="absolute bottom-16 right-0 mb-2 w-80 sm:w-96 bg-white dark:bg-background-secondary border border-border rounded-lg shadow-2xl z-[9999] animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-[calc(100vw-3rem)]">
            <div className="p-4 border-b border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                  <h3 className="font-semibold text-foreground">AI Tư vấn</h3>
                </div>
                <button
                  onClick={toggleAI}
                  className="text-foreground-secondary hover:text-foreground transition-colors"
                  aria-label="Đóng"
                >
                  <svg
                    className="h-5 w-5"
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
                </button>
              </div>
            </div>
            <div className="p-4 h-64 overflow-y-auto">
              <div className="space-y-4">
                 <div className="flex items-start gap-2">
                   <div className="w-8 h-8 rounded-full bg-primary-lightest flex items-center justify-center flex-shrink-0">
                     <Image
                       src="/ai-icon.png"
                       alt="AI"
                       width={20}
                       height={20}
                       className="h-5 w-5"
                     />
                   </div>
                  <div className="flex-1">
                    <div className="bg-background-secondary rounded-lg p-3">
                      <p className="text-sm text-foreground">
                        Xin chào! Tôi là AI tư vấn của Răng Việt. Tôi có thể
                        giúp bạn:
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-foreground-secondary">
                        <li>• Tư vấn về sản phẩm & dịch vụ</li>
                        <li>• Hướng dẫn đặt lịch hẹn</li>
                        <li>• Trả lời câu hỏi thường gặp</li>
                        <li>• Hỗ trợ kỹ thuật</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Nhập câu hỏi của bạn..."
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground placeholder:text-foreground-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                />
                <button
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center"
                  aria-label="Gửi"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

         {/* AI Toggle Button */}
         <button
           onClick={toggleAI}
           className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
             isAIOpen
               ? "bg-primary"
               : "bg-white dark:bg-background-secondary border border-border hover:bg-accent-light"
           }`}
           aria-label="AI Tư vấn"
         >
           <Image
             src="/ai-icon.png"
             alt="AI Tư vấn"
             width={24}
             height={24}
             className="h-6 w-6"
           />
         </button>
      </div>
    </div>
  );
}
