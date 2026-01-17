"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

/**
 * Component mục lục tự động từ các heading trong bài viết
 * Sticky sidebar với highlight section đang đọc
 */
export default function TableOfContents({ className = "" }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Tìm tất cả headings trong bài viết
    const articleContent = document.querySelector("article");
    if (!articleContent) return;

    const headingElements = articleContent.querySelectorAll("h2, h3");
    const headingList: Heading[] = [];

    headingElements.forEach((heading) => {
      const text = heading.textContent || "";
      const level = parseInt(heading.tagName.charAt(1));
      
      // Tạo ID từ text (slugify)
      const id = text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      // Gán ID cho heading nếu chưa có
      if (!heading.id) {
        heading.id = id;
      }

      headingList.push({
        id: heading.id,
        text: text.trim(),
        level,
      });
    });

    setHeadings(headingList);

    // Intersection Observer để track section đang đọc
    const observerOptions = {
      rootMargin: "-20% 0% -35% 0%",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    headingElements.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset để không bị che bởi sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update active ID ngay lập tức
      setActiveId(id);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div
      className={`sticky top-24 hidden lg:block ${className}`}
      style={{ maxHeight: "calc(100vh - 8rem)" }}
    >
      <div className="bg-background-secondary border border-border rounded-lg p-4">
        <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
          Mục Lục
        </h3>
        <nav className="space-y-1 overflow-y-auto" style={{ maxHeight: "calc(100vh - 12rem)" }}>
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`block text-sm transition-colors duration-200 hover:text-primary ${
                heading.level === 3 ? "ml-4" : ""
              } ${
                activeId === heading.id
                  ? "text-primary font-semibold border-l-2 border-primary pl-2 -ml-2"
                  : "text-foreground-secondary"
              }`}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
