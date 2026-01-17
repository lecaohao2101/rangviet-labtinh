import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ĐỐI TÁC RĂNG SỨ CERCON - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Tìm hiểu về đối tác răng sứ Cercon - loại răng sứ cao cấp được sản xuất tại Đức với khả năng chịu lực lên đến 900Mpa, màu sắc tự nhiên và độ bền cao. Bảo hành lên đến 10 năm.",
  openGraph: {
    title: "ĐỐI TÁC RĂNG SỨ CERCON - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Răng sứ Cercon HT là loại răng sứ cao cấp được sản xuất tại Đức với tính thẩm mỹ cao và độ bền vượt trội.",
  },
};

export default function DoiTacRangSuCerconLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
