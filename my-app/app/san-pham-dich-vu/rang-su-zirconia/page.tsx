"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

/**
 * Trang chi tiết: RĂNG SỨ ZIRCONIA
 */
export default function RangSuZirconiaPage() {
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
                <li className="text-foreground">RĂNG SỨ ZIRCONIA</li>
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
                  Sản phẩm
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                RĂNG SỨ ZIRCONIA
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
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="rang-su-zirconia-la-gi">
                    1. Răng sứ Zirconia là gì?
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Răng sứ Zirconia</strong> là loại răng toàn sứ cao cấp được làm từ <strong>Zirconium Dioxide (ZrO₂)</strong>, hoàn toàn không sử dụng kim loại bên trong. Với công nghệ CAD/CAM hiện đại, các mão sứ được chế tác với độ chính xác cao, hình dáng tự nhiên và tương thích tốt với mô nướu.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    <strong>LAB TÌNH</strong> là Lab áp dụng công nghệ hiện đại, cùng vật liệu sản xuất cao cấp được cấp chứng nhận với phục hình toàn Sứ Zirconia CAD/CAM, cho răng có màu sắc tự nhiên và mang tính thẩm mỹ cao trong phục hình răng.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/sp-dv-rang-su-zirconia.jpg"
                        alt="Răng sứ Zirconia"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Phục hình toàn sứ Zirconia nổi bật với màu sắc tự nhiên và mang tính thẩm mỹ cao trong phục hình răng sứ
                    </figcaption>
                  </figure>
                  <p className="text-foreground-secondary mb-4">
                    Phục hình toàn sứ Zirconia nổi bật với màu sắc tự nhiên và mang tính thẩm mỹ cao trong phục hình răng sứ. Với chất liệu sản xuất cao cấp như <strong>thỏi sứ Zirconia White Peaks</strong>, <strong>bột sứ E-max của Ivoclar Vivadent</strong>, <strong>Noritake</strong>, <strong>Ceramco3 PFZ-Dentsply</strong>, <strong>nước nhúng sườn Amanngirrbach</strong>.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Với vật liệu cao cấp LAB TÌNH đảm bảo an toàn và độ chính xác cao bằng hệ thống Cad/Cam sẽ phục hình được răng sứ như thật tạo cảm giác dễ chịu, thoải mái cho khách hàng.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Do có độ cứng cùng kết cấu vững chắc của vật liệu Zirconia chịu được lực cắn mạnh và nhai tốt trong hầu hết các vị trí răng trong miệng, không bị vỡ và có màu sắc tự nhiên không thay đổi với những ưu điểm như vậy Zirconia là sự lựa chọn đúng cho phục hình răng.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Tại LAB TÌNH chúng tôi áp dụng công nghệ Cad/Cam và hệ thống <strong>Imes – Icore</strong> cùng hệ thống máy tính hỗ trợ lập trình quét - sao chép mẫu với độ chính xác gần như tuyệt đối so với mẫu hàm, thiết kế thông số tạo hình dáng cầu/mão và điêu khắc sườn sứ theo mẫu được thiết lập, đảm bảo màu sắc tự nhiên và thẩm mỹ cao.
                  </p>
                </section>

                {/* Section 2 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="uu-diem">
                    2. Ưu điểm của phục hình toàn sứ Zirconia
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      <strong>Khung sườn nhiều màu tích hợp:</strong> Cho nhiều màu sắc theo yêu cầu, độ sáng trong của sản phẩm cao, mang lại vẻ đẹp thẩm mỹ và tự nhiên của phục hình.
                    </li>
                    <li>
                      <strong>100% không hợp chất kim loại:</strong> Hạn chế tối đa đen viền nướu, an toàn & tương thích sinh học cao, ít gây dị ứng, không gây viêm lợi.
                    </li>
                    <li>
                      <strong>Độ uốn cong, độ cứng cao:</strong> Khả năng chịu lực nhai lớn do Zirconia là vật liệu công nghệ cao, được chứng minh có tính bền vững cao nhất trong các loại phục hình cố định, không gây hại sức khỏe. Chịu được lực cắn mạnh và nhai tốt trong hầu hết các vị trí răng trong miệng, không bị vỡ.
                    </li>
                    <li>
                      <strong>Sản xuất bằng công nghệ CAD/CAM:</strong> (Computer Aided Design/Computer Aided Manufacture), thiết kế và sản xuất dưới sự hỗ trợ của máy tính. Đảm bảo độ chính xác cao và chất lượng hoàn hảo. Hệ thống Imes – Icore cùng hệ thống máy tính hỗ trợ lập trình quét - sao chép mẫu với độ chính xác gần như tuyệt đối so với mẫu hàm.
                    </li>
                    <li>
                      <strong>Độ dày tối ưu:</strong> Có thể thực hiện khung sườn cho cầu và mão với độ dày <strong>0,3 – 0,4mm</strong> và phần kết nối 9mm* tương tự các loại hợp kim nha khoa, giúp bảo tồn răng thật tốt hơn.
                    </li>
                    <li>
                      <strong>Màu sắc tự nhiên không thay đổi:</strong> Có màu sắc tự nhiên không thay đổi theo thời gian, đảm bảo tính thẩm mỹ lâu dài.
                    </li>
                    <li>
                      <strong>Tuổi thọ lâu dài:</strong> Nếu chăm sóc đúng cách, có thể sử dụng từ 15-20 năm trở lên.
                    </li>
                  </ul>
                </section>

                {/* Section 3 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="nhuoc-diem">
                    3. Nhược điểm cần lưu ý
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      <strong>Chi phí cao:</strong> Giá thành cao hơn các loại răng sứ kim loại thông thường.
                    </li>
                    <li>
                      <strong>Yêu cầu kỹ thuật, thiết bị hiện đại:</strong> Cần nha khoa có máy CAD/CAM và bác sĩ có kinh nghiệm để đảm bảo kết quả.
                    </li>
                    <li>
                      <strong>Thời gian chế tác:</strong> Có thể lâu hơn so với loại răng sứ rẻ hoặc sử dụng phương pháp truyền thống.
                    </li>
                  </ul>
                </section>

                {/* Section 4 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="gia-va-bao-hanh">
                    4. Giá & bảo hành
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Giá tham khảo cho răng sứ Zirconia dao động từ <strong>4.000.000 - 14.000.000 VNĐ/răng</strong> tùy loại (HT, Multilayer, Cercon, cao cấp Đức/Nhật), mức bảo hành và nha khoa thực hiện. Thời gian bảo hành thường từ <strong>10 đến 15 năm</strong> tùy chính sách của cơ sở nha khoa.
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
