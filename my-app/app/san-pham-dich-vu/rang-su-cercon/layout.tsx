import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RĂNG SỨ CERCON - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Răng sứ Cercon là loại răng sứ cao cấp được sản xuất tại Đức với khả năng chịu lực lên đến 900Mpa, màu sắc tự nhiên và độ bền cao. Không bị oxi hoá, không làm viền nướu bị đen.",
  openGraph: {
    title: "RĂNG SỨ CERCON - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Răng sứ Cercon là loại răng sứ cao cấp được sản xuất tại Đức với tính thẩm mỹ cao và độ bền vượt trội.",
  },
};

export default function RangSuCerconLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
