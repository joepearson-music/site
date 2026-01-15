import React, { useEffect, useRef, useState } from "react";

type LazyMountProps = {
  children: React.ReactNode;
  placeholder?: React.ReactNode;
  rootMargin?: string;
};

export default function LazyMount({
  children,
  placeholder = null,
  rootMargin = "600px 0px",
}: LazyMountProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setMounted(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  return <div ref={ref}>{mounted ? children : placeholder}</div>;
}
