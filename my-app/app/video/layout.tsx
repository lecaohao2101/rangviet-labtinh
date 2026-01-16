import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Xem các video về quy trình sản xuất răng sứ Zirconia, cấy ghép Implant và công nghệ hiện đại tại RĂNG VIỆT. Khám phá quy trình làm răng chuyên nghiệp.",
  openGraph: {
    title: "Video - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Xem các video về quy trình sản xuất răng sứ Zirconia và công nghệ hiện đại tại RĂNG VIỆT.",
    type: "website",
  },
};

export default function VideoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
