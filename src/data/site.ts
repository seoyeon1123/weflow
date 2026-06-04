export interface NavItem {
  label: string;
  href: string;
}

export interface BottomBarItem {
  label: string;
  desc: string;
  href: string;
  icon: string;
}

export interface FooterMenuItem {
  label: string;
  href: string;
}

export const SITE = {
  name: 'WEFLOW',
  tagline: '제작부터 관리까지 비즈니스 성장을 함께합니다.',
  ceo: '신서준',
  bizNo: '884-07-03480',
  email: 'contact@weflowlab.kr',
  hours: '연중무휴 24시간 상담가능',
  copyright: '© 2026 WEFLOW. All rights reserved.',
};

export const NAV: NavItem[] = [
  { label: '홈', href: '/' },
  { label: '서비스', href: '/services' },
  { label: '제작플랜 & 가격안내', href: '/pricing' },
  { label: '성공사례', href: '/cases' },
  { label: '예약', href: '/reservation' },
  { label: '무료진단받기', href: '/diagnosis' },
];

export const LINKS = {
  github: 'https://github.com/lmg90219679-eng/weflow-web',
  demo: 'https://weflow-web.vercel.app',
  kakao: 'http://pf.kakao.com/_xntCbX',
  blog: 'https://m.blog.naver.com/weflowlab',
  instagram: 'https://www.instagram.com/weflowlab.kr',
  facebook: 'https://www.facebook.com/profile.php?id=61590187124682',
};

export const BOTTOM_BAR: BottomBarItem[] = [
  { label: '24시간 상담', desc: '언제든 빠른 상담', href: '#form', icon: 'chat' },
  { label: '카카오톡 문의', desc: '카카오 채널 바로가기', href: LINKS.kakao, icon: 'kakao' },
  { label: '블로그', desc: '제작 사례 둘러보기', href: LINKS.blog, icon: 'blog' },
  { label: '무료진단', desc: '내 페이지 점검받기', href: '/diagnosis', icon: 'diagnosis' },
];

export const FOOTER_MENU: Record<string, FooterMenuItem[]> = {
  서비스: [
    { label: '홈페이지 제작 과정', href: '/services' },
    { label: '랜딩페이지 제작 과정', href: '/services' },
    { label: '광고 운영 · 관리 안내', href: '/services' },
  ],
  'WEFLOW 케어플랜': [
    { label: 'WE 케어', href: '/pricing#plan-WE' },
    { label: 'FLOW 케어', href: '/pricing#plan-FLOW' },
    { label: 'WEFLOW 케어', href: '/pricing#plan-WEFLOW' },
  ],
  상담문의: [
    { label: '전화 문의', href: '#form' },
    { label: '이메일 문의', href: 'mailto:contact@weflowlab.kr' },
    { label: '카카오 채널 문의', href: LINKS.kakao },
    { label: '인스타 문의', href: LINKS.instagram },
  ],
};
