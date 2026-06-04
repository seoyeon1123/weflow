export interface HeroButton {
  label: string;
  href: string;
  primary?: boolean;
}

export interface Benefit {
  title: string;
  desc: string;
  icon: string;
  color: string;
}

export interface FlowStep {
  step: string;
  desc: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
  star?: boolean;
}

export const HERO = {
  topline: '랜딩 & 홈페이지 제작 · 광고 운영 · 검색 상단 노출 · 맞춤형 웹 솔루션',
  title: '문의로 이어지는\n홈페이지를 만듭니다',
  subtitle: '홈페이지 제작부터 광고 연동 · 운영 관리까지\n단순 제작이 아닌 문의 구조까지 설계합니다',
  buttons: [
    { label: '무료 진단 신청', href: '/diagnosis', primary: true },
    { label: '성공 사례 보기', href: '/cases' },
    { label: '랜딩 페이지 사례', href: '/landing' },
  ] as HeroButton[],
  badges: ['케어 플랜 (제작·광고·운영)', '빠른제작 (3일~7일)', '합리적 비용 (가성비+퀄리티)'],
};

export const BENEFITS: Benefit[] = [
  { title: 'WEFLOW 케어플랜', desc: '제작 + 운영 + 광고 + 관리 원터치', icon: 'package', color: 'indigo' },
  { title: '빠른 제작', desc: '3~7일 로켓배송', icon: 'rocket', color: 'orange' },
  { title: '합리적인 가성비', desc: '가성비 + 퀄리티를 동시에', icon: 'wallet', color: 'emerald' },
  { title: '24시간 상담대기', desc: '빠른 상담 및 피드백', icon: 'headphones', color: 'sky' },
  { title: '운영 · 광고 지원', desc: '사후관리 서비스', icon: 'megaphone', color: 'amber' },
  { title: '문의 구조 설계', desc: '문의가 들어오는 구조까지', icon: 'target', color: 'rose' },
];

export const FLOW: FlowStep[] = [
  { step: '고객 의뢰', desc: '상담 · 진단 접수', icon: 'user' },
  { step: '접수 후 제작', desc: '기획 · 디자인 · 개발', icon: 'pen' },
  { step: '3~7일 배송완료', desc: '빠르게 제작 완료', icon: 'check' },
  { step: '광고 · 운영 사후관리', desc: '검색 등록 · 유지보수', icon: 'trending' },
];

export const DIAGNOSIS_POINTS: string[] = ['문의 구조 진단', '디자인 · 사용성 점검', '검색 노출 분석', '문의 개선 제안'];

export const STATS: Stat[] = [
  { value: '28+', label: '업종 제작 경험' },
  { value: '3~7일', label: '빠른 제작 완료' },
  { value: '24시간', label: '상담 가능' },
  { value: '5.0', label: '고객 후기 평점', star: true },
];
