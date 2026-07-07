import { DataField } from "@/components/data-field";
import { Section } from "@/components/section";
import { SiteHeader } from "@/components/site-header";
import { WaveMark } from "@/components/wave-mark";

const SORI_ON_URL = "https://sori-on.com";

const pipelineSteps = [
  {
    number: "01",
    label: "INPUT",
    title: "표현 신호 입력",
    body: "텍스트, 음성, 기준 퍼포먼스 안에 담긴 표현 단서를 읽어옵니다."
  },
  {
    number: "02",
    label: "INTERPRET",
    title: "표현 흐름 해석",
    body: "표현을 감정 이름이 아니라, 시간축 위에서 움직이는 변화 구조로 해석합니다."
  },
  {
    number: "03",
    label: "STRUCTURE",
    title: "표현 구조화",
    body: "읽어낸 표현 흐름을 비교·분석·생성에 연결할 수 있는 표현 파라미터 구조로 변환합니다."
  },
  {
    number: "04",
    label: "APPLY",
    title: "분석과 생성에 적용",
    body: "구조화된 표현값을 비교 분석, 피드백, TTS/AI Voice 생성까지 연결합니다."
  }
];

const businessCards = [
  {
    title: "VOXGO · PansoriGo · Instrument Apps",
    label: "Analysis Products",
    metaLabel: "적용 분야",
    metaValue: "보컬 · 국악 · 악기 분석",
    modelLabel: "Business Model",
    modelValue: "B2C 앱 구독 · 교육/기관용 B2B",
    lines: [
      "ESE 기반으로 기준 음원과 사용자 음원을 비교하고, 표현 차이를 분석해 연습·학습·코칭으로 연결하는 분석형 제품군입니다.",
      "보컬과 국악을 시작으로 피아노·기타·바이올린 등 각 악기 학습 도구로 확장됩니다."
    ]
  },
  {
    title: "Emotion Voice / AI Voice Generation",
    label: "Expressive Voice Engine",
    metaLabel: "적용 분야",
    metaValue: "TTS · NPC · 오디오북 · Companion",
    modelLabel: "Business Model",
    modelValue: "B2B API · SDK · 엔터프라이즈 라이선스",
    lines: [
      "LLM이 해석한 감정 구조를 실제 음성 표현으로 바꾸는 ESE 기반 생성 엔진입니다.",
      "TTS, 오디오북, 게임 NPC, AI Companion 등 표현이 필요한 음성 서비스에 적용됩니다."
    ]
  },
  {
    title: "SORI:ON",
    label: "SORI:ON Platform",
    metaLabel: "Role",
    metaValue: "분석 앱 허브",
    modelLabel: "Business Model",
    modelValue: "플랫폼 연동 · 서비스 허브",
    isPlatform: true,
    lines: [
      "율랩의 ESE 기반 분석 앱과 도구를 연결하는 표현 분석 플랫폼입니다.",
      "VOXGO, PansoriGo, 이후 확장될 악기 분석 앱들이 이 구조 안에서 연결됩니다."
    ]
  }
];

