import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CÔNG TY TNHH RĂNG VIỆT - Lab Tình | Sản Xuất Răng Sứ Cao Cấp",
  description:
    "Lab Tình - Công Ty TNHH Răng Việt chuyên sản xuất răng sứ cao cấp. Hơn 5 năm kinh nghiệm, công nghệ hiện đại, đối tác uy tín. Răng sứ EMAX Zirconia, Cercon, Nacere, Zirconia và các dịch vụ nha khoa chuyên nghiệp.",
  openGraph: {
    title: "CÔNG TY TNHH RĂNG VIỆT - Lab Tình",
    description:
      "Lab Tình - Chuyên sản xuất răng sứ cao cấp với công nghệ hiện đại và đội ngũ chuyên nghiệp. Hơn 5 năm kinh nghiệm trong ngành.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ScrollProgress />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingButtons />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
