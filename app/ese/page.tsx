import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { WaveMark } from "@/components/wave-mark";

export const metadata: Metadata = {
  title: "ESE | YULLAB Expression Sound Engine",
  description:
    "ESE는 LLM의 감정 해석과 음성 생성 사이에서 표현 파라미터를 설계하는 율랩의 Expression Sound Engine입니다."
};

const heroPoints = [
  "LLM과 TTS 사이에서 작동하는 표현 레이어",
  "감정 구조를 음성 표현 파라미터로 변환",
  "AI Voice, 오디오북, NPC, Companion까지 확장 가능한 범용 엔진"
];

const flowSteps = [
  {
    name: "User Prompt",
    body: "상황과 대사 입력"
  },
  {
    name: "LLM Emotion Analysis",
    body: "감정 구조, 관계 맥락, 온도, 감정 흐름 해석"
  },
  {
    name: "ESE Mapping Engine",
    body: "감정 구조를 표현 파라미터 벡터로 변환"
  },
  {
    name: "TTS / Voice Model",
    body: "표현값을 반영한 음성 생성"
  },
  {
    name: "Expressive Voice Output",
    body: "상황과 감정을 반영한 최종 음성 출력"
  }
];

const parameters = [
  ["Breath", "호흡의 밀도와 흔들림"],
  ["Pause", "말 전후의 침묵 길이"],
  ["Latency", "감정이 머뭇거리는 지연감"],
  ["Pressure", "소리의 힘과 압력"],
  ["Energy", "발화에 담긴 에너지"],
  ["Pitch Curve", "음정의 곡선과 이동"],
  ["Ending Drift", "어미가 흐르는 방향"],
  ["Tremble", "미세한 떨림과 흔들림"],
  ["Tempo", "말의 속도와 밀도"],
  ["Depth", "소리의 깊이와 거리감"],
  ["Emotional Compression", "감정이 눌리거나 응축되는 정도"]
];

const feedbackCards = [
  {
    quote: "그리움은 유지하되 절망감은 줄여줘.",
    body: "ESE는 문장만 바꾸는 것이 아니라 호흡, 압력, 침묵, 어미의 흐름을 다시 조정합니다."
  },
  {
    quote: "울지는 않지만 감정은 참고 있는 목소리로.",
    body: "감정 라벨이 아니라 표현 파라미터를 조절해 연기 방향을 더 정밀하게 반영합니다."
  },
  {
    quote: "조금 더 조심스럽고 낮은 톤으로.",
    body: "LLM의 의도 해석과 음성 생성 사이에서 표현값을 다시 매핑합니다."
  }
];

const differenceCards = [
  {
    label: "Layer",
    title: "LLM이 발전할수록 함께 발전합니다",
    body: "ESE는 LLM 위에 얹히는 표현 레이어입니다. 감정 해석이 정교해질수록 더 정밀한 표현 입력을 받아 더 자연스러운 출력을 만들 수 있습니다."
  },
  {
    label: "Data",
    title: "인간 표현 데이터를 자산으로 축적합니다",
    body: "율랩은 단어가 아니라 호흡, 속도, 압력, 억양, 침묵의 패턴을 추적합니다. 감정이 어떻게 들리는지를 데이터화합니다."
  },
  {
    label: "Scale",
    title: "특정 앱이 아닌 범용 표현 인프라입니다",
    body: "AI Voice, 오디오북, 게임 NPC, AI Companion, 교육, 상담, 영상 생성 등 표현이 필요한 다양한 시스템 위에 얹을 수 있습니다."
  }
];

const applications = [
  ["AI Voice / Dubbing", "감정 표현이 필요한 AI 성우, 더빙, 내레이션"],
  ["Audiobook / Storytelling", "장면과 인물 감정에 맞춘 낭독 표현"],
  ["Game NPC / Character Voice", "상황과 관계를 반영하는 캐릭터 음성"],
  ["AI Companion", "대화 맥락에 맞춘 정서적 응답"],
  ["Education / Coaching", "보컬, 말하기, 발성의 표현 피드백"],
  ["Broadcast / Content", "콘텐츠 제작을 위한 표현형 음성 생성"]
];

