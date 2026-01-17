"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Trang sản phẩm & dịch vụ với các sản phẩm răng sứ và dịch vụ nha khoa
 * Card layout responsive với hiệu ứng đẹp
 */
export default function ProductsServicesPage() {
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

  // Helper function to create slug from title
  const createSlug = (title: string): string => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const products = [
    {
      id: 1,
      title: "Phục Hình Implant",
      date: "2022-10-31T14:41:00",
      image: "/san-pham-dich-vu-1.jpg",
      excerpt:
        "Kỹ thuật lấy dấu Implant và phục hình răng sứ trên Implant. Quy trình từ tái khám, kiểm tra tích hợp xương, gắn trụ lành thương đến gắn răng sứ cố định. Giải pháp tối ưu để thay thế răng mất với độ bền cao.",
      category: "Dịch vụ",
    },
    {
      id: 2,
      title: "RĂNG SỨ EMAX ZIRCONIA",
      date: "2022-10-17T15:56:00",
      image: "/san-pham-dich-vu-2.jpg",
      excerpt:
        "Răng sứ Emax thuộc dòng sứ không kim loại từ Ivoclar Vivadent. Emax Press (Lithium Disilicate) và Sagemax (Emax Zirconia) với tính thẩm mỹ cao nhất, độ trong mờ tự nhiên và độ bền vượt trội.",
      category: "Sản phẩm",
    },
    {
      id: 3,
      title: "RĂNG SỨ CERCON",
      date: "2022-10-17T16:00:00",
      image: "/san-pham-dich-vu-3.png",
      excerpt:
        "Răng sứ Cercon là loại răng sứ cao cấp được sản xuất tại Đức với khả năng chịu lực lên đến 900Mpa, màu sắc tự nhiên và độ bền cao. Không bị oxi hoá, không làm viền nướu bị đen. Tuổi thọ 15-20 năm.",
      category: "Sản phẩm",
    },
    {
      id: 4,
      title: "RĂNG SỨ KIM LOẠI",
      date: "2022-10-17T15:54:00",
      image: "/san-pham-dich-vu-4.jpg",
      excerpt:
        "Răng sứ kim loại là giải pháp phục hình răng với khung sườn kim loại bền chắc và lớp sứ phủ bên ngoài. Độ bền cao, chi phí hợp lý, phù hợp cho răng hàm cần sức nhai mạnh.",
      category: "Sản phẩm",
    },
    {
      id: 5,
      title: "VENEER",
      date: "2022-10-17T15:59:00",
      image: "/san-pham-dich-vu-5.png",
      excerpt:
        "Veneer là lớp phủ mỏng bằng sứ hoặc composite, giúp cải thiện thẩm mỹ răng một cách tự nhiên và không xâm lấn. Bảo tồn tối đa răng thật, thời gian thực hiện nhanh, phù hợp cho răng cửa.",
      category: "Dịch vụ",
    },
    {
      id: 6,
      title: "RĂNG SỨ NACERE",
      date: "2022-10-17T15:55:00",
      image: "/san-pham-dich-vu-6.jpg",
      excerpt:
        "Răng sứ Nacere là răng toàn sứ cao cấp của DOCERAM GmbH (Đức) với 16 màu răng, chịu lực 600-1200 Mpa. Không lo mảng bám làm vàng ố, xỉn màu. Tương thích sinh học tốt, cách nhiệt hiệu quả.",
      category: "Sản phẩm",
    },
    {
      id: 7,
      title: "RĂNG SỨ ZIRCONIA",
      date: "2022-10-17T15:59:00",
      image: "/san-pham-dich-vu-7.png",
      excerpt:
        "Răng sứ Zirconia là loại răng toàn sứ với khả năng chịu lực cực cao (1.200-1.500 MPa), độ bền vượt trội và tính thẩm mỹ tự nhiên. Không chứa kim loại, an toàn với sức khỏe. Tuổi thọ 15-20 năm.",
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
            Sản Phẩm & Dịch Vụ
          </h1>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Các sản phẩm răng sứ cao cấp và dịch vụ nha khoa chuyên nghiệp,
            mang đến nụ cười hoàn hảo cho bạn
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article
              key={product.id}
              className={`bg-background-secondary border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Product Image */}
              <div className="relative w-full h-48 overflow-hidden bg-background-secondary">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Content */}
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
                  <span>{formatDate(product.date)}</span>
                </div>

                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {product.title}
                </h2>

                <p className="text-foreground-secondary mb-4 line-clamp-3">
                  {product.excerpt}
                </p>

                <Link
                  href={`/san-pham-dich-vu/${createSlug(product.title)}`}
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
