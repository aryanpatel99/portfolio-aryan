"use client";

import { useState, useEffect } from "react";

let cachedCount = null;
let fetchPromise = null;

export function useVisitorCount() {
  const [count, setCount] = useState(() => {
    if (cachedCount !== null) return cachedCount;
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("portfolio_visitor_count_cache");
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed)) return parsed;
      }
    }
    return null;
  });
  const [isLoading, setIsLoading] = useState(!count);

  useEffect(() => {
    let isMounted = true;

    if (!fetchPromise) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);

      fetchPromise = fetch("/api/visitor-count", {
        signal: controller.signal,
      })
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (data?.success && typeof data.count === "number") {
            cachedCount = data.count;
            if (typeof window !== "undefined") {
              localStorage.setItem("portfolio_visitor_count_cache", data.count.toString());
            }
            return data.count;
          }
          return null;
        })
        .catch(() => null)
        .finally(() => {
          clearTimeout(timeout);
        });
    }

    fetchPromise.then((latestCount) => {
      if (isMounted) {
        if (latestCount !== null) {
          setCount(latestCount);
        }
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return { count, isLoading };
}
