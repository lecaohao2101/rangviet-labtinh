"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

/**
 * Trang chi tiết bài viết: 3 DÒNG RĂNG TOÀN SỨ ĐƯỢC ĐÁNH GIÁ TỐT NHẤT HIỆN NAY
 */
export default function BaDongRangToanSuPage() {
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
                href="/tin-tuc"
                className="hover:text-primary transition-colors duration-300"
              >
                Tin tức
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground">
              3 DÒNG RĂNG TOÀN SỨ ĐƯỢC ĐÁNH GIÁ TỐT NHẤT HIỆN NAY
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
            3 DÒNG RĂNG TOÀN SỨ ĐƯỢC ĐÁNH GIÁ TỐT NHẤT HIỆN NAY
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
              <span>31/10/2022 12:35 PM</span>
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
          <div className="text-foreground space-y-8">
            {/* Section I */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                I. Răng toàn sứ Zirconia Ceramill Zolid (Xuất xứ: Đức)
              </h2>
              <p className="text-foreground-secondary mb-4 italic">
                <em>(Cao cấp nhất trong các loại răng sứ Zirconia)</em>
              </p>
              <p className="text-foreground-secondary mb-4">
                <strong>Răng toàn sứ Zirconia Ceramill Zolid</strong> là loại
                răng sứ cao cấp nhất của dòng răng sứ Zirconia. Loại răng toán
                sứ này nổi bật nhất là ở tính thẩm mỹ và khả năng chịu lực cao.
                Theo nhiều bác sỹ chuyên gia thẩm mỹ nha khoa đánh giá thì tính
                thẩm mỹ của răng toàn sứ này không thua bất kỳ loại răng toàn sứ
                cao cấp nào khác.
              </p>
              
              {/* Image 1 */}
              <figure className="my-6">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/3-dong-rang-toan-su-detail-1.jpg"
                    alt="Răng sứ Zirconia Ceramill Zolid"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                  Zirconia Ceramill Zolid là răng sứ cao cấp nhất trong dòng
                  Zirconia với độ trong tự nhiên rất cao, mang đến sự hoàn mỹ
                  cho hàm răng ở hình thể cũng như màu sắc
                </figcaption>
              </figure>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                Ưu điểm nổi bật:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                <li>
                  <strong>Khả năng chịu lực cực cao:</strong> răng toàn sứ
                  Zirconia Ceramill Zolid có khả năng chịu lực là 1566 Mpa, gấp
                  5 – 7 lần răng thật (răng thật là 250 Mpa – 300 Mpa).
                </li>
                <li>
                  <strong>Tinh thẩm mỹ tự nhiên:</strong> răng toàn sứ này có độ
                  trong rất cao nên mang lại cho răng vẻ đẹp vừa ấn tượng nhưng
                  nhìn hoàn toàn tự nhiên. Có thể nói: với những ai đòi hỏi sự
                  hoàn mỹ, đòi hỏi cái đẹp vừa ấn tượng nhưng vẫn tinh tế, tự
                  nhiên thì Zirconia Ceramill Zolid là sự lựa chọn tốt.
                </li>
              </ul>
              
              {/* Image 2 */}
              <figure className="my-6">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/3-dong-rang-toan-su-detail-2.jpg"
                    alt="Răng sứ Zirconia Ceramill Zolid trắng sáng tự nhiên"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                  Độ trong cao giúp răng sứ Zirconia Ceramill Zolid vừa trắng
                  sáng mà vẫn tự nhiên từ đó giúp hàm răng và nụ cười mang vẻ
                  đẹp cuốn hút và tự nhiên
                </figcaption>
              </figure>
              
              {/* Image 3 */}
              <figure className="my-6">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/3-dong-rang-toan-su-detail-3.jpg"
                    alt="Bọc 20 răng sứ Ceramill Zolid"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                  Bọc 20 răng sứ Ceramill Zolid với màu OM1 theo bảng màu Vita, bảo hành IDPI 10 năm
                </figcaption>
              </figure>
              
              {/* Image 4 */}
              <figure className="my-6">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/3-dong-rang-toan-su-detail-4.jpg"
                    alt="Bọc 4 răng Zirconia Zolid"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                  Bọc 4 răng Zirconia Zolid với màu 1M2 theo bảng màu Vita – tương đương màu răng thật
                </figcaption>
              </figure>
       
              <div className="bg-primary-lightest border-l-4 border-primary p-4 my-6">
                <p className="text-foreground font-semibold mb-2">
                  Giá răng sứ Zirconia Ceramill Zolid CHÍNH HÃNG bao nhiêu thì
                  hợp lý?
                </p>
                <p className="text-foreground-secondary">
                  Tùy mỗi nha khoa, nhưng giá răng toàn sứ <strong>Chính hãng</strong>{" "}
                  Zirconia Ceramill Zolid sẽ dao động từ{" "}
                  <strong>5.000.000 VNĐ – 8.000.000 VNĐ</strong>.
                </p>
              </div>
            </section>

            {/* Section II */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                II. Răng toàn sứ Cercon và Cercon HT (Xuất xứ: Đức)
              </h2>
              <p className="text-foreground-secondary mb-4">
                Theo thống kê tại Peace Dentistry, bên cạnh răng sứ Zirconia
                Ceramill Zolid thì Cercon và Cercon HT là 2 loại răng sứ được
                lựa chọn nhiều nhất, đặc biệt 2 loại sứ này luôn được giới diễn
                viên, ca sĩ, doanh nhân… lựa chọn.
              </p>
              
              {/* Image 5 */}
              <figure className="my-6">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/3-dong-rang-toan-su-detail-5.jpg"
                    alt="Răng toàn sứ Cercon và Cercon HT"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                  Răng toàn sứ Cercon và Cercont HT là sự lựa chọn cho người đòi
                  hỏi sự hoàn mỹ
                </figcaption>
              </figure>
                  
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                Đặc tính thẩm mỹ của răng toàn sứ Cercon và Cercon HT:
              </h3>
              <p className="text-foreground-secondary mb-4">
                Bác sĩ Đinh Trường Hùng (Peace Dentistry) – một chuyên gia về
                thẩm mỹ răng sứ với 20 năm kinh nghiệm chia sẻ:{" "}
                <em>
                  &ldquo;Đặc tính vượt trội nhất của Răng sứ Cercon và Cercon HT chính
                  là tính thẩm mỹ với màu sắc{" "}
                  <strong>trắng sáng và độ trong tự nhiên hoàn hảo</strong>. Đây
                  chính là đặc điểm làm cho những người có xu hướng hoàn mỹ yêu
                  thích Cercon và Cercon HT. Trong đó, răng sứ Cercon HT có độ
                  trong cao hơn răng sứ Cercon&rdquo;.
                </em>
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                Đặc tính sử dụng của răng sứ Cercon và Cercon HT
              </h3>
              <p className="text-foreground-secondary mb-4">
                Khả năng chịu lực từ 900 Mpa chịu lực gấp 6 – 8 lần răng thật,
                do đó, góp phần giúp sức nhai khỏe và rất khó bị gãy, mẻ hoặc
                vỡ do ăn nhai.
              </p>
              
              {/* Image 6 */}
              <figure className="my-6">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/3-dong-rang-toan-su-detail-6.jpg"
                    alt="Bọc răng sứ Cercon"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                  Bọc răng sứ Cercon cho răng tối màu từ bên trong, bảo hành IDPI 10 năm
                </figcaption>
              </figure>
              
              {/* Image 7 */}
              <figure className="my-6">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/3-dong-rang-toan-su-detail-7.png"
                    alt="Bọc 4 răng sứ Cercon"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                  Bọc 4 răng sứ Cercon cho răng thưa và nhỏ, bảo hành IDPI 10 năm
                </figcaption>
              </figure>
              
              {/* Image 8 */}
              <figure className="my-6">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/3-dong-rang-toan-su-detail-8.jpg"
                    alt="Thẩm mỹ răng nguyên hàm với răng sứ Cercon HT"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                  Thẩm mỹ răng nguyên hàm với răng sứ Cercon HT
                </figcaption>
              </figure>

              <div className="bg-primary-lightest border-l-4 border-primary p-4 my-6">
                <p className="text-foreground font-semibold mb-2">
                  Giá răng sứ Cercon và Cercon HT bao nhiêu thì hợp lý?
                </p>
                <p className="text-foreground-secondary">
                  Tùy theo nha khoa, nhưng giá răng sứ Cercon và Cercon HT sẽ
                  dao động từ <strong>4.500.000 VNĐ – 8.000.000 VNĐ</strong>,
                  trong đó, giá răng sứ Cercon HT sẽ cao hơn khoảng 10% – 15%.
                </p>
              </div>
            </section>

            {/* Section III */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                III. Răng toàn sứ 3M Lava Plus (Xuất xứ: Mỹ)
              </h2>
              <p className="text-foreground-secondary mb-4">
                Răng toàn sứ 3M Lava Plus là dòng răng sứ cao cấp nhất của Mỹ.
              </p>
              <p className="text-foreground-secondary mb-4">
                Đặc tính thẩm mỹ là có thể sánh ngang bằng với Zirconia Ceramill
                Zolid hay Cercon HT. Nhưng 3M Lava Plus có đặc tính kháng mòn,
                kháng màu gần như tuyệt đối, nên thời gian sử dụng tốt cao hơn,
                khả năng chịu lực là <strong>1800 Mpa</strong>. Thời gian bảo
                hành của nó thường là <strong>15 năm</strong>.
              </p>
              <p className="text-foreground-secondary mb-4">
                <strong>Nhược điểm:</strong> giá thành khá cao từ{" "}
                <strong>6.000.000 VNĐ – 8.000.000 VNĐ</strong> tùy thời điểm và
                tùy nha khoa.
              </p>
              
              {/* Image 9 */}
              <figure className="my-6">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/3-dong-rang-toan-su-detail-9.jpg"
                    alt="Bọc răng sứ nguyên hàm 3M Lava Plus"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                  Một ca bọc răng sứ nguyên hàm – 18 răng sứ 3M Lava Plus tại Peace Dentistry
                </figcaption>
              </figure>
              
              {/* Image 10 */}
              <figure className="my-6">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/3-dong-rang-toan-su-detail-10.jpg"
                    alt="Thẩm mỹ răng nguyên hàm với răng toàn sứ Lava"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                  Thẩm mỹ răng nguyên hàm với răng toàn sứ Lava, bảo hành IDPI 15 năm
                </figcaption>
              </figure>
            </section>

            {/* Summary */}
            <section className="bg-primary-lightest border border-primary/20 rounded-lg p-6 my-6">
              <p className="text-foreground-secondary mb-4">
                Tất cả các loại răng sứ nêu trên đều là những dòng răng toàn sứ
                đã khẳng định được thương hiệu trên toàn thế giới với những tiêu
                chí: đáp ứng tốt khả năng ăn nhai 20 năm hoặc lâu hơn, tính thẩm
                mỹ cao và hoàn toàn không kích ứng cơ thể nên chúng ta hoàn toàn
                yên tâm khi lựa chọn 3 dòng răng sứ này.
              </p>
            </section>

            {/* Section IV */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                IV. Cách phân biệt giữa sứ cao cấp, chính hãng và sứ kém chất
                lượng hoặc nhái thương hiệu:
              </h2>
              <p className="text-foreground-secondary mb-4">
                Tất cả 3 dòng răng sứ nêu trên đều có tiêu chuẩn lưu hành quốc
                tế, đều có thẻ <strong>bảo hành và xác thực truy xuất nguồn gốc toàn cầu IDPI</strong>.
              </p>
              <p className="text-foreground-secondary mb-4">
                Với mã số trên thẻ IDPI, khách hàng có thể sử dụng mạng internet
                và làm theo hướng dẫn (ghi ở mặt sau thẻ) để truy xuất các thông
                tin: tên răng sứ, xuất xứ, chế độ bảo hành, nhà sản xuất… Răng
                sứ không chính hãng, răng sứ nhái thương hiệu không thể làm như
                vậy được.
              </p>
              
              {/* Image 11 */}
              <figure className="my-6">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/3-dong-rang-toan-su-detail-11.jpg"
                    alt="Thẻ bảo hành và xác thực IDPI"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                  Thẻ bảo hành và xác thực IDPI mà <u>Peace Dentistry</u> cung cấp cho khách hàng sau khi làm răng sứ
                </figcaption>
              </figure>
 
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
