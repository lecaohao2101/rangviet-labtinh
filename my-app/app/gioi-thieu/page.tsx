"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Helper function to extract YouTube video ID
const getYouTubeVideoId = (url: string): string | null => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Helper function to convert YouTube URL to embed format
const getYouTubeEmbedUrl = (url: string, autoplay: boolean = false): string => {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return url;
  return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1&showinfo=0`;
};


/**
 * Trang Giới Thiệu - Công Ty TNHH Răng Việt
 */
export default function GioiThieuPage() {
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
            <li className="text-foreground">Giới thiệu</li>
          </ol>
        </nav>

        {/* Hero Image */}
        <div
          className={`mb-12 transition-all duration-700 delay-100 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <figure className="relative w-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden border border-border">
            <Image
              src="/thumnail-trangchu.png"
              alt="Công Ty TNHH Răng Việt - Lab Tình"
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </figure>
        </div>

        {/* Page Header */}
        <header
          className={`mb-12 text-center transition-all duration-700 delay-100 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            CÔNG TY TNHH RĂNG VIỆT
          </h1>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Đơn vị hàng đầu tại Việt Nam trong lĩnh vực sản xuất và phục hình răng sứ cao cấp
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Section 1: Giới thiệu chung */}
          <section
            className={`bg-background-secondary border border-border rounded-lg p-6 sm:p-8 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Về Chúng Tôi
            </h2>
            <div className="space-y-4 text-foreground-secondary">
              <p className="text-lg leading-relaxed">
                Công ty TNHH Răng Việt là một trong những đơn vị hàng đầu tại Việt Nam trong lĩnh vực sản xuất và phục hình răng sứ cao cấp. Với sứ mệnh mang đến cho khách hàng những sản phẩm chất lượng nhất, chúng tôi không ngừng cải tiến công nghệ và nâng cao tay nghề của đội ngũ nhân viên.
              </p>
            </div>
          </section>

          {/* Section 2: Lab Tình */}
          <section
            className={`bg-background-secondary border border-border rounded-lg p-6 sm:p-8 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Lab Tình
            </h2>
            <div className="space-y-4 text-foreground-secondary">
              <p className="text-lg leading-relaxed">
                <strong>Lab Tình</strong> ra đời vào năm 2020. Sau hơn 5 năm hình thành và phát triển, vượt qua nhiều cạnh tranh và thử thách, <strong>Lab Tình</strong> ngày càng lớn mạnh và khẳng định vị thế dẫn đầu trong ngành sản xuất răng sứ.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <figure className="relative w-full min-h-[200px] sm:min-h-[250px] rounded-lg overflow-hidden border border-border bg-background">
                <Image
                  src="/gioi-thieu-1.jpg"
                  alt="Lab Tình - Công Ty TNHH Răng Việt"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </figure>
              <figure className="relative w-full min-h-[200px] sm:min-h-[250px] rounded-lg overflow-hidden border border-border bg-background">
                <Image
                  src="/gioi-thieu-2.jpg"
                  alt="Lễ bàn giao máy cắt IMES - ICORE 1501"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </figure>
            </div>
            <figure className="relative w-full min-h-[200px] sm:min-h-[300px] rounded-lg overflow-hidden border border-border mt-6 bg-background">
              <Image
                src="/gioi-thieu-3.png"
                alt="Đội ngũ Lab Tình tại lễ bàn giao máy"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </figure>
          </section>

          {/* Section 3: Sản phẩm & Dịch vụ */}
          <section
            className={`bg-background-secondary border border-border rounded-lg p-6 sm:p-8 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Sản Phẩm & Dịch Vụ
            </h2>
            <p className="text-lg text-foreground-secondary mb-6">
              Công ty chuyên cung cấp các sản phẩm răng sứ cao cấp, bao gồm:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Răng sứ toàn phần
                </h3>
                <p className="text-foreground-secondary">
                  Được sản xuất từ nguyên liệu cao cấp, đảm bảo tính thẩm mỹ và độ bền cao.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Răng sứ kim loại
                </h3>
                <p className="text-foreground-secondary">
                  Kết hợp giữa tính mạnh mẽ của kim loại và vẻ đẹp tự nhiên của sứ.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Phục hình răng
                </h3>
                <p className="text-foreground-secondary">
                  Dịch vụ phục hình răng cho những trường hợp mất răng, giúp phục hồi chức năng nhai và thẩm mỹ.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Công nghệ & Đội ngũ */}
          <section
            className={`bg-background-secondary border border-border rounded-lg p-6 sm:p-8 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Công Nghệ & Đội Ngũ
            </h2>
            <div className="space-y-4 text-foreground-secondary">
              <p className="text-lg leading-relaxed">
                Chúng tôi áp dụng công nghệ sản xuất tiên tiến nhất, kết hợp với các thiết bị hiện đại, nhằm đảm bảo mỗi sản phẩm đều đạt tiêu chuẩn cao nhất về chất lượng. Đội ngũ kỹ sư và kỹ thuật viên của Răng Việt được đào tạo chuyên sâu và luôn cập nhật những xu hướng mới trong ngành.
              </p>
            </div>

            {/* Máy móc và thiết bị */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Hệ thống máy móc hiện đại
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <figure className="relative w-full min-h-[200px] sm:min-h-[250px] rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/gioi-thieu-4.jpg"
                    alt="Máy cắt IMES - ICORE 1501 tại Lab Tình"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </figure>
                <figure className="relative w-full min-h-[200px] sm:min-h-[250px] rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/gioi-thieu-5.png"
                    alt="Máy cắt CAD/CAM tại Lab Tình"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </figure>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <figure className="relative w-full min-h-[180px] sm:min-h-[220px] rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/gioi-thieu-6.png"
                    alt="Máy mài CAD/CAM DEPRAG IDE Mill W52"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </figure>
                <figure className="relative w-full min-h-[180px] sm:min-h-[220px] rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/gioi-thieu-7.png"
                    alt="Lò nung sứ tại Lab Tình"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </figure>
                <figure className="relative w-full min-h-[180px] sm:min-h-[220px] rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/gioi-thieu-8.jpg"
                    alt="Hệ thống lò nung Programat P310 Ivoclar Vivadent"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </figure>
              </div>
            </div>

            {/* Quy trình sản xuất */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Quy trình sản xuất
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <figure className="relative w-full min-h-[200px] sm:min-h-[250px] rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/gioi-thieu-9.jpg"
                    alt="Hệ thống CAD/CAM và máy scan 3Shape"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </figure>
                <figure className="relative w-full min-h-[200px] sm:min-h-[250px] rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/gioi-thieu-10.jpg"
                    alt="Quy trình thiết kế và sản xuất răng sứ"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </figure>
              </div>
            </div>

            {/* Đội ngũ kỹ thuật viên */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Đội ngũ kỹ thuật viên chuyên nghiệp
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <figure className="relative w-full min-h-[200px] sm:min-h-[250px] rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/gioi-thieu-11.jpg"
                    alt="Đội ngũ kỹ thuật viên Lab Tình"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </figure>
                <figure className="relative w-full min-h-[200px] sm:min-h-[250px] rounded-lg overflow-hidden border border-border bg-background">
                  <Image
                    src="/gioi-thieu-12.jpg"
                    alt="Kỹ thuật viên đang làm việc tại Lab Tình"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </figure>
              </div>
              <figure className="relative w-full min-h-[200px] sm:min-h-[300px] rounded-lg overflow-hidden border border-border mt-6 bg-background">
                <Image
                  src="/gioi-thieu-13.jpg"
                  alt="Không gian làm việc chuyên nghiệp tại Lab Tình"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
              </figure>
            </div>
          </section>

          {/* Section 5: Video giới thiệu */}
          <section
            className={`bg-background-secondary border border-border rounded-lg p-6 sm:p-8 transition-all duration-700 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Video Giới Thiệu
            </h2>
            <div className="relative w-full aspect-video bg-background overflow-hidden rounded-lg border border-border">
              {/* YouTube Video Embed */}
              <iframe
                src={getYouTubeEmbedUrl("https://www.youtube.com/watch?v=LaMiZq7Z3TE", false)}
                title="Video giới thiệu Công Ty TNHH Răng Việt"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </section>

          {/* Section 6 & 7: Cam kết và Tầm nhìn - Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Section 6: Cam kết */}
            <section
              className={`bg-background-secondary border border-border rounded-lg p-6 sm:p-8 transition-all duration-700 delay-700 h-full flex flex-col ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Cam Kết Của Chúng Tôi
              </h2>
              <div className="space-y-4 text-foreground-secondary flex-grow">
                <p className="text-lg leading-relaxed">
                  Công ty TNHH Răng Việt cam kết mang đến cho khách hàng những sản phẩm và dịch vụ tốt nhất. Chúng tôi luôn lắng nghe và đáp ứng nhu cầu của khách hàng, từ đó xây dựng mối quan hệ bền vững và đáng tin cậy.
                </p>
              </div>
            </section>

            {/* Section 7: Tầm nhìn */}
            <section
              className={`bg-background-secondary border border-border rounded-lg p-6 sm:p-8 transition-all duration-700 delay-800 h-full flex flex-col ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Tầm Nhìn
              </h2>
              <div className="space-y-4 text-foreground-secondary flex-grow">
                <p className="text-lg leading-relaxed">
                  Với tầm nhìn trở thành thương hiệu hàng đầu trong ngành răng sứ tại Việt Nam, Công ty TNHH Răng Việt không ngừng nỗ lực để mang đến sản phẩm và dịch vụ hoàn hảo nhất. Hãy đến với chúng tôi để trải nghiệm sự khác biệt!
                </p>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <section
            className={`bg-primary text-white rounded-lg p-8 sm:p-12 text-center transition-all duration-700 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Liên Hệ Với Chúng Tôi
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Để được tư vấn và hỗ trợ tốt nhất về sản phẩm và dịch vụ
            </p>
            <Link
              href="/lien-he"
              className="inline-block bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Liên hệ ngay
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
