import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RĂNG SỨ KIM LOẠI - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Răng sứ kim loại là giải pháp phục hình răng với khung sườn kim loại bền chắc và lớp sứ phủ bên ngoài. Độ bền cao, chi phí hợp lý, phù hợp cho răng hàm.",
  openGraph: {
    title: "RĂNG SỨ KIM LOẠI - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Răng sứ kim loại là giải pháp phục hình răng với khung sườn kim loại bền chắc và lớp sứ phủ bên ngoài.",
  },
};

export default function RangSuKimLoaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
