import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VENEER - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Veneer là lớp phủ mỏng bằng sứ hoặc composite, giúp cải thiện thẩm mỹ răng một cách tự nhiên và không xâm lấn. Phương pháp thẩm mỹ răng hiện đại, bảo tồn tối đa răng thật.",
  openGraph: {
    title: "VENEER - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Veneer là lớp phủ mỏng bằng sứ hoặc composite, giúp cải thiện thẩm mỹ răng một cách tự nhiên và không xâm lấn.",
  },
};

export default function VeneerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
