"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

/**
 * Trang chi tiết bài viết: RĂNG SỨ ĐỨC LÀ GÌ?
 */
export default function RangSuDucLaGiPage() {
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
                href="/tin-tuc"
                className="hover:text-primary transition-colors duration-300"
              >
                Tin tức
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground">RĂNG SỨ ĐỨC LÀ GÌ?</li>
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
              Kiến thức
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            RĂNG SỨ ĐỨC LÀ GÌ?
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
              <span>31/10/2022 12:37 PM</span>
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
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. RĂNG SỨ ĐỨC LÀ GÌ?
              </h2>
              <p className="text-foreground-secondary mb-4">
                <strong>Răng sứ Đức</strong> thật ra là tên gọi chung{" "}
                <strong>các loại răng sứ</strong> được sản xuất và cung cấp
                bởi các công ty <strong>răng sứ của Đức</strong>. Xuất xứ "Made
                in Germany" luôn có sức ảnh hưởng và tạo được lòng tin vững
                chắc trong lòng người tiêu dùng trên toàn thế giới.
              </p>
              <p className="text-foreground-secondary mb-4">
                <strong>Các dòng răng sứ của Đức</strong> đều là răng toàn sứ
                chất lượng cao. Đặc điểm chung của các loại răng sứ này là được
                chế tác theo công nghệ CAD/CAM (Computer Aided Design/ Computer
                Aided manufacturing). Đây là kỹ thuật thiết kế cũng như chế tạo
                răng sứ thông qua máy tính với độ chính xác và tính thẩm mỹ
                cao.
              </p>
              <p className="text-foreground-secondary mb-4">
                Ngoài ra, <strong>các loại răng sứ của Đức</strong> còn sở hữu
                nhiều ưu điểm vượt trội khác:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                <li>
                  Răng sứ Đức có độ bền, độ chịu lực cao, đảm bảo chức năng ăn
                  nhai như răng thật.
                </li>
                <li>
                  Răng sứ được làm từ sứ thuần khiết nên có màu sắc tự nhiên,
                  đẹp, đảm bảo tính thẩm mỹ cao.
                </li>
                <li>
                  Vật liệu sứ cao cấp, lành tính, rất an toàn với sức khỏe răng
                  miệng và cơ thể con người.
                </li>
                <li>
                  Hoàn toàn không gây hôi miệng, đen viền nướu hay tình trạng
                  bị oxi hóa như răng sứ kim loại.
                </li>
                <li>
                  <strong>Tuổi thọ răng sứ của Đức</strong> lên đến 20 năm nếu
                  sử dụng đúng răng sứ chính hãng và chăm sóc răng sứ tốt.
                </li>
                <li>
                  <strong>Tất cả các loại răng sứ Đức</strong> đều được cấp
                  thẻ bảo hành sau khi phục hình, để đảm bảo quyền lợi cho khách
                  hàng.
                </li>
              </ul>
              <p className="text-foreground-secondary">
                Chính vì những lí do trên mà răng sứ Đức được rất nhiều nha khoa
                tư vấn cho khách hàng lựa chọn.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. NHỮNG LOẠI RĂNG SỨ CỦA ĐỨC CHẤT LƯỢNG PHỔ BIẾN HIỆN NAY
              </h2>

              {/* 2.1 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  2.1 Răng sứ Đức Zirconia DDBio
                </h3>
                <p className="text-foreground-secondary mb-4">
                  <strong>Răng sứ Zirconia DDBio</strong> là loại răng toàn sứ
                  có khung sườn bên trong và lớp sứ bên ngoài 100% làm từ chất
                  liệu Zirconia. Đây là một loại oxit của kim loại Zirconium,
                  với độ tương thích sinh học cao cùng đặc tính chống đứt gãy và
                  khả năng chống mài mòn tốt.
                </p>
                <p className="text-foreground-secondary mb-4">
                  Bên cạnh đó, loại răng sứ này còn có tính thẩm mỹ cao và chi
                  phí hợp lý nên được rất nhiều khách hàng ưa chuộng.
                </p>
                <p className="text-foreground-secondary mb-3">
                  Răng sứ Zirconia DDBio có những ưu điểm nổi bật sau:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                  <li>
                    Độ thấu quang cao nên không bị đổ bóng hay kém tự nhiên khi
                    chiếu quang hoặc bị ánh đèn chiếu vào.
                  </li>
                  <li>Độ bền (độ chịu lực) lên đến 1200 (+/- 200) MPa</li>
                  <li>
                    An toàn với cơ thể, không bị dị ứng hay đào thải sau khi
                    phục hình
                  </li>
                  <li>
                    Khi răng sứ đã thích ứng với hàm sẽ hoàn toàn không gây ê
                    buốt khi ăn các loại đồ ăn nóng, lạnh
                  </li>
                  <li>Màu sắc răng tự nhiên</li>
                  <li>
                    Dịch vụ bảo hành chính hãng của răng lên đến 10 năm
                  </li>
                </ul>
                
                {/* Image 1 */}
                <figure className="my-6">
                  <div className="relative w-full min-h-64 sm:min-h-96 rounded-lg overflow-hidden border border-border bg-background flex items-center justify-center">
                    <Image
                      src="/rang-su-duc-detail-1.jpg"
                      alt="Các thông số kỹ thuật của Răng sứ Đức Zirconia DDBio"
                      width={800}
                      height={600}
                      className="object-contain w-full h-auto max-h-[600px]"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                    Các thông số kỹ thuật của Răng sứ Đức Zirconia DDBio
                  </figcaption>
                </figure>
              </div>

              {/* 2.2 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  2.2 Răng sứ Đức DDBio HT
                </h3>
                <p className="text-foreground-secondary mb-4">
                  <strong>Răng sứ DDBio HT</strong> được sản xuất tại Đức có
                  độ bền cơ học và kháng mòn cao. Ngoài ra, răng sứ DDBio HT
                  còn sở hữu các đặc tình như có độ trong mờ thẩm mỹ như răng
                  thật.
                </p>
                <p className="text-foreground-secondary mb-4">
                  <strong>Sử dụng DDBio HT</strong> cho dịch vụ thẩm mỹ răng
                  hoàn toàn không gây ê buốt khi ăn các loại thực phẩm nóng
                  lạnh.
                </p>
                <p className="text-foreground-secondary">
                  So với DDBio HS, DDBio HT có thẩm mỹ và độ trong cao hơn, phù
                  hợp với nhu cầu làm đẹp của nhiều khách hàng.
                </p>
                
                {/* Image 2 */}
                <figure className="my-6">
                  <div className="relative w-full min-h-64 sm:min-h-96 rounded-lg overflow-hidden border border-border bg-background flex items-center justify-center">
                    <Image
                      src="/rang-su-duc-detail-2.jpg"
                      alt="Răng sứ Đức DDBio HT"
                      width={800}
                      height={600}
                      className="object-contain w-full h-auto max-h-[600px]"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                    Răng sứ Đức DDBio HT
                  </figcaption>
                </figure>
              </div>

              {/* 2.3 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  2.3 Răng sứ Đức Cercon HT
                </h3>
                <p className="text-foreground-secondary mb-4">
                  <strong>Răng sứ Cercon HT</strong> là loại răng sứ cao cấp
                  được làm từ một loại Zirconia đặc biệt tinh khiết. Khi khách
                  hàng muốn tìm một loại răng sứ có độ mờ lí tưởng kết hợp với
                  sự đảm bảo an toàn cho cơ thể thì đây là lựa chọn hàng đầu.
                </p>
                <p className="text-foreground-secondary mb-4">
                  Răng sứ Cercon HT có độ ổn định lâu dài trong môi trường răng
                  miệng. Đặc biệt, không bị ảnh hưởng bởi các điều kiện lâm sàng
                  như nước bọt, vi khuẩn, ...
                </p>
                <p className="text-foreground-secondary mb-4">
                  Độ bền của răng sứ rất tốt, tránh được nhiều nguy cơ vỡ nứt.
                  Bên cạnh đó, bề mặt sứ có độ mịn siêu cao, nên không làm mài
                  mòn răng ở đối diện.
                </p>
                <p className="text-foreground-secondary">
                  Cercon HT với 16 màu phôi theo hệ thống màu Vita, đáp ứng nhu
                  cầu thẩm mỹ và màu sắc tự nhiên như răng thật.
                </p>
                
                {/* Image 3 */}
                <figure className="my-6">
                  <div className="relative w-full min-h-64 sm:min-h-96 rounded-lg overflow-hidden border border-border bg-background flex items-center justify-center">
                    <Image
                      src="/rang-su-duc-detail-3.jpg"
                      alt="Răng sứ Đức Cercon HT"
                      width={800}
                      height={600}
                      className="object-contain w-full h-auto max-h-[600px]"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                    Răng sứ Đức Cercon HT
                  </figcaption>
                </figure>
              </div>

              {/* 2.4 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  2.4 Răng sứ Đức Nacera PEARL
                </h3>
                <p className="text-foreground-secondary mb-4">
                  <strong>Răng sứ Đức Nacera PEARL</strong> với 16 tông màu có
                  sẵn, được dàn trải như cấu trúc của răng thật. Màu sắc của cổ
                  răng đến màu cạnh cắn đều đảm bảo độ chính xác cao.
                </p>
                <p className="text-foreground-secondary mb-4">
                  Răng sử dụng công nghệ xử lý màu sắc cao cấp, nên không bị thay
                  đổi màu trong môi trường miệng.
                </p>
                <p className="text-foreground-secondary mb-4">
                  Màu răng sứ được chế tạo sẵn, không phải trải qua công đoạn
                  nhuộm màu, sấy khô, xử lý màu sắc nên tiết kiệm được nhiều
                  thời gian.
                </p>
                <p className="text-foreground-secondary mb-4">
                  Độ chịu lực lên đến hơn 1400 MPa và răng sứ Nacera cách nhiệt
                  tốt, giúp bảo vệ cùi răng không bị kích thích bởi thức ăn hay
                  đồ uống nóng, lạnh.
                </p>
                <p className="text-foreground-secondary">
                  Răng sứ Nacera có độ láng bóng cao nên không dễ bị tạo mảng bám
                  bởi thức ăn, đồ uống.
                </p>
              </div>

              {/* 2.5 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  2.5 Răng sứ Đức Nacera 9 MAX
                </h3>
                <p className="text-foreground-secondary mb-4">
                  Nacera 9 MAX là phiên bản cao cấp của Nacera PEARL. Ngoài việc
                  sở hữu những ưu điểm nổi bật của dòng răng sứ Nacera, Nacera 9
                  MAX được phủ bằng 9 lớp sứ EMAX cao cấp, giúp răng trắng sáng
                  và chắc khỏe hơn.
                </p>
                <p className="text-foreground-secondary mb-4">
                  <strong>
                    Thời gian sử dụng của răng sứ Đức Nacera 9 MAX
                  </strong>{" "}
                  có thể lên đến 20 năm.
                </p>
                <p className="text-foreground-secondary">
                  Đặc biệt, đây là dòng răng sứ cao cấp chỉ có riêng tại nha
                  khoa I-DENT. Theo kinh nghiệm được nhiều bệnh nhân chia sẻ,
                  sau khi làm răng sứ Nacera 9 MAX đem lại hiệu quả sử dụng rất
                  tốt, không ê buốt, không cộm cấn, khó chịu.
                </p>
              </div>
            </section>
          </div>
        </article>

        {/* Related Articles */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-background-secondary border border-border rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Bài viết khác
            </h2>
            <div className="space-y-4">
              <Link
                href="/tin-tuc/3-dong-rang-toan-su-duoc-danh-gia-tot-nhat-hien-nay"
                className="block p-4 bg-background rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                  3 DÒNG RĂNG TOÀN SỨ ĐƯỢC ĐÁNH GIÁ TỐT NHẤT HIỆN NAY
                </h3>
                <p className="text-sm text-foreground-secondary">
                  Ngày đăng: 31/10/2022 12:35 PM
                </p>
              </Link>
              <Link
                href="/tin-tuc/rang-su-nacera-la-gi-uu-nhuoc-diem-gia-ca"
                className="block p-4 bg-background rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                  RĂNG SỨ NACERA LÀ GÌ? ƯU NHƯỢC ĐIỂM & GIÁ CẢ
                </h3>
                <p className="text-sm text-foreground-secondary">
                  Ngày đăng: 31/10/2022 12:34 PM
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Back to News */}
        <div className="mt-8 text-center">
          <Link
            href="/tin-tuc"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-300 font-medium"
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
            Quay lại danh sách tin tức
          </Link>
        </div>
          </div>

          {/* Table of Contents Sidebar */}
          <aside className="lg:col-span-1">
            <TableOfContents />
          </aside>
        </div>
      </div>
    </div>
  );
}
