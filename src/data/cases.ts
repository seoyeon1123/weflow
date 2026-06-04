import { LINKS } from './site';

export interface Case {
  name: string;
  img: string;
  href: string;
}

export const CASES: Case[] = [
  { name: 'PT샵', img: '/cases_PT샵.jpg' },
  { name: '필라테스', img: '/cases_필라테스.jpg' },
  { name: '헬스장', img: '/cases_헬스장.jpg' },
  { name: '보험 설계', img: '/cases_보험설계.jpg' },
  { name: '법률 사무소', img: '/cases_법률사무소.jpg' },
  { name: '자동차 디테일링', img: '/cases_자동차디테일링.jpg' },
  { name: '렌터카 업체', img: '/cases_렌터카업체.jpg' },
  { name: '웨딩/스냅 업체', img: '/cases_웨딩스냅업체.jpg' },
  { name: '세무사 사무소', img: '/cases_세무사사무소.jpg' },
  { name: '공인중개사', img: '/cases_공인중개사.jpg' },
  { name: '카페', img: '/cases_카페.jpg' },
  { name: '미용실', img: '/cases_미용실.jpg' },
  { name: '네일샵', img: '/cases_네일샵.jpg' },
  { name: '소상공인 기업형 홈페이지', img: '/cases_소상공인기업형홈페이지.jpg' },
  { name: '피부관리샵', img: '/cases_피부관리샵.jpg' },
  { name: '왁싱샵', img: '/cases_왁싱샵.jpg' },
  { name: '반영구샵', img: '/cases_반영구샵.jpg' },
  { name: '애견미용', img: '/cases_애견미용.jpg' },
  { name: '반려동물 용품점', img: '/cases_반려동물용품점.jpg' },
  { name: '인테리어 업체', img: '/cases_인테리어업체.jpg' },
  { name: '이사 업체', img: '/cases_이사업체.jpg' },
  { name: '키즈카페', img: '/cases_키즈카페.jpg' },
  { name: '스터디카페', img: '/cases_스터디카페.jpg' },
  { name: '영어학원', img: '/cases_영어학원.jpg' },
  { name: '수학학원', img: '/cases_수학학원.jpg' },
  { name: '입시학원', img: '/cases_입시학원.jpg' },
  { name: '개인과외', img: '/cases_개인과외.jpg' },
  { name: '청소업체', img: '/cases_청소업체.jpg' },
].map((c) => ({ ...c, href: LINKS.blog }));

export const HOME_CASES: string[] = ['PT샵', '필라테스', '보험 설계', '자동차 디테일링', '법률 사무소'];
