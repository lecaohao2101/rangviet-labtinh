"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

/**
 * Trang chi tiết: RĂNG SỨ EMAX ZIRCONIA
 */
export default function RangSuEmaxZirconiaPage() {
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
                <li className="text-foreground">RĂNG SỨ EMAX ZIRCONIA</li>
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
                RĂNG SỨ EMAX ZIRCONIA
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
                  <span>17/10/2022 03:56 PM</span>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="rang-su-emax-la-gi">
                    1. Răng sứ Emax là gì?
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Răng sứ Emax là một trong những dòng <strong>răng toàn sứ cao cấp hàng đầu</strong> hiện nay, được đánh giá cao về tính thẩm mỹ và độ bền. &ldquo;Emax&rdquo; là tên thương hiệu độc quyền của dòng sứ thủy tinh lithium disilicate, không chứa kim loại, mang lại vẻ đẹp tự nhiên và độ trong mờ tương tự răng thật.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Với những ưu điểm vượt trội, Emax trở thành lựa chọn lý tưởng cho các trường hợp phục hình răng thẩm mỹ như bọc răng sứ, dán sứ veneer hay trám răng inlays/onlays.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/san-pham-dich-vu-2.jpg"
                        alt="Răng sứ Emax Zirconia"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Răng sứ Emax Esthetic Maximum – bước đột phá của ngành nha khoa thẩm mỹ thế giới
                    </figcaption>
                  </figure>
                </section>

                {/* Section 2 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="rang-su-emax-cua-nuoc-nao">
                    2. Răng sứ Emax của nước nào? Nguồn gốc và lịch sử hình thành
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Răng sứ Emax được sản xuất bởi công ty Ivoclar Vivadent</strong> – một trong những công ty nha khoa hàng đầu thế giới có trụ sở tại <strong>Liechtenstein</strong> (một quốc gia nhỏ ở châu Âu, nằm giữa Thụy Sĩ và Áo).
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Ivoclar Vivadent là công ty chuyên về vật liệu và thiết bị nha khoa, được thành lập từ năm 1923. Công ty này đã phát triển và sản xuất dòng sứ Emax từ những năm 2000, và nhanh chóng trở thành một trong những thương hiệu răng sứ được tin dùng nhất trên toàn thế giới.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Emax được viết tắt từ chữ <strong>Esthetic Maximum</strong> (tạm dịch: thẩm mỹ tối đa), thể hiện mục tiêu của dòng sản phẩm này là đạt được tính thẩm mỹ cao nhất trong phục hình răng.
                  </p>
                </section>

                {/* Section 3 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="cau-tao-va-co-che-san-xuat">
                    3. Cấu tạo và cơ chế sản xuất của răng sứ Emax
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Răng sứ Emax được cấu tạo từ <strong>sứ thủy tinh Lithium Disilicate</strong> – một loại vật liệu sứ đặc biệt có cấu trúc tinh thể độc đáo. Vật liệu này được nung ở nhiệt độ cao hơn 1600 độ C, tạo ra một cấu trúc tinh thể mịn và đồng nhất. Cấu trúc này không chỉ giúp răng sứ có độ cứng cao mà còn đảm bảo tính tương thích sinh học, không gây kích ứng hay phản ứng hóa học trong khoang miệng.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/san-pham-dich-vu-2.jpg"
                        alt="Răng sứ Emax Zirconia"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Răng sứ Emax Esthetic Maximum – bước đột phá của ngành nha khoa thẩm mỹ thế giới
                    </figcaption>
                  </figure>
                  <p className="text-foreground-secondary mb-4">
                    Quá trình sản xuất Emax sử dụng công nghệ <strong>CAD/CAM</strong> (Computer Aided Design/Computer Aided Manufacturing) hiện đại, cho phép thiết kế và chế tác răng sứ với độ chính xác cao, đảm bảo độ khít sát hoàn hảo với răng thật.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Răng sứ toàn sứ Emax có 2 loại chính:
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6" id="emax-press">
                    3.1 Emax Press
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Răng sứ Emax Press</strong> được sản xuất bằng phương pháp ép nóng (hot pressing) với sứ thủy tinh Lithium Disilicate. Phương pháp này tạo ra một khối sứ đồng nhất, có độ trong mờ cao và tính thẩm mỹ vượt trội.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Đây là dòng răng sứ được đánh giá là mang tính thẩm mỹ cao nhất hiện nay với độ trong mờ cao, tính thấu quang và khúc xạ ánh sáng cao nên có chiều sâu, sống động tự nhiên. Đó là lý do mà những người sau khi làm răng thường phản hồi rằng họ cảm giác răng sứ Emax trong, trơn láng và giống răng thật hơn so với các dòng răng sứ khác.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6" id="sagemax-emax-zirconia">
                    3.2 Sagemax (Emax Zirconia)
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Răng sứ Sagemax</strong> hay còn gọi là <strong>răng sứ Emax Zirconia</strong> là loại răng toàn sứ được chế tác từ Zirconia với lớp phủ sứ bên ngoài để tăng tính thẩm mỹ. Đây là sự kết hợp giữa độ bền của Zirconia và tính thẩm mỹ của sứ phủ, phù hợp cho cả răng cửa và răng hàm.
                  </p>
                </section>

                {/* Section 4 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="uu-diem-vuot-troi">
                    4. Ưu điểm vượt trội của răng sứ Emax
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      <strong>Tính thẩm mỹ cao nhất:</strong> Độ trong mờ tự nhiên, màu sắc giống răng thật, không bị đen viền nướu. Khả năng thấu quang và khúc xạ ánh sáng cao tạo chiều sâu tự nhiên.
                    </li>
                    <li>
                      <strong>Độ bền cao:</strong> Khả năng chịu lực tốt (khoảng 400-500 MPa), phù hợp cho cả răng cửa và răng hàm. Tuổi thọ có thể lên đến 15-20 năm nếu chăm sóc tốt.
                    </li>
                    <li>
                      <strong>An toàn tuyệt đối:</strong> Không chứa kim loại, tương thích sinh học cao, không gây dị ứng hay kích ứng nướu.
                    </li>
                    <li>
                      <strong>Độ chính xác cao:</strong> Được chế tác bằng công nghệ CAD/CAM hiện đại, đảm bảo độ khít sát hoàn hảo với răng thật.
                    </li>
                    <li>
                      <strong>Bảo tồn răng thật:</strong> Yêu cầu mài răng tối thiểu, giúp bảo tồn tối đa cấu trúc răng thật.
                    </li>
                    <li>
                      <strong>Không bị ố màu:</strong> Bề mặt sứ mịn, không bị ố màu bởi thức ăn, đồ uống hay thuốc lá.
                    </li>
                  </ul>
                </section>

                {/* Section 5 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="nhuoc-diem-can-luu-y">
                    5. Nhược điểm cần lưu ý của răng sứ Emax
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      <strong>Chi phí cao:</strong> Giá thành cao hơn so với các loại răng sứ kim loại hoặc composite, thường dao động từ 4.000.000 - 8.000.000 VNĐ/răng tùy nha khoa.
                    </li>
                    <li>
                      <strong>Yêu cầu kỹ thuật cao:</strong> Cần nha khoa có máy móc CAD/CAM hiện đại và bác sĩ có kinh nghiệm để đảm bảo kết quả tốt nhất.
                    </li>
                    <li>
                      <strong>Thời gian chế tác:</strong> Có thể mất từ 1-2 tuần để hoàn thành, tùy vào độ phức tạp của ca phục hình.
                    </li>
                    <li>
                      <strong>Không phù hợp mọi trường hợp:</strong> Với những trường hợp cần độ bền cực cao hoặc lực nhai quá mạnh, có thể cần cân nhắc các loại răng sứ khác.
                    </li>
                  </ul>
                </section>

                {/* Section 6 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="cac-loai-rang-su-emax">
                    6. Các loại răng sứ Emax phổ biến trên thị trường
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Trên thị trường hiện nay, răng sứ Emax được chia thành các loại chính:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      <strong>Emax Press:</strong> Được sản xuất bằng phương pháp ép nóng, có tính thẩm mỹ cao nhất, phù hợp cho răng cửa và veneer.
                    </li>
                    <li>
                      <strong>Emax CAD:</strong> Được chế tác bằng máy CAD/CAM, thời gian nhanh hơn, phù hợp cho cả răng cửa và răng hàm.
                    </li>
                    <li>
                      <strong>Sagemax (Emax Zirconia):</strong> Kết hợp giữa Zirconia và lớp phủ sứ, có độ bền cao và tính thẩm mỹ tốt.
                    </li>
                  </ul>
                </section>

                {/* Section 7 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="gia-va-bao-hanh">
                    7. Răng sứ Emax giá bao nhiêu? Bảng giá tham khảo
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Giá răng sứ Emax phụ thuộc vào nhiều yếu tố như loại Emax, nha khoa thực hiện, tình trạng răng và số lượng răng cần phục hình. Dưới đây là bảng giá tham khảo:
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full border border-border rounded-lg">
                      <thead className="bg-background-secondary">
                        <tr>
                          <th className="border border-border px-4 py-2 text-left text-sm font-semibold text-foreground">
                            Loại Emax
                          </th>
                          <th className="border border-border px-4 py-2 text-left text-sm font-semibold text-foreground">
                            Giá tham khảo (VNĐ/răng)
                          </th>
                          <th className="border border-border px-4 py-2 text-left text-sm font-semibold text-foreground">
                            Bảo hành
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            Emax Press
                          </td>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            5.000.000 - 8.000.000
                          </td>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            10-15 năm
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            Emax CAD
                          </td>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            4.000.000 - 7.000.000
                          </td>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            10-15 năm
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            Sagemax (Emax Zirconia)
                          </td>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            6.000.000 - 10.000.000
                          </td>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            10-15 năm
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-foreground-secondary mb-4">
                    <em>Lưu ý: Giá trên chỉ mang tính chất tham khảo. Giá thực tế có thể thay đổi tùy theo nha khoa, tình trạng răng và các dịch vụ đi kèm. Vui lòng liên hệ trực tiếp để được tư vấn và báo giá chính xác.</em>
                  </p>
                </section>

                {/* Section 8 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="bao-hanh-va-chinh-hang">
                    8. Bảo hành và chính hãng
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Khi chọn làm răng sứ Emax tại bất kỳ phòng khám nha khoa nào, hãy đảm bảo rằng bạn được cung cấp các thông tin bảo hành đầy đủ và chính hãng từ Ivoclar Vivadent.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Tuyệt đối không lựa chọn làm răng sứ tại các nha khoa không có chính sách bảo hành rõ ràng, đặc biệt không làm răng sứ Zirconia Trung Quốc hoặc các sản phẩm không chính hãng. Bởi những chiếc răng sứ không chính hãng có tuổi thọ vật liệu rất ngắn, sau một thời gian sẽ hỏng rất nhanh và có thể để lại nhiều hậu quả nặng nề với sức khoẻ răng miệng của bạn.
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
