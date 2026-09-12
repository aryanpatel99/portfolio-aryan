"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  format = "number", // "number" | "ordinal"
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value ?? 0 : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView && typeof value === "number" && !isNaN(value)) {
      const timer = setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        const rounded = Math.round(latest);
        if (format === "ordinal") {
          const s = ["th", "st", "nd", "rd"];
          const v = rounded % 100;
          const suffix = s[(v - 20) % 10] || s[v] || s[0];
          ref.current.textContent = `${rounded.toLocaleString()}${suffix}`;
        } else {
          ref.current.textContent = rounded.toLocaleString();
        }
      }
    });
  }, [springValue, format]);

  const getInitialText = () => {
    if (typeof value !== "number" || isNaN(value)) return "—";
    if (format === "ordinal") {
      const s = ["th", "st", "nd", "rd"];
      const v = value % 100;
      return `${value.toLocaleString()}${s[(v - 20) % 10] || s[v] || s[0]}`;
    }
    return value.toLocaleString();
  };

  return (
    <span
      ref={ref}
      className={cn("inline-block tabular-nums tracking-normal", className)}
    >
      {getInitialText()}
    </span>
  );
}
