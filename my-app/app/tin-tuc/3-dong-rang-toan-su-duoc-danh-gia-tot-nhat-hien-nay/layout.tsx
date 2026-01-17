import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "3 DÒNG RĂNG TOÀN SỨ ĐƯỢC ĐÁNH GIÁ TỐT NHẤT HIỆN NAY - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Khám phá 3 dòng răng toàn sứ được đánh giá tốt nhất hiện nay: Zirconia Ceramill Zolid (Đức), Cercon và Cercon HT (Đức), 3M Lava Plus (Mỹ). So sánh về chất lượng, độ bền, thẩm mỹ và giá cả.",
  openGraph: {
    title:
      "3 DÒNG RĂNG TOÀN SỨ ĐƯỢC ĐÁNH GIÁ TỐT NHẤT HIỆN NAY - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Tìm hiểu về 3 dòng răng toàn sứ cao cấp nhất hiện nay: Zirconia Ceramill Zolid, Cercon HT và 3M Lava Plus.",
    type: "article",
    publishedTime: "2022-10-31T12:35:00",
  },
};

export default function BaDongRangToanSuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
