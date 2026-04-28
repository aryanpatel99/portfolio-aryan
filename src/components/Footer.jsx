import { useState, useEffect } from "react";

const Footer = () => {
  const [count, setCount] = useState(null);

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
          if (!alreadyCounted) localStorage.setItem("portfolio_visited", "true");
        }
      })
      .catch(() => {})
      .finally(() => clearTimeout(timeout));

    return () => { controller.abort(); clearTimeout(timeout); };
  }, []);

  return (
    <footer className="border-t border-border mt-8 py-6">
      <div className="max-w-3xl mx-auto px-3 flex justify-center">
        <p className="text-muted-foreground text-xs">
          {count === null
            ? <span className="opacity-40">—</span>
            : <><span className="text-foreground font-medium">{count.toLocaleString()}</span> visitor{count !== 1 ? "s" : ""}</>
          }
        </p>
      </div>
    </footer>
  );
};

export default Footer;
