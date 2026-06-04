export interface Plan {
  key: string;
  name: string;
  subtitle: string;
  period?: string;
  features: string[];
  original: string;
  price: string;
  highlight: boolean;
}

export const PRODUCTION_PLANS: Plan[] = [
  {
    key: 'START',
    name: 'START',
    subtitle: '랜딩페이지',
    period: '3~4일 빠른 제작기간',
    features: ['랜딩페이지 1페이지', '반응형 제작 (PC/모바일)', '문의폼 연동', '기본 SEO 설정'],
    original: '498,000원',
    price: '249,000원',
    highlight: false,
  },
  {
    key: 'GROW',
    name: 'GROW',
    subtitle: '홈페이지',
    period: '1주 빠른 제작기간',
    features: ['홈페이지 5페이지', '반응형 제작 (PC/모바일)', '문의폼 연동', '카카오톡 상담연동', '기본 SEO 설정'],
    original: '1,980,000원',
    price: '990,000원',
    highlight: false,
  },
  {
    key: 'MASTER',
    name: 'MASTER',
    subtitle: '프리미엄',
    period: '1~2주 빠른 제작기간',
    features: ['홈페이지 + 랜딩페이지', '반응형 제작 (PC/모바일)', '프리미엄 디자인', '예약 · 문의 시스템', 'SEO 최적화', '광고 전환 구조 설계'],
    original: '2,980,000원',
    price: '1,490,000원',
    highlight: true,
  },
];

export const CARE_PLANS: Plan[] = [
  {
    key: 'WE',
    name: 'WE CARE',
    subtitle: '기본 관리 플랜',
    features: ['유지보수(월 수정) 월 1회', '블로그 : 월 1개', '인스타 : 월 4회 (주 1회)', '스레드 : 월 4회 (주 1회)', 'SEO 상단등록'],
    original: '월 170,000원',
    price: '월 89,000원~',
    highlight: false,
  },
  {
    key: 'FLOW',
    name: 'FLOW CARE',
    subtitle: '성장 관리 플랜',
    features: ['유지보수 : 월 3회', '인스타 : 월 8회 (주 2회)', '스레드 : 월 8회 (주 2회)', '블로그 : 월 2회', '네이버 키워드 세팅 할인 (149,000 → 79,000원)', '당근 키워드 광고 세팅 50% 할인 (79,000 → 39,000원)', '문의 개선', 'SEO 상단 등록'],
    original: '월 378,000원~',
    price: '월 189,000원~',
    highlight: false,
  },
  {
    key: 'WEFLOW',
    name: 'WEFLOW CARE',
    subtitle: '올인원 관리 플랜',
    features: ['유지보수 : 무제한', '블로그 : 월 4회 (주 1회)', '인스타 : 월 12회 (주 3회)', '스레드 : 월 12회 (주 3회)', '네이버 키워드/당근 플레이스 광고 세팅 무료', '월 성과 체크', '랜딩 개선', '광고관리', 'SEO 최적화'],
    original: '월 678,000원~',
    price: '월 339,000원~',
    highlight: true,
  },
];

export const AD_PLANS: Plan[] = [
  {
    key: 'NAVER',
    name: '네이버 광고',
    subtitle: '키워드 셋팅',
    features: ['키워드 분석', '광고 세팅 지원', '광고 문구 제작', '문의 구조 연결', '채널 연동 지원', '성과 최적화'],
    original: '298,000원',
    price: '149,000원~',
    highlight: false,
  },
  {
    key: 'DANGGEUN',
    name: '당근 플레이스 광고',
    subtitle: '키워드 셋팅',
    features: ['지역 키워드 분석', '광고 세팅 지원', '광고 문구 제작', '지역 타겟 설정', '랜딩 연결 지원', '성과 최적화'],
    original: '158,000원',
    price: '79,000원~',
    highlight: false,
  },
];

export const PRICING_NOTES: string[] = [
  '모든 가격은 VAT 포함입니다.',
  '도메인은 고객님 명의로 등록되며 비용은 별도입니다. 위플로우에서 등록 및 연결 세팅은 무료 지원해 드립니다. (도메인 연결 지원 / 도메인 등록 대행 가능 / 도메인 비용 별도)',
  '광고비는 고객 계정에서 고객 결제수단으로 직접 결제되며, 위플로우는 운영 및 세팅만 합니다.',
  '유지보수는 텍스트, 이미지, 링크 등 경미한 수정 기준입니다. 페이지 추가 및 기능 개발은 별도 비용이 발생할 수 있습니다.',
];
