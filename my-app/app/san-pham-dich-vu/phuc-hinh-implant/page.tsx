"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

/**
 * Trang chi tiết: Phục Hình Implant
 */
export default function PhucHinhImplantPage() {
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
                <li className="text-foreground">Phục Hình Implant</li>
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
                Phục Hình Implant
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
                  <span>31/10/2022 02:41 PM</span>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="lay-dau-implant-la-gi">
                    1. LẤY DẤU IMPLANT LÀ GÌ?
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Lấy dấu Implant</strong> thực tế là kỹ thuật <strong>lấy dấu răng</strong> trong nha khoa, không chỉ hỗ trợ trồng răng Implant mà còn được ứng dụng trong bọc răng sứ, trồng răng giả tháo lắp.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Mục đích của lấy dấu Implant nhằm giúp bác sĩ có được khuôn mẫu vật lý chính xác toàn bộ hàm răng. Sau đó bác sĩ sẽ gửi thông số kỹ thuật cho phòng Labo để chế tác răng sứ vừa vặn, đạt độ chính xác cao.
                  </p>
                </section>

                {/* Section 2 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="phuc-hinh-rang-su-tren-implant-la-gi">
                    2. PHỤC HÌNH RĂNG SỨ TRÊN IMPLANT LÀ GÌ?
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Khi chúng ta mất răng sẽ tạo nên một khoảng trống trong xương hàm, gây khó khăn trong quá trình ăn nhai cũng như tính thẩm mỹ. Về lâu dài có thể dẫn tới tình trạng <a href="https://nhakhoaident.com/kien-thuc-nha-khoa/tieu-xuong-ham/" className="text-primary hover:underline">tiêu xương hàm</a> nghiêm trọng.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Do đó, phương pháp tối ưu nhất lúc này đó là cấy trụ Implant vào xương hàm, trụ này sẽ đóng vai trò như một chân răng thật. Sau đó sẽ gắn mão răng sứ lên trên thông qua kết nối Abutment. Đây chính là <strong>kỹ thuật phục hình răng sứ trên Implant</strong>.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Hiện nay, có rất nhiều loại răng sứ để bệnh nhân lựa chọn phục hình trên implant, như: răng sứ Titan, răng toàn sứ Zirconia, răng toàn sứ Cercon HT, răng toàn sứ DDBio HT, răng toàn sứ Nacera Pearl, răng toàn sứ Nacera 9Max&hellip;
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Nếu bệnh nhân không có nhiều chi phí hoặc răng muốn phục hình là các răng hàm nhai, thì có thể lựa chọn răng sứ Titan. Loại răng sứ này tuy tính thẩm mỹ không cao nhưng chi phí thấp và vẫn đảm bảo độ cứng chắc để ăn nhai.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Nếu các răng muốn phục hình là vùng răng cửa, thì bệnh nhân nên chọn các loại răng toàn sứ để đảm bảo tính thẩm mỹ cao hơn.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/phuc-hinh-implant-1.jpg"
                        alt="Phục hình răng sứ trên Implant"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Phục hình răng sứ trên Implant
                    </figcaption>
                  </figure>
                </section>

                {/* Section 3 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="quy-trinh-phuc-hinh-rang-su-tren-implant">
                    3. QUY TRÌNH PHỤC HÌNH RĂNG SỨ TRÊN IMPLANT
                  </h2>

                  <h3 className="text-xl font-semibold text-foreground mb-3" id="tai-kham-va-kiem-tra-tinh-trang-tich-hop-xuong">
                    3.1 Tái khám và kiểm tra tình trạng tích hợp xương của trụ Implant
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    Tùy vào cơ địa cũng như tình trạng mất răng của mỗi người, sẽ có thời gian tích hợp giữa trụ Implant và xương hàm khác nhau.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Khoảng 3 - 6 tháng sau khi <strong>cấy Implant</strong>, bác sĩ sẽ hẹn lịch tái khám cho bệnh nhân, để tiến hành kiểm tra và chụp phim CT 3D. Dựa trên kết quả chụp phim, bác sĩ sẽ xác định tình trạng trụ Implant: đã tích hợp cứng chắc vào xương hàm hay chưa? Đã có thể <a href="https://nhakhoaident.com/kien-thuc-nha-khoa/quy-trinh-phuc-hinh-rang-su-implant/" className="text-primary hover:underline">phục hình trên implant</a> được chưa?
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/san-pham-dich-vu-1.jpg"
                        alt="Tái khám và kiểm tra tình trạng tích hợp xương của trụ Implant"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Tái khám và kiểm tra tình trạng tích hợp xương của trụ Implant
                    </figcaption>
                  </figure>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6" id="gan-tru-lanh-thuong-healing-cap">
                    3.2 Gắn trụ lành thương (Healing cap)
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    Sau khi kiểm tra trụ Implant có kết quả tốt, bác sĩ sẽ gắn trụ lành thương lên Implant.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Bác sĩ sẽ chọn trụ Healing cap phù hợp với loại Implant cũng như tình trạng mô mềm của bệnh nhân.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6" id="gan-rang-su-tren-tru-implant-va-hen-lich-tai-kham">
                    3.3 Gắn răng sứ trên trụ Implant và hẹn lịch tái khám
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    Sau 3 -5 ngày, khi các mô nướu đã phát triển ổn định quanh trụ lành thương, bác sĩ sẽ tiến hành đặt khớp nối Abutment trên trụ Implant. Đồng thời <strong>lấy dấu implant</strong> và chọn màu răng sứ phù hợp với màu răng tự nhiên hoặc theo yêu cầu của bệnh nhân.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Tất cả thông tin sẽ được chuyển về Labo để các kỹ thuật viên <strong>thực hiện chế tác răng sứ trên Implant</strong>. Sau khi phòng Labo hoàn tất toàn bộ răng sứ, bác sĩ sẽ thử răng và tiến hành kiểm tra khớp cắn của răng Implant mới, tính thẩm mỹ,.. Nếu tất cả đạt yêu cầu, bác sĩ <strong>gắn cố định răng sứ trên Implant</strong> bằng ốc vặn hoặc ciment chuyên dụng trong nha khoa. Kết thúc <strong>quá trình trồng răng sứ trên Implant</strong>
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Ngoài ra, bác sĩ sẽ kê đơn thuốc giảm đau cũng như hẹn lịch tái khám với bệnh nhân, nhằm kiểm tra răng Implant hoạt động có tốt không, có gây bất kỳ trở ngại, khó khăn nào không. Nếu có, sẽ đưa ra phương án giải quyết kịp thời.
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
