import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phục Hình Implant - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Tìm hiểu về dịch vụ phục hình Implant - kỹ thuật lấy dấu Implant, phục hình răng sứ trên Implant và quy trình thực hiện chi tiết. Giải pháp tối ưu để thay thế răng mất.",
  openGraph: {
    title: "Phục Hình Implant - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Phục hình Implant là giải pháp tối ưu để thay thế răng mất, mang lại hàm răng hoàn chỉnh và tự nhiên với độ bền cao.",
  },
};

export default function PhucHinhImplantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
