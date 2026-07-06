type WaveMarkProps = {
  variant?: "hero" | "default";
};

export function WaveMark({ variant = "default" }: WaveMarkProps) {
  const isHero = variant === "hero";

  return (
    <div
      aria-hidden="true"
      className={
        isHero
          ? "relative min-h-[370px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.032]"
          : "relative min-h-44 overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.032]"
      }
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(145,138,176,0.06),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.045),transparent_56%)]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 260" fill="none" preserveAspectRatio="none">
        <path
          d="M0 136 C44 96 78 94 116 136 C158 182 196 184 236 116 C280 42 320 62 364 132 C408 202 454 166 494 102 C524 54 544 62 560 84"
          stroke="rgba(172,166,198,0.48)"
          strokeWidth={isHero ? "1.7" : "1.5"}
        />
        <path
          d="M0 176 C62 144 94 216 146 170 C200 120 238 110 292 164 C340 210 384 198 430 142 C482 80 526 96 560 120"
          stroke="rgba(200,198,209,0.18)"
          strokeWidth="1.2"
        />
        <path
          d="M0 86 C48 128 96 34 148 78 C202 124 252 206 310 138 C366 72 404 52 462 92 C510 126 536 138 560 126"
          stroke="rgba(126,122,166,0.26)"
          strokeWidth="1.2"
        />
        {Array.from({ length: 8 }).map((_, index) => (
          <circle
            key={index}
            cx={72 + index * 62}
            cy={index % 2 === 0 ? 128 : 168}
            r={isHero ? "4" : "3"}
            fill="rgba(172,166,198,0.38)"
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)]" />
    </div>
  );
}
