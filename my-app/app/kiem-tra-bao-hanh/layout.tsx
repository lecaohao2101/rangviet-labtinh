import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kiểm Tra Bảo Hành - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Kiểm tra thông tin bảo hành và xuất xứ sản phẩm RĂNG VIỆT. Nhập mã số thẻ bảo hành và năm sinh để tra cứu thông tin bảo hành chính xác.",
  openGraph: {
    title: "Kiểm Tra Bảo Hành - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Kiểm tra thông tin bảo hành và xuất xứ sản phẩm RĂNG VIỆT. Nhập mã số thẻ bảo hành để tra cứu.",
    type: "website",
  },
};

export default function WarrantyCheckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
