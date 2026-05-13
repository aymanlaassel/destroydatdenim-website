"use client";

import { useState } from "react";

type Props = {
  slug: string;
  sizes: string[];
};

// rotate through the sampled palette swatches
const swatch = ["#050818", "#2c3a52", "#6a7991", "#a3b3c8", "#b8c8da", "#91969b", "#1f2b2b", "#d3d2c4", "#5a2b16"];

export function AcquireButton({ slug, sizes }: Props) {
  const [size, setSize] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onAcquire() {
    if (!size) {
      setError("select a size");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ slug, size }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "checkout unavailable");
      }
      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "checkout unavailable");
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="text-[10px] uppercase tracking-[0.32em] text-bone/60 mb-3">size</div>
        <div className="flex flex-wrap gap-1.5">
          {sizes.map((s, i) => {
            const bg = swatch[i % swatch.length];
            const selected = size === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className="relative h-[40px] min-w-[48px] px-3 text-[11px] uppercase tracking-[0.18em] border transition-all duration-200"
                style={{
                  backgroundColor: bg,
                  borderColor: selected ? "var(--color-bone)" : "rgba(211,210,196,0.18)",
                  color: ["#d3d2c4", "#b8c8da", "#ccdaeb", "#a3b3c8"].includes(bg) ? "#050818" : "#ece9df",
                  outline: selected ? "1px solid var(--color-bone)" : "none",
                  outlineOffset: selected ? "2px" : undefined,
                }}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={onAcquire}
        disabled={loading}
        className="h-[44px] px-6 text-[11px] uppercase tracking-[0.32em] text-bone bg-p10 hover:bg-p8 transition-colors duration-300 disabled:opacity-50"
      >
        {loading ? "—" : "acquire"}
      </button>

      {error && (
        <div className="text-[10px] uppercase tracking-[0.28em] text-p10">{error}</div>
      )}
    </div>
  );
}