const validation = [
  {
    number: "01",
    label: "Core",
    title: "비정형 소리 분석 구조",
    body: "음정·박자 중심이 아닌 표현 단위 분석"
  },
  {
    number: "02",
    label: "IP",
    title: "표현 분석 IP 포트폴리오",
    body: "국내·미국 특허 기반 / 표현음·비정형 소리 분석"
  },
  {
    number: "03",
    label: "Research",
    title: "표현 분석 연구 검증",
    body: "비정형 발성·표현 변화 분석 기반"
  },
  {
    number: "04",
    label: "Scale",
    title: "보컬·악기·음성 확장 구조",
    body: "장르를 넘는 표현 분석 엔진 구조"
  },
  {
    number: "05",
    label: "Data",
    title: "실제 음원 비교 분석 시스템",
    body: "기준 음원과 사용자 음원을 비교 가능한 구조"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-primary">
      <SiteHeader />

      <section id="top" className="relative min-h-[88svh] pt-16">
        <DataField />
        <div className="relative z-10 mx-auto grid min-h-[calc(88svh-4rem)] max-w-7xl items-center gap-16 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.68fr] lg:gap-20 lg:py-24">
          <div>
            <p className="eyebrow mb-6">YULLAB</p>
            <h1 className="hero-title">
              <span>소리를 이해하는 AI기술기업</span>
            </h1>
            <p className="mt-7 max-w-[620px] text-pretty text-body-large">
              율랩은 목소리, 보컬, 음악, 감정 오디오에 담긴 미세한 표현을 분석하고
              생성하는 AI 기술을 개발합니다.
            </p>
            <p className="mt-4 max-w-[600px] text-pretty text-body-base text-subtle">
              음정과 박자 너머의 호흡, 압력, 긴장, 흐름을 데이터로 읽어내는 표현 AI
              인프라를 만듭니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="button-primary" href="#technology">
                기술 살펴보기
              </a>
              <a className="button-secondary" href="#contact">
                문의하기
              </a>
            </div>
            <a className="hero-sub-link" href="#products">
              ESE 기반 제품 플랫폼 SORI:ON 보기 →
            </a>
          </div>

          <div className="hidden lg:block">
            <WaveMark variant="hero" />
          </div>
        </div>
      </section>

      <Section id="problem" eyebrow="Problem" tone="soft">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1fr] lg:gap-20">
          <h2 className="section-title max-w-[620px]">
            <span className="problem-title-lead">오디오 AI는 소리를 인식합니다.</span>
            <span className="text-accent">율랩은 소리의 표현 구조를 읽습니다.</span>
          </h2>
          <div className="content-block">
            <p>
              <span className="block">기존 오디오 AI는 음정, 박자, 템포, 볼륨처럼</span>
              <span className="block">수치화하기 쉬운 정보를 잘 읽어냅니다.</span>
              <span className="mt-3 block">하지만 사람이 노래하고 말할 때 감정이 전달되는 지점은</span>
              <span className="block">그보다 더 미세한 표현의 구조와 흐름에 있습니다.</span>
            </p>
            <p>
              <span className="block">율랩은 이 보이지 않는 표현 구조를</span>
              <span className="block">분석 가능한 데이터로 바꾸고,</span>
              <span className="block">이를 비교·피드백·생성까지 연결되는</span>
              <span className="block">표현 AI 인프라로 확장합니다.</span>
            </p>
          </div>
        </div>
      </Section>

      <Section id="technology" eyebrow="Technology">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_0.88fr] lg:gap-16">
          <div>
            <h2 className="section-title max-w-[560px]">
              <span className="problem-title-lead">ESE는 소리의 표현을</span>
              <span className="text-accent">측정값이 아니라 흐름으로 구조화합니다</span>
            </h2>
            <div className="tech-copy">
              <p className="tech-copy-lead">
                ESE(Expression Sound Engine)는 율랩의 표현 분석 엔진입니다. 기존 오디오
                분석이 음정, 박자, 볼륨처럼 측정 가능한 값을 읽는다면, ESE는 말과 소리
                안에서 <strong>시간에 따라 변하는 표현의 흐름</strong>을 읽습니다.
              </p>
              <p>
                율랩은 이 흐름을 단순 감정 라벨이 아니라 분석·비교·피드백·생성에 연결할
                수 있는 <strong>표현 구조</strong>로 바꿉니다. <strong>ESE는 그 구조를 만드는 표현 레이어입니다.</strong>
              </p>
            </div>
          </div>
          <div className="tech-pipeline" aria-label="ESE 기술 파이프라인">
            {pipelineSteps.map((step, index) => (
              <article className="tech-pipeline-node" key={step.number}>
                <div className="tech-pipeline-meta">
                  <span>{step.number}</span>
                  <strong>{step.label}</strong>
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {index < pipelineSteps.length - 1 ? <span className="tech-pipeline-connector" /> : null}
              </article>
            ))}
          </div>
        </div>
        <div className="feature-band mt-14">
          <WaveMark />
          <p className="feature-copy">
            <span>율랩은 감정을 단순한 라벨로 보지 않습니다.</span>
            <span>표현은 시간 위에서 움직이는 소리의 궤적입니다.</span>
            <span>
              ESE는 그 궤적을 <strong>읽고, 비교하고, 다시 생성할 수 있는 구조</strong>를 만듭니다.
            </span>
          </p>
        </div>
      </Section>

      <Section id="products" eyebrow="Business / Products" tone="soft">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
          <h2 className="section-title max-w-[520px]">
            <span>
              <strong className="text-accent font-inherit">분석제품군</strong>과{" "}
              <strong className="text-accent font-inherit">생성엔진</strong>
            </span>
            <span>으로 <strong className="text-accent font-inherit">확장</strong>됩니다</span>
          </h2>
          <div className="max-w-[580px] space-y-5 text-body-large">
            <p>
              율랩의 ESE는 하나의 앱에 머물지 않습니다. 한 축에서는 소리를 분석하고
              비교하는 학습형 제품으로, 다른 한 축에서는 감정 표현이 가능한 AI Voice 엔진으로
              확장됩니다.
            </p>
            <p>
              분석 제품은 VOXGO, PansoriGo, 악기 학습 앱으로 이어지고, 생성 엔진은 TTS,
              오디오북, 게임 NPC, AI Companion 등으로
              연결됩니다.
            </p>
          </div>
        </div>
        <div className="grid items-stretch gap-5 lg:grid-cols-2">
          {businessCards.map((product) => (
            <article
              className={`product-card product-card-main ${product.isPlatform ? "product-card-platform lg:col-span-2" : ""}`}
              key={product.title}
            >
              <div className="product-line" />
              <p className="text-label font-bold text-accent">{product.label}</p>
              <h3 className="product-title">{product.title}</h3>
              <div className="product-copy product-copy-wide">
                {product.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="product-meta-list">
                <p>
                  <span>{product.metaLabel}</span>
                  <strong>{product.metaValue}</strong>
                </p>
                <p>
                  <span>{product.modelLabel}</span>
                  <strong>{product.modelValue}</strong>
                </p>
              </div>
              {product.isPlatform ? (
                <a className="product-link-button" href={SORI_ON_URL} target="_blank" rel="noreferrer">
                  제품 보기
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      <Section id="validation" eyebrow="Validation">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
          <div>
            <h2 className="section-title max-w-[520px]">
              <span>연구와 실제 데이터에</span>
              <span className="text-accent">기반한 기술</span>
            </h2>
            <p className="mt-6 max-w-[560px] text-body-large">
              율랩의 ESE는 비정형 소리 분석, 표현 데이터 연구, 실제 음원 비교 구조를
              바탕으로 발전해왔습니다.
            </p>
            <p className="mt-5 max-w-[560px] text-body-base text-body">
              율랩은 감정을 단순히 라벨로 분류하는 대신, 말과 소리 안에서 시간에 따라
              변하는 <strong className="text-accent font-semibold">표현의 구조와 흐름</strong>을
              <strong className="text-accent font-semibold"> 읽고 비교 가능한 데이터</strong>로
              바꾸는 기술을 중심에 두고 있습니다.
            </p>
          </div>
          <ol className="space-y-3">
            {validation.map((item) => (
              <li className="validation-row" key={item.title}>
                <span className="validation-number">{item.number}</span>
                <span className="validation-label">{item.label}</span>
                <span className="validation-copy">
                  <span className="validation-title">{item.title}</span>
                  <span className="validation-meta">{item.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="vision" eyebrow="Vision" tone="soft">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="section-title section-title-center max-w-[720px]">
            <span>표현 데이터 인프라를 만듭니다</span>
          </h2>
          <div className="mx-auto mt-7 max-w-[640px] space-y-5 text-body-large">
            <p>
              <span className="block">다음 세대의 AI는 단어와 음표를 인식하는 데서 멈추지 않을 것입니다.</span>
              <span className="block">사람이 어떻게 말하고, 어떻게 노래하고, 어떻게 감정을 전달하는지 이해해야 합니다.</span>
            </p>
            <p>
              <span className="block">율랩은 목소리와 음악 안에 담긴 표현을</span>
              <span className="block">
                <strong className="text-accent font-semibold">분석하고, 코칭하고, 생성하는 표현 AI 인프라</strong>를 만들고 있습니다.
              </span>
            </p>
          </div>
        </div>
      </Section>

      <section id="contact" className="contact-section">
        <div className="contact-graphic" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow">Contact</p>
            <h2 className="contact-title">
              <span>AI가 사람과 교감하는 순간을</span>
              <span>
                <strong className="text-accent font-inherit">율랩</strong>이 만들어갑니다.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-[580px] text-body-base text-body">
              사업 제휴, 투자 문의, 연구 협력, 제품 도입에 대해 편하게 연락해 주세요.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a className="button-primary button-compact" href="mailto:team@yullab.co.kr">
                문의하기
              </a>
              <a className="text-sm font-semibold text-primary transition hover:text-accent" href="mailto:team@yullab.co.kr">
                team@yullab.co.kr
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line px-5 py-9 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-footer md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <p className="font-bold text-primary">주식회사 율랩 | 대표 이나영</p>
            <p>경기도 성남시</p>
            <p>사업자등록번호 714-87-01958</p>
            <p>
              <a className="transition hover:text-accent" href="mailto:team@yullab.co.kr">
                team@yullab.co.kr
              </a>
            </p>
          </div>
          <p>© 2026 YULLAB Inc. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
