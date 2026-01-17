import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RĂNG SỨ ĐỨC LÀ GÌ? - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Răng sứ Đức là tên gọi chung các loại răng sứ được sản xuất tại Đức với công nghệ CAD/CAM hiện đại. Tìm hiểu về các dòng răng sứ Đức chất lượng cao như Zirconia DDBio, DDBio HT, Cercon HT, Nacera PEARL và Nacera 9 MAX.",
  openGraph: {
    title: "RĂNG SỨ ĐỨC LÀ GÌ? - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Tìm hiểu về răng sứ Đức - các loại răng sứ cao cấp được sản xuất tại Đức với công nghệ hiện đại và chất lượng vượt trội.",
    type: "article",
    publishedTime: "2022-10-31T12:37:00",
  },
};

export default function RangSuDucLaGiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
