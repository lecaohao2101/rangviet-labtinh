import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "RĂNG SỨ NACERA LÀ GÌ? ƯU NHƯỢC ĐIỂM & GIÁ CẢ - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Răng sứ Nacera là răng toàn sứ cao cấp của DOCERAM GmbH (Đức) với 16 màu răng, chịu lực 600-1200 Mpa. Tìm hiểu về ưu nhược điểm, cấu tạo và giá cả của răng sứ Nacera.",
  openGraph: {
    title:
      "RĂNG SỨ NACERA LÀ GÌ? ƯU NHƯỢC ĐIỂM & GIÁ CẢ - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Tìm hiểu về răng sứ Nacera - răng toàn sứ cao cấp của Đức với tính thẩm mỹ cao và độ bền vượt trội.",
    type: "article",
    publishedTime: "2022-10-31T12:34:00",
  },
};

export default function RangSuNaceraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
