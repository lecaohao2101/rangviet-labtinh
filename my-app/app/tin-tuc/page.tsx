"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * Trang tin tức với các bài viết về răng sứ
 * Card layout responsive với hiệu ứng đẹp
 */
export default function NewsPage() {
  const [isVisible, setIsVisible] = useState(false);
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

  const articles = [
    {
      id: 1,
      title: "RĂNG SỨ ĐỨC LÀ GÌ?",
      date: "2022-10-31T12:37:00",
      slug: "rang-su-duc-la-gi",
      excerpt:
        "Răng sứ Đức thật ra là tên gọi chung các loại răng sứ được sản xuất và cung cấp bởi các công ty răng sứ của Đức. Xuất xứ \"Made in Germany\" luôn có sức ảnh hưởng và tạo được lòng tin vững chắc trong lòng người tiêu dùng trên toàn thế giới.",
      category: "Kiến thức",
    },
    {
      id: 2,
      title: "3 DÒNG RĂNG TOÀN SỨ ĐƯỢC ĐÁNH GIÁ TỐT NHẤT HIỆN NAY",
      date: "2022-10-31T12:35:00",
      slug: "3-dong-rang-toan-su-duoc-danh-gia-tot-nhat-hien-nay",
      excerpt:
        "Khám phá 3 dòng răng toàn sứ được đánh giá tốt nhất: Zirconia Ceramill Zolid (Đức), Cercon và Cercon HT (Đức), 3M Lava Plus (Mỹ). Tất cả đều có tiêu chuẩn lưu hành quốc tế và thẻ bảo hành IDPI.",
      category: "Sản phẩm",
    },
    {
      id: 3,
      title: "RĂNG SỨ NACERA LÀ GÌ? ƯU NHƯỢC ĐIỂM & GIÁ CẢ",
      date: "2022-10-31T12:34:00",
      slug: "rang-su-nacera-la-gi-uu-nhuoc-diem-gia-ca",
      excerpt:
        "Răng sứ Nacera là răng toàn sứ cao cấp của DOCERAM GmbH (Đức) với 16 màu răng, chịu lực 600-1200 Mpa. Được chế tác bằng chất liệu Nha khoa cao cấp với tính thẩm mỹ đẹp như răng thật, không lo mảng bám làm vàng ố, xỉn màu.",
      category: "Sản phẩm",
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
            Tin Tức
          </h1>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Cập nhật những thông tin mới nhất về răng sứ, công nghệ nha khoa và
            các sản phẩm chất lượng cao tại RĂNG VIỆT
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className={`bg-background-secondary border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Article Image Placeholder */}
              <div className="relative w-full h-48 bg-gradient-to-br from-primary-lightest to-primary/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-primary/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Date */}
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
                  <span>{formatDate(article.date)}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-foreground-secondary mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/tin-tuc/${article.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-300 group/link"
                >
                  <span>Đọc thêm</span>
                  <svg
                    className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
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

        {/* Additional Info Section */}
        <div
          className={`mt-12 transition-all duration-700 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-background-secondary border border-border rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Về Chúng Tôi
            </h2>
            <p className="text-foreground-secondary mb-4">
              RĂNG VIỆT là đơn vị chuyên sản xuất và cung cấp các sản phẩm răng
              sứ chất lượng cao, được sản xuất với công nghệ hiện đại và quy trình
              kiểm soát chất lượng nghiêm ngặt.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-foreground-secondary">
                  Năm kinh nghiệm
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-foreground-secondary">
                  Khách hàng tin tưởng
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-foreground-secondary">
                  Đối tác nha khoa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
