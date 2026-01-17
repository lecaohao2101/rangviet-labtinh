import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới Thiệu - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Công ty TNHH Răng Việt là đơn vị hàng đầu tại Việt Nam trong lĩnh vực sản xuất và phục hình răng sứ cao cấp. Lab Tình với hơn 5 năm kinh nghiệm, chuyên cung cấp răng sứ toàn phần, răng sứ kim loại và dịch vụ phục hình răng.",
  openGraph: {
    title: "Giới Thiệu - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Công ty TNHH Răng Việt - Đơn vị hàng đầu trong lĩnh vực sản xuất và phục hình răng sứ cao cấp tại Việt Nam.",
  },
};

export default function GioiThieuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
