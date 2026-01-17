"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

/**
 * Trang chi tiết: RĂNG SỨ CERCON
 */
export default function RangSuCerconPage() {
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
                <li className="text-foreground">RĂNG SỨ CERCON</li>
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
                RĂNG SỨ CERCON
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
                  <span>17/10/2022 04:00 PM</span>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="tong-quan-ve-rang-su-cercon">
                    1. Tổng quan về răng sứ Cercon
                  </h2>

                  <h3 className="text-xl font-semibold text-foreground mb-3" id="rang-su-cercon-la-gi">
                    1.1 Răng sứ Cercon là gì?
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Răng sứ Cercon</strong> là loại răng sứ <strong>toàn sứ (100% ceramic)</strong> sử dụng zirconia, không chứa kim loại — giúp giảm rủi ro gây viêm lợi, dị ứng hay để lộ viền đen vùng nướu. Sản phẩm của thương hiệu <strong>Dentsply Sirona (Đức)</strong>, sử dụng công nghệ CAD/CAM hiện đại nhằm đảm bảo tính thẩm mỹ, độ chính xác và độ bền cao.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Răng sứ này bao gồm 2 phần: phần bên trong là khung sườn được chế tác từ Zirconium dioxit và phủ lớp Cercon Kiss bên ngoài để giúp tạo màu sắc tự nhiên như răng thật cũng như tạo nên độ vững chắc cho răng.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/sp-dv-rang-su-cercon-3.jpg"
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
                      Tuổi thọ của răng sứ tương đối cao, có thể lên đến 15-20 năm nếu chăm sóc tốt.
                    </li>
                    <li>
                      Không bị oxi hoá do đó không làm viền nướu bị đen.
                    </li>
                    <li>
                      Mài một lớp rất mỏng của răng thật, có độ dày chỉ khoảng 0.5mm, bảo tồn tối đa răng thật.
                    </li>
                    <li>
                      Không chứa kim loại, tương thích sinh học cao, an toàn với sức khỏe.
                    </li>
                  </ul>
                </section>

                {/* Section 2 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="thong-so-ky-thuat">
                    2. Thông số kỹ thuật
                  </h2>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/sp-dv-rang-su-cercon-5.jpg"
                        alt="Răng sứ Cercon được chế tác bằng công nghệ CAD/CAM với độ chính xác cao"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Răng sứ Cercon được chế tác bằng công nghệ CAD/CAM với độ chính xác cao
                    </figcaption>
                  </figure>
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full border border-border rounded-lg">
                      <thead className="bg-background-secondary">
                        <tr>
                          <th className="border border-border px-4 py-2 text-left text-sm font-semibold text-foreground">
                            Thông số
                          </th>
                          <th className="border border-border px-4 py-2 text-left text-sm font-semibold text-foreground">
                            Giá trị / Chi tiết
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            <strong>Xuất xứ</strong>
                          </td>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            Đức (Dentsply Sirona)
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            <strong>Thành phần chính</strong>
                          </td>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            Oxit Zirconium (ZrO₂), Oxit Yttrium (≈ 5%), Oxit Hafnium (&lt; 3%), các oxit nhôm, silic và phụ gia khác
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            <strong>Độ bền uốn (Flexural strength)</strong>
                          </td>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            Lên đến <strong>1.200 MPa</strong> với dòng Cercon HT; các dòng khác khoảng 900 MPa
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            <strong>Độ trong mờ (Translucency)</strong>
                          </td>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            Khoảng <strong>41%</strong> – phù hợp hồi màu tự nhiên, đặc biệt cho vùng răng cửa
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            <strong>Công nghệ chế tác</strong>
                          </td>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            CAD/CAM; sản xuất phôi zirconia đa lớp (multilayer) để đạt độ chuyển sắc, thẩm mỹ cao
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            <strong>Tuổi thọ</strong>
                          </td>
                          <td className="border border-border px-4 py-2 text-sm text-foreground-secondary">
                            Trung bình 15-20 năm nếu được chăm sóc đúng cách
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Section 3 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="uu-diem-vuot-troi">
                    3. Ưu điểm vượt trội
                  </h2>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/sp-dv-rang-su-cercon.jpg"
                        alt="Răng sứ Cercon mang lại nụ cười tự nhiên và thẩm mỹ cao"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Răng sứ Cercon mang lại nụ cười tự nhiên và thẩm mỹ cao
                    </figcaption>
                  </figure>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      <strong>Tính thẩm mỹ rất cao:</strong> Màu sắc tự nhiên, không lộ viền lợi khi ánh sáng mạnh; vẻ ngoài giống răng thật. Độ trong mờ 41% giúp hồi màu tự nhiên, đặc biệt phù hợp cho vùng răng cửa.
                    </li>
                    <li>
                      <strong>Độ bền & chịu lực superior:</strong> Độ bền uốn lên đến 1.200 MPa với dòng Cercon HT, phù hợp cả răng trước và sau, chịu lực nhai tốt.
                    </li>
                    <li>
                      <strong>Tương thích sinh học cao:</strong> Không kim loại → giảm nguy cơ dị ứng; an toàn cho lợi và mô mềm. Không bị oxi hoá do đó không làm viền nướu bị đen.
                    </li>
                    <li>
                      <strong>Bảo tồn răng thật:</strong> Mài một lớp rất mỏng của răng thật, có độ dày chỉ khoảng 0.5mm, bảo tồn tối đa răng thật.
                    </li>
                    <li>
                      <strong>Độ chính xác cao:</strong> Được chế tác bằng công nghệ CAD/CAM hiện đại, đảm bảo độ khít sát hoàn hảo với răng thật.
                    </li>
                  </ul>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/sp-dv-rang-su-cercon-2.jpg"
                        alt="Răng sứ Cercon với tính thẩm mỹ cao và màu sắc tự nhiên"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Răng sứ Cercon với tính thẩm mỹ cao và màu sắc tự nhiên
                    </figcaption>
                  </figure>
                </section>

                {/* Section 4 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="nhuoc-diem-can-luu-y">
                    4. Nhược điểm cần lưu ý
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      <strong>Chi phí cao hơn nhiều loại răng sứ truyền thống</strong> — là thương hiệu cao cấp, giá thành đắt hơn so với các loại răng sứ kim loại hoặc composite.
                    </li>
                    <li>
                      <strong>Trong trường hợp răng thật bị nhiễm màu mạnh</strong>, lớp zirconia có thể không che hoàn toàn, đòi hỏi xử lý răng bên dưới kỹ lưỡng trước khi phục hình.
                    </li>
                    <li>
                      <strong>Yêu cầu kỹ thuật cao:</strong> Cần nha khoa có máy móc CAD/CAM hiện đại và bác sĩ có kinh nghiệm để đảm bảo kết quả tốt nhất.
                    </li>
                  </ul>
                </section>

                {/* Section 5 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="chi-dinh-su-dung">
                    5. Chỉ định sử dụng
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Răng sứ Cercon phù hợp cho các trường hợp:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      <strong>Răng sứ đơn lẻ (mão):</strong> Phục hình cho một răng bị hư hỏng, sứt mẻ hoặc cần bảo vệ sau điều trị tủy.
                    </li>
                    <li>
                      <strong>Cầu nhỏ nhiều đơn vị:</strong> Làm cầu răng để thay thế một vài răng bị mất.
                    </li>
                    <li>
                      <strong>Vùng răng trước & sau:</strong> Phù hợp cho cả răng cửa (cần tính thẩm mỹ cao) và răng hàm (cần độ bền cao).
                    </li>
                    <li>
                      <strong>Khi cần tính thẩm mỹ cao:</strong> Dùng dòng có độ trong HT (High Translucency) cho vùng răng cửa để đạt độ thẩm mỹ tối ưu.
                    </li>
                  </ul>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/sp-dv-rang-su-cercon-4.jpg"
                        alt="Cầu răng Cercon - phục hình nhiều đơn vị răng với độ chính xác cao"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Cầu răng Cercon - phục hình nhiều đơn vị răng với độ chính xác cao
                    </figcaption>
                  </figure>
                </section>

                {/* Section 6 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="quy-trinh-thuc-hien">
                    6. Quy trình thực hiện
                  </h2>
                  <ol className="list-decimal list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      Khám tổng quát, chụp X-quang, lấy dấu răng
                    </li>
                    <li>
                      Mài răng, thiết kế khung sườn bằng công nghệ CAD/CAM
                    </li>
                    <li>
                      Chế tác sườn Zirconia và phủ sứ ngoài
                    </li>
                    <li>
                      Kiểm tra thử trên miệng, điều chỉnh màu sắc, hình dáng
                    </li>
                    <li>
                      Gắn mão hoặc cầu cố định bằng ciment chuyên dụng
                    </li>
                  </ol>
                </section>

                {/* Section 7 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="cham-soc-sau-phuc-hinh">
                    7. Chăm sóc sau phục hình & lưu ý
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      Đánh răng 2 lần/ngày, dùng bàn chải mềm, kem có fluoride
                    </li>
                    <li>
                      Hạn chế nhai thực phẩm cứng hoặc dùng răng như dụng cụ
                    </li>
                    <li>
                      Tránh thói quen xấu như nghiến răng, cắn đồ cứng
                    </li>
                    <li>
                      Khám nha định kỳ 6 tháng/lần để kiểm tra & làm vệ sinh răng sứ
                    </li>
                  </ul>
                </section>

                {/* Section 8 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="gia-va-bao-hanh">
                    8. Giá & bảo hành
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Giá của Cercon tùy dòng:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      <strong>Cercon HT:</strong> Khoảng <strong>4.000.000 – 7.000.000 VNĐ/răng</strong> tùy nha khoa và công nghệ sử dụng.
                    </li>
                    <li>
                      <strong>Cercon XT, HT cao cấp:</strong> Có thể cao hơn nếu đòi hỏi độ trong cao hơn hoặc màu sắc đặc biệt, có thể lên đến <strong>8.000.000 VNĐ/răng</strong>.
                    </li>
                  </ul>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Bảo hành:</strong> Thường <strong>10–20 năm</strong> tùy chính sách nha khoa; có thể có thẻ bảo hành chính hãng từ Dentsply Sirona để xác thực xuất xứ. Giá cả còn tùy thuộc vào tình trạng răng miệng từng người cũng như chính sách giá của từng nha khoa.
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
