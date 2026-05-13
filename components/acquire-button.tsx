"use client";

import { useState } from "react";

type Props = {
  slug: string;
  sizes: string[];
};

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
        <div className="text-[10px] uppercase tracking-[0.32em] text-bone/45 mb-3">size</div>
        <div className="flex flex-wrap gap-2">
          {sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`min-w-[44px] h-[36px] px-3 text-[11px] uppercase tracking-[0.2em] border transition-colors duration-200 ${
                size === s
                  ? "border-bone/80 text-bone bg-bone/[0.04]"
                  : "border-bone/15 text-bone/60 hover:border-bone/35 hover:text-bone/85"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onAcquire}
        disabled={loading}
        className="text-[11px] uppercase tracking-[0.32em] text-bone border-b border-bone/40 pb-[3px] hover:border-bone transition-colors duration-300 disabled:opacity-50"
      >
        {loading ? "—" : "acquire"}
      </button>

      {error && (
        <div className="text-[10px] uppercase tracking-[0.28em] text-rust">{error}</div>
      )}
    </div>
  );
}
