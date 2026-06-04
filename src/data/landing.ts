export interface LandingButton {
  label: string;
  href: string;
  primary?: boolean;
}

export interface LandingFeature {
  title: string;
  desc: string;
}

export const LANDING_HERO = {
  title: '문의로 이어지는 홈페이지를 만듭니다',
  subtitle: '기획부터 제작, 광고 연동, 운영 관리까지 WEFLOW가 함께합니다.',
  buttons: [
    { label: '무료 진단 후 견적받기', href: '/diagnosis', primary: true },
    { label: '실제 제작 사례 보기', href: '/cases' },
  ] as LandingButton[],
};

export const LANDING_FEATURES: LandingFeature[] = [
  {
    title: '빠른 제작 진행',
    desc: '랜딩페이지 3~4일, 홈페이지 약 1주일. 빠르게 제작하고 빠르게 운영 시작합니다.',
  },
  {
    title: '합리적인 비용',
    desc: '불필요한 비용 없이 필요한 기능만 구성하여 가성비 + 실속 + 퀄리티를 함께 제공합니다.',
  },
  {
    title: '24시간 상담 가능',
    desc: '정해진 시간만 기다리지 마세요. 문의가 생길 때 언제든 빠른 상담 및 피드백 가능합니다.',
  },
  {
    title: '제작 후 운영 관리',
    desc: '홈페이지 만들고 끝이 아닙니다. 검색 등록, 수정, 유지보수, 운영 관리까지 함께합니다.',
  },
  {
    title: '광고 연동 지원',
    desc: '홈페이지 + 랜딩페이지 + 광고를 한 번에 연결하여 문의가 들어오는 구조를 만듭니다. (인스타, 스레드, 블로그, 카카오톡, 당근 플레이스)',
  },
];

export const LANDING_STRUCTURE = {
  title: '문의 증가 구조 설계',
  intro: '사람들은 검색하고 비교한 뒤 문의합니다. 홈페이지만 필요한 시대는 지났습니다. WEFLOW는 랜딩페이지 + 홈페이지 + 광고 + 사후관리까지 저렴한 비용과 높은 퀄리티로 한 번에 해결합니다.',
  points: ['업종별 고객 흐름 분석', '상담 버튼 위치 최적화', '모바일 문의 동선 구성'],
};
