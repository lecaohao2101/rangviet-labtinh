import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cơ Sở Vật Chất - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Khám phá hệ thống phòng ban hiện đại và trang thiết bị tiên tiến tại Lab Tình. Phòng Mài Răng, Phòng Thiết Kế, Phòng Kỹ Thuật Viên với công nghệ CAD/CAM và máy móc nhập khẩu.",
  openGraph: {
    title: "Cơ Sở Vật Chất - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Hệ thống phòng ban hiện đại với trang thiết bị tiên tiến, đảm bảo chất lượng sản phẩm răng sứ đạt tiêu chuẩn quốc tế.",
    type: "website",
  },
};

export default function CoSoVatChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
