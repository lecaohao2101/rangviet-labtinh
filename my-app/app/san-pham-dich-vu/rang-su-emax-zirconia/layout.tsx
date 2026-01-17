import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RĂNG SỨ EMAX ZIRCONIA - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Tìm hiểu về răng sứ Emax Zirconia - loại răng sứ cao cấp với tính thẩm mỹ vượt trội, độ trong suốt tự nhiên và độ bền cao. Sản phẩm chính hãng từ Ivoclar Vivadent.",
  openGraph: {
    title: "RĂNG SỨ EMAX ZIRCONIA - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Răng sứ Emax Zirconia là loại răng sứ cao cấp với tính thẩm mỹ vượt trội, độ trong suốt tự nhiên và độ bền cao.",
  },
};

export default function RangSuEmaxZirconiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
