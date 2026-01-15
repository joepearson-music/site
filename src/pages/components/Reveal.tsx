import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  delayMs?: number;
  y?: number; // translateY in px
  once?: boolean;
};

export default function Reveal({
  children,
  as = "div",
  className,
  style,
  delayMs = 0,
  y = 10,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")
      .matches;

    if (prefersReduced) {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { root: null, threshold: 0.15, rootMargin: "80px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  const Comp = as as any;

  return (
    <Comp
      ref={ref as any}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0px)" : `translateY(${y}px)`,
        transitionProperty: "opacity, transform",
        transitionDuration: "500ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delayMs}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </Comp>
  );
}
