import type { HAEpoch } from '@/types/data';

// Human HA epochs. years_ago is measured from 2026 baseline.
// compression_ratio = prev.years_since_prev / this.years_since_prev (for display only; derived in component)
export const haTimeline: HAEpoch[] = [
  {
    name_ko: '석기 (Oldowan)',
    name_en: 'Stone Tools (Oldowan)',
    years_ago: 3000000,
    years_since_prev: null,
    description_ko: '최초의 의도적 도구. 추상화 레벨 0→1 전환.',
    citation_key: 'L5.S2.1.epoch0',
  },
  {
    name_ko: '언어',
    name_en: 'Language',
    years_ago: 200000,
    years_since_prev: 2800000,
    description_ko: '심볼 추상화. 호모 사피엔스 등장과 함께.',
    citation_key: 'L5.S2.1.epoch1',
  },
  {
    name_ko: '문자',
    name_en: 'Writing',
    years_ago: 5000,
    years_since_prev: 195000,
    description_ko: '언어의 외부 저장. 메모리 계층 L4 출현.',
    citation_key: 'L5.S2.1.epoch2',
  },
  {
    name_ko: '인쇄',
    name_en: 'Printing',
    years_ago: 500,
    years_since_prev: 4500,
    description_ko: '복제 비용 O(1) 근사. 지식 병렬 배포.',
    citation_key: 'L5.S2.1.epoch3',
  },
  {
    name_ko: '과학혁명',
    name_en: 'Scientific Revolution',
    years_ago: 400,
    years_since_prev: 100,
    description_ko: '반증 가능성 프레임. 메타 추상화 루프.',
    citation_key: 'L5.S2.1.epoch4',
  },
  {
    name_ko: '산업혁명',
    name_en: 'Industrial Revolution',
    years_ago: 200,
    years_since_prev: 200,
    description_ko: '에너지 밀도 점프. 기계가 노동을 흡수.',
    citation_key: 'L5.S2.1.epoch5',
  },
  {
    name_ko: '컴퓨터',
    name_en: 'Computer',
    years_ago: 80,
    years_since_prev: 120,
    description_ko: '범용 계산. 비트가 추상화의 기본 원소가 됨.',
    citation_key: 'L5.S2.1.epoch6',
  },
  {
    name_ko: '인터넷',
    name_en: 'Internet',
    years_ago: 40,
    years_since_prev: 40,
    description_ko: '계산 노드 전역 그래프. 정보 전파 O(log N).',
    citation_key: 'L5.S2.1.epoch7',
  },
  {
    name_ko: 'LLM',
    name_en: 'LLM',
    years_ago: 5,
    years_since_prev: 35,
    description_ko: '언어→사고→행동의 end-to-end 압축. HAL 시대 진입.',
    citation_key: 'L5.S2.1.epoch8',
  },
];
