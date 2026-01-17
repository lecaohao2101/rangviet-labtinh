import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đối Tác - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Các đối tác uy tín trong lĩnh vực răng sứ của CÔNG TY TNHH RĂNG VIỆT. Tìm hiểu về các đối tác chiến lược như Nacere, Cercon, Ziconia và các sản phẩm răng sứ chất lượng cao.",
  openGraph: {
    title: "Đối Tác - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Các đối tác uy tín trong lĩnh vực răng sứ, mang đến những sản phẩm chất lượng cao và dịch vụ chuyên nghiệp.",
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
