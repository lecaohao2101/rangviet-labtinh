"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

/**
 * Trang chi tiết: RĂNG SỨ NACERE
 */
export default function RangSuNacerePage() {
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
                <li className="text-foreground">RĂNG SỨ NACERE</li>
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
                RĂNG SỨ NACERE
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
                  <span>17/10/2022 03:55 PM</span>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="rang-su-nacere-la-gi">
                    1. Răng sứ Nacera là gì?
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Răng sứ Nacera là loại <strong>răng toàn sứ có cấu tạo hoàn toàn bằng phôi sứ thuần khiết</strong> mà không bị lẫn tạp chất. Sườn trong làm bằng Zirconia, bên ngoài được phủ một lớp sứ trắng có độ sáng bóng tự nhiên như răng thật.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/boc-rang-su-nacera-02.png"
                        alt="Răng sứ Nacera là gì?"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Răng sứ Nacera là gì?
                    </figcaption>
                  </figure>
                  <p className="text-foreground-secondary mb-4">
                    Sứ Nacera có độ bền và độ thẩm mỹ vượt trội nên phù hợp với tất cả các trường hợp muốn phục hình như: răng bị chấn thương, sứt mẻ lớn, răng bị mòn men răng và những hàm răng bị nhiễm màu kháng sinh nặng&hellip; đem lại cho bạn hàm răng trắng sáng tự nhiên và vẫn đảm bảo khả năng ăn nhai tốt.
                  </p>
                </section>

                {/* Section 2 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="rang-su-nacera-co-tot-khong">
                    2. Răng sứ Nacera có tốt không?
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Được chế tác từ <strong>Zirconia</strong> (loại vật liệu dùng trong công nghệ chế tạo ô tô và tàu vũ trụ) nên răng sứ Nacera có <strong>độ chịu lực rất cao, lên đến 1400 Mpa</strong>. Sau khi phục hình bằng sứ Nacera bạn có thể ăn nhai bình thường mà không lo răng bị sứt mẻ hay răng bị mài mòn, xỉn màu, mảng bám hay vôi răng.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/boc-rang-su-nacera-03.png"
                        alt="Răng sứ Nacera có tốt không?"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Răng sứ Nacera có tốt không?
                    </figcaption>
                  </figure>
                  <p className="text-foreground-secondary mb-4">
                    Nacera là loại răng sứ cao cấp được thiết kế trên <strong>hệ thống CAD/CAM hiện đại</strong> nên đảm bảo độ chính xác rất cao cả về cấu trúc răng cũng như màu sắc răng (răng sứ Nacera có màu sắc đồng nhất từ ngoài vào trong giống y như răng thật) giúp phục hình đạt độ thẩm mỹ tối ưu. Đồng thời, khách hàng có thể lựa chọn màu sắc răng phù hợp mình bởi bảng màu của loại này có đến <strong>16 tông khác nhau</strong>.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Sứ Nacera cũng có <strong>độ tương thích sinh học an toàn</strong>, không kích ứng với môi trường miệng. Và cũng bởi đây là loại răng làm hoàn toàn bằng sứ nên <strong>khả năng cách nhiệt tốt</strong>, giúp bảo vệ cùi răng bên trong không bị kích ứng bởi nhiệt độ của thức ăn nóng hoặc lạnh. Ngoài ra, răng còn có <strong>độ láng bóng</strong> nên không bị bám màu bởi đồ ăn, thức uống.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Thời gian sử dụng răng Nacera khá dài lên đến 20 năm</strong>. Sau khi được phục hình trên cung hàm có thể tồn tại được trong rất nhiều năm, thậm chí vĩnh viễn nếu bạn có cách chăm sóc răng miệng tốt.
                  </p>
                </section>

                {/* Section 3 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="phuc-hinh-bang-rang-su-nacera-gia-bao-nhieu">
                    3. Phục hình bằng răng sứ Nacera giá bao nhiêu?
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Nacera là loại răng sứ cao cấp được phân phối độc quyền, khắc phục được tất cả các nhược điểm của các loại răng khác. Do đạt độ hoàn hảo cả về thẩm mỹ, chất lượng và công nghệ nên chi phí của loại răng này cũng khá cao so với các loại răng khác. <strong>Một chiếc răng Nacera có giá dao động từ 9 đến 10 triệu/chiếc</strong>. Bên cạnh đó, chi phí này còn tùy thuộc vào tình trạng răng miệng từng người cũng như chính sách giá của từng nha khoa.
                  </p>
                </section>

                {/* Section 4 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="cach-cham-soc-rang-su-nacera">
                    4. Cách chăm sóc răng sứ Nacera sau phục hình
                  </h2>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/boc-rang-su-nacera-04.png"
                        alt="Cách chăm sóc răng sứ Nacera"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Cách chăm sóc răng sứ Nacera
                    </figcaption>
                  </figure>
                  <p className="text-foreground-secondary mb-4">
                    Răng sứ Nacera chính hãng được <strong>bảo hành đến 20 năm</strong>, thậm chí lâu hơn nếu bạn biết cách chăm sóc răng miệng hợp lý bằng cách:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      <strong>Đánh răng 3 lần/ngày</strong> và chải răng theo chiều dọc bằng bàn chải mềm.
                    </li>
                    <li>
                      <strong>Vệ sinh răng miệng bằng nước súc miệng</strong> và sử dụng chỉ nha khoa để lấy thức ăn thừa và hạn chế mảng bám.
                    </li>
                    <li>
                      <strong>Khám răng định kỳ 6 tháng/lần</strong> để lấy vôi răng và ngăn ngừa các bệnh về răng miệng.
                    </li>
                  </ul>
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
