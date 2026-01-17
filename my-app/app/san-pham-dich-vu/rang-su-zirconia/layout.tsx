import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RĂNG SỨ ZIRCONIA - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Răng sứ Zirconia là loại răng toàn sứ với khả năng chịu lực cực cao, độ bền vượt trội và tính thẩm mỹ tự nhiên. Không chứa kim loại, an toàn với sức khỏe.",
  openGraph: {
    title: "RĂNG SỨ ZIRCONIA - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Răng sứ Zirconia là loại răng toàn sứ với khả năng chịu lực cực cao, độ bền vượt trội và tính thẩm mỹ tự nhiên.",
  },
};

export default function RangSuZirconiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