const faqs = [
  {
    q: "ESE는 TTS인가요?",
    a: "아닙니다. ESE는 텍스트를 직접 읽는 음성 합성기가 아니라, LLM의 감정 해석 결과를 TTS가 표현할 수 있는 파라미터 구조로 바꾸는 엔진입니다."
  },
  {
    q: "ESE는 감정을 분류하는 엔진인가요?",
    a: "아닙니다. ESE는 감정 이름보다 감정을 느끼게 만드는 표현 물리량을 다룹니다. 율랩은 감정을 분류하는 것보다 표현을 제어하는 것에 집중합니다."
  },
  {
    q: "어떤 모델과 함께 쓸 수 있나요?",
    a: "ESE는 특정 단일 모델에 종속되지 않는 레이어 구조를 지향합니다. LLM의 감정 해석 결과와 음성 생성 모델 사이에서 작동하도록 설계됩니다."
  }
];

function ESection({
  eyebrow,
  title,
  accent,
  children,
  tone = "base"
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  children: React.ReactNode;
  tone?: "base" | "soft";
}) {
  return (
    <section className={`ese-section ${tone === "soft" ? "ese-section-soft" : ""}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="ese-title">
          <span>{title}</span>
          {accent ? <span className="text-accent">{accent}</span> : null}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default function EsePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-primary">
      <SiteHeader current="ese" />

      <section className="ese-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(82,78,118,0.13),transparent_34%),linear-gradient(135deg,#0D0E14_8%,#11111A_52%,#141522_100%)]" />
        <div className="relative z-10 mx-auto grid min-h-[86svh] max-w-7xl items-center gap-14 px-5 pt-24 pb-16 sm:px-8 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <p className="eyebrow mb-6">Expression Sound Engine</p>
            <h1 className="ese-hero-title">
              <span>ESE는 감정을 분류하지 않습니다.</span>
              <span className="text-accent">감정을 표현으로 바꿉니다.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-body-large">
              ESE(Expression Sound Engine)는 율랩이 개발한 Expressive Layer입니다.
              LLM이 해석한 감정 구조를 호흡, 압력, 지연, 사운드, 떨림, 깊이 같은
              표현 파라미터로 변환해 AI가 더 인간적으로 말하고 노래하도록 만드는 표현
              엔진입니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="button-primary" href="/#contact">
                기술 문의하기
              </a>
              <a className="button-secondary" href="/">
                율랩 홈페이지 보기
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroPoints.map((point) => (
                <div className="ese-mini-card" key={point}>
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <WaveMark variant="hero" />
          </div>
        </div>
      </section>

      <ESection
        eyebrow="Definition"
        title="LLM이 감정을 이해한다면"
        accent="ESE는 그 감정을 어떻게 표현할지 설계합니다"
        tone="soft"
      >
        <div className="ese-two-col">
          <div className="space-y-5 text-body-large">
            <p>
              ESE는 텍스트를 직접 읽는 TTS가 아닙니다. 또한 감정을 기쁨, 슬픔,
              분노처럼 분류하는 Emotion AI도 아닙니다.
            </p>
            <p>
              ESE는 LLM과 음성 합성 모델 사이에 위치하는 중간 엔진으로, 화면과 대사
              안에 담긴 감정 구조를 실제 음성 표현값으로 변환합니다.
            </p>
            <p>
              같은 “기다렸어”라는 말이라도 위로, 서운함, 체념, 반가움은 서로 다른
              호흡과 압력, 침묵과 어미를 가져야 합니다. ESE는 이 차이를 감정 라벨이
              아니라 표현의 흐름으로 다룹니다.
            </p>
          </div>
          <div className="ese-quote-card">
            <p>“감정이 아니라 표현을 다룹니다.”</p>
            <p>“라벨이 아니라 흐름을 구조화합니다.”</p>
          </div>
        </div>
      </ESection>

      <ESection eyebrow="Architecture" title="ESE는 LLM과 TTS 사이에서" accent="작동합니다">
        <div className="ese-flow">
          {flowSteps.map((step, index) => (
            <article className="ese-flow-card" key={step.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.name}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
        <p className="ese-note">
          LLM의 역할은 감정 해석입니다. ESE의 역할은 표현 변환입니다. TTS의 역할은
          최종 음성 출력입니다. 율랩은 그 사이에서 비어 있던 표현 레이어를 구축합니다.
        </p>
      </ESection>

      <ESection
        eyebrow="Parameters"
        title="ESE가 제어하는 것은 감정명이 아니라"
        accent="표현 파라미터입니다"
        tone="soft"
      >
        <p className="ese-lead">
          사람의 목소리는 감정 이름만으로 설명되지 않습니다. 같은 슬픔이라도 어떤
          슬픔은 담담하고, 어떤 슬픔은 무너지고, 어떤 그리움은 미련보다 체념에
          가깝습니다.
        </p>
        <div className="ese-param-grid">
          {parameters.map(([name, body]) => (
            <article className="ese-param-card" key={name}>
              <h3>{name}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </ESection>

      <ESection eyebrow="Feedback" title="ESE는 결과를 다시 뽑는 것이 아니라" accent="표현을 디렉팅하게 합니다">
        <div className="ese-card-grid">
          {feedbackCards.map((card) => (
            <article className="ese-detail-card" key={card.quote}>
              <h3>{card.quote}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
        <p className="ese-note">
          사용자는 AI 음성을 단순히 재생성하는 것이 아니라, 감독이나 성우 디렉터처럼
          표현을 직접 연출할 수 있습니다.
        </p>
      </ESection>

      <ESection
        eyebrow="Why Now"
        title="AI의 다음 경쟁력은"
        accent="무엇을 말할까보다 어떻게 말할까에 있습니다"
        tone="soft"
      >
        <div className="ese-two-col">
          <div className="space-y-5 text-body-large">
            <p>
              오늘의 AI는 이미 많은 것을 할 수 있습니다. 글을 쓰고, 그림을 만들고,
              영상을 생성하고, 대화를 구성합니다.
            </p>
            <p>
              하지만 사람이 AI를 자연스럽다고 느끼는 순간은 정보의 정확성만으로 오지
              않습니다. 말의 결, 감정의 압력, 침묵의 길이, 숨을 쉬는 방식 같은 표현이
              함께 작동해야 비로소 인간적으로 느껴집니다.
            </p>
          </div>
          <div className="ese-layer-card">
            <span>Cognition Layer</span>
            <span className="text-accent">Expression Layer · ESE</span>
            <span>Voice Layer</span>
          </div>
        </div>
      </ESection>

      <ESection eyebrow="Difference" title="ESE는 모델 하나가 아니라" accent="표현 데이터 인프라를 구축합니다">
        <div className="ese-card-grid">
          {differenceCards.map((card) => (
            <article className="ese-detail-card" key={card.title}>
              <span className="ese-card-label">{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </ESection>

      <ESection eyebrow="Applications" title="ESE는 하나의 제품이 아니라" accent="여러 산업 위에 올라가는 표현 엔진입니다" tone="soft">
        <div className="ese-app-grid">
          {applications.map(([title, body]) => (
            <article className="ese-app-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </ESection>

      <ESection eyebrow="FAQ" title="자주 묻는 질문">
        <div className="ese-faq-grid">
          {faqs.map((faq) => (
            <article className="ese-detail-card" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </ESection>

      <section className="ese-cta">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="eyebrow">Build With YULLAB</p>
          <h2 className="contact-title">
            <span>표현은 AI의 마지막 디테일이 아니라</span>
            <span className="text-accent">다음 경쟁력입니다</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-body-large">
            율랩은 목소리와 음악 안에 담긴 표현을 분석하고, 비교하고, 생성할 수 있는
            구조로 바꾸고 있습니다. ESE는 AI가 사람처럼 말하고 노래하도록 만드는 표현
            인프라입니다.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="button-primary" href="/#contact">
              사업 / 기술 문의하기
            </a>
            <a className="button-secondary" href="/">
              율랩 메인으로 돌아가기
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
