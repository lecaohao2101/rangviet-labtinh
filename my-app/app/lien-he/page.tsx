"use client";

import { useState, useEffect, useRef } from "react";
import Toast from "@/components/Toast";

/**
 * Trang liên hệ với form gửi tin nhắn, thông tin công ty và bản đồ
 * Có validation và hiệu ứng đẹp
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    subject: "",
    message: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [filePreviews, setFilePreviews] = useState<Array<{ name: string; size: number; type: string; url: string }>>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" | "warning"; isVisible: boolean }>({
    message: "",
    type: "info",
    isVisible: false,
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  // Cleanup file URLs on unmount
  useEffect(() => {
    return () => {
      filePreviews.forEach((preview) => {
        URL.revokeObjectURL(preview.url);
      });
    };
  }, [filePreviews]);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[0-9]{10,11}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ tên";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Vui lòng nhập địa chỉ";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Vui lòng nhập chủ đề";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Vui lòng nhập nội dung tin nhắn";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Nội dung tin nhắn phải có ít nhất 10 ký tự";
    }

    // Validate file size (max 10MB per file, max 5 files)
    if (files.length > 5) {
      newErrors.files = "Tối đa 5 file được phép upload";
    }

    files.forEach((file, index) => {
      if (file.size > 10 * 1024 * 1024) {
        newErrors[`file-${index}`] = `File "${file.name}" vượt quá 10MB`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    
    // Check total files limit
    if (files.length + selectedFiles.length > 5) {
      setErrors((prev) => ({
        ...prev,
        files: "Tối đa 5 file được phép upload",
      }));
      return;
    }

    // Validate file sizes
    const invalidFiles = selectedFiles.filter((file) => file.size > 10 * 1024 * 1024);
    if (invalidFiles.length > 0) {
      setErrors((prev) => ({
        ...prev,
        files: `Một số file vượt quá 10MB: ${invalidFiles.map((f) => f.name).join(", ")}`,
      }));
      return;
    }

    // Add files
    const newFiles = [...files, ...selectedFiles];
    setFiles(newFiles);

    // Create previews
    const newPreviews = selectedFiles.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file),
    }));
    setFilePreviews((prev) => [...prev, ...newPreviews]);

    // Clear file error
    if (errors.files) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.files;
        return newErrors;
      });
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeFile = (index: number) => {
    // Revoke object URL to free memory
    if (filePreviews[index]?.url) {
      URL.revokeObjectURL(filePreviews[index].url);
    }

    setFiles((prev) => prev.filter((_, i) => i !== index));
    setFilePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      // TODO: Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitStatus("success");
      setToast({
        message: "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.",
        type: "success",
        isVisible: true,
      });
      
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        subject: "",
        message: "",
      });
      
      // Clear files and revoke URLs
      filePreviews.forEach((preview) => {
        URL.revokeObjectURL(preview.url);
      });
      setFiles([]);
      setFilePreviews([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      
      // Scroll to top để user thấy toast
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setSubmitStatus("error");
      setToast({
        message: "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.",
        type: "error",
        isVisible: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Địa chỉ",
      content: "M12A Khu QHNO, KP7, Phường Tân Phong, Thành phố Biên Hoà, Tỉnh Đồng Nai",
      link: null,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Hotline",
      content: "093.2379.567 (Mr.Định) | 090.2829.186 (Mr.Tình)",
      link: "tel:0932379567",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      content: "labtinh@gmail.com",
      link: "mailto:labtinh@gmail.com",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "CSKH",
      content: "02516502727",
      link: "tel:02516502727",
    },
  ];

  return (
    <>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))}
      />
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
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy gửi tin nhắn
            cho chúng tôi hoặc liên hệ trực tiếp qua các thông tin bên dưới.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Info Cards */}
          <div
            className={`lg:col-span-1 space-y-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-background-secondary border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary group"
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary-lightest rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-foreground-secondary hover:text-primary transition-colors duration-300 block"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-foreground-secondary">{info.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-background-secondary border border-border rounded-lg p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Gửi Tin Nhắn
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Họ và Tên <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name
                        ? "border-error focus:ring-error"
                        : "border-border focus:border-primary focus:ring-primary"
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all duration-300`}
                    placeholder="Nhập họ và tên của bạn"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error">{errors.name}</p>
                  )}
                </div>

                {/* Phone and Email Row */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Số Điện Thoại <span className="text-error">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.phone
                          ? "border-error focus:ring-error"
                          : "border-border focus:border-primary focus:ring-primary"
                      } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all duration-300`}
                      placeholder="0901234567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-error">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email
                          ? "border-error focus:ring-error"
                          : "border-border focus:border-primary focus:ring-primary"
                      } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all duration-300`}
                      placeholder="email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Address Field */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Địa Chỉ <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.address
                        ? "border-error focus:ring-error"
                        : "border-border focus:border-primary focus:ring-primary"
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all duration-300`}
                    placeholder="Nhập địa chỉ của bạn"
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-error">{errors.address}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Chủ Đề <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.subject
                        ? "border-error focus:ring-error"
                        : "border-border focus:border-primary focus:ring-primary"
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all duration-300`}
                    placeholder="Nhập chủ đề tin nhắn"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-error">{errors.subject}</p>
                  )}
                </div>

                {/* File Upload Field */}
                <div>
                  <label
                    htmlFor="files"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Tệp Đính Kèm <span className="text-foreground-secondary text-xs">(Tùy chọn, tối đa 5 file, mỗi file tối đa 10MB)</span>
                  </label>
                  <div className="space-y-3">
                    <div className="relative">
                      <input
                        ref={fileInputRef}
                        type="file"
                        id="files"
                        name="files"
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt"
                      />
                      <label
                        htmlFor="files"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border-2 border-dashed border-border bg-background text-foreground-secondary hover:border-primary hover:text-primary cursor-pointer transition-all duration-300"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <span>Chọn file hoặc kéo thả file vào đây</span>
                      </label>
                    </div>

                    {/* File Previews */}
                    {filePreviews.length > 0 && (
                      <div className="space-y-2">
                        {filePreviews.map((preview, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-background border border-border rounded-lg hover:border-primary transition-all duration-300"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="flex-shrink-0">
                                {preview.type.startsWith("image/") ? (
                                  <div className="w-10 h-10 rounded overflow-hidden bg-background-secondary">
                                    <img
                                      src={preview.url}
                                      alt={preview.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                ) : (
                                  <div className="w-10 h-10 rounded bg-primary-lightest flex items-center justify-center">
                                    <svg
                                      className="h-6 w-6 text-primary"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-foreground truncate">
                                  {preview.name}
                                </p>
                                <p className="text-xs text-foreground-secondary">
                                  {formatFileSize(preview.size)}
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="ml-3 flex-shrink-0 p-1 text-foreground-secondary hover:text-error transition-colors duration-300"
                              aria-label={`Xóa file ${preview.name}`}
                            >
                              <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {errors.files && (
                      <p className="mt-1 text-sm text-error">{errors.files}</p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nội Dung Tin Nhắn <span className="text-error">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message
                        ? "border-error focus:ring-error"
                        : "border-border focus:border-primary focus:ring-primary"
                    } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all duration-300 resize-none`}
                    placeholder="Nhập nội dung tin nhắn của bạn (tối thiểu 10 ký tự)"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-error">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/30 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? (
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
                        Đang gửi...
                      </span>
                    ) : (
                      "Gửi Tin Nhắn"
                    )}
                  </button>

                  {/* Success/Error Messages */}
                  {submitStatus === "success" && (
                    <div className="mt-4 p-4 bg-success/10 border border-success rounded-lg text-success">
                      <div className="flex items-center gap-2">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>
                          Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.
                          Chúng tôi sẽ phản hồi sớm nhất có thể.
                        </span>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mt-4 p-4 bg-error/10 border border-error rounded-lg text-error">
                      <div className="flex items-center gap-2">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <span>
                          Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau
                          hoặc liên hệ trực tiếp qua hotline.
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div
          className={`mt-12 transition-all duration-700 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Vị Trí Của Chúng Tôi
          </h2>
          <div className="rounded-lg overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31336.04446748851!2d106.81890367553015!3d10.962952191402293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174dd7f685aeea5%3A0x91a06ac707939b70!2zTGFiIFTDrG5oIEJpw6puIEjDsmE!5e0!3m2!1sen!2s!4v1768560281713!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Bản đồ Lab Tình Biên Hòa - M12A Khu QHNO, KP7, Phường Tân Phong, Biên Hòa"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/place/Lab+T%C3%ACnh+Bi%C3%AAn+H%C3%B2a/@10.9629522,106.8189037,15z/data=!4m6!3m5!1s0x3174dd7f685aeea5:0x91a06ac707939b70!8m2!3d10.9629522!4d106.8189037!16s%2Fg%2F11v0q8q8q8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-300 hover:underline"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Xem bản đồ lớn hơn trên Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
