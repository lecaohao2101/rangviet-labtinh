import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ĐỐI TÁC RĂNG XỨ ZICONIA - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Thông tin về đối tác răng sứ Ziconia - đang được cập nhật.",
  openGraph: {
    title: "ĐỐI TÁC RĂNG XỨ ZICONIA - CÔNG TY TNHH RĂNG VIỆT",
    description: "Nội dung về đối tác răng sứ Ziconia đang được cập nhật.",
  },
};

export default function DoiTacRangXuZiconiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
