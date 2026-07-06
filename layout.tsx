import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YULLAB | 소리의 표현을 이해하는 AI 기술 기업",
  description:
    "율랩은 목소리, 보컬, 음악, 감정 오디오에 담긴 미세한 표현을 분석하고 생성하는 AI 기술을 개발합니다.",
  metadataBase: new URL("https://yullab.co.kr"),
  openGraph: {
    title: "YULLAB",
    description: "소리의 표현을 이해하는 AI 기술 기업",
    type: "website",
    locale: "ko_KR"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08080b"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
