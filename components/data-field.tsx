export function DataField() {
  const points = [
    [80, 168],
    [180, 118],
    [286, 156],
    [392, 94],
    [510, 146],
    [626, 108],
    [742, 166],
    [858, 128],
    [976, 182],
    [1090, 112],
    [1210, 152]
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(82,78,118,0.11),transparent_34%),radial-gradient(circle_at_18%_78%,rgba(43,52,96,0.09),transparent_34%),linear-gradient(135deg,#0D0E14_8%,#11111A_48%,#141522_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:86px_86px] opacity-28" />
      <svg
        className="absolute right-[-18%] top-[15%] h-[480px] w-[88%] text-accent opacity-56"
        fill="none"
        viewBox="0 0 1280 320"
        preserveAspectRatio="none"
      >
        <path
          className="animate-trace"
          d="M0 180 C98 122 156 122 236 166 C326 216 392 42 492 126 C588 208 646 202 742 144 C848 80 930 224 1022 164 C1112 106 1190 92 1280 126"
          stroke="currentColor"
          strokeDasharray="520"
          strokeWidth="1.6"
        />
        <path
          d="M0 232 C116 176 206 252 302 204 C402 154 470 188 560 222 C662 260 716 116 812 156 C906 196 968 236 1068 186 C1160 140 1218 154 1280 184"
          stroke="rgba(200,198,209,0.16)"
          strokeWidth="1.2"
        />
        <path
          d="M0 112 C84 152 144 42 230 88 C318 136 392 166 486 92 C574 24 672 84 766 118 C868 154 946 78 1048 92 C1142 106 1202 144 1280 108"
          stroke="rgba(183,164,255,0.24)"
          strokeWidth="1.2"
        />
        {points.map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="4" fill="currentColor" opacity={0.2 + (index % 3) * 0.07} />
            <circle cx={cx} cy={cy} r="12" stroke="currentColor" opacity="0.055" />
          </g>
        ))}
      </svg>
      <div className="absolute left-0 top-0 h-full w-[58%] bg-gradient-to-r from-ink via-ink/82 to-transparent" />
    </div>
  );
}
