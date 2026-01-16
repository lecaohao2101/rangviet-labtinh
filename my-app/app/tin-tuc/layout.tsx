import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin Tức - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Cập nhật những thông tin mới nhất về răng sứ, công nghệ nha khoa, các sản phẩm chất lượng cao và kiến thức chuyên ngành tại RĂNG VIỆT.",
  openGraph: {
    title: "Tin Tức - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Cập nhật những thông tin mới nhất về răng sứ và công nghệ nha khoa tại RĂNG VIỆT.",
    type: "website",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
