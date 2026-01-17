import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RĂNG SỨ NACERE - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Răng sứ Nacere là răng toàn sứ cao cấp của Đức với 16 màu răng, chịu lực 600-1200 Mpa và tính thẩm mỹ cao. Sản phẩm từ DOCERAM GmbH với độ bền vượt trội.",
  openGraph: {
    title: "RĂNG SỨ NACERE - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Răng sứ Nacere là răng toàn sứ cao cấp của Đức với 16 màu răng, chịu lực 600-1200 Mpa và tính thẩm mỹ cao.",
  },
};

export default function RangSuNacereLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
