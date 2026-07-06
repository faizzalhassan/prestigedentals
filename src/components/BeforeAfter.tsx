import { useRef, useState, useCallback, useEffect } from "react";

interface Props {
  before: string;
  after: string;
  alt: string;
}

export function BeforeAfter({ before, after, alt }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      update(x);
    };
    const stop = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, [update]);

  return (
    <div
      ref={ref}
      className="relative w-full h-full overflow-hidden rounded-3xl select-none touch-none"
      onPointerDownCapture={(e) => e.stopPropagation()}
      onMouseDown={(e) => { e.stopPropagation(); dragging.current = true; update(e.clientX); }}
      onTouchStart={(e) => { e.stopPropagation(); dragging.current = true; update(e.touches[0].clientX); }}
    >
      <img src={after} alt={`${alt} after`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt={`${alt} before`} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="absolute left-4 top-4 px-3 py-1 rounded-full text-xs font-medium tracking-wider glass-strong">BEFORE</div>
      <div className="absolute right-4 bottom-4 px-3 py-1 rounded-full text-xs font-medium tracking-wider text-white" style={{ background: "var(--gradient-primary)" }}>AFTER</div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_20px_rgba(15,111,255,0.6)]" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full glass-strong flex items-center justify-center cursor-ew-resize" style={{ boxShadow: "0 8px 24px -6px rgba(15,111,255,0.5)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f6fff" strokeWidth="2.5" strokeLinecap="round">
            <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
