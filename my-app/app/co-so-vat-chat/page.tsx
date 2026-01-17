"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Trang Cơ Sở Vật Chất - Công Ty TNHH Răng Việt
 * Hiển thị chi tiết về các phòng ban và trang thiết bị
 */
export default function CoSoVatChatPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fallback: Hiển thị nội dung ngay lập tức trên mobile để tránh màn hình trắng
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.01, // Giảm threshold để dễ trigger hơn trên mobile
        rootMargin: "50px" // Thêm margin để trigger sớm hơn
      }
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

  // Cơ sở vật chất với mô tả chi tiết
  const facilities = [
    {
      id: 1,
      title: "Phòng Mài Răng",
      image: "/gioi-thieu-4.jpg",
      description:
        "Phòng mài răng được trang bị hệ thống máy móc hiện đại, đảm bảo độ chính xác cao trong quá trình mài và tạo hình răng sứ. Với công nghệ CAD/CAM tiên tiến, chúng tôi có thể tạo ra những sản phẩm răng sứ hoàn hảo với độ chính xác đến từng chi tiết nhỏ nhất.",
    },
    {
      id: 2,
      title: "Phòng Thiết Kế",
      image: "/gioi-thieu-5.png",
      description:
        "Phòng thiết kế là nơi các chuyên gia thiết kế và lên kế hoạch cho từng sản phẩm răng sứ. Sử dụng phần mềm thiết kế 3D chuyên nghiệp, đội ngũ kỹ thuật viên có thể tạo ra những thiết kế tối ưu, đảm bảo tính thẩm mỹ và chức năng của răng sứ.",
    },
    {
      id: 3,
      title: "Phòng Kỹ Thuật Viên 1",
      image: "/gioi-thieu-11.jpg",
      description:
        "Phòng kỹ thuật viên 1 chuyên về các công đoạn chế tác và hoàn thiện răng sứ. Với đội ngũ kỹ thuật viên giàu kinh nghiệm, phòng này đảm bảo chất lượng sản phẩm đạt tiêu chuẩn cao nhất, từ khâu chế tác đến hoàn thiện cuối cùng.",
    },
    {
      id: 4,
      title: "Phòng Kỹ Thuật Viên 2",
      image: "/gioi-thieu-12.jpg",
      description:
        "Phòng kỹ thuật viên 2 tập trung vào các công đoạn phức tạp và tinh tế của quy trình sản xuất răng sứ. Với trang thiết bị hiện đại và quy trình làm việc chuyên nghiệp, phòng này đảm bảo mỗi sản phẩm đều được chế tác với sự tỉ mỉ và chính xác cao.",
    },
    {
      id: 5,
      title: "Phòng Kỹ Thuật Viên 3",
      image: "/gioi-thieu-13.jpg",
      description:
        "Phòng kỹ thuật viên 3 là nơi thực hiện các công đoạn kiểm tra chất lượng và hoàn thiện sản phẩm cuối cùng. Mỗi sản phẩm răng sứ đều được kiểm tra kỹ lưỡng về độ chính xác, tính thẩm mỹ và chất lượng trước khi giao đến khách hàng.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
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
            <li className="text-foreground">Cơ sở vật chất</li>
          </ol>
        </nav>

        {/* Header Section */}
        <div
          className={`text-center mb-12 transition-all duration-700 delay-100 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl font-bold text-foreground mb-4 sm:text-5xl">
            CƠ SỞ VẬT CHẤT BÊN CHÚNG TÔI
          </h1>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Hệ thống phòng ban hiện đại với trang thiết bị tiên tiến, đảm bảo
            chất lượng sản phẩm răng sứ đạt tiêu chuẩn quốc tế
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="space-y-16">
          {facilities.map((facility, index) => (
            <div
              key={facility.id}
              className={`bg-background-secondary border border-border rounded-lg overflow-hidden transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative w-full aspect-video lg:aspect-auto lg:h-full min-h-[300px]">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {facility.title}
                  </h2>
                  <p className="text-foreground-secondary leading-relaxed text-lg">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div
          className={`mt-16 bg-background-secondary border border-border rounded-lg p-8 sm:p-12 transition-all duration-700 delay-600 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
            Hệ Thống Máy Móc Hiện Đại
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Công Nghệ CAD/CAM
              </h3>
              <p className="text-sm text-foreground-secondary">
                Hệ thống thiết kế và sản xuất tự động với độ chính xác cao
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Máy Móc Tiên Tiến
              </h3>
              <p className="text-sm text-foreground-secondary">
                Trang thiết bị nhập khẩu từ các nước có nền nha khoa hàng đầu
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Chất Lượng Đảm Bảo
              </h3>
              <p className="text-sm text-foreground-secondary">
                Quy trình kiểm tra nghiêm ngặt đảm bảo chất lượng sản phẩm
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/lien-he"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
          >
            Liên Hệ Với Chúng Tôi
          </Link>
        </div>
      </div>
    </div>
  );
}
