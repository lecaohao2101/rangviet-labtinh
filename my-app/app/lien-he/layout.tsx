import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên Hệ - CÔNG TY TNHH RĂNG VIỆT",
  description:
    "Liên hệ với CÔNG TY TNHH RĂNG VIỆT. Địa chỉ: M12A Khu QHNO, KP7, Phường Tân Phong, Biên Hòa, Đồng Nai. Hotline: 093.2379.567 (Mr.Định) | 090.2829.186 (Mr.Tình). Email: labtinh@gmail.com",
  openGraph: {
    title: "Liên Hệ - CÔNG TY TNHH RĂNG VIỆT",
    description:
      "Liên hệ với CÔNG TY TNHH RĂNG VIỆT. Hotline: 093.2379.567 | 090.2829.186. Email: labtinh@gmail.com",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
