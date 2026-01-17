"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

/**
 * Trang chi tiết: VENEER
 */
export default function VeneerPage() {
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
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Breadcrumb */}
            <nav
              className={`mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <ol className="flex items-center gap-2 text-sm text-foreground-secondary">
                <li>
                  <Link
                    href="/"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    Trang chủ
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/san-pham-dich-vu"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    Sản Phẩm & Dịch Vụ
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground">VENEER</li>
              </ol>
            </nav>

            {/* Article Header */}
            <header
              className={`mb-8 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="mb-4">
                <span className="inline-block bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  Dịch vụ
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                VENEER
              </h1>
              <div className="flex items-center gap-4 text-sm text-foreground-secondary">
                <div className="flex items-center gap-2">
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
                  <span>17/10/2022 03:59 PM</span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <article
              className={`prose prose-lg max-w-none bg-background-secondary border border-border rounded-lg p-6 sm:p-8 mb-8 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-foreground space-y-6">
                {/* Section 1 */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="veneer-la-gi">
                    1. Veneer là gì?
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Veneer</strong> (hay còn gọi là mặt dán sứ) là lớp phủ mỏng bằng sứ hoặc composite được dán lên mặt ngoài của răng để cải thiện thẩm mỹ. Veneer có độ dày chỉ khoảng 0.3-0.7mm, giúp thay đổi màu sắc, hình dáng và kích thước răng một cách tự nhiên.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/san-pham-dich-vu-5.png"
                        alt="Veneer - mặt dán sứ"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Veneer là lớp phủ mỏng giúp cải thiện thẩm mỹ răng một cách tự nhiên
                    </figcaption>
                  </figure>
                  <p className="text-foreground-secondary mb-4">
                    Đây là phương pháp thẩm mỹ răng không xâm lấn hoặc xâm lấn tối thiểu, phù hợp cho những người muốn cải thiện nụ cười mà không cần bọc toàn bộ răng.
                  </p>
                </section>

                {/* Section 2 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="cac-loai-veneer">
                    2. Các loại Veneer
                  </h2>

                  <h3 className="text-xl font-semibold text-foreground mb-3" id="veneer-su">
                    2.1 Veneer sứ
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    Veneer sứ được chế tác từ sứ cao cấp, có độ bền và tính thẩm mỹ cao nhất. Loại này có thể tồn tại từ 10-15 năm hoặc lâu hơn nếu chăm sóc tốt.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6" id="veneer-composite">
                    2.2 Veneer composite
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    Veneer composite được làm từ vật liệu composite, có chi phí thấp hơn nhưng tuổi thọ ngắn hơn (khoảng 5-7 năm) và dễ bị ố màu hơn so với veneer sứ.
                  </p>
                </section>

                {/* Section 3 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="uu-diem">
                    3. Ưu điểm của Veneer
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      <strong>Bảo tồn răng thật tối đa:</strong> Chỉ mài một lớp rất mỏng (0.3-0.5mm) hoặc không cần mài trong một số trường hợp.
                    </li>
                    <li>
                      <strong>Tính thẩm mỹ cao:</strong> Màu sắc tự nhiên, độ trong mờ giống răng thật.
                    </li>
                    <li>
                      <strong>Không xâm lấn:</strong> Phương pháp nhẹ nhàng, ít đau đớn.
                    </li>
                    <li>
                      <strong>Thời gian thực hiện nhanh:</strong> Thường chỉ cần 2-3 lần hẹn.
                    </li>
                    <li>
                      <strong>Không bị ố màu:</strong> Veneer sứ không bị ố màu bởi thức ăn, đồ uống.
                    </li>
                  </ul>
                </section>

                {/* Section 4 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="chi-dinh">
                    4. Chỉ định sử dụng
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Veneer phù hợp cho các trường hợp:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      Răng bị ố vàng, xỉn màu không thể tẩy trắng
                    </li>
                    <li>
                      Răng bị sứt mẻ nhẹ, không đều
                    </li>
                    <li>
                      Răng thưa nhẹ, cần điều chỉnh hình dáng
                    </li>
                    <li>
                      Muốn cải thiện nụ cười mà không muốn bọc toàn bộ răng
                    </li>
                  </ul>
                </section>

                {/* Section 5 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="quy-trinh">
                    5. Quy trình thực hiện
                  </h2>
                  <ol className="list-decimal list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      Khám và tư vấn, chọn màu sắc phù hợp
                    </li>
                    <li>
                      Mài nhẹ mặt ngoài răng (nếu cần)
                    </li>
                    <li>
                      Lấy dấu răng để chế tác veneer
                    </li>
                    <li>
                      Gắn veneer tạm thời (nếu cần)
                    </li>
                    <li>
                      Chế tác veneer tại labo (thường 1-2 tuần)
                    </li>
                    <li>
                      Gắn veneer cố định bằng keo chuyên dụng
                    </li>
                  </ol>
                </section>

                {/* Section 6 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="gia-va-bao-hanh">
                    6. Giá & bảo hành
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Giá tham khảo: Veneer sứ khoảng <strong>3.000.000 - 6.000.000 VNĐ/răng</strong>, Veneer composite khoảng <strong>1.500.000 - 3.000.000 VNĐ/răng</strong>. Thời gian bảo hành thường từ <strong>5 đến 10 năm</strong> tùy loại veneer.
                  </p>
                </section>
              </div>
            </article>
          </div>

          {/* Sidebar - Table of Contents */}
          <aside className="lg:col-span-1">
            <TableOfContents />
          </aside>
        </div>
      </div>
    </div>
  );
}
