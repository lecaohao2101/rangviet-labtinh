"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Trang chủ - Công Ty TNHH Răng Việt - Lab Tình
 * Dựa trên cấu trúc của rangviet.vn
 */
export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
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

  // Format date function
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setFormData({ name: "", phone: "", email: "", message: "" });
    
    // Scroll to form để user thấy success message
    const formElement = document.querySelector('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  // Cơ sở vật chất
  const facilities = [
    {
      id: 1,
      title: "Phòng Mài Răng",
      image: "/phong-mai-rang.jpg",
    },
    {
      id: 2,
      title: "Phòng Thiết Kế",
      image: "/phong-thiet-ke.jpg",
    },
    {
      id: 3,
      title: "Phòng Kỹ Thuật Viên 1",
      image: "/phong-ky-thuat-vien-1.png",
    },
    {
      id: 4,
      title: "Phòng Kỹ Thuật Viên 2",
      image: "/phong-ky-thuat-vien-2.jpg",
    },
    {
      id: 5,
      title: "Phòng Kỹ Thuật Viên 3",
      image: "/phong-ky-thuat-vien-3.jpg",
    },
  ];

  // Đối tác
  const partners = [
    {
      id: 1,
      title: "ĐỐI TÁC RĂNG SỨ NACERE",
      slug: "doi-tac-rang-su-nacere",
      image: "/doi-tac-rang-su-nacere.jpg",
    },
    {
      id: 2,
      title: "ĐỐI TÁC RĂNG SỨ CERCON",
      slug: "doi-tac-rang-su-cercon",
      image: "/doi-tac-rang-su-cercon.jpg",
    },
    {
      id: 3,
      title: "ĐỐI TÁC RĂNG XỨ ZICONIA",
      slug: "doi-tac-rang-xu-ziconia",
      image: "/doi-tac-rang-su-ziconia.jpg",
    },
  ];

  // Sản phẩm nổi bật
  const featuredProducts = [
    {
      id: 1,
      title: "RĂNG SỨ EMAX ZIRCONIA",
      image: "/san-pham-dich-vu-2.jpg",
      slug: "rang-su-emax-zirconia",
    },
    {
      id: 2,
      title: "RĂNG SỨ CERCON",
      image: "/san-pham-dich-vu-3.png",
      slug: "rang-su-cercon",
    },
    {
      id: 3,
      title: "RĂNG SỨ NACERE",
      image: "/san-pham-dich-vu-6.jpg",
      slug: "rang-su-nacere",
    },
  ];

  // Nha khoa đối tác
  const dentalClinics = [
    {
      id: 1,
      name: "Nha Khoa ATS",
      image: "/nhakhoa-ats.jpg",
    },
    {
      id: 2,
      name: "Nha Khoa Đăng Khôi",
      image: "/nhakhoa-dang-khoi.jpg",
    },
    {
      id: 3,
      name: "Nha Khoa Mỹ Việt",
      image: "/nhakhoa-my-viet.jpg",
    },
    {
      id: 4,
      name: "Nha Khoa Tâm Nguyên",
      image: "/nhakhoa-tam-nguyen.jpg",
    },
    {
      id: 5,
      name: "Nha Khoa Thanh Tâm",
      image: "/nhakhoa-thanh-tam.jpg",
    },
    {
      id: 6,
      name: "Nha Khoa Thiện Nhân",
      image: "/nhakhoa-thien-nhan.jpg",
    },
  ];

  // Tin tức mới nhất
  const latestNews = [
    {
      id: 1,
      title: "3 DÒNG RĂNG TOÀN SỨ ĐƯỢC ĐÁNH GIÁ TỐT NHẤT HIỆN NAY",
      date: "2022-10-31T12:35:00",
      slug: "3-dong-rang-toan-su-duoc-danh-gia-tot-nhat-hien-nay",
      image: "/3-dong-rang-toan-su.png",
      excerpt:
        "Răng toàn sứ Zirconia Ceramill Zolid là loại răng sứ cao cấp nhất của dòng răng sứ Zirconia. Loại răng toán sứ này nổi bật nhất là ở tính thẩm mỹ và khả năng chịu lực cao.",
    },
    {
      id: 2,
      title: "RĂNG SỨ NACERA LÀ GÌ? ƯU NHƯỢC ĐIỂM & GIÁ CẢ",
      date: "2022-10-31T12:34:00",
      slug: "rang-su-nacera-la-gi-uu-nhuoc-diem-gia-ca",
      image: "/rang-su-nacera.jpg",
      excerpt:
        "Răng sứ Nacera được chế tác bằng chất liệu Nha khoa cao cấp với hàng loạt ưu điểm lớn: tính thẩm mỹ đẹp như răng thật với 16 màu răng khác nhau...",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <section
        className={`relative w-full min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background-secondary transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 ${
                isVisible ? "animate-fade-in-down" : "opacity-0"
              }`}
            >
              CÔNG TY TNHH RĂNG VIỆT
            </h1>
            {/* Slogan */}
            <div 
              className={`mb-6 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: isVisible ? "0.2s" : "0s" }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border-2 border-primary rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-105 animate-dance">
                <svg
                  className="w-5 h-5 text-primary animate-sparkle"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-primary italic">
                  Tinh hoa bàn tay Việt
                </p>
              </div>
            </div>
            <div 
              className={`mb-8 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: isVisible ? "0.4s" : "0s" }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 animate-glow">
                Lab Tình
              </h2>
              <p className="text-lg sm:text-xl text-foreground-secondary leading-relaxed mb-6">
                <strong>Lab Tình</strong> ra đời vào năm 2020. Sau hơn 5 năm hình thành và phát triển, vượt qua nhiều cạnh tranh và thử thách, <strong>Lab Tình</strong> ngày càng lớn mạnh và khẳng định vị thế dẫn đầu trong ngành sản xuất răng sứ. <strong>Lab Tình</strong> luôn đặt dấu ấn trên hành trình chinh phục đỉnh cao.
              </p>
              <p className="text-base sm:text-lg text-foreground-secondary mb-8">
                - Năm 2020, <strong>Lab Tình</strong> được thành lập với tên gọi thân thuộc &ldquo;<strong>Lab Tình</strong>&rdquo;
              </p>
              <Link
                href="/gioi-thieu"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
              >
                Xem thêm
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Sản Phẩm & Dịch Vụ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div
            className={`text-center mb-12 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              SẢN PHẨM VÀ DỊCH VỤ
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Các sản phẩm răng sứ cao cấp và dịch vụ chuyên nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Link
                key={product.id}
                href={`/san-pham-dich-vu/${product.slug}`}
                className={`group bg-background-secondary border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
                }}
              >
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div
            className={`text-center mt-12 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="/san-pham-dich-vu"
              className="inline-block text-primary font-semibold hover:text-primary-dark transition-colors duration-300"
            >
              Xem thêm →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Cơ Sở Vật Chất */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="container mx-auto max-w-7xl">
          <div
            className={`text-center mb-12 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              CƠ SỞ VẬT CHẤT BÊN CHÚNG TÔI
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Hệ thống phòng ban hiện đại với trang thiết bị tiên tiến
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={facility.id}
                className={`bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
                }}
              >
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">
                    {facility.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`text-center mt-12 transition-all duration-700 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="/co-so-vat-chat"
              className="inline-block text-primary font-semibold hover:text-primary-dark transition-colors duration-300"
            >
              Xem thêm →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Đối Tác */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div
            className={`text-center mb-12 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              ĐỐI TÁC CỦA CHÚNG TÔI
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Các đối tác uy tín trong lĩnh vực răng sứ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Link
                key={partner.id}
                href={`/doi-tac/${partner.slug}`}
                className={`group bg-background-secondary border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
                }}
              >
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {partner.title}
                    </h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      ĐỐI TÁC
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div
            className={`text-center mt-12 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="/doi-tac"
              className="inline-block text-primary font-semibold hover:text-primary-dark transition-colors duration-300"
            >
              Xem thêm →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Nha Khoa Đối Tác */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="container mx-auto max-w-7xl">
          <div
            className={`text-center mb-12 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              NHA KHOA ĐỐI TÁC
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Các nha khoa uy tín tin tưởng và hợp tác với chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {dentalClinics.map((clinic, index) => (
              <div
                key={clinic.id}
                className={`bg-background border border-border rounded-lg p-4 sm:p-6 flex items-center justify-center hover:shadow-lg transition-all duration-500 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index + 1) * 50}ms` : "0ms",
                }}
              >
                <div className="relative w-full aspect-square max-w-[150px] mx-auto">
                  <Image
                    src={clinic.image}
                    alt={clinic.name}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Đăng Ký Tư Vấn */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div
            className={`bg-background border border-border rounded-lg p-8 sm:p-12 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
              ĐĂNG KÍ TƯ VẤN
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nhập email (tùy chọn)"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nội dung tư vấn
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Nhập nội dung bạn muốn tư vấn..."
                />
              </div>
              {formSubmitted && (
                <div className="bg-success/10 border border-success text-success px-4 py-3 rounded-lg">
                  Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn sớm nhất.
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
              >
                Gửi đăng ký
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Section 6: Tin Tức */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div
            className={`text-center mb-12 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              TIN TỨC
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Cập nhật những thông tin mới nhất về răng sứ và nha khoa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news, index) => (
              <Link
                key={news.id}
                href={`/tin-tuc/${news.slug}`}
                className={`group bg-background-secondary border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
                }}
              >
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-foreground-secondary">
                      {formatDate(news.date)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary line-clamp-3">
                    {news.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div
            className={`text-center mt-12 transition-all duration-700 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="/tin-tuc"
              className="inline-block text-primary font-semibold hover:text-primary-dark transition-colors duration-300"
            >
              Xem thêm →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
