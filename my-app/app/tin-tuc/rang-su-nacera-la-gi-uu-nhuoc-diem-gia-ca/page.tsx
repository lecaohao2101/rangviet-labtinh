"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

/**
 * Trang chi tiết bài viết: RĂNG SỨ NACERA LÀ GÌ? ƯU NHƯỢC ĐIỂM & GIÁ CẢ
 */
export default function RangSuNaceraPage() {
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
            <li className="text-foreground">
              RĂNG SỨ NACERA LÀ GÌ? ƯU NHƯỢC ĐIỂM & GIÁ CẢ
            </li>
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
            RĂNG SỨ NACERA LÀ GÌ? ƯU NHƯỢC ĐIỂM & GIÁ CẢ
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
              <span>31/10/2022 12:34 PM</span>
            </div>
          </div>
        </header>

        {/* Intro */}
        <div
          className={`mb-8 bg-primary-lightest border-l-4 border-primary p-6 rounded-lg transition-all duration-700 delay-150 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-foreground">
            Răng sứ Nacera được chế tác bằng chất liệu Nha khoa cao cấp với hàng
            loạt ưu điểm lớn: tính thẩm mỹ đẹp như răng thật với 16 màu răng
            khác nhau, cường độ chịu lực nhai cắn tốt lên đến 1200 Mpa, đặc biệt
            không lo mảng bám làm vàng ố, xỉn màu,...
          </p>
        </div>

        {/* Article Content */}
        <article
          className={`prose prose-lg max-w-none bg-background-secondary border border-border rounded-lg p-6 sm:p-8 mb-8 transition-all duration-700 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-foreground space-y-8">
            {/* Section 1: Răng sứ Nacera là gì? */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Răng sứ Nacera là gì? Cấu tạo răng sứ Nacera
              </h2>
              
              {/* Image 1 */}
              <figure className="my-6">
                <div className="relative w-full min-h-64 sm:min-h-96 rounded-lg overflow-hidden border border-border bg-background flex items-center justify-center">
                  <Image
                    src="/rang-su-nacera-detail-1.jpg"
                    alt="Răng sứ Nacera"
                    width={800}
                    height={600}
                    className="object-contain w-full h-auto max-h-[600px]"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                  Răng sứ Nacera
                </figcaption>
              </figure>
              
              <p className="text-foreground-secondary mb-4">
                Răng sứ Nacera là một loại răng toàn sứ cao cấp của công ty{" "}
                <strong>DOCERAM GmbH (Đức)</strong>. Răng sứ Nacera được cấu tạo
                gồm 3 thành phần chính:
              </p>
              <ul className="list-disc list-inside space-y-3 text-foreground-secondary mb-4 ml-4">
                <li>
                  <strong>Lớp khung sườn bằng Dioxit Zircon</strong> - vật liệu
                  được sử dụng trong các ngành công nghiệp nặng như: thân tàu, ô
                  tô,… tạo sự cứng chắc hoàn hảo.
                </li>
                <li>
                  <strong>Bên ngoài được đắp hơn 720 lớp sứ</strong> được nung
                  ở nhiệt độ cao tạo thành một khối đồng nhất.
                </li>
                <li>
                  <strong>Ngoài cùng là lớp Nacera Classic Liquid</strong> mang
                  lại sự nhất quán về độ trong bóng, tự nhiên, có khả năng điều
                  chỉnh bảng màu 16 mức độ từ vàng ngà đến trắng trong.
                </li>
              </ul>
              <p className="text-foreground-secondary">
                Với cấu tạo đặc biệt, ngay sau khi ra đời và được ứng dụng vào
                phục hình răng sứ, răng sứ Nacera được rất nhiều bệnh nhân trên
                thế giới đón nhận và đánh giá cao về chất lượng.
              </p>
            </section>

            {/* Section 2: 5 Ưu điểm */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5 Ưu điểm nổi bật của răng toàn sứ Nacera
              </h2>
              
              {/* Image 2 */}
              <figure className="my-6">
                <div className="relative w-full min-h-64 sm:min-h-96 rounded-lg overflow-hidden border border-border bg-background flex items-center justify-center">
                  <Image
                    src="/rang-su-nacera-detail-2.jpg"
                    alt="5 Ưu điểm nổi bật của răng toàn sứ Nacera"
                    width={800}
                    height={600}
                    className="object-contain w-full h-auto max-h-[600px]"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                  5 Ưu điểm nổi bật của răng toàn sứ Nacera
                </figcaption>
              </figure>
              
              <p className="text-foreground-secondary mb-6">
                Răng sứ Nacera được các chuyên gia răng sứ đánh giá tốt về chất
                lượng bởi 3 yếu tố: độ chịu lực cao, tính thẩm mỹ tốt và sự lành
                tính với cơ thể.
              </p>

              {/* Ưu điểm 1 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  1. Độ bền chắc cao, khả năng chịu lực tốt hơn cả răng thật
                </h3>
                <p className="text-foreground-secondary mb-4">
                  Răng toàn sứ Nacera có khả năng chịu lực từ{" "}
                  <strong>600-1200 Mpa</strong> (gấp 2-4 lần so với răng thật).
                  Nhờ quá trình sản xuất nghiêm ngặt nên răng sứ Nacera có sự đồng
                  nhất và hạn chế sứt mẻ hơn các loại răng sứ khác.
                </p>
                <p className="text-foreground-secondary">
                  Bọc răng sứ Nacera Cô Chú, Anh Chị có thể an tâm ăn nhai, cắn
                  xé. Độ bền và độ chịu lực cao của loại răng này có thể "thách
                  thức" các loại đồ ăn cứng.
                </p>
              </div>

              {/* Ưu điểm 2 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  2. Tính thẩm mỹ cao với 16 màu điều chỉnh
                </h3>
                <p className="text-foreground-secondary mb-4">
                  Răng sứ Nacera đạt độ trong mờ lý tưởng dưới nhiều góc nhìn.
                  Lớp vỏ sứ được phủ màu trong bóng tự nhiên, tạo hiệu ứng lấp
                  lánh dưới ánh sáng.
                </p>
                <p className="text-foreground-secondary mb-4">
                  Dù soi đèn hay nhìn bằng mắt thường, răng sứ Nacera vẫn đạt độ
                  thẩm mỹ tốt. Đặc biệt, không bị phản ánh kim loại hay đen viền
                  nướu.
                </p>
                <p className="text-foreground-secondary mb-4">
                  <strong>16 tông màu khác nhau</strong> từ vàng ngà đến trắng
                  trong, phù hợp với từng sắc tố da của mỗi người.
                </p>
                <div className="bg-background border border-border rounded-lg p-4 my-4">
                  <p className="text-foreground-secondary italic">
                    Thông thường, các mão sứ giá rẻ hoặc mão răng kim loại sau
                    một thời gian sử dụng thực phẩm màu hay vệ sinh không tốt sẽ
                    bị xỉn màu nhanh chóng.
                  </p>
                  <p className="text-foreground-secondary mt-2">
                    Tuy nhiên đối với răng toàn sứ Nacera được chế tác bằng công
                    nghệ đặc biệt giúp chúng không bị ảnh hưởng bởi thực phẩm và
                    mảng bám trong môi trường khoang miệng, giữ được màu răng
                    trắng sáng tự nhiên lâu dài.
                  </p>
                </div>
              </div>

              {/* Ưu điểm 3 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  3. Không bị xỉn màu, vàng ố
                </h3>
                <p className="text-foreground-secondary">
                  Răng sứ Nacera được chế tác bằng công nghệ đặc biệt giúp không
                  bị ảnh hưởng bởi thực phẩm và mảng bám trong môi trường khoang
                  miệng, giữ được màu răng trắng sáng tự nhiên lâu dài.
                </p>
              </div>

              {/* Ưu điểm 4 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  4. Khả năng tương thích sinh học cao
                </h3>
                <p className="text-foreground-secondary">
                  Vì làm bằng <strong>100% lớp sứ tự nhiên</strong> nên răng sứ
                  Nacera an toàn tuyệt đối trong môi trường miệng. Răng sứ tích
                  hợp tốt với mô nướu, không bị kích ứng hay viêm lợi.
                </p>
              </div>

              {/* Ưu điểm 5 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  5. Cách nhiệt tốt, đảm bảo không kích ứng
                </h3>
                <p className="text-foreground-secondary">
                  Răng sứ Nacera có khả năng cách nhiệt tốt, giúp bảo vệ cùi răng
                  bên trong không bị kích thích bởi nhiệt độ từ thức ăn nóng, lạnh;
                  hạn chế tình trạng ê buốt răng thật.
                </p>
              </div>
            </section>

            {/* Section 3: 2 Nhược điểm */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2 Nhược điểm của răng sứ Nacera
              </h2>
              <p className="text-foreground-secondary mb-6">
                Với những ưu điểm lớn trên có thể thấy răng sứ Nacera rất tốt
                trong Nha khoa. Tuy nhiên, loại răng sứ này vẫn còn 2 hạn chế lớn:
              </p>

              {/* Nhược điểm 1 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  1. Giá thành "cao ngất ngưởng"
                </h3>
                <p className="text-foreground-secondary mb-4">
                  <strong>Bảng giá răng sứ Nacera quá cao</strong> chính là nhược
                  điểm lớn khiến nhiều người còn băn khoăn khi lựa chọn phục hình
                  bằng bọc sứ Nacera.
                </p>
                <p className="text-foreground-secondary">
                  Nguyên nhân là do vật liệu làm răng sứ Nacera có giá thành rất
                  cao, không được áp dụng phổ biến trong Nha khoa. Đối với những
                  bệnh nhân bị mất nhiều răng nếu sử dụng chất liệu này để phục
                  hình sẽ phải tốn chi phí rất cao, khó có thể đáp ứng được.
                </p>
              </div>

              {/* Nhược điểm 2 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  2. Răng sứ Nacera chưa phổ biến tại Việt Nam
                </h3>
                <p className="text-foreground-secondary">
                  Hiện nay, răng sứ Nacera chưa phổ biến tại Việt Nam nên không
                  thể có những đánh giá chân thực nhất từ phía Khách hàng về hiệu
                  quả lâm sàng của dòng răng sứ này.
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
                href="/tin-tuc/rang-su-duc-la-gi"
                className="block p-4 bg-background rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                  RĂNG SỨ ĐỨC LÀ GÌ?
                </h3>
                <p className="text-sm text-foreground-secondary">
                  Ngày đăng: 31/10/2022 12:37 PM
                </p>
              </Link>
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
