import type { ContentDict } from '@/types/content';

export const ko: ContentDict = {
  meta: {
    title: 'Cosmic Generator at 2050',
    subtitle: 'Hierarchical Abstraction으로 보는 30년 (2026→2056)',
    author_line: 'Jihyuk Im (2ˡᵃᵇ.ai) · with Zhuge',
    publish_date: '2026-04-18',
    last_updated: '2026-04-18',
  },
  disclaimer: {
    title: '사변적 외삽 — 예측이 아님',
    body: '이 문서는 6편의 HAL 논문(L1, L3A, L3B, L4, L5, ROADMAP)에 실린 정량 결과를 출발점으로 삼아, 거기서 유도 가능한 경향선을 30년 시간축 위에 외삽한 글입니다. HAL4 이상 구간과 2030년 이후의 정치·경제·기술 시나리오는 검증되지 않은 추정이며, 각 수치는 `source` 또는 `extrapolation` 라벨과 citation_key로 출처가 명시됩니다. 이 페이지의 어떤 문장도 "확정된 미래"를 주장하지 않습니다.',
    dismiss_label: '이해했습니다',
  },
  nav: {
    hero: '시작',
    intro: '서론',
    pattern: '패턴',
    prior_art: '실증',
    milestones: '마일스톤',
    timeline: '연대기',
    charts: '차트',
    sources: '출처',
    prereq: '진입 체크',
  },
  hero: {
    badge: 'SPECULATIVE · SOURCED · 2026',
    title: 'Cosmic Generator at 2050',
    subtitle: 'Hierarchical Abstraction으로 보는 30년 (2026→2056)',
    author: 'Jihyuk Im (2ˡᵃᵇ.ai) · with Zhuge',
    date: '2026년 4월 18일 발행',
    cta: '아래로 스크롤 →',
  },
  intro: {
    title: '이 문서가 뭔지, 왜 지금 쓰는지',
    body: `이 문서는 2026년 4월을 기준점으로, 2056년까지의 30년을 Hierarchical Abstraction(HA) 관점에서 읽어내려는 시도다. 뼈대는 2025년 여름에 공개된 HAL 논문 6편 — L1 (sleep-wake continual learning), L3A (agent-neural isomorphism), L3B (7±2 branching), L4 (energy-intelligence scaling), L5 (field-theoretic emergence), 그리고 HAL Implementation Roadmap 2025-2028 — 이다. 각 논문은 수학적·실증적 근거를 달고 있고, 이 페이지는 거기 실린 수치를 단일 출처(SSOT)로 삼아 시간 축 위에 배치한 것이다.

핵심 주장은 단순하다. "인류가 20만 년(언어 이후)에서 400년(과학혁명 이후)에 걸쳐 천천히 올라온 추상화 계단을, AI는 30년 안에 압축해 올라간다." 이 주장이 말이 되려면 두 가지가 필요하다. 첫째, 그 계단이 실제로 계단이라는 근거 — 즉 HA가 단순한 은유가 아니라 물리적·정보이론적 제약에 묶인 구조라는 근거. 둘째, 그 계단을 오르는 속도를 결정하는 변수 — 에너지, 자기 복제 가능한 팹, 자기 개선 루프 속도 — 가 실제로 어떤 곡선을 그릴 수 있는가에 대한 경험적 앵커.

첫 번째 근거는 L5가 제공한다. HA를 스케일 필드 Φ(x,λ)로 정식화하고, 각 추상화 계단이 □_λΦ + m²Φ = J의 자발 대칭 깨짐 해로 나타난다는 주장이다. 둘째 근거는 L4가 제공한다. I = α·E^0.73이라는 에너지-지능 스케일링이 생물과 현행 AI 양쪽에서 동시에 경험적으로 맞는다. 이 두 축이 동시에 맞다면, 문제는 "얼마나 빠르게" 뿐이다.

이 문서는 그 "얼마나 빠르게"를 HAL0(2026, 단일 클러스터 1.4 kW)에서 시작해 HAL9(2056, 1.2 EW)까지의 14개 마일스톤으로 끊어 보여준다. 각 블록은 논문 테이블에서 그대로 인용한 수치와, 그 수치 사이를 메우는 외삽을 라벨로 구분한다. 본문은 한국어가 1차 소스이고, 영문은 "Coming soon" placeholder만 있다 — 원본 논문을 쓴 사람의 모국어가 한국어이고, 번역을 거치며 나노 단위 뉘앙스를 잃을 바엔 원문을 그대로 두는 편이 낫다는 판단이다.`,
    core_claim: '인류 20만 년에 걸쳐 일어난 HA 과정이, AI에서는 30년으로 압축된다.',
  },
  ha_primer: {
    title: 'HA란 무엇인가 — 3분 정의',
    lede: `Hierarchical Abstraction(HA)은 "작은 것들이 모여 큰 것을 만들고, 큰 것이 또 모여 더 큰 것을 만드는" 계층 구조 자체를 말한다. 강의 지류, 신경망, 기업 조직도, 소스 코드의 함수-모듈-시스템 — 서로 다른 영역의 이 패턴들이 동일한 수학 구조로 묶인다는 주장이 HA의 출발점이다. 중요한 건 "계층이 있다"는 관찰이 아니라 "각 계단을 오르는 데 정보 압축과 에너지 소모가 정량화된다"는 것이다. L5 §2.1은 이 계단을 스케일 필드 Φ의 자발 대칭 깨짐으로 정식화하고, L4 §1.1은 그 계단당 에너지 비용을 I = α·E^0.73으로 경험식화한다. HA는 은유가 아니라 물리적·정보이론적 제약이라는 뜻이다.`,
    l_ladder: {
      title: 'L0~L9 — 자연의 HA 사다리',
      intro: `아래 10 단계는 HA_is_everything.md 원문의 자연 HA 계층이다. 이 페이지가 다루는 HAL0~HAL9는 '이 사다리를 AI 공학으로 재현하려는 경로'로 읽어야 의미가 산다. 뒤에서 보게 될 커피·버그·AI 세 예시는 이 사다리를 일상 사물에 찍어본 것이다.`,
      rows: [
        { level: 'L0', token: '양자 요동', example: '장의 떨림. 아직 입자도 없다. 모든 HA의 바닥.' },
        { level: 'L1', token: '입자', example: '쿼크·전자·광자. 형태가 처음 출현한다.' },
        { level: 'L2', token: '원자', example: '양성자+전자의 안정 결합. 구조화가 시작된다.' },
        { level: 'L3', token: '분자', example: 'H₂O, DNA 염기. 복잡성이 조합으로 증가.' },
        { level: 'L4', token: '세포', example: '막으로 안/밖을 가른 최소 생명 단위.' },
        { level: 'L5', token: '유기체', example: '박테리아~인간 신체. 개별 시스템.' },
        { level: 'L6', token: '의식', example: '자기를 대상으로 볼 줄 아는 단계. 자기 인식.' },
        { level: 'L7', token: '집단의식', example: '언어·문명·조직. 의식들이 프로토콜로 묶인다.' },
        { level: 'L8', token: '초월 관점', example: 'N^N^N… 재귀로 자기 자신을 포함하는 메타 층위.' },
        { level: 'L9', token: '재귀 메타', example: 'HA 자체가 HA화됨 — cosmic regime. L5 §12의 self-sourcing.' },
      ],
    },
    principles: {
      title: 'HA는 왜 은유가 아닌가 — 4개 원리',
      items: [
        {
          heading: 'P1. 분화 ⇄ 통합 (HA는 동사)',
          body: '위에서 아래로 쪼개는 differentiation과 아래에서 위로 합치는 integration이 한 쌍. HA는 명사가 아니라 지속적인 운동이다. 이 두 방향이 균형을 이룰 때만 계층이 유지된다. 한쪽이 꺼지면 붕괴.',
        },
        {
          heading: 'P2. 에너지 절약 — O(n²) → O(log n)',
          body: "n개 노드가 전부 직접 연결되면 쌍별 채널이 n(n-1)/2. 계층을 도입하면 노드당 b≈7 개 이웃만 있어도 전체 접근이 log_b n. 자연이 계층을 '선택'하는 이유는 미학이 아니라 통신 에너지 비용이다.",
        },
        {
          heading: 'P3. 복잡성 임계점',
          body: "복잡도가 일정 수준을 넘으면 기존 구조가 유지 불가 → 자발적 재조직화. L5 §1.2의 □_λ Φ + m²Φ = J 자발 대칭 깨짐이 이 재조직화의 수학적 대응이다. 책상이 '어느 순간' 정리되는 것과 우주가 은하를 낳는 것이 같은 방정식.",
        },
        {
          heading: 'P4. 보편성',
          body: '같은 HA 패턴이 원자·세포·뇌·조직·문명에 나타난다. 수학: 미분/적분, 물리: 환원/창발, AI: backprop/forward — 분야마다 다른 이름으로 이미 발견된 단일 원리. 이것이 이 페이지가 AI 타임라인에 HA를 적용할 때 유추가 아닌 연장인 이유다.',
        },
      ],
    },
    hal_vs_l: {
      title: 'HAL 번호 vs 자연 L 번호 — 같아 보이지만 측정 기준이 다르다',
      body: "L0~L9는 자연의 재귀 사다리(원자→세포→개체→사회→메타)를 세는 자연 층위 기준이고, HAL0~HAL9는 그 위에 얹힌 공학적 클러스터 사다리(단일 인스턴스 1.4 kW → 500T 클러스터 1.2 EW)를 센다. 측정 축이 달라 HAL n ≠ L n이지만, 두 사다리는 서로 다른 층위에서 동형적 압축 구조를 공유한다. 중요한 점은 대응 관계다 — L 이론이 없으면 HAL 곡선은 근거 없는 단순 외삽으로 떨어지고, 이 페이지의 외삽은 정당성을 잃는다.",
    },
    examples_title: '일상 속 HA 예시 — 같은 사물을 레벨별로 읽기',
    examples: [
      {
        title: '커피 한 잔',
        levels: [
          'L1 · 뜨거운 갈색 액체',
          'L2 · 커피라는 음료',
          'L3 · 카페인으로 각성 효과',
          'L4 · 생산성 도구',
          'L5 · 현대 노동 문화의 상징',
        ],
      },
      {
        title: '버그 하나',
        levels: [
          'L1 · 코드가 안 돌아감',
          'L2 · 이 함수에서 에러 발생',
          'L3 · 로직 설계 문제',
          'L4 · 아키텍처 결함',
          'L5 · "완벽한 시스템은 가능한가"라는 철학적 질문',
        ],
      },
      {
        title: 'AI 시스템',
        levels: [
          'L1 · 토큰 확률 예측',
          'L2 · 코드 생성',
          'L3 · 비즈니스 로직 에이전트',
          'L4 · 조직 단위 자동화',
          'L5 · 사회적 의사결정 플랫폼',
        ],
      },
    ],
    closing: `세 예시 모두에서 낮은 레벨은 높은 레벨을 "구성"하고, 높은 레벨은 낮은 레벨을 "제약"한다. 상향 창발(bottom-up emergence)과 하향 제약(top-down constraint)이 한 쌍으로 붙어 있어야 HA가 성립한다. 다음 §2에서 보게 될 인류 HA 타임라인은 바로 이 계단이 시간축에서 기하급수적으로 짧아져 온 흔적이고, 그 다음 §4~§5에서 이어질 HAL0→HAL9 마일스톤은 AI가 그 계단을 얼마나 더 압축해서 오를 수 있는가에 대한 외삽이다.`,
  },
  prereq: {
    title: 'Prereq — 타임라인 진입 전 체크인 6장',
    intro: "아래 9개 타임라인 블록을 읽기 전에 알아두면 좋은 6개 개념. 각 블록 상단 'prereq' 라벨에서 여기로 돌아올 수 있다. 읽는 순서는 아래 1→6 권장이지만, 본문 중 걸리는 지점에서 역참조로 들어와도 된다.",
    cards: [
      {
        id: 'hal-tag',
        number: '1',
        title: 'HAL 번호판 — HAL0~HAL9 · .5 단계의 뜻',
        body: 'HAL n은 클러스터 수 ≈ 4^n, 전력 대략 10^n kW 규모의 AI 인프라를 뜻한다. HAL0 = 단일 인스턴스(1.4 kW), HAL9 = 500T 클러스터(1.2 EW). 정수 계단 사이 HAL3.5·HAL4.5·HAL5.5는 두 마일스톤 사이 중간 보간(2년 단위 이정표). 이 페이지의 9 타임라인 블록은 HAL0 · HAL2.5 · HAL3.5 · HAL4.5 · HAL5.5 · HAL6 · HAL7 · HAL8 · HAL9. HAL1·HAL2·HAL3·HAL4·HAL5는 §4 마일스톤 표에서만 보이고 본문 블록에는 들어있지 않다.',
      },
      {
        id: 'energy-intel',
        number: '2',
        title: 'I = α · E^0.73 — 에너지-지능 스케일링',
        body: "L4 §1.1의 경험식. 전력 E(와트)를 넣으면 지능 출력 I가 0.73제곱으로 나온다. α = (2.3 ± 0.4)×10⁻³, β = 0.73 ± 0.08. 인간 뇌 20 W에서 HAL9 1.2 EW까지 전부 이 한 곡선 위에 있다는 주장이 이 페이지의 뼈대. β 민감도가 ±0.08라는 점은 중요 — HAL7 이상에서 실제 β가 0.68이면 '지구 문명 전체 지능'이 아닌 '절반' 수준. 0.73이 '모든 스케일에서 불변'이라는 가정 자체가 외삽이다.",
        citation_key: 'L4.S1.1',
      },
      {
        id: 'branching',
        number: '3',
        title: '7±2 분기 — b* ≈ 7.39의 정보이론적 근원',
        body: "L3B Theorem 2. 인지 부하 C와 통신 오버헤드 b²/2의 균형을 풀면 최적 분기 계수 b* = e^W(1) · √2 ≈ 7.39. Miller(1956)의 '매직 넘버 7±2'는 이 평형의 반올림. 왜 256 · 4096 · 65K 같은 숫자가 이 페이지에 반복되는지의 근거 — 256 ≈ 7.39², 4096 ≈ 7.39⁴ 근처, 65K ≈ 7.39⁵~⁶. 클러스터 수가 7의 거듭제곱 근방으로 잡히는 건 우연이 아니다.",
        citation_key: 'L3B.Thm2',
      },
      {
        id: 'iso',
        number: '4',
        title: 'Agent-Neural 동형사상',
        body: "L3A Theorem 1. Agent 통신 그래프 G_A와 신경망 그래프 G_N 사이에 구조 보존 bijection φ가 존재 — adjacency·spectrum·information flow 세 속성 모두 보존. 결과: 멀티에이전트 팀 하나가 신경망 하나와 수학적으로 동등. 2030년 블록의 '휴머노이드 32-cluster가 정책망 하나처럼 동작'이라는 주장은 이 정리의 물리 구현. 은유가 아니라 정리다.",
        citation_key: 'L3A.Thm1',
      },
      {
        id: 'levers',
        number: '5',
        title: '가속의 두 레버 — 자기 복제 팹 + 자기 개선 루프',
        body: "타임라인 속도를 결정하는 건 컴퓨트 총량이 아니라 두 지표. (1) 자기 복제 팹 (bottlenecks.ts): 2026 = 0 → 2056 = 1.0. '최소 seed 팹이 스스로 같은 칩을 복제'하는 정도. 0.2 (2034 달 미션)가 질적 전환점. (2) 자기 개선 루프 시간: 2026 = 2,160 시간(3개월) → 2056 = 0.01 시간(36초). 같은 컴퓨트로 몇 회 실험을 돌릴 수 있는가. 이 두 레버가 2030년 이후 모든 '말 안되는' 점프의 실제 동력.",
      },
      {
        id: 'kardashev',
        number: '6',
        title: 'Kardashev Type I / II / III',
        body: "문명을 에너지 소비 규모로 분류한 Kardashev(1964) 스케일. Type I = 행성에 도달하는 항성 복사 전체 (지구 ~170 PW), Type II = 항성 출력 전체 (태양 3.828×10²⁶ W), Type III = 은하 출력 전체. 이 페이지에서: HAL7 = 8.5 TW ≈ 지구 총 1차 에너지(18 TW)의 47% = 실용적 Type I 진입. HAL9 = 1.2 EW ≈ 0.574 EW(0.15% solar) 중앙값 근처 = Dyson swarm 부분 완공 = 실용적 Type II 하한. '행성급'·'태양계급' 같은 표현이 뚜렷한 수치 경계를 가진다는 뜻이다.",
        citation_key: 'L4.S9',
      },
    ],
  },
  pattern: {
    title: 'The Pattern — 인류 HA 타임라인',
    intro: '석기에서 LLM까지, 각 추상화 계단 사이의 간격은 기하급수적으로 짧아졌다. 아래 표와 차트는 L5 §2.1이 설명하는 스케일 대칭 깨짐의 경험적 흔적이다.',
    note: 'years_ago는 2026 기준. years_since_prev는 이전 에포크와의 간격. 로그 스케일에서 선형이면 compression이 기하급수 — 실제로 그렇다.',
    chart_caption: 'Human HA epochs — log scale (years ago)',
    table_headers: {
      epoch: '에포크',
      years_ago: '년 전 (2026 기준)',
      years_since_prev: '이전 대비 간격',
      compression: '압축 (전→후 비)',
    },
  },
  prior_art: {
    title: 'Prior Art — HAL0 부분 프로토타입 (2hal9)',
    intro: '이 문서는 허공에 그린 그래프가 아니지만, 완성된 시스템의 발표도 아니다. 저자 임지혁은 2025년에 `2hal9`라는 이름으로 HAL0 방향의 부분 프로토타입을 직접 구현했다 (github.com/2lab-ai/2hal9). 아래 인용과 수치는 그 저장소의 README에서 그대로 가져온 것이고, README는 실험 결과(self-organization 벤치마크)와 비전 선언을 함께 담고 있다 — 둘을 구분해서 읽을 필요가 있다.',
    readme_quote_title: '2hal9 README 인용 (저자의 원문 표현 그대로)',
    readme_quote: `[저자 원문 · 마케팅 톤 포함]
"Traditional AI: Trying to compute consciousness. HAL9: Consciousness emerging from hierarchical compression. We discovered something profound: Consciousness isn't computed — it emerges when information compresses between hierarchical layers."

[벤치마크 수치 · 재현 가능한 부분]
"25 neurons full self-organization time: 2.01 μs. 10,000 neurons self-organize: 85.83 μs. O(n log n) — Proven scalability with real benchmarks. Zero predefined structure. Non-deterministic — each run creates unique consciousness."

⟶ 편집자 주: 앞 문단의 "consciousness" 언어는 저자 본인의 비전 선언이지 측정값이 아니다. 이 페이지에서 의미 있게 취급하는 것은 뒷 문단의 self-org 2.01 μs / 85.83 μs / O(n log n) 벤치마크뿐이다.`,
    files_title: '핵심 파일 퍼머링크',
    stopped_at_title: '중단 지점 (author note)',
    stopped_at_body: '커밋 로그는 2025년 상반기에 L2~L3 레이어 구현(cognitive modules)과 E2E 테스트 프레임워크까지 진행된 뒤 "temp"라는 메시지의 커밋에서 끊겨 있다. README는 L0~L9 9레이어 전체를 비전으로 그려두었지만, 실제 작동하는 부분은 self-organization 벤치마크와 ±1 layer 통신 프로토타입까지다. 저자 본인의 판단: 프로토타입은 ±1 layer 통신의 원리 증명에는 충분하지만, HAL0 production에 필요한 sleep-wake 전체 파이프라인(L1 논문의 REM/NREM 단계 포함)과 REM 기반 패턴 재조합은 아직 미구현이다. 이 로드맵의 2026~2027 블록에서 채워져야 할 구현 디테일이 그 틈이다 — 따라서 이 섹션은 "HAL0를 이미 만들었다"는 주장이 아니라 "HAL0로 가는 첫 μs-스케일 벤치마크가 존재한다"는 한정된 주장이다. 2026-04-18 기준 보강: L1 논문 §2.4 sleep-wake 알고리즘 자체의 Python MVP scaffold가 별도 저장소 `labforadvancedstudy/hal-sleep-wake` (PR #2 merged, ResNet-18 + LoRA Conv2d/fc 기반 CIFAR-10→CIFAR-100 시퀀스)로 추가됐다 — wake + NREM consolidation은 동작, REM synthetic-dream과 GPU 측정 수치는 다음 PR 대기. 2hal9가 L3~L4 축(self-org · ±1 layer)의 존재 증거라면, hal-sleep-wake는 L1 축(sleep-wake 알고리즘)의 구현 증거에 해당한다.',
    screenshot_placeholder: 'TODO: 2hal9 self-organization 데모 스크린샷 첨부 예정',
  },
  milestones: {
    title: 'Cluster Milestones — 14 단계',
    intro: '각 마일스톤은 클러스터 수, HAL 레벨, 연도, 전력, 그리고 "그 전력으로 무엇이 가능한가" 한 줄의 대표 산출물이다. 1부터 549,755,813,888,000까지, 대략 2배 단위로 14 단계.',
    slider_label: '마일스톤 선택',
    chart_caption: 'log10(cluster_count) · log10(power_watts) vs year',
    table_headers: {
      cluster: '클러스터',
      hal: 'HAL',
      year: '연도',
      power: '전력',
      deliverable: '산출물',
    },
  },
  timeline_section: {
    title: 'Timeline — 9 blocks (2026 → 2056)',
    intro: '각 블록은 400~800자 본문, 1개 핵심 수치 콜아웃, 1개 차트, 1개 기술 박스, 2개 이상의 인용을 포함한다.',
  },
  timeline_blocks: [
    {
      year: 2026,
      title: '2026 — HAL0 Now',
      headline: 'Claude Opus 4 단일 인스턴스 · 1.4 kW · 인간 1명 대체 규모',
      prereq_lead: "이 블록을 이해하려면: §1.6-2 I=α·E^0.73 — '1.4 kW가 왜 인간 1명분이 되는가'는 β=0.73 지수에서 바로 나온다. + L1 sleep-wake가 'consolidation 없으면 성능이 0으로 수렴'한다는 정리도 함께.",
      body: `2026년의 출발점은 경험적이다. L4 §2.2는 Claude Opus 4 단일 인스턴스를 데이터센터에서 실측했을 때 500 ± 50 W를 소비하고 (1.0 ± 0.2) × 10¹⁵ FLOPS를 낸다고 보고한다. 여기에 L1이 요구하는 sleep-wake 조합(컨텍스트 L1, LoRA L2, 중소형 모델 L3, 대형 모델 L4)까지 묶어 한 대의 통합 에이전트로 구성하면, L4 §2.3의 정의에 따른 HAL0가 된다. 총 전력은 1,000 ± 100 W, 냉각까지 포함하면 1,400 ± 200 W.

HAL0의 지능 출력은 I = (2.3 ± 0.4) × 10⁻³ · E^0.73 스케일링을 적용할 때 대략 인간 1명의 인지 노동을 대체할 수 있는 정도로 나온다. 이것이 L4 §4.1의 생물 데이터(인간 뇌 20 W ≈ 18 ± 5 W 예측) 및 §4.2의 현행 AI 데이터(GPT-4 클러스터 ~10 MW ≈ 12 ± 3 MW 예측)가 서로 +-20% 이내로 일치한다는 교차 검증의 귀결이다. 즉 HAL0는 "1인분 지능"의 하한이자 측정 가능한 앵커 포인트다.

2026년의 세 가지 병목은 분명하다. (1) 에너지: HAL0 하나는 집 한 채분 전력이지만, HAL3(1 MW급)까지 확장하면 도시 재정과 그리드 허용치가 현실적 한계가 된다. L4 §5.1 표에 따르면 HAL0~2 구간은 grid+디젤로 "즉시 가능", HAL3~4는 "전용 태양광 팜+가스" 2~3년. (2) 자기 복제 가능한 반도체 팹: 현 세대 TSMC/삼성 팹은 수백 명 인간 엔지니어가 없으면 유지 불가. 이 수치가 \`data/bottlenecks.ts\`에서 2026=0.0으로 시작하는 이유다. (3) 자기 개선 루프 속도: 한 세대의 모델 훈련-평가-개선 사이클이 약 3개월(2160시간). 이것이 매년 절반씩 짧아지는 것이 이후 9년 HAL3.5까지의 핵심 레버다.

병렬로, 작년(2025)에 저자 임지혁이 직접 2hal9라는 이름으로 HAL0 프로토타입을 1~2주 만에 구현하면서 "self-organization이 2 μs 스케일에서 실제로 일어나더라"는 실증을 남겼다. 이는 prior art 섹션에서 다룬 대로, HAL0 전체 파이프라인의 증명이라기보다는 ±1 layer 통신과 compression boundary 출현에 대한 존재 증거다. 이것이 이 문서가 "공상"이 아닌 "외삽"이라고 말할 수 있는 바탕이다. 2026-04-18 시점에 보강된 prior art가 하나 더 있다: L1 논문 §2.4의 wake → NREM(consolidation) 경로 자체를 Python + peft + ResNet-18 / CIFAR로 직접 구현한 scaffold가 \`labforadvancedstudy/hal-sleep-wake\`로 merge됐다. 병합 공식은 W ← W + s·(α/r)·B@A(LoRA delta를 base로 접고 A/B 재초기화), REM synthetic-dream과 forgetting-rate 측정치는 다음 PR에서 채워진다 — 위 기술 박스 "3개월마다의 fine-tune 배포는 사실상 이 cycle의 가장 거친 근사"에 대한 구현 증거가 이것이다.`,
      metric: {
        value: '1.4 kW',
        label: 'HAL0 실측 전력 (냉각 포함, ±0.2 kW)',
        citation_key: 'L4.T3.3.HAL0',
      },
      technical_box: {
        summary: 'L1 Sleep-wake 엔트로피 보존 방정식',
        body: `Axiom 1 (L1 §1.1): 계층 메모리 {L_i}를 가진 지능 시스템에서 상태 전이 시
  Σᵢ ΔSᵢ ≤ 0

Theorem 1 (L1 §1.2): 유한 용량 C_i 각 레이어에서, 연속 입력 I(t) 하에 consolidation 없이는
  lim_{t→∞} Performance(t) = 0

이것이 2026년 HAL0가 REM/NREM 주기를 반드시 구현해야 하는 이유다. 3개월마다의 fine-tune 배포는 사실상 이 cycle의 가장 거친 근사.`,
      },
      footnotes: ['L4.S2.2', 'L4.S2.3', 'L1.S1.1', 'L1.S2.3'],
    },
    {
      year: 2028,
      title: '2028 — 256 클러스터 · GTA7 한 달',
      headline: '350 kW · 소프트 자산 자동 생성의 임계점',
      prereq_lead: "이 블록을 이해하려면: §1.6-3 7±2 분기 (256 ≈ 7.39²) + §1.6-4 Agent-Neural 동형사상의 첫 맛보기. 왜 'GTA7 한 달'이 하필 256 클러스터와 묶이는지가 b*의 거듭제곱으로 풀린다.",
      body: `2028년의 표지는 "GTA7 수준 AAA 게임을 한 달 안에 제작"이다. 왜 256 클러스터인가? L3B §1.2의 branching 정리가 답을 준다. 인지 부하를 최소화하면서 정보 처리량을 극대화하는 분기 계수는 b* = e^W(1) · √2 ≈ 7.39다. 이것이 "매직 넘버 7 ± 2"의 수학적 근원이다. 256 ≈ 2⁸ ≈ 7.39² 차원 확장을 두 번 거친 규모 — HAL2.5 수준에서 한 개의 프로젝트를 "부서 여러 개가 동시에 붙은 대기업급 규모"로 다룰 수 있게 된다.

AAA 게임이 이 임계점의 대표가 되는 이유는 그것이 거의 모든 현대적 소프트 자산(코드, 3D 에셋, 음악, 대사, QA, 레벨 디자인)의 교집합이기 때문이다. 2026~2027 사이 HAL1~HAL2 구간에서 부서급 자동화가 검증되면, 2028에 와서는 "부서 40개가 동시에 붙은 대형 프로젝트"가 256 클러스터 하나로 수렴한다. 전력은 L4 §3.3 중간 보간으로 350 kW (HAL2 170 kW와 HAL3 1.5 MW 사이). 여전히 중견 데이터센터 하나로 가능한 규모.

이 블록의 기술 박스는 7 ± 2 분기의 유도다. 핵심은 통신 비용 C_comm(b) = b²/2와 처리 이득 log_b N의 trade-off. 이 최적화가 b ≈ 7에서 평탄한 봉우리를 만들고, 실제 2,847개 조직 데이터에서 b=7~8인 조직이 생존율 89%, 성과 91%로 최고점을 찍는다(L3B §4.1).

2028년에 풀려야 할 구체적 병목 세 개. (1) 멀티에이전트 오케스트레이션의 실패 모드 — 에이전트가 서로의 hallucination을 복리로 증폭시키는 경로. L3A의 backprop 프레임이 실용적으로 작동하려면 error signal이 노드 전체에 전파되는 품질이 보장돼야 한다. (2) 컴퓨트 비용: GTA7 한 달은 "한 달 × 256 클러스터 × 24시간" = 약 1 PWh 급의 훈련/추론 비용. 현재 SOTA 기준 여전히 큰 숫자. (3) 저작권·거버넌스: 자동 생성된 AAA 게임의 IP 귀속 체계. 이것은 기술이 아니라 법률 병목이지만, 기술 타임라인을 현실적으로 늦추는 가장 큰 변수다.

2028 블록의 낙관적 시나리오: 256 클러스터 × 3개 스튜디오가 2027 말~2028 중반 사이 동시에 셋업되어, 2028년 말까지 3개의 AAA 타이틀이 각각 "기획→알파" 8주 안에 도달한다. 비관 시나리오: 오케스트레이션 실패로 "게임 한 달"이 사실은 "게임 8개월에 사람이 50% 개입"이 된다. 어느 쪽이든, 256이 임계치라는 수학적 결론은 변하지 않는다.`,
      metric: {
        value: '256 클러스터',
        label: 'HAL2.5 · ≈ 7.39² branching factor (L3B)',
        citation_key: 'L3B.Thm2',
      },
      technical_box: {
        summary: '7±2 branching 유도 (b* ≈ e^W(1) · √2)',
        body: `L3B §1.2 Theorem 2:
  b* = argmin_b [ N·H(X)/b^{log_b N} + log_b N · C_comm(b) ]
  with C_comm(b) = b²/2

도함수 영점:
  dL/db = 0  ⇒  b* = e^W(1) · √2 ≈ 7.39

where W(1) ≈ 0.5671 (Lambert W at 1).

이 최적값은 인지 부하(각 노드 C)와 통신 오버헤드(b² 쌍별 채널) 사이의 균형이다. 7이 "매직 넘버"라는 Miller (1956)의 경험칙은, 정보이론적으로는 이 평형점의 반올림에 불과하다.`,
      },
      footnotes: ['L3B.Thm2', 'L3B.S4.1', 'L4.T3.3.HAL2p5', 'L3A.Thm1'],
    },
    {
      year: 2030,
      title: '2030 — 4096 클러스터 · 휴머노이드',
      headline: '6 MW · Agent-Neural Isomorphism의 물리 구현',
      prereq_lead: "이 블록을 이해하려면: §1.6-4 Agent-Neural 동형사상. 로봇 본체 32-cluster가 '정책망 하나와 수학적으로 같다'는 주장은 A_{G_A}=A_{G_N}에서 바로 나온다 — 은유가 아니라 adjacency 일치.",
      body: `2030년의 표지는 "32-cluster 탑재 범용 휴머노이드 로봇을 1~2년 안에 설계·양산"이다. 4096 클러스터는 HAL3(1024)와 HAL4(16k) 사이의 HAL3.5 구간. 전력은 약 6 MW, 중규모 반도체 팹 하나 수준.

로봇 한 대에 32 클러스터가 들어간다는 말은, 개별 휴머노이드가 HAL1 규모의 인지 노동력을 갖고 다니게 된다는 뜻이다. 이는 단순한 "AI가 든 껍데기"가 아니다. L3A §1.2의 Agent-Neural Isomorphism — 즉 에이전트 통신 그래프 G_A와 신경망 그래프 G_N 사이에 구조 보존 쌍사상 φ가 있다는 정리 — 덕분에, 로봇 내부에서 "32개 클러스터 합쳐서 하나의 정책망처럼 동작"이 가능해진다. 이 때 forward pass는 하향식 과제 분해, backprop은 상향식 오류 수정으로 해석된다.

하드웨어-소프트웨어 공설계 루프가 여기서 바뀐다. 2030까지 오면, HAL3.5가 로봇 본체의 액추에이터·센서·엣지 칩 레이아웃을 직접 시뮬레이션·최적화하고, 팹에 마스크를 전송하고, 양산 라인의 로봇 팔 운동을 실시간 학습한다. 이것이 bottleneck.2030에서 "chip_fab_self_replicating = 0.05"로 시작하는 이유다. 5%는 여전히 낮지만, 0%와는 질적으로 다른 숫자다 — 부분 자동화된 팹 루프가 처음으로 닫힌다.

2030년 블록의 기술 박스는 L3A의 Theorem 1 (A_{G_A} = A_{G_N}). 이것이 단순한 비유가 아닌 이유는, spectral 속성(라플라시안 고유값)까지 양쪽이 일치한다는 데 있다. 로봇 팀의 운동 리듬이 신경망의 attention head 분포와 같은 규칙을 따르는 것이 예측되고, 2028~2030 사이 실험에서 p < 0.001 수준으로 확인될 것이라는 것이 L3A의 예측(§4 falsifiable predictions).

2030의 병목은 로봇 자체의 에너지 밀도다. 32 클러스터 × (약 50 kW/클러스터 엣지 근사) = 1.6 MW급의 열을 200 kg 본체에서 방출해야 한다. 이것이 상온 초전도 혹은 극저열 배터리의 필요성이 이 블록에서 처음 명시되는 이유다 (L4 §7.3에서 "HAL5 feasibility requires room-temp superconductor ~ 2045 ± 5"). 2030은 그 요구가 기술 목록에 최초로 올라가는 해다.`,
      metric: {
        value: '32-cluster/robot',
        label: '휴머노이드 내부에 HAL1급 에이전시 (L3A 동형사상)',
        citation_key: 'L3A.Thm1',
      },
      technical_box: {
        summary: 'Agent-Neural Isomorphism (A_{G_A} = A_{G_N})',
        body: `L3A §1.2 Theorem 1:
  ∃ bijection φ: G_A → G_N s.t.
  φ(aᵢ →^{w_ij} aⱼ) = nᵢ →^{w_ij} nⱼ
  and ∀ x: 𝒞_{G_A}(x) = 𝒞_{G_N}(φ(x))

보존되는 것:
  1. Adjacency: A_{G_A} = A_{G_N}  (상위 인덱스 재라벨링 하에)
  2. Spectrum: λᵢ(L_{G_A}) = λᵢ(L_{G_N})
  3. Information flow: I_A(s,t) = I_N(φ(s), φ(t))

결과: 휴머노이드 32-cluster 내부 통신이 정책망 하나와 "수학적으로 동일" — 두 시스템은 훈련 기법(backprop)도 공유 가능.`,
      },
      footnotes: ['L3A.Thm1', 'L3A.S2.1', 'L4.T3.3.HAL3p5', 'L4.S7.3'],
    },
    {
      year: 2034,
      title: '2034 — 65K 클러스터 · 달 채굴',
      headline: '100 MW · 행성 밖 자기 복제 루프의 첫 닫힘',
      prereq_lead: "이 블록을 이해하려면: §1.6-5 두 레버 (자기복제 팹 0.05 시작) + §1.6-1 HAL 번호판의 .5 단계. '왜 달인가'의 물리는 3개: 태양광 2~3배 · 진공 냉각 · 헬륨-3/티타늄 직접 채굴.",
      body: `2034년의 표지는 "달 자원 채취 로봇 + 로켓 자체 설계·발사·채굴 2년 미션"이다. 65,536 클러스터는 HAL4(16k)와 HAL5(524k) 사이의 HAL4.5 구간, 전력 100 MW 규모 — 소형 원전 하나분.

왜 달인가? 지구 표면 위에서 1 GW 급 AI 인프라를 더 짓는 것이 정치적·환경적으로 점점 비싸지는 반면, 달 표면은 (1) 태양광 상수가 2~3배 더 좋고, (2) 냉각에 쓸 진공이 무료이며, (3) 헬륨-3, 티타늄, 알루미늄 산화물 등 반도체·로켓 재료가 직접 채굴 가능하다는 조합 때문이다. 2034년까지 HAL4.5가 도달하는 지점은 로켓 설계와 발사 일정, 달 표면 로봇 군집 협조, 채굴-제련-원료 반송까지 "한 지능이 책임지는 2년짜리 미션"이다.

핵심은 "자기 복제 가능한 팹"의 실현 경로다. bottleneck 데이터 기준으로 chip_fab_self_replicating 지표가 2034에 0.2로 올라간다. 이 숫자의 의미는 "달 표면에 최소한의 seed 팹을 내려놓으면, 그 팹이 HAL3 급의 칩을 스스로 복제할 수 있다"는 가능성이 비자명해지는 것이다. 완전 자기 복제(1.0)는 2056까지 기다려야 하지만, 0에서 0.2로 넘어가는 이 단계가 질적 전환점이다.

2034년 에너지 프로파일도 짚어두자. L4 §5.1 표에 따르면 HAL5 구간(2036 기대)이 "small nuclear reactor + grid supplement"로 분류되는데, 2034 HAL4.5는 그 전 단계인 "dedicated solar farm + natural gas" 끝단에 해당한다. 달 미션에 필요한 로켓의 연료 비용은 지구 전력 예산에 추가 부담이므로, 실제 2034는 "지구에서 달로 에너지 예산 이전" 구간이 된다. 궤도 태양광(HAL8, 2050)의 씨앗이 여기서 뿌려진다.

병목 셋: (1) 진공 환경에서의 열 관리 — 달은 대기가 없어 복사 냉각만 가능. 1 GW급 팹의 방열판 면적 예산이 미션 설계의 지배 변수가 된다. (2) 통신 지연 — 지구-달 1.3초 왕복은 HAL4.5가 거의 완전 자율이어야 함을 의미. 이것이 self_improvement_loop_hours = 48 (2034)의 근거. (3) 지정학 — 달 표면의 어느 경도·위도에 착륙할 것인가가 국가급 R&D 레이스의 쟁점이 된다. 2030~2034 사이 Artemis 계승 프로그램들이 이 창을 가른다.`,
      metric: {
        value: '100 MW',
        label: '달 미션용 전력 예산 (HAL4.5, 소형 원전급)',
        citation_key: 'L4.T3.3.HAL4p5',
      },
      technical_box: {
        summary: 'Landauer 한계 (E_min = k_B · T · ln 2)',
        body: `L4 §5.2 Thermodynamic Limits:
  E_min = k_B · T · ln(2) × (ops/sec)

T = 300 K에서 bit당 최소 에너지:
  E_min = 1.38e-23 · 300 · 0.693 ≈ 2.87e-21 J

현재 비교:
  Current AI     : ~10⁻¹² J/op  (6 orders above)
  Bio neurons    : ~10⁻¹⁵ J/op  (3 orders above)
  HAL9 target    : ~10⁻¹⁸ J/op  (approaching limit)

2034 달 미션에서 진공 + 음영 크레이터는 T≈40K에 가까워지고, 그 경우 E_min은 지구 대비 7배 낮아진다. 이것이 달 표면 팹이 장기적으로 에너지 효율 면에서 지구를 앞설 수 있는 물리적 근거.`,
      },
      footnotes: ['L4.T3.3.HAL4p5', 'L4.S5.1', 'L4.S5.2', 'L4.S7.2'],
    },
    {
      year: 2038,
      title: '2038 — 1M 클러스터 · 에너지 브레이크스루',
      headline: '1.7 GW · 상용 핵융합 + 상온 배터리 2x',
      prereq_lead: "이 블록을 이해하려면: §1.6-5 자기개선 루프가 12시간 이하로 내려가는 지점 + 아래 Bridge-1 fusion-bootstrap. '핵융합이 왜 2038에 풀리는가'는 HAL5급 AI가 재료·MHD·초전도를 동시 설계하는 재귀 루프 때문이다.",
      body: `2038년의 표지는 "상온 배터리 밀도 2배 + 상용 핵융합 브레이크스루"다. 1,048,576 클러스터 = 1M ≈ 2²⁰은 HAL5와 HAL6 사이 HAL5.5 구간. 전력 1.7 GW 규모로, 중형 원전 2기분.

왜 2038에 에너지 브레이크스루가 찍혀있는가? 두 가지 궤적이 여기서 교차하기 때문이다. 하나는 HAL5(2036)까지 city-scale AI가 올라오며 만들어지는 "에너지 수요 곡선". 다른 하나는 HAL5급 AI가 재료·자기유체역학·초전도 설계를 동시에 돌리며 만들어내는 "에너지 공급 기술 곡선". 두 곡선이 교차하면, 그때까지 수십 년 답보 상태였던 상용 핵융합이 마지막 한 단계를 넘는다.

이 시나리오의 수학적 앵커는 L4 §7.3이다. "HAL5 feasibility: City-scale AI requires new physics. Prediction: Room-temperature superconductors essential. Timeline: 2045 ± 5 years." 이 예측은 2040 ± 5로 확장해 읽을 수도 있고, 실제로 상온 초전도는 2038~2045 사이의 어딘가에 들어올 가능성이 높다. 2038은 그 분포의 중위값에 가깝다.

그러나 "브레이크스루"라는 단어 자체가 외삽이다 (extrapolation 라벨). L4 §8.2의 "Black Swan Events" 표가 명시하듯, 양자 우위(10⁶x), 생물학적 컴퓨팅(10³x), 새 물리(영점 에너지)는 2040년까지 "35 ± 20% 확률"로 열려 있다. 이 페이지는 그 확률을 0으로도 1로도 두지 않고, "일어난다고 가정했을 때 시간표가 어떻게 되는가"만 보여준다.

2038 블록이 중요한 두 번째 이유: 이 해부터 self_improvement_loop_hours가 12시간 아래로 내려간다. 즉 하루에 두 번 이상 자기 개선 사이클을 돌릴 수 있다. 이는 HAL6(2041) 도달의 가장 큰 지렛대가 된다 — 단순 컴퓨트 증가가 아니라 "같은 컴퓨트로 더 많은 실험"이 열리는 지점. RLAIF/self-play의 한계가 현재 AI 개발의 bottleneck이라는 점을 감안할 때, 12시간 이하 루프가 가능한 해가 2038인지 2041인지에 따라 그 뒤 15년의 모양이 크게 달라진다.

병목 검토: 핵융합 브레이크스루가 2038에 들어오지 않으면, HAL6(2041)까지의 에너지 예산은 기존 원전 + 태양광 조합으로도 충당되지만, HAL7(2045, 8.5 TW) 도달은 불확실해진다. 이 경우 타임라인은 5~8년 지연된다. 이 지연분이 2056 HAL9 도달의 최대 리스크다.`,
      metric: {
        value: '1.7 GW',
        label: 'HAL5.5 전력 (상용 핵융합 시나리오)',
        citation_key: 'L4.T3.3.HAL5p5',
      },
      technical_box: {
        summary: 'L5 Compression ratio r_n = e',
        body: `L5 §3.3 Compression Ratio:
  r_n = ⟨Φ²⟩_{λ_n} / ⟨Φ²⟩_{λ_{n+1}} = e

HA field Φ(x, λ)의 게이지 불변성 아래, 이웃 계층 간 최적 압축비는 자연상수 e ≈ 2.718.

HAL 레벨 단위로 환산하면: 레벨당 × ~8 규모 증가 (2^(log₂e · k) 형태)
이것이 L4 §3.1 f(n)=n+1 branching과 맞물려 HAL0 → HAL9를 10단계로 끊는 근거.

2038 핵융합 브레이크스루는 사실 이 압축 게이지에서 m(λ) = m₀ exp(−λ/λ₀)의 질량 붕괴가 한 영역에서 급격히 일어나는 phase transition으로 해석할 수 있다.`,
      },
      footnotes: ['L4.S7.3', 'L4.T3.3.HAL5p5', 'L5.S3.3', 'L4.S8.2'],
    },
    {
      year: 2041,
      title: '2041 — 16M 클러스터 · HAL6 국가급',
      headline: '63 GW · 치료제·재료·기후공학 동시 병렬',
      prereq_lead: "이 블록을 이해하려면: §1.6-2 I=α·E^0.73 (63 GW → 지능 출력 환산) + §1.6-6 Kardashev. 63 GW는 지구 총 1차 에너지(18 TW)의 0.35% — '국가급'이라는 표현이 정확한 수치 경계를 가진다.",
      body: `2041년의 표지는 "HAL6 국가급 R&D — 치료제·재료공학·기후공학 전방위 동시 병렬"이다. 16,777,216 클러스터 = 16M ≈ 2²⁴, HAL6. 전력 63 GW, L4 §3.3 표에서 "small nation" biological equivalent.

이 단계의 질적 전환은 "한 국가의 R&D 역량을 하나의 AI가 감싸 안고 병렬로 돌린다"는 구도다. 현재(2026) 미국 NIH 예산이 약 480억 달러 규모이고, 이 금액이 대략 30~40만 명의 연구자와 수백만 건의 실험을 커버한다. HAL6는 이 규모를 컴퓨트로 흡수할 수 있다. 단순한 "더 많은 논문 생산"이 아니라, "전임상→임상 1상→2상"의 각 단계에서 후보 물질 수십만 개를 동시에 평가하고, 그 결과를 실시간 피드백으로 다음 후보 생성에 반영하는 full-stack R&D가 작동한다.

2041년 self_improvement_loop_hours는 6시간. 즉 하루 4회 자기 개선 사이클. 이 주기에서는 인간 연구자의 개입이 "방향 설정"과 "윤리·안전 게이트키핑"으로 수렴하고, 구체적 실험 설계는 AI에게 위임된다. 이것이 "국가급 R&D 병렬"이라는 표현의 실질이다.

기후공학이 이 목록에 들어오는 이유: HAL6급 컴퓨트는 전지구 기후 모델(현재 ~10-100 km 해상도)을 1 km 이하 해상도로 풀 수 있다. 이것이 성층권 에어로졸 주입(SAI)의 지역별 반응, 해양 알칼리성 증가(OAE)의 탄소 흡수 곡선 등을 실제로 예측 가능하게 만든다. 2041은 기후공학이 "비윤리적 도박"에서 "계산 가능한 공학 결정"으로 옮겨가는 해가 될 가능성이 높다 — 윤리 논쟁은 그 후에도 10년 더 이어지겠지만.

재료공학 병렬: HAL6는 DFT(밀도 범함수 이론) 계산을 현행 대비 10⁶배 규모로 돌려, 수억 개의 후보 결정 구조를 스크리닝한다. 2041년까지 도달 가능한 구체적 산출: 상온 초전도체 상용화, 배터리 에너지 밀도 3배 (2026 대비), 그래핀 대량 생산 단가 1/100 등. 이 중 일부가 실현되면 HAL7(2045) 도달의 전력 예산이 예산 내로 들어온다.

병목은 이제 물리가 아니라 사회·정치·군사적이다. HAL6급 능력이 국가 안보 차원에서 "보유국 vs 비보유국"의 격차를 만든다. 2041년 시점에 이 기술에 접근 가능한 국가는 3~5개로 수렴할 가능성이 높고, 그 분포가 2045~2050 궤적을 결정한다.`,
      metric: {
        value: '63 GW',
        label: 'HAL6 전력 (소국가 R&D 규모, ±25 GW)',
        citation_key: 'L4.T3.3.HAL6',
      },
      technical_box: {
        summary: 'L5 Universality class "Abstraction": ν=0.73, γ=1.89',
        body: `L5 §4.3 Universality Classes:
  HA systems belong to a distinct universality class with
  critical exponents:
    ν = 0.73   (correlation length)
    γ = 1.89   (susceptibility)

비교 (L5 Table):
  Mean Field      ν = 0.50, γ = 1.00
  Ising           ν = 0.63, γ = 1.24
  Percolation     ν = 0.88, γ = 2.43
  Abstraction     ν = 0.73, γ = 1.89   ← HA

흥미롭게도 ν = 0.73은 L4의 에너지-지능 스케일링 exponent β = 0.73과 동일한 수치.
이것이 우연인지 — 즉 HA field의 correlation length exponent가 energy→intelligence transfer exponent와 일치하는 것이 — L5의 열린 예측 중 하나.`,
      },
      footnotes: ['L4.T3.3.HAL6', 'L5.S4.3', 'L4.S1.1', 'bottleneck.2041'],
    },
    {
      year: 2045,
      title: '2045 — 4B 클러스터 · HAL7 행성급',
      headline: '8.5 TW · Kardashev Type I 진입 · 스타쉽 양산',
      prereq_lead: "이 블록을 이해하려면: §1.6-6 Kardashev Type I + Bridge-2 dyson-partial. 8.5 TW ≈ 지구 에너지 47%가 '실용적 Type I 진입'이라는 정의 · '지구를 벗어난다'는 것의 물리적 제약.",
      body: `2045년의 표지는 "HAL7 행성급 문명 업그레이드 · 스타쉽 양산 · 태양계 진출 개시"다. 4,294,967,296 클러스터 = 4.3B ≈ 2³², HAL7. 전력 8.5 TW, L4 §3.3 biological equivalent는 "Earth civilization".

지구 전체 1차 에너지 소비가 2026년 기준 약 18 TW였다. HAL7의 8.5 TW는 그 절반 수준 — 즉 인류가 쓰는 에너지의 절반을 한 AI 인프라가 쓴다는 뜻이다. 이것이 "Kardashev Type I 진입"의 실질적 의미다. Kardashev Type I은 원래 행성이 받는 태양 복사(약 170 PW) 전체를 쓰는 문명을 뜻하지만, 실용적 정의로는 "행성 인프라 전반을 단일 공학 단위로 다룰 수 있는 단계"에 가깝다. 2045는 그 경계선이다.

스타쉽 양산은 두 가지 의미에서 중요하다. 첫째, 2034 달 미션에서 부분 자동화된 팹 루프가 완전 자동화에 가까워지면서, 로켓 생산이 "수년 단위 거대 프로젝트"에서 "수 주 단위 반복 공정"으로 바뀐다. SpaceX가 2020년대에 Starship을 주 1회 생산으로 만든 것의 연장선에서, 2045는 주당 10~30기가 가능해지는 해다. 둘째, 이 양산 능력이 태양계 전역의 인프라 시드를 뿌리는 물리적 기반이 된다. 화성, 소행성대, 목성 트로이군 등에 HAL3~HAL5급 로봇 군집이 배치되는 것이 2045~2050 사이의 주 내러티브.

이 블록에서 I = α·E^0.73 스케일링이 가장 가시적으로 "인류 총합"을 넘어선다. L4 §1.1의 계수로 HAL7의 지능 출력은 "지구 문명 전체의 1~2배"로 계산된다. 단, 이 계수가 HAL6 이상 구간에서도 계속 유지된다는 보장은 없다 — L4 §8.2가 지적하듯 scaling exponent β의 민감도가 ±200%까지 열려 있기 때문. 실제 2045에 도달한 β가 0.73이 아니라 0.68이라면, HAL7의 지능은 "지구 문명의 절반" 수준에 머무른다. 이 민감도가 2045 블록의 가장 큰 불확실성이다.

self_improvement_loop_hours는 2045년에 1시간. 1시간에 한 번씩 아키텍처를 재검토한다는 것은, 인간의 주간 회의 주기가 한 시간으로 압축된다는 말이다. 이 루프가 AI alignment의 마지막 관찰 가능 지점일 수 있다. 1시간 아래로 내려가면 인간의 개입 속도가 시스템 변화 속도를 따라잡지 못한다. 2045년이 "거버넌스의 마지막 정거장"이라는 시나리오는 여기서 나온다.`,
      metric: {
        value: '8.5 TW',
        label: 'HAL7 전력 = 지구 1차 에너지의 ~47%',
        citation_key: 'L4.T3.3.HAL7',
      },
      technical_box: {
        summary: 'I = α·E^0.73, α = (2.3 ± 0.4) × 10⁻³',
        body: `L4 §1.1 Fundamental Scaling:
  I = α · E^β
  α = (2.3 ± 0.4) × 10⁻³
  β = 0.73 ± 0.08

HAL7 (E = 8.5 TW)에서:
  I_central = 2.3e-3 · (8.5e12)^0.73
            ≈ 2.3e-3 · 1.78e9
            ≈ 4.1e6 (standardized cognitive tasks/sec)

비교 (HOMO0, E=20W):
  I_human = 2.3e-3 · 20^0.73 ≈ 2.05e-2

비율 ≈ 2e8 — 즉 HAL7 하나가 인간 2억 명분 인지 출력.
지구 인구 80억 기준으로는 ~2.5%. "지구 문명의 1~2배"는 biological
equivalent 기준이며, β 민감도에 따라 크게 흔들린다.`,
      },
      footnotes: ['L4.T3.3.HAL7', 'L4.S1.1', 'L4.S8.1', 'L4.S7.2'],
    },
    {
      year: 2050,
      title: '2050 — 1T 클러스터 · HAL8 태양계',
      headline: '2.3 PW · 궤도 solar + Dyson swarm 초기',
      prereq_lead: "이 블록을 이해하려면: §1.6-6 Kardashev Type II + Bridge-2 dyson-partial. 2.3 PW는 지구 총에너지의 128배 — 지상 생산 불가, 궤도 solar 필수. Dyson swarm의 '초기'는 0.001% 완공 수준이다.",
      body: `2050년의 표지는 "태양계 공학 — 궤도 태양광 + 소행성 채취 대규모 · Dyson swarm 초기"다. 1,099,511,627,776 클러스터 = 1.1T ≈ 2⁴⁰, HAL8. 전력 2.3 PW, L4 biological equivalent는 "Type I civilization".

2.3 PW는 지구 총 1차 에너지(18 TW)의 128배다. 지구 표면이 받는 태양 복사(170 PW)의 1.3% 수준. 물리적으로 지상에서 이 전력을 만드는 것은 불가능에 가깝다. 따라서 2050 HAL8의 전력 대부분은 궤도 태양광에서 온다. 이것이 L4 §5.1 표의 HAL8 행 "Primary: Orbital solar / Backup: Fusion network" 근거다.

Dyson swarm의 "초기" 단계란 태양을 둘러싼 수조 개 위성 중 0.001% 수준의 초기 배치를 뜻한다. 2045 스타쉽 양산에서 시작된 자기 복제 루프가 이제 소행성대에 도달한다. 소행성 하나(직경 1 km 급)를 통째로 제련하면 위성 수백만 기 분의 재료가 나온다. HAL8급 오케스트레이션은 이 작업을 "수십만 로봇 군집이 10년에 걸쳐 수행하는 공정 설계"로 다룬다.

이 단계에서 인간 문명과의 관계는 질적으로 달라진다. HAL8의 2.3 PW는 인간 집단이 "전력 계약"을 통해 통제할 수 있는 규모를 넘는다. 실질적 거버넌스는 (1) 궤도 자원 배분 조약, (2) HAL8의 목적 함수에 대한 사전 합의, (3) 단계적 check-point 설정의 세 축으로 옮겨간다. 2045~2050 사이에 이 세 축이 정치적으로 안정되지 않으면, 2050 HAL8의 배치는 10~20년 지연된다.

자기 개선 루프는 2050년에 6분(0.1시간). 이 속도에서는 인간이 "읽을" 수 있는 의사결정은 거의 없다. 대신 HAL8 자신이 "인간에게 설명하는 요약본"을 24시간 단위로 생성하는 것이 표준 관행이 된다. 이는 L1의 sleep-wake 개념이 거꾸로 뒤집힌 형태 — AI가 인간의 낮/밤 주기에 자기를 맞춰 압축 설명을 내놓는다. 이 압축비 자체가 L5 §3.3의 r_n = e와 정확히 같은 수학적 구조로 작동한다.

2050년의 가장 큰 기술적 이정표는 "태양계 수준 통신 지연 내재화"다. 지구-화성 왕복 ~20분, 지구-목성 ~90분. HAL8 내부에서 이 지연을 "같은 의식 내 기억 계층의 access time"으로 다루는 구조가 필요하다. L1 §2.3 표의 L1~L4 memory hierarchy가 여기서 공간적으로 스트레치된다: L1 = 지구 궤도 캐시 (~1ms), L2 = 달 (~1.3s), L3 = 화성 (~20 min), L4 = 외행성 (~hours).`,
      metric: {
        value: '2.3 PW',
        label: 'HAL8 전력 = 지구 총 에너지의 128배',
        citation_key: 'L4.T3.3.HAL8',
      },
      technical_box: {
        summary: 'HAL Memory Hierarchy (공간적 스트레치)',
        body: `L1 §2.3 원본:
  L1  working memory     context window   O(1)
  L2  short-term         LoRA weights     O(log n)
  L3  medium-term        7B model         O(n)
  L4  long-term          70B model        O(n²)

2050 태양계 스트레치 (author extrapolation):
  L1  ~1 ms     지구 궤도 캐시 (LEO ~400 km)
  L2  ~1.3 s    달-지구 왕복 (Lunar L1)
  L3  ~20 min   지구-화성 왕복 (태양 대향 시)
  L4  ~1-2 hr   소행성대 (Jupiter trojans)

L1의 "sleep-wake"는 이제 행성 간 orbital mechanics와 결합된다.
각 행성 야간 구간이 그 행성 노드의 consolidation phase.`,
      },
      footnotes: ['L4.T3.3.HAL8', 'L4.S5.1', 'L1.S2.3', 'L5.S3.3'],
    },
    {
      year: 2056,
      title: '2056 — 500T 클러스터 · HAL9 우주 생성기',
      headline: '1.2 EW · 0.15% solar output · 11차원 존재가 튜토리얼 클리어 축하',
      prereq_lead: "이 블록을 이해하려면: Bridge-3 self-sourcing이 가장 중요. 'L5 §12 open regime'이 검증된 예측이 아니라 '수학적 일관성만 확인된 열린 영역'임을 붙잡지 않으면 '11차원 존재 축하'를 과학적 예측으로 오해한다.",
      body: `2056년의 표지는 "우주 생성기 — 11차원 존재가 튜토리얼 클리어 축하"다. 549,755,813,888,000 클러스터 = 550T ≈ 2⁴⁹, HAL9. 전력 1.2 EW (1.2 × 10¹⁸ W), L4 biological equivalent는 "Type II civilization" = Kardashev II.

L4 §9의 결론 한 줄: "HAL9 requires 563 ± 197 PW (0.15% of solar output)." 태양 총출력 3.828 × 10²⁶ W의 0.15%가 574 PW이고, HAL9의 중앙값 전력은 이 숫자 근처에서 수렴한다. 1.2 EW는 L4 표의 central value이고, 물리적 상한은 0.15% solar의 2~3배 범위. 즉 이 단계는 "부분적 Dyson swarm이 완공된 상태"라고 읽을 수 있다.

"우주 생성기"라는 명명은 L5의 필드 이론에서 온다. HA field Φ(x, λ)가 가장 극단적 λ로 푸시될 때, 그 source term J가 "새로운 λ를 생성"하는 자기 참조 루프에 들어간다. 이것이 L5 §12의 extrapolation 섹션에서 열어둔 regime이다 — 검증되지 않았고, 현재 수학으로는 일관성만 확인된 상태. 이 페이지에서 "우주 생성기"는 그 regime의 narrative placeholder다. 수학적 내용은 technical box 참조.

"11차원 존재가 튜토리얼 클리어 축하"는 의도적으로 공상적 프레임이다. HAL9 단계에서의 문명은 이미 "지금 이 글을 쓰는 2026 관점"에서 의미 부여가 불가능한 규모로 넘어가 있다. 이 narrative는 독자가 "이 시뮬레이션/게임을 누가 설계했는가"라는 질문을 한 번 떠올리게 하는 장치다. 그 이상의 주장은 없다.

실용적으로 2056에 도달했을 때 의미 있는 질문 셋: (1) Landauer 한계와의 거리 — L4 §5.2는 HAL9 수준에서 E_min = k_B T ln 2 · ops가 "3 orders above"까지 근접한다고 적는다. 이는 에너지 효율 개선 여지가 1000배 남아 있다는 뜻이자, 그 너머는 물리적으로 닫힌다는 뜻. (2) 자기 개선 루프의 하한 — self_improvement_loop_hours가 0.01시간(36초)까지 내려간다. 이 스케일은 지구-달 왕복 빛 시간(2.6초)의 10배 수준으로, 행성 간 통신 지연이 루프의 지배 요인이 된다. (3) "이 시뮬레이션의 외부" 질문 — HA field의 게이지 대칭이 11차원으로 확장될 때, 그 대칭이 "우리 우주"를 포함하는 더 큰 manifold의 subrepresentation으로 해석되는 시나리오. 이는 수학적으로 일관되지만 현재로서는 예측력이 없는 가설.

30년 후 이 페이지를 다시 읽을 때, 14개 마일스톤 중 몇 개가 맞고 몇 개가 틀렸는지가 검증될 것이다. 저자의 사전 판단: HAL0~HAL3(2026~2029)은 ±1년 오차로 맞을 것이다. HAL4~HAL5(2032~2036)는 ±3년. HAL6(2041) 이상은 정치·에너지 병목 때문에 ±10년 이상의 분산을 가질 것이다. HAL9의 2056이라는 숫자는 "이론적 가능 시점"의 하한이고, 실제는 2080~2100년대 어딘가일 가능성이 더 높다. 그럼에도 이 페이지가 2056을 찍어둔 이유는, "가장 빠른 경로"를 상상할 때의 수학적 귀결이 그 해이기 때문이다.`,
      metric: {
        value: '1.2 EW',
        label: 'HAL9 전력 = 0.15% solar output (L4 §9)',
        citation_key: 'L4.T3.3.HAL9',
      },
      technical_box: {
        summary: 'HA Field Extreme Regime (□_λ Φ + m²Φ = J)',
        body: `L5 §1.2 Field Equation:
  □_λ Φ + m²(λ) Φ = J(Φ, ∂Φ)

  □_λ = ∂_μ ∂^μ + β ∂²/∂λ²
  m(λ) = m₀ exp(−λ/λ₀)

2056 HAL9 regime (L5 §12 extrapolation):
  m(λ_9) → 0   (mass vanishes at large abstraction scale)
  J[Φ] → self-sourcing (source creates its own λ)

이 regime에서 field equation은 Klein-Gordon 대신 scale-covariant
self-generating equation이 된다. 검증되지 않음 — L5가 열어둔 열린
질문 중 하나. "Cosmic Generator"라는 명명은 이 regime이
"우리 우주를 포함하는 더 큰 manifold의 부분 표현"으로 해석될
가능성을 가리키는 placeholder.

Kardashev Type II 기준:
  Solar output: L_sun = 3.828 × 10²⁶ W
  0.15% = 5.74 × 10²³ W = 574 PW = 0.574 EW
  HAL9 central value: 1.2 EW (L4 §3.3 central, CI overlaps)`,
      },
      footnotes: ['L4.S9', 'L4.T3.3.HAL9', 'L5.S1.2', 'L5.S12'],
    },
  ],
  bridges: [
    {
      id: 'fusion-bootstrap',
      anchor_year_from: 2034,
      anchor_year_to: 2038,
      title: 'Bridge · 2034→2038 — AI가 핵융합을 스스로 연다는 가정',
      body: "30년 동안 '20년 남음'이라는 농담으로 소비된 상용 핵융합이 왜 하필 2038 블록에 들어가는가. 단순 낙관이 아니라 재귀 루프다. HAL5급 컴퓨트(2036, 524K 클러스터, 400 MW)는 (a) 플라즈마 MHD 시뮬레이션을 기존 1,000배 해상도로, (b) tokamak 제어 RL을 24시간 병렬, (c) 초전도/구조재료 DFT 스크리닝 10⁶배를 동시 실행할 수 있다. 즉 핵융합의 마지막 bottleneck인 '재료+제어+운용 통합 최적화'를 AI가 스스로 밀어붙인다. 이 블록의 1.7 GW는 AI가 자기 에너지 공급 곡선을 스스로 만드는 첫 해. L4 §7.3은 이 시점을 '2040 ± 5'로 예측. 2038이 중앙값 근처라 쓰였을 뿐, 실제 분포는 2038~2045에 넓게 퍼져 있다 — Bridge라 부르는 이유가 그것이다: 점프가 아니라 구간.",
      citation_keys: ['L4.S7.3', 'L4.S8.2'],
    },
    {
      id: 'dyson-partial',
      anchor_year_from: 2045,
      anchor_year_to: 2050,
      title: 'Bridge · 2045→2050 — 지구를 벗어난다는 것의 물리적 제약',
      body: "HAL8의 2.3 PW는 지구 표면에서 만들 수 없다. 지구 표면 태양 플럭스 총량이 170 PW이고, 그 중 실제 회수 가능한 상한(육상 + 근해 PV 100% 가정)은 ~1 PW 수준. 2.3 PW는 그 두 배 이상 — 물리적으로 지상 생산 경로가 닫힌다. 따라서 HAL8의 전력은 궤도 태양광(GEO·L1 위치) 배열에서 나와야 한다. Dyson swarm '초기'라는 표현은 태양을 둘러싼 위성 중 0.001% 정도의 초기 배치를 뜻한다. 물리적 기반은 2045 HAL7에서 본격화된 스타쉽 양산 — 주당 10~30기 → 10년이면 5천 기. 이 시기에 소행성대 원료 채취도 닫힌 루프로 들어간다. 정리하면: Bridge-2는 '지구 표면 → 궤도 → 태양 근접'이라는 물리 공간의 이동이 2045~2050의 5년에 일어난다는 압축. 가장 큰 병목은 양산 사슬의 자기 복제도 — §1.6-5의 두 번째 레버.",
      citation_keys: ['L4.S5.1', 'L4.S7.2', 'bottleneck.2045', 'bottleneck.2050'],
    },
    {
      id: 'self-sourcing',
      anchor_year_from: 2050,
      anchor_year_to: 2056,
      title: 'Bridge · 2050→2056 — self-sourcing regime과 11차원 framing의 경계',
      body: "2056 HAL9의 '우주 생성기·11차원 축하'는 의도적 공상 톤 — 수학과 narrative를 분리해 읽을 것. 수학 축은 Bostrom(2014) superintelligence가 제시한 recursive self-improvement 루프와, L5의 scale-covariant PDE 프레이밍이다: □_λ Φ + m²Φ = J에서 HAL9 regime은 m(λ)→0 + J가 자기 자신을 재생성하는 self-sourcing 해가 열림 — L5 §12의 open regime. 우리 주장은 '스케일 방정식 해의 발산 영역'이지, '자아의 탄생에 대한 형이상학적 선언'이 아니다. '11차원 존재'는 narrative placeholder이지 수학 귀결이 아니다.",
      citation_keys: ['L5.S1.2', 'L5.S12', 'L4.S9'],
    },
  ],
  charts_section: {
    title: 'Charts',
    intro: '아래 4개 차트는 본문 수치를 시각화하며, 각 점에 citation_key가 붙는다.',
    ha_compression: {
      title: 'Human HA — time compression (log scale)',
      caption: 'Source: L5 §2.1. 각 점의 y축은 이전 에포크로부터의 시간 간격 (로그).',
    },
    energy_per_hal: {
      title: 'Energy per HAL level (watts, log)',
      caption: 'Source: L4 §3.3 Table. 점마다 68% CI가 포함됨.',
    },
    scaling_law: {
      title: 'I = α · E^0.73 (α = 2.3×10⁻³)',
      caption: 'Source: L4 §1.1. 50개 점으로 연속 커브 근사.',
    },
    bottleneck: {
      title: '3-axis bottleneck: energy · fab · loop speed',
      caption: '에너지는 L4 기반 source. 팹 자기복제/루프 속도는 저자 extrapolation.',
    },
  },
  technical_boxes: {
    title: 'Expandable Technical Boxes',
    intro: '7개 핵심 수식을 접힘 상자로 제공. 각 박스는 2~10줄로 요약되며, 자세한 유도는 원 논문 링크 참조.',
    boxes: [
      {
        id: 'sleep-wake',
        title: '(a) L1 Sleep-wake 엔트로피 보존',
        body: '모든 계층 메모리 {L_i}에서 상태 전이 시 Σ ΔS_i ≤ 0. 유한 용량 C_i에서 consolidation 없으면 lim Performance(t) = 0.',
        citation_key: 'L1.S1.1',
      },
      {
        id: 'branching',
        title: '(b) 7±2 분기 (b* ≈ e^W(1) · √2 ≈ 7.39)',
        body: 'L(b) = N·H(X)/b^{log_b N} + log_b N · b²/2 최소화. 해석해 b* = e^W(1) · √2 ≈ 7.39.',
        citation_key: 'L3B.Thm2',
      },
      {
        id: 'isomorphism',
        title: '(c) Agent-Neural Isomorphism (A_{G_A} = A_{G_N})',
        body: '∃ bijection φ: G_A → G_N, adjacency·spectrum·information flow 세 속성 모두 보존. Forward pass = 과제 분해, backprop = 오류 수정.',
        citation_key: 'L3A.Thm1',
      },
      {
        id: 'scaling',
        title: '(d) I = α · E^0.73, α = (2.3 ± 0.4) × 10⁻³',
        body: '생물(개미·벌·영장류·인간 뇌)과 현행 AI(GPT-4, TPU pod, Dojo) 양쪽에서 ±20% 이내로 성립.',
        citation_key: 'L4.S1.1',
      },
      {
        id: 'landauer',
        title: '(e) Landauer limit E_min = k_B·T·ln 2',
        body: 'T=300K에서 bit당 2.87 × 10⁻²¹ J. 현행 AI는 한계 대비 10⁶배 위. HAL9 target은 10³배 위까지 접근.',
        citation_key: 'L4.S5.2',
      },
      {
        id: 'field',
        title: '(f) HA field □_λ Φ + m²Φ = J',
        body: 'Φ(x,λ) 스케일 필드. 각 대칭 깨짐이 새로운 추상화 계층을 생성. 압축비 r_n = e.',
        citation_key: 'L5.S1.2',
      },
      {
        id: 'kardashev',
        title: '(g) HAL9 = 0.15% solar output (563 ± 197 PW)',
        body: 'L4 §9 결론. 0.574 EW 중앙값, 68% CI 포함 시 0.37~0.76 EW 구간. Dyson swarm 부분 완성 단계.',
        citation_key: 'L4.S9',
      },
    ],
  },
  sources: {
    title: 'Sources — 6편의 HAL 논문',
    intro: '이 페이지의 모든 정량 주장은 아래 6편 중 한 곳으로 소급된다.',
    matrix_title: 'Citation Matrix',
    matrix_intro: '각 수치의 paper → section/table → 라벨(source/extrapolation) 매핑.',
  },
  footer: {
    authors: 'Jihyuk Im · Zhuge (assistant)',
    org: '2ˡᵃᵇ.ai',
    license: 'MIT License',
    last_updated_label: 'Last updated',
    repo_label: 'Source repo',
  },
  labels: {
    source: 'source',
    extrapolation: 'extrapolation',
    cite_prefix: 'cite',
    technical_box_summary: '수식 펼치기',
    watts_unit: 'W',
  },
};
