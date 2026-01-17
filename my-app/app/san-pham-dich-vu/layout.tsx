import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sản Phẩm & Dịch Vụ - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Các sản phẩm răng sứ cao cấp và dịch vụ nha khoa chuyên nghiệp của CÔNG TY TNHH RĂNG VIỆT. Tìm hiểu về Implant, Răng sứ EMAX Zirconia, Cercon, Nacere, Zirconia, Veneer và các dịch vụ nha khoa khác.",
  openGraph: {
    title: "Sản Phẩm & Dịch Vụ - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Các sản phẩm răng sứ cao cấp và dịch vụ nha khoa chuyên nghiệp, mang đến nụ cười hoàn hảo cho bạn.",
  },
};

export default function ProductsServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
