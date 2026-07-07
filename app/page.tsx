import { DataField } from "@/components/data-field";
import { Section } from "@/components/section";
import { SiteHeader } from "@/components/site-header";
import { WaveMark } from "@/components/wave-mark";

const SORI_ON_URL = "https://sori-on.com";

const techCards = [
  {
    title: "호흡과 압력 분석",
    point: "Breath",
    body: "호흡의 밀도, 압력 변화, 긴장과 이완의 흐름을 시간축 위에서 분석합니다."
  },
  {
    title: "표현 타이밍 감지",
    point: "Timing",
    body: "어미 처리, 미세한 당김과 늦춤, 길이 변화처럼 표현을 만드는 타이밍을 읽습니다."
  },
  {
    title: "감정 흐름 분석",
    point: "Flow",
    body: "감정을 하나의 라벨이 아니라 소리 안에서 움직이는 변화의 궤적으로 다룹니다."
  },
  {
    title: "피드백과 생성 확장",
    point: "Engine",
    body: "기준 음원과 사용자 음원을 비교해 연습 방향을 제안하고 생성 엔진으로 확장합니다."
  }
];

const products = [
  {
    name: "VOXGO",
    label: "AI 보컬 코치",
    mark: "01",
    meta: "2026.7월 출시예정",
    status: "각 악기로 확장 진행중",
    lines: [
      "기준 보컬과 사용자의 노래를 비교해 호흡, 톤, 흐름, 표현을 분석하는 AI 보컬 코칭 앱입니다."
    ]
  },
  {
    name: "PansoriGo",
    label: "AI 국악 보컬 학습 도구",
    mark: "02",
    meta: "2025년 10월 출시",
    status: "국악 AI 교육앱",
    lines: [
      "시김새와 비정형 발성 분석을 바탕으로 한국 전통 성악의 표현을 학습하고 비교할 수 있는 도구입니다."
    ]
  },
  {
    name: "Expressive AI Engine",
    label: "B2B / API 솔루션",
    mark: "03",
    meta: "Engine Platform",
    status: "API, SDK 고도화중.",
    lines: [
      "보컬, 악기, 게임 NPC, 오디오북, AI Companion, Human AI로 확장 가능한 표현 AI 엔진입니다."
    ]
  }
];

const validation = [
  { number: "01", label: "Core", title: "비정형 소리 분석 기술" },
  { number: "02", label: "IP", title: "시김새·표현음 분석 특허", meta: "국내 3 · 미국 1 출원완료" },
  { number: "03", label: "Research", title: "한국 전통음악 AI 연구" },
  { number: "04", label: "Scale", title: "보컬·악기·음성 분석 확장" },
  { number: "05", label: "Data", title: "실제 음원 비교 분석 구조" }
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
            <span className="section-title-kicker">오디오 AI는 소리를 인식합니다. 하지만,</span>
            <span className="text-accent">율랩은 소리의 표현을 이해합니다.</span>
          </h2>
          <div className="content-block">
            <p>
              많은 오디오 AI는 음정, 박자, 템포, 볼륨처럼 측정하기 쉬운 정보를 잘
              읽어냅니다. 하지만 사람이 노래하고 말할 때 감정이 전달되는 지점은 더
              섬세한 층위에 있습니다.
            </p>
            <p>
              호흡의 흔들림, 소리의 압력, 긴장과 이완, 어미의 방향, 감정의 변화.
              율랩은 이 보이지 않는 소리의 움직임을 분석 가능한 데이터로 바꿉니다.
            </p>
          </div>
        </div>
      </Section>

      <Section id="technology" eyebrow="Technology">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1fr] lg:gap-16">
          <div>
            <h2 className="section-title max-w-[560px]">
              <span>ESE는 소리의 표현을</span>
              <span className="text-accent">데이터로 읽습니다</span>
            </h2>
            <p className="mt-6 max-w-[560px] text-body-large">
              ESE(Expression Sound Engine)는 율랩의 핵심 표현음 분석 엔진입니다.
              기존의 음정·박자 중심 분석으로 포착하기 어려운 비정형 소리 요소를
              분석하고, 시간에 따라 달라지는 표현의 흐름을 데이터화합니다.
            </p>
          </div>
          <div className="grid items-stretch gap-4 sm:grid-cols-2">
            {techCards.map((card, index) => (
              <article className="surface-card" key={card.title}>
                <div className="flex items-center justify-between gap-4">
                  <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="card-label">{card.point}</span>
                </div>
                <h3 className="mt-7 text-card-title font-bold text-primary">{card.title}</h3>
                <p className="card-body mt-4">{card.body}</p>
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

      <Section id="products" eyebrow="Products" tone="soft">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="section-title max-w-[520px]">
            <span>제품과 적용 분야</span>
          </h2>
          <p className="max-w-[560px] text-body-large">
            <span className="block">율랩의 기술은 하나의 앱에 머물지 않습니다.</span>
            <span className="block">ESE를 기반으로 보컬, 국악, 음성, 교육, 콘텐츠 영역으로 확장되는 제품과 플랫폼을 만들어가고 있습니다.</span>
          </p>
        </div>
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-line" />
              <div className="flex items-center justify-between gap-4">
                <p className="text-label font-bold text-accent">{product.label}</p>
                <span className="product-meta">{product.meta}</span>
              </div>
              <h3 className="product-title">{product.name}</h3>
              <p className="product-copy">
                {product.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
              <div className="mt-auto pt-7">
                <p className="product-status">{product.status}</p>
              </div>
            </article>
          ))}
        </div>
        <article className="platform-band">
          <div className="platform-band-content">
            <div>
              <p className="text-label font-bold text-accent">Platform</p>
              <h3>SORI:ON</h3>
              <p>
                SORI:ON은 ESE 기반으로 만들어지는 분석 앱과 표현 AI 제품들을 연결하는
                플랫폼입니다. VOXGO, PansoriGo, 그리고 앞으로 확장될 다양한 분석 앱을
                하나의 구조 안에서 보여주는 율랩의 제품 허브입니다.
              </p>
            </div>
            <div className="platform-band-side">
              <span>ESE 기반 앱 플랫폼</span>
              <a className="button-secondary button-compact" href={SORI_ON_URL} target="_blank" rel="noreferrer">
                SORI:ON 홈페이지 보기
              </a>
            </div>
          </div>
        </article>
      </Section>

      <Section id="validation" eyebrow="Validation">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
          <div>
            <h2 className="section-title max-w-[520px]">
              <span>연구와 실제 데이터에</span>
              <span className="text-accent">기반한 기술</span>
            </h2>
            <p className="mt-6 max-w-[560px] text-body-large">
              율랩의 기술은 비정형 소리 분석, 국악 표현 분석, 보컬 표현 데이터 연구를
              기반으로 발전해왔습니다. 실제 음원 비교와 표현 분석이 가능한 구조를
              중심에 둡니다.
            </p>
          </div>
          <ol className="space-y-3">
            {validation.map((item) => (
              <li className="validation-row" key={item.title}>
                <span className="validation-number">{item.number}</span>
                <span className="validation-label">{item.label}</span>
                <span className="validation-title">
                  {item.title}
                  {"meta" in item ? <span className="validation-meta">{item.meta}</span> : null}
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
