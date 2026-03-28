import { useState, useEffect, useRef } from "react";

export function useInView(t = 0.15) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold: t });
    obs.observe(el);
    return () => obs.disconnect();
  }, [t]);
  return [ref, v];
}

export function Fade({ children, delay = 0, style = {} }) {
  const [ref, v] = useInView();
  return (
    <div ref={ref} style={{
      opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`, ...style,
    }}>{children}</div>
  );
}

export function FoodImage({ src, alt, style = {} }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: "relative", overflow: "hidden", background: "#3D2418", ...style }}>
      <img src={src} alt={alt} loading="lazy" onLoad={() => setLoaded(true)}
        style={{
          width: "100%", height: "100%", objectFit: "cover",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease, transform 0.5s ease",
          display: "block",
        }}
        onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
        onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
      />
    </div>
  );
}

export function SectionLabel({ children, color = "var(--terracotta)" }) {
  return (
    <div style={{
      fontFamily: "'Outfit', sans-serif",
      fontSize: "11px", letterSpacing: "5px",
      textTransform: "uppercase", color, marginBottom: "16px", fontWeight: 500,
    }}>{children}</div>
  );
}

export function Accent({ children, color = "var(--terracotta)" }) {
  return <span style={{ fontStyle: "italic", color }}>{children}</span>;
}

export function ColorBar() {
  return (
    <div style={{
      width: "100%", height: "3px",
      background: "linear-gradient(90deg, transparent, var(--terracotta), var(--gold), var(--green), var(--gold), var(--terracotta), transparent)",
    }} />
  );
}

export const TILE_PATTERN = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M20 0L40 20L20 40L0 20z' fill='none' stroke='%23000' stroke-opacity='0.03'/%3E%3C/g%3E%3C/svg%3E")`;
