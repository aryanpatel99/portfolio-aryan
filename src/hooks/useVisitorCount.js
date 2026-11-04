"use client";

import { useState, useEffect } from "react";

let cachedCount = null;
let fetchPromise = null;

// initialCount comes with the page HTML (at most a minute old), so the number shows immediately
export function useVisitorCount(initialCount = null) {
  // Starts from values the server also has, so hydration matches
  const [count, setCount] = useState(() => cachedCount ?? initialCount);
  const [isLoading, setIsLoading] = useState(count === null);

  useEffect(() => {
    let isMounted = true;

    // No server count: fall back to the last count this browser saw
    const stored = parseInt(localStorage.getItem("portfolio_visitor_count_cache") ?? "", 10);
    if (!isNaN(stored)) setCount((current) => current ?? stored);

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
