# WEFLOW

랜딩 · 홈페이지 제작부터 광고 운영 · 사후관리까지, "문의로 이어지는" 웹사이트를 만드는 WEFLOW 공식 사이트입니다.

## 기술 스택

- **Next.js 15** (App Router) · **React 18** · **TypeScript**
- **Tailwind CSS 3** · lucide-react · Pretendard
- **Supabase** (문의 · 예약 DB / 관리자 인증)
- 배포: **Vercel**

## 시작하기

```bash
# 1. 의존성 설치
yarn install

# 2. 환경변수 설정 (.env.example 참고)
cp .env.example .env
# .env 에 Supabase URL / anon key 입력

# 3. Supabase 테이블 생성
#    Supabase 대시보드 > SQL Editor 에 supabase/schema.sql 붙여넣어 실행

# 4. 개발 서버 실행
yarn dev   # http://localhost:3000
```

### 환경변수

| 변수 | 설명 |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 프로젝트 URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |

> 관리자 계정은 Supabase 대시보드 > Authentication > Users 에서 직접 생성합니다.

## 스크립트

| 명령어 | 설명 |
| --- | --- |
| `yarn dev` | 개발 서버 |
| `yarn build` | 프로덕션 빌드 |
| `yarn start` | 빌드 결과 실행 |
| `yarn lint` | 린트 |

## 페이지 구성

| 경로 | 설명 |
| --- | --- |
| `/` | 홈 (배너 · 케어플랜 혜택 · 성공사례 · 후기) |
| `/services` | 제작 진행과정 · 광고 운영/사후관리 |
| `/pricing` | 제작 · 케어 · 광고 플랜 가격 안내 |
| `/cases` | 업종별 성공사례 |
| `/reservation` | 상담 예약 (달력) |
| `/diagnosis` | 무료진단 신청 |
| `/landing` | 광고 유입용 랜딩 페이지 |
| `/admin` | 관리자 (문의 · 예약 관리, 로그인 필요) |

## 주요 기능

- 문의 · 예약 폼 → Supabase 저장
- 관리자 페이지: 접수 내역 조회 · 상태 변경(진행중/완료) · 삭제
- SEO: 메타데이터 · sitemap · robots · JSON-LD 구조화 데이터
- 반응형 (PC / 모바일)

## 디렉터리

```
src/
├─ app/          # 페이지 (App Router) · API 라우트
├─ components/   # UI 컴포넌트
├─ data/         # 사이트 콘텐츠 데이터 (플랜 · 후기 · 사례 등)
└─ lib/          # Supabase 클라이언트
supabase/schema.sql  # DB 스키마
```

---

© 2026 WEFLOW. All rights reserved.
