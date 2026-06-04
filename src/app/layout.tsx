import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import FormModal from '@/components/FormModal';
import { SITE, LINKS } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(LINKS.demo),
  title: {
    default: 'WEFLOW | 문의로 이어지는 홈페이지를 만듭니다',
    template: '%s | WEFLOW',
  },
  description:
    '랜딩 & 홈페이지 제작, 광고 운영, 검색 상단 노출까지. 단순 제작이 아닌 문의 구조까지 설계하는 WEFLOW 케어 플랜.',
  keywords: ['홈페이지 제작', '랜딩페이지 제작', '광고 운영', 'SEO 상단노출', '네이버 상위노출', 'WEFLOW'],
  openGraph: {
    title: 'WEFLOW | 문의로 이어지는 홈페이지를 만듭니다',
    description: '제작부터 광고 연동 · 운영 관리까지. 문의 구조를 설계합니다.',
    type: 'website',
    locale: 'ko_KR',
    siteName: SITE.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
        <FormModal />
      </body>
    </html>
  );
}
