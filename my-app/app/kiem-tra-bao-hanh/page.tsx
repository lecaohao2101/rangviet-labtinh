"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Trang kiểm tra bảo hành với form nhập mã số và năm sinh
 * Hiển thị hình ảnh thẻ bảo hành và điều kiện bảo hành
 */
export default function WarrantyCheckPage() {
  const [formData, setFormData] = useState({
    code: "",
    birthYear: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isChecking, setIsChecking] = useState(false);
  const [checkResult, setCheckResult] = useState<{
    status: "success" | "error" | null;
    message: string;
    warrantyInfo?: {
      code: string;
      status: string;
      expiryDate?: string;
      origin: string;
    };
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  // Validation functions
  const validateCode = (code: string): boolean => {
    // Mã số thẻ thường có format: RV + số (ví dụ: RV37956789)
    const codeRegex = /^RV\d{8,10}$/i;
    return codeRegex.test(code.trim());
  };

  const validateBirthYear = (year: string): boolean => {
    const yearNum = parseInt(year, 10);
    const currentYear = new Date().getFullYear();
    // Năm sinh hợp lệ từ 1900 đến năm hiện tại
    return yearNum >= 1900 && yearNum <= currentYear && year.length === 4;
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.code.trim()) {
      newErrors.code = "Vui lòng nhập mã số thẻ";
    } else if (!validateCode(formData.code)) {
      newErrors.code = "Mã số thẻ không hợp lệ. Ví dụ: RV37956789";
    }

    if (!formData.birthYear.trim()) {
      newErrors.birthYear = "Vui lòng nhập năm sinh";
    } else if (!validateBirthYear(formData.birthYear)) {
      newErrors.birthYear = "Năm sinh không hợp lệ. Vui lòng nhập 4 chữ số (ví dụ: 1990)";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "Vui lòng đồng ý với điều khoản sử dụng dữ liệu";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    
    setFormData((prev) => ({ ...prev, [name]: fieldValue }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Clear result when user changes input
    if (checkResult) {
      setCheckResult(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCheckResult(null);

    if (!validateForm()) {
      return;
    }

    setIsChecking(true);

    // Simulate API call
    try {
      // TODO: Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock result - In real app, this would come from API
      const mockResults: Record<
        string,
        {
          status: "success" | "error";
          message: string;
          warrantyInfo?: {
            code: string;
            status: string;
            expiryDate?: string;
            origin: string;
          };
        }
      > = {
        "RV37956789": {
          status: "success",
          message: "Thẻ bảo hành hợp lệ",
          warrantyInfo: {
            code: "RV37956789",
            status: "Còn hiệu lực",
            expiryDate: "31/12/2025",
            origin: "Made in Vietnam",
          },
        },
      };

      const result = mockResults[formData.code.toUpperCase()];

      if (result) {
        setCheckResult(result);
      } else {
        setCheckResult({
          status: "error",
          message: "Không tìm thấy thông tin bảo hành. Vui lòng kiểm tra lại mã số thẻ và năm sinh.",
        });
      }
    } catch {
      setCheckResult({
        status: "error",
        message: "Có lỗi xảy ra khi kiểm tra. Vui lòng thử lại sau.",
      });
    } finally {
      setIsChecking(false);
    }
  };

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
            Kiểm Tra Bảo Hành
          </h1>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Nhập mã số thẻ bảo hành và năm sinh để kiểm tra thông tin bảo hành
            và xuất xứ sản phẩm
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column: Images */}
          <div
            className={`space-y-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Warranty Card Image */}
            <div className="bg-background-secondary border border-border rounded-lg p-4 sm:p-6 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/the-bao-hanh-1.jpeg"
                  alt="Thẻ bảo hành RĂNG VIỆT"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Warranty Conditions Image */}
            <div className="bg-background-secondary border border-border rounded-lg p-4 sm:p-6 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/the-bao-hanh-2.jpeg"
                  alt="Điều kiện bảo hành RĂNG VIỆT"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-background-secondary border border-border rounded-lg p-6 sm:p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Nhập Thông Tin Kiểm Tra
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Code Field */}
                <div>
                  <label
                    htmlFor="code"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mã Số Thẻ <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.code
                        ? "border-error focus:ring-error"
                        : "border-border focus:border-primary focus:ring-primary"
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all duration-300 uppercase`}
                    placeholder="Nhập mã của bạn tại đây"
                    maxLength={12}
                  />
                  {errors.code && (
                    <p className="mt-1 text-sm text-error">{errors.code}</p>
                  )}
                  <p className="mt-1 text-xs text-foreground-secondary">
                    Ví dụ: RV37956789
                  </p>
                </div>

                {/* Birth Year Field */}
                <div>
                  <label
                    htmlFor="birthYear"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Năm Sinh <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="birthYear"
                    name="birthYear"
                    value={formData.birthYear}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.birthYear
                        ? "border-error focus:ring-error"
                        : "border-border focus:border-primary focus:ring-primary"
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all duration-300`}
                    placeholder="Nhập năm sinh của bạn tại đây"
                    maxLength={4}
                    pattern="[0-9]{4}"
                  />
                  {errors.birthYear && (
                    <p className="mt-1 text-sm text-error">{errors.birthYear}</p>
                  )}
                  <p className="mt-1 text-xs text-foreground-secondary">
                    Ví dụ: 1990
                  </p>
                </div>

                {/* Agreement Checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className={`mt-1 h-5 w-5 rounded border ${
                        errors.agreeToTerms
                          ? "border-error"
                          : "border-border"
                      } text-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 transition-all duration-300 cursor-pointer checked:bg-primary checked:border-primary appearance-none bg-background relative`}
                      style={{
                        backgroundImage: formData.agreeToTerms
                          ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white'%3E%3Cpath fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd'/%3E%3C/svg%3E")`
                          : "none",
                        backgroundColor: formData.agreeToTerms
                          ? "var(--primary)"
                          : "var(--background)",
                      }}
                    />
                    <span className="text-sm text-foreground-secondary flex-1">
                      Việc sử dụng dữ liệu cá nhân là chỉ nhằm mục đích xác
                      minh nguồn gốc phôi.{" "}
                      <span className="text-error">*</span>
                    </span>
                  </label>
                  {errors.agreeToTerms && (
                    <p className="mt-1 text-sm text-error ml-8">
                      {errors.agreeToTerms}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isChecking}
                    className="no-hover w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/30 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isChecking ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Đang kiểm tra...
                      </span>
                    ) : (
                      "Kiểm Tra"
                    )}
                  </button>
                </div>
              </form>

              {/* Check Result */}
              {checkResult && (
                <div
                  className={`mt-6 p-4 rounded-lg border transition-all duration-300 ${
                    checkResult.status === "success"
                      ? "bg-success/10 border-success text-success"
                      : "bg-error/10 border-error text-error"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {checkResult.status === "success" ? (
                      <svg
                        className="h-6 w-6 flex-shrink-0 mt-0.5"
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
                    ) : (
                      <svg
                        className="h-6 w-6 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                    <div className="flex-1">
                      <p className="font-semibold mb-2">{checkResult.message}</p>
                      {checkResult.warrantyInfo && (
                        <div className="mt-4 space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="font-medium">Mã số thẻ:</span>
                            <span>{checkResult.warrantyInfo.code}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Trạng thái:</span>
                            <span className="text-success font-semibold">
                              {checkResult.warrantyInfo.status}
                            </span>
                          </div>
                          {checkResult.warrantyInfo.expiryDate && (
                            <div className="flex justify-between">
                              <span className="font-medium">Hết hạn:</span>
                              <span>{checkResult.warrantyInfo.expiryDate}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="font-medium">Xuất xứ:</span>
                            <span>{checkResult.warrantyInfo.origin}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Warranty Information Section */}
        <div
          className={`mt-12 transition-all duration-700 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-background-secondary border border-border rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Thông Tin Bảo Hành
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Warranty Conditions */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
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
                  Điều kiện bảo hành
                </h3>
                <ul className="space-y-2 text-foreground-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Thẻ còn trong thời hạn bảo hành, khi đi bảo hành mang
                      theo thẻ
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Lỗi gây ra do nhà sản xuất trong quá trình sản xuất
                    </span>
                  </li>
                </ul>
              </div>

              {/* Non-Warranty Conditions */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-error"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Điều kiện không được bảo hành
                </h3>
                <ul className="space-y-2 text-foreground-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-error mt-1">•</span>
                    <span>
                      Gãy, vỡ, nứt,... do chấn thương, tai nạn, sử dụng không
                      đúng cách
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-error mt-1">•</span>
                    <span>
                      Phục hình đã được chỉnh sửa bởi nha khoa khác
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* QR Code Info */}
            <div className="mt-8 p-4 bg-primary-lightest rounded-lg border border-primary/20">
              <p className="text-sm text-foreground mb-2">
                <strong>Kiểm tra xuất xứ phục hình:</strong>
              </p>
              <ul className="text-sm text-foreground-secondary space-y-1">
                <li className="flex items-center gap-2">
                  <span>•</span>
                  <span>
                    Truy cập vào website:{" "}
                    <a
                      href="http://rangviet.vn/the-bao-hanh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      http://rangviet.vn/the-bao-hanh
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span>•</span>
                  <span>Hoặc quét mã QR code trên thẻ bảo hành</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
