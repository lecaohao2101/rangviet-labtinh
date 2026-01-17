"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

/**
 * Trang chi tiết: ĐỐI TÁC RĂNG SỨ CERCON
 */
export default function DoiTacRangSuCerconPage() {
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
                    href="/doi-tac"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    Đối Tác
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground">ĐỐI TÁC RĂNG SỨ CERCON</li>
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
                  Đối tác
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                ĐỐI TÁC RĂNG SỨ CERCON
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
                  <span>17/10/2022 04:49 PM</span>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="tong-quan-ve-rang-su-cercon-ht">
                    1. Tổng quan về răng sứ Cercon HT
                  </h2>

                  <h3 className="text-xl font-semibold text-foreground mb-3" id="rang-su-cercon-ht-la-gi">
                    1.1 Răng sứ Cercon HT là gì?
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Răng sứ Cercon HT</strong> là loại răng sứ cao cấp được sản xuất tại Đức – quốc gia có nền nha khoa hàng đầu trên thế giới. Răng sứ này bao gồm 2 phần: phần bên trong là khung sườn được chế tác từ Zirconium dioxit và phủ lớp Cercon Kiss bên ngoài để giúp tạo màu sắc tự nhiên như răng thật cũng như tạo nên độ vững chắc cho răng.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/doi-tac-rang-su-cercon-1.jpeg"
                        alt="Răng sứ Cercon là loại răng sứ cao cấp có màu sắc tự nhiên và độ bền cao"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Răng sứ Cercon là loại răng sứ cao cấp có màu sắc tự nhiên và độ bền cao
                    </figcaption>
                  </figure>

                  <h3 className="text-xl font-semibold text-foreground mb-3" id="uu-diem-cua-rang-su-cercon">
                    1.2 Ưu điểm của răng sứ Cercon
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      Có tính thẩm mỹ cao vì màu sắc tự nhiên như răng thật, nếu được bảo quản và chăm sóc tốt sẽ không có hiện tượng ngả màu hay bị đục.
                    </li>
                    <li>
                      Khả năng chịu lực hơn cả răng thật, lên đến 900Mpa.
                    </li>
                    <li>
                      Tuổi thọ của răng sứ tương đối cao.
                    </li>
                    <li>
                      Không bị oxi hoá do đó không làm viền nướu bị đen.
                    </li>
                    <li>
                      Mài một lớp rất mỏng của răng thật, có độ dày chỉ khoảng 0.5mm
                    </li>
                  </ul>
                </section>

                {/* Section 2 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="doi-tuong-can-boc-rang-su">
                    2. Đối tượng cần bọc răng sứ
                  </h2>

                  <h3 className="text-xl font-semibold text-foreground mb-3" id="bi-sau-rang">
                    2.1 Bị sâu răng
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    Khi bệnh nhân bị sâu răng quá nặng và không thể thực hiện các biện pháp khôi phục, bác sĩ sẽ chỉ định bệnh nhân bọc răng sứ để có thể bảo tồn răng thật tối đa.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/doi-tac-rang-su-cercon-2.jpeg"
                        alt="Sâu răng gây mất thẩm mỹ và ảnh hưởng đến chức năng ăn nhai"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </figure>
                  <p className="text-foreground-secondary mb-4">
                    Sâu răng gây mất thẩm mỹ và ảnh hưởng đến chức năng ăn nhai. Chính vì vậy, bọc răng sứ là giải pháp hoàn hảo để khắc phục tình trạng này và phục hồi chức năng cho răng.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3" id="bi-chet-tuy">
                    2.2 Bị chết tủy
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    Tuỷ răng có vai trò nuôi dưỡng và kết nối với các dây thần kinh. Chính vì vậy, khi răng bị chết tuỷ và không còn chức năng nữa, bệnh nhân nên bọc răng sứ để có thể tái tạo và phục hồi tối đa khả năng ăn nhai.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3" id="co-khuyet-diem">
                    2.3 Có khuyết điểm
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    Những khuyết điểm của răng như sứt mẻ, mất răng, răng không đều, răng thưa&hellip;. sẽ ảnh hưởng lớn đến chất lượng cuộc sống của người bệnh. Bọc răng sứ là phương pháp sẽ cải thiện rõ rệt những khuyết điểm này.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3" id="rang-bi-doi-mau">
                    2.4 Răng bị đổi màu
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    Nếu ăn uống những thực phẩm đậm màu, không có chế độ chăm sóc tốt thì rất dễ dẫn đến tình trạng răng bị đổi màu. Với trường hợp này, bác sĩ sẽ tư vấn cho bệnh nhân thực hiện tẩy trắng răng. Tuy nhiên nếu tẩy trắng răng không hiệu quả thì răng sứ chính là một giải pháp cứu cánh, mang lại hàm răng trắng sáng tự nhiên và nụ cười rạng rỡ.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/doi-tac-rang-su-cercon-3.jpeg"
                        alt="Răng sứ mang lại hàm răng trắng sáng tự nhiên và nụ cười rạng rỡ"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </figure>
                  <p className="text-foreground-secondary mb-4">
                    Khi đã thực hiện tẩy trắng răng nhưng không hiệu quả, bác sĩ sẽ thực hiện lắp răng sứ cho bệnh nhân.
                  </p>
                </section>

                {/* Section 3 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="nhung-thac-mac-xoay-quanh-rang-su-cercon">
                    3. Những thắc mắc xoay quanh răng sứ Cercon
                  </h2>

                  <h3 className="text-xl font-semibold text-foreground mb-3" id="boc-rang-su-co-dau-khong">
                    3.1 Bọc răng sứ có đau không?
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    Bọc răng sứ có đau không sẽ phụ thuộc vào việc lựa chọn cơ sở y tế thực hiện của bạn. Nếu bạn chọn cơ sở y tế uy tín lớn, nơi quy tụ đội ngũ y bác sĩ có tay nghề chuyên môn cao và hệ thống trang thiết bị máy móc hiện đại thì khi thực hiện mài răng hay lắp mão răng sứ sẽ không gây đau.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3" id="boc-rang-su-xong-duoc-bao-hanh-bao-lau">
                    3.2 Bọc răng sứ xong được bảo hành bao lâu?
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    Đối với các cơ sở y tế chất lượng cao, mão răng sứ sẽ được nhập khẩu từ các nước có nền nha khoa hàng đầu như Mỹ, Đức, Nhật Bản&hellip;. và có độ bền cao lên đến 10 năm. Đặc biệt, sau khi bọc răng sứ, bệnh nhân sẽ được cấp giấy bảo hành, hướng dẫn kỹ lưỡng cách chăm sóc và chế độ ăn uống để bảo quản mão răng sứ được tốt nhất.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/doi-tac-rang-su-cercon-4.jpg"
                        alt="Bọc răng sứ được bảo hành lên đến 10 năm tại các cơ sở nha khoa uy tín"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </figure>
                  <p className="text-foreground-secondary mb-4">
                    Tại các cơ sở nha khoa uy tín, bọc răng sứ được bảo hành trong vòng 10 năm.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3" id="boc-rang-su-duoc-dung-chuan-duoc-tien-hanh-nhu-the-nao">
                    3.3 Bọc răng sứ được đúng chuẩn được tiến hành như thế nào?
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    Bước đầu tiên của quy trình bọc răng sứ là bác sĩ sẽ thăm khám và tư vấn để đánh giá mức độ răng hư hại. Sau đó sẽ tiến hành mài răng, lấy dấu hàm và sản xuất mão răng sứ. Khi mão răng sứ được gửi về Việt Nam, bác sĩ sẽ lắp thử lên cho bệnh nhân. Nếu bệnh nhân có biểu hiện khó chịu hay thấy bất thường, mão răng sứ sẽ được gửi đi và sản xuất lại. Còn nếu răng sứ được lắp vào và không có vấn đề gì, bác sĩ sẽ gắn cố định cho bệnh nhân. Sau khi lắp răng sứ xong, bệnh nhân cần duy trì thói quen thăm khám răng miệng định kỳ 6 tháng/lần để đảm bảo tuổi thọ cho mão răng sứ.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3" id="cac-yeu-to-anh-huong-den-chat-luong-boc-rang-su">
                    3.4 Các yếu tố ảnh hưởng đến chất lượng bọc răng sứ
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    Để đảm bảo chất lượng của răng sứ, bạn cần lựa chọn cơ sở nha khoa uy tín đảm bảo các yếu tố như: Cơ sở y tế được Sở Y tế cấp phép, được nhiều khách hàng tin tưởng lựa chọn, quy tụ đội ngũ bác sĩ chuyên môn cao, sở hữu hệ thống máy móc trang thiết bị tân tiến và các nguyên vật liệu y tế (khí cụ nha khoa, mão răng sứ, implant, thuốc tẩy trắng răng&hellip;) được nhập khẩu từ các nước có nền nha khoa hàng đầu.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/doi-tac-rang-su-cercon-5.jpg"
                        alt="Cơ sở y tế uy tín sở hữu hệ thống trang thiết bị máy móc hiện đại"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </figure>
                  <p className="text-foreground-secondary mb-4">
                    Cơ sở y tế uy tín sở hữu hệ thống trang thiết bị máy móc hiện đại nhập khẩu từ các nước có nền nha khoa hàng đầu.
                  </p>
                </section>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-foreground-secondary">
                    Bài viết trên của chúng tôi đã cung cấp chi tiết thông tin về <strong>răng sứ Cercon HT</strong>. Nếu có bất kỳ thắc mắc gì về loại răng sứ này, bạn có thể đến các cơ sở nha khoa y tế và nhờ đến sự tư vấn của bác sĩ nhé.
                  </p>
                </div>
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
