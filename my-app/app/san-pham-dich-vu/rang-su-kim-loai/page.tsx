"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

/**
 * Trang chi tiết: RĂNG SỨ KIM LOẠI
 */
export default function RangSuKimLoaiPage() {
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
                <li className="text-foreground">RĂNG SỨ KIM LOẠI</li>
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
                RĂNG SỨ KIM LOẠI
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
                  <span>17/10/2022 03:54 PM</span>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="rang-su-kim-loai-la-gi">
                    1. Răng sứ kim loại là gì?
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Răng sứ kim loại</strong> là dòng răng sứ được chế tác và ứng dụng đầu tiên vào trong lĩnh vực làm răng sứ thẩm mỹ.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Giúp khắc phục các khuyết điểm về răng sâu, răng xỉn màu, răng sứt mẻ lớn không thể phục hình bằng phương pháp hàn trám, răng hô móm nhẹ xuất phát từ nguyên nhân do răng chứ không phải do hàm,&hellip;
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/san-pham-dich-vu-4.jpg"
                        alt="Răng sứ kim loại"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Răng sứ kim loại là giải pháp phục hình răng với khung sườn kim loại bền chắc
                    </figcaption>
                  </figure>
                  <p className="text-foreground-secondary mb-4">
                    Hiện nay, các loại răng sứ kim loại trên thị trường sẽ bao gồm <strong>3 loại răng sứ chính</strong> được nhiều người lựa chọn:
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6" id="rang-su-kim-loai-thuong">
                    1.1 Răng sứ kim loại thường
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    Là loại răng sứ mà phần lõi bên trong được chế tác từ hợp kim và bên ngoài là lớp sứ trắng <strong>Ceramco III</strong>.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6" id="rang-su-titan">
                    1.2 Răng sứ Titan
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    Hay còn có tên gọi khác là <strong>răng sứ hợp kim</strong>. Mặc dù vẫn là hợp kim Niken – Crom bên trong khung sườn nhưng nhờ sử dụng thêm <strong>4 – 6% Titanium</strong> nên có sự cải tiến hơn so với răng sứ kim loại thường.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Bên ngoài khung sườn được phủ một lớp sứ trắng giúp màu răng có phần tương tự như răng thật.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6" id="rang-su-kim-loai-quy">
                    1.3 Răng sứ kim loại quý
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    Đây là dòng răng sứ kim loại cao cấp có giá thành tương đương, thậm chí là cao hơn so với các loại răng toàn sứ.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Vẫn là cấu tạo khung sườn kim loại, nhưng là những kim loại đắt tiền như <strong>platin, vàng hoặc palladium</strong>. Và bên ngoài cũng được phủ lớp men sứ trắng giống răng thật. Tuy nhiên, cũng có trường hợp bề mặt bên ngoài của răng được phủ luôn lớp kim loại quý.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/sp-dv-rang-su-kim-loai-1.jpeg"
                        alt="So sánh các loại răng sứ: răng toàn sứ và răng sứ kim loại (PFM)"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      So sánh các loại răng sứ: răng toàn sứ và răng sứ kim loại (PFM)
                    </figcaption>
                  </figure>
                </section>

                {/* Section 2 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="uu-va-nhuoc-diem">
                    2. Ưu và nhược điểm của các loại răng sứ kim loại
                  </h2>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6" id="rang-su-kim-loai-thuong-uu-nhuoc">
                    2.1 Răng sứ kim loại thường
                  </h3>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/sp-dv-rang-su-kim-loai-2.jpeg"
                        alt="Răng sứ kim loại thường - so sánh răng toàn sứ và răng sứ kim loại (PFM)"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Răng sứ kim loại thường - so sánh răng toàn sứ và răng sứ kim loại (PFM)
                    </figcaption>
                  </figure>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Ưu điểm:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      Giúp cải thiện được tình trạng răng sứt mẻ, sâu nặng mà điều trị bằng giải pháp hàn trám đã không còn tác dụng.
                    </li>
                    <li>
                      Trường hợp răng đã chữa tủy sẽ trở nên giòn xốp và dễ gãy. Lúc này bọc răng sứ kim loại sẽ bảo tồn răng thật được lâu hơn trên cung hàm.
                    </li>
                    <li>
                      Với trường hợp mất răng, người bệnh cũng có thể phục hình bằng răng sứ kim loại.
                    </li>
                    <li>
                      Độ bền chắc tương đương như răng thật nên đảm bảo được khả năng ăn nhai.
                    </li>
                    <li>
                      Chi phí phải chi trả cho loại răng này tương đối thấp. Có thể nói là thấp nhất trong tất cả các loại răng sứ nên đáp ứng được khả năng chi tiêu của nhiều người.
                    </li>
                  </ul>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Nhược điểm:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      Xảy ra hiện tượng đổi màu răng và đen dàn cổ răng sát viền nướu do khung sườn kim loại bị oxy hóa dưới tác động của axit trong môi trường khoang miệng.
                    </li>
                    <li>
                      Màu sắc răng sứ không có độ trong mờ như răng thật, có phần hơi đục và khi chiếu quang thì ánh đen kim loại rất dễ nhìn thấy. Do đó loại răng sứ này chỉ thích hợp phục hình ở vị trí mất răng hàm.
                    </li>
                    <li>
                      Trường hợp bệnh nhân bị dị ứng kim loại sẽ dễ gây tình trạng kích ứng mô mềm trong miệng.
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6" id="rang-su-titan-uu-nhuoc">
                    2.2 Răng sứ Titan
                  </h3>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Ưu điểm:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      Nhờ vào chất liệu Titanium mà răng sứ Titan nhẹ hơn so với răng sứ kim loại, mang lại cảm giác dễ chịu hơn.
                    </li>
                    <li>
                      Đặc biệt cũng nhờ thành phần này mà tính tương hợp sinh học cao hơn, không gây tình trạng kích ứng với cơ thể.
                    </li>
                    <li>
                      Trong thời gian đầu, màu sắc của răng sứ Titan cùng với răng thật có nhiều điểm tương đồng nên nhìn chung tính thẩm mỹ được cải thiện đáng kể.
                    </li>
                    <li>
                      Độ bền chắc cao gấp 2 lần răng thật, nhờ vậy mà cho khả năng ăn nhai tốt.
                    </li>
                    <li>
                      Chi phí cho răng sứ Titan cũng rất thấp. Vì vậy mà đây sẽ là lựa chọn thích hợp với những bệnh nhân bị dị ứng kim loại.
                    </li>
                  </ul>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Nhược điểm:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      Vì bản chất khung sườn vẫn là hợp kim kim loại nên sẽ rất dễ nhìn thấy ánh đen khi ánh sáng chiếu vào và sử dụng lâu dài vẫn sẽ gây hiện tượng đen viền nướu.
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6" id="rang-su-kim-loai-quy-uu-nhuoc">
                    2.3 Răng sứ kim loại quý
                  </h3>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/sp-dv-rang-su-kim-loai-5.jpeg"
                        alt="Răng sứ kim loại quý với khung sườn bằng platin, vàng hoặc palladium"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Răng sứ kim loại quý với khung sườn bằng platin, vàng hoặc palladium
                    </figcaption>
                  </figure>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Ưu điểm:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      Độ bền chắc cao, đảm bảo an toàn và không gây kích ứng cho cơ thể.
                    </li>
                    <li>
                      Khắc phục được tình trạng đen viền nướu.
                    </li>
                  </ul>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Nhược điểm:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      Giá thành của loại răng sứ này khá cao, có thể ngang với giá của loại răng toàn sứ cao cấp.
                    </li>
                    <li>
                      Màu sắc lớp sứ bên ngoài của răng sứ kim loại quý cũng không tự nhiên.
                    </li>
                  </ul>
                  <p className="text-foreground-secondary mb-4">
                    Nhìn chung, răng sứ kim loại có tuổi thọ không cao, trung bình chỉ khoảng <strong>5 – 7 năm</strong>, khi bị oxy hóa gây đen viền nướu hoặc bệnh nhân bị dị ứng thì bắt buộc phải thay đổi sứ mới để đảm bảo tính thẩm mỹ và an toàn cho sức khỏe.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Vì vậy, để không tốn thời gian và chi phí thực hiện sau này, bác sĩ luôn khuyến khích bệnh nhân lựa chọn răng toàn sứ. Loại răng này có thể khắc phục tất cả nhược điểm của răng sứ kim loại. Đồng thời còn mang lại giá trị thẩm mỹ cao, giống hệt như răng thật. Thời gian sử dụng trung bình từ <strong>15 – 20 năm</strong>, thậm chí là duy trì vĩnh viễn nếu biết cách chăm sóc tốt.
                  </p>
                </section>

                {/* Section 3 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="rang-su-kim-loai-co-tot-khong">
                    3. Răng sứ kim loại có tốt không?
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Có thể thấy, hiện nay trên thị trường đã nghiên cứu và sản xuất ra nhiều loại răng sứ cao cấp khác. Tuy nhiên, không vì thế mà răng sứ kim loại bị &ldquo;đào thải&rdquo;. Điều này chứng tỏ chúng vẫn có những ưu điểm đáp ứng được nhu cầu sử dụng của con người.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/sp-dv-rang-su-kim-loai-7.jpeg"
                        alt="Bọc răng sứ kim loại giúp đảm bảo được khả năng ăn nhai"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Bọc răng sứ kim loại giúp đảm bảo được khả năng ăn nhai
                    </figcaption>
                  </figure>
                  <p className="text-foreground-secondary mb-4">
                    Chẳng hạn như trường hợp bệnh nhân có thu nhập không mấy dư dả thì vẫn có thể thực hiện phục hình bằng răng sứ kim loại. Vì chúng cũng đảm bảo được chức năng ăn nhai tốt.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Điều này có ý nghĩa cực kỳ lớn. Vì trường hợp bệnh nhân bị mất răng hoặc răng sứt mẻ lớn sẽ làm ảnh hưởng đến quá trình nghiền nát thức ăn. Lâu dài sẽ tăng gánh nặng cho các cơ quan tiêu hóa, đặc biệt là dạ dày.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Đặc biệt, trường hợp răng chữa tủy, sâu lớn, khi bọc răng sứ sẽ giúp bảo tồn răng thật lâu hơn trên cung hàm, ngăn ngừa tình trạng sâu răng có thể lây nhiễm sang các răng lành khác.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/sp-dv-rang-su-kim-loai-9.jpeg"
                        alt="Răng sứ kim loại đảm bảo khả năng ăn nhai tốt"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Răng sứ kim loại đảm bảo khả năng ăn nhai tốt
                    </figcaption>
                  </figure>
                </section>

                {/* Section 4 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="rang-su-kim-loai-co-thuc-su-lam-den-vien-nuou">
                    4. Răng sứ kim loại có thực sự làm đen viền nướu?
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Với những bệnh nhân thực hiện phục hình răng bằng răng sứ kim loại, sau một thời gian sẽ gặp phải tình trạng viền nướu có dấu hiệu thâm đen.
                  </p>
                  <figure className="my-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src="/sp-dv-rang-su-kim-loai-6.jpeg"
                        alt="Đen nướu răng là hiện tượng tất yếu sẽ xảy ra khi sử dụng răng sứ kim loại"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-foreground-secondary italic text-center">
                      Đen nướu răng là hiện tượng tất yếu sẽ xảy ra khi sử dụng răng sứ kim loại
                    </figcaption>
                  </figure>
                  <p className="text-foreground-secondary mb-4">
                    <strong>Nguyên nhân</strong> dẫn đến tình trạng này là do khung sườn bên trong răng sứ được làm từ kim loại. Mà bản chất của kim loại chính là rất dễ bị oxy hóa khi gặp axit. Axit này thường có trong thức ăn bổ sung hằng ngày.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Hoặc trường hợp bệnh nhân chải răng sai cách làm nướu răng bị tuột, lâu ngày phần sứ ở nơi tiếp giáp giữa vị trí chân răng và nướu sẽ mòn, sườn kim loại lộ ra ngoài. Chính vì vậy mà đen viền nướu là điều tất yếu sẽ xảy ra với trường hợp sử dụng răng sứ kim loại.
                  </p>
                  <p className="text-foreground-secondary mb-4">
                    Hiện nay, cách duy nhất để khắc phục tình trạng đen viền nướu là <strong>thay răng sứ kim loại bằng răng toàn sứ</strong>. Chỉ có duy nhất phương pháp này mới mang lại kết quả như bạn mong muốn.
                  </p>
                </section>

                {/* Section 5 */}
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4" id="gia-va-bao-hanh">
                    5. Giá & bảo hành
                  </h2>
                  <p className="text-foreground-secondary mb-4">
                    Giá tham khảo cho răng sứ kim loại:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground-secondary mb-4 ml-4">
                    <li>
                      <strong>Răng sứ kim loại thường:</strong> Khoảng <strong>2.000.000 - 3.000.000 VNĐ/răng</strong> (thấp nhất trong các loại răng sứ).
                    </li>
                    <li>
                      <strong>Răng sứ Titan:</strong> Khoảng <strong>2.500.000 - 3.500.000 VNĐ/răng</strong>.
                    </li>
                    <li>
                      <strong>Răng sứ kim loại quý:</strong> Khoảng <strong>4.000.000 - 6.000.000 VNĐ/răng</strong> (có thể ngang với giá răng toàn sứ cao cấp).
                    </li>
                  </ul>
                  <p className="text-foreground-secondary mb-4">
                    Thời gian bảo hành thường từ <strong>5 đến 7 năm</strong> tùy loại và chính sách của cơ sở nha khoa. Tuổi thọ trung bình của răng sứ kim loại chỉ khoảng <strong>5 – 7 năm</strong>, sau đó cần thay mới để đảm bảo tính thẩm mỹ và an toàn cho sức khỏe.
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
