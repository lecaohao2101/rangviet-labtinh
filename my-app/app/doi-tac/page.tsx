"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Trang đối tác với các thông tin về đối tác răng sứ
 * Card layout responsive với hiệu ứng đẹp
 */
export default function PartnersPage() {
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

  // Format date function
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const partners = [
    {
      id: 1,
      title: "ĐỐI TÁC RĂNG SỨ NACERE",
      date: "2022-10-31T12:27:00",
      slug: "doi-tac-rang-su-nacere",
      image: "/doi-tac-rang-su-nacere.jpg",
      excerpt:
        "Răng sứ Nacere là đối tác chiến lược của chúng tôi, mang đến những sản phẩm răng sứ cao cấp với chất lượng vượt trội và độ bền cao.",
      category: "Đối tác",
    },
    {
      id: 2,
      title: "ĐỐI TÁC RĂNG SỨ CERCON",
      date: "2022-10-17T16:49:00",
      slug: "doi-tac-rang-su-cercon",
      image: "/doi-tac-rang-su-cercon.jpg",
      excerpt:
        "Răng sứ Cercon HT là loại răng sứ cao cấp được sản xuất tại Đức với khả năng chịu lực lên đến 900Mpa, màu sắc tự nhiên như răng thật và độ bền cao. Không bị oxi hoá, không làm viền nướu bị đen. Bảo hành lên đến 10 năm.",
      category: "Đối tác",
    },
    {
      id: 3,
      title: "ĐỐI TÁC RĂNG XỨ ZICONIA",
      date: "2022-10-17T16:48:00",
      slug: "doi-tac-rang-xu-ziconia",
      image: "/doi-tac-rang-su-ziconia.jpg",
      excerpt:
        "Ziconia là đối tác hàng đầu trong lĩnh vực răng sứ Zirconia, mang đến các sản phẩm chất lượng cao với công nghệ tiên tiến.",
      category: "Đối tác",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl font-bold text-foreground mb-4 sm:text-5xl">
            Đối Tác
          </h1>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Các đối tác uy tín trong lĩnh vực răng sứ, mang đến những sản phẩm
            chất lượng cao và dịch vụ chuyên nghiệp
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <article
              key={partner.id}
              className={`bg-background-secondary border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Partner Image */}
              <div className="relative w-full h-48 overflow-hidden bg-background-secondary">
                <Image
                  src={partner.image}
                  alt={partner.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {partner.category}
                  </span>
                </div>
              </div>

              {/* Partner Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-foreground-secondary mb-3">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{formatDate(partner.date)}</span>
                </div>

                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {partner.title}
                </h2>

                <p className="text-foreground-secondary mb-4 line-clamp-3">
                  {partner.excerpt}
                </p>

                <Link
                  href={`/doi-tac/${partner.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-300 font-medium text-sm"
                >
                  Xem chi tiết
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
