import { useState, useEffect } from "react";

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n.toLocaleString() + (s[(v - 20) % 10] || s[v] || s[0]);
}

const Footer = () => {
  const cached = localStorage.getItem("portfolio_visitor_count_cache");
  const [count, setCount] = useState(cached ? parseInt(cached, 10) : null);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const API_BASE = import.meta.env.VITE_API_BASE || "";

    const alreadyCounted = localStorage.getItem("portfolio_visited");
    const endpoint = alreadyCounted
      ? `${API_BASE}/api/visitor-count/get`
      : `${API_BASE}/api/visitor-count`;

    fetch(endpoint, { signal: controller.signal })
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data?.success && typeof data.count === "number") {
          setCount(data.count);
          localStorage.setItem("portfolio_visitor_count_cache", data.count);
          if (!alreadyCounted) localStorage.setItem("portfolio_visited", "true");
        }
      })
      .catch(() => {})
      .finally(() => clearTimeout(timeout));

    return () => { controller.abort(); clearTimeout(timeout); };
  }, []);

  return (
    <footer className="border-t border-border mt-8 py-6">
      <div className="max-w-3xl mx-auto px-3 flex justify-center ">
        <p className="text-muted-foreground text-xs border rounded-lg bg-secondary/50 backdrop-blur-sm py-4 px-6">
          {count === null
            ? <span className="opacity-40">—</span>
            : <>You are the <span className="text-foreground font-medium">{ordinal(count)}</span> visitor</>
          }
        </p>
      </div>
    </footer>
  );
};

export default Footer;
