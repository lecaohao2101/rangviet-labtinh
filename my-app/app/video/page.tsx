"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Trang Video với các video YouTube về quy trình sản xuất răng sứ
 * Grid layout responsive với hiệu ứng đẹp
 * Hiển thị video trực tiếp bằng iframe embed
 */
export default function VideoPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fallback: Hiển thị nội dung ngay lập tức trên mobile để tránh màn hình trắng
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.01, // Giảm threshold để dễ trigger hơn trên mobile
        rootMargin: "50px" // Thêm margin để trigger sớm hơn
      }
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


  const videos = [
    {
      id: 1,
      title: "Creating a Zirconia Crown",
      url: "https://youtu.be/bdTrdHdhaz8",
      description: "Quy trình tạo răng sứ Zirconia chuyên nghiệp",
    },
    {
      id: 2,
      title: "Quy trình làm răng",
      url: "https://youtu.be/2YYx48IIbRU",
      description: "Tổng quan về quy trình sản xuất răng sứ tại RĂNG VIỆT",
    },
    {
      id: 3,
      title: "METAL-FREE ZIRCONIA IMPLANTS",
      url: "https://youtu.be/zXXgTIzvmxw",
      description: "Cấy ghép Implant Zirconia không kim loại",
    },
    {
      id: 4,
      title: "ZIRCONIA CROWN",
      url: "https://youtu.be/V9z_OZvcrj8",
      description: "Răng sứ Zirconia - Giải pháp thẩm mỹ và bền vững",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl font-bold text-foreground mb-4 sm:text-5xl">
            Video
          </h1>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Khám phá quy trình sản xuất răng sứ chuyên nghiệp và công nghệ
            hiện đại tại RĂNG VIỆT
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`bg-background-secondary border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Video Container with Direct Embed */}
              <div className="relative w-full aspect-video bg-background overflow-hidden rounded-t-lg border-b border-border">
                {/* YouTube Video Embed */}
                <iframe
                  src={getYouTubeEmbedUrl(video.url, false)}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-foreground-secondary">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div
          className={`mt-12 transition-all duration-700 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-background-secondary border border-border rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Về Quy Trình Sản Xuất
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Công Nghệ Hiện Đại
                </h3>
                <p className="text-foreground-secondary text-sm">
                  Chúng tôi sử dụng công nghệ CAD/CAM tiên tiến và vật liệu
                  Zirconia cao cấp để tạo ra những sản phẩm răng sứ chất lượng
                  cao, đảm bảo độ chính xác và thẩm mỹ tối ưu.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-primary"
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
                  Chất Lượng Đảm Bảo
                </h3>
                <p className="text-foreground-secondary text-sm">
                  Mỗi sản phẩm đều được kiểm tra kỹ lưỡng qua nhiều giai đoạn,
                  từ thiết kế đến hoàn thiện, đảm bảo đáp ứng tiêu chuẩn quốc
                  tế và mang lại sự hài lòng cho khách hàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
