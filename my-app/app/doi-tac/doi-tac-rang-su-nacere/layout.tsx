import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ĐỐI TÁC RĂNG SỨ NACERE - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Thông tin về đối tác răng sứ Nacere - đang được cập nhật.",
  openGraph: {
    title: "ĐỐI TÁC RĂNG SỨ NACERE - CÔNG TY TNHH RĂNG VIỆT",
    description: "Nội dung về đối tác răng sứ Nacere đang được cập nhật.",
  },
};

export default function DoiTacRangSuNacereLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
