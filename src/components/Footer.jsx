"use client";

import React from "react";
import { useVisitorCount } from "@/hooks/useVisitorCount";
import NumberTicker from "@/components/ui/number-ticker";

const Footer = () => {
  const { count } = useVisitorCount();

  return (
    <footer className="border-t border-neutral-300 dark:border-neutral-800 mt-8 py-6">
      <div className="max-w-3xl mx-auto px-3 flex justify-center">
        <p className="text-muted-foreground text-xs border border-neutral-300 dark:border-neutral-800 rounded-lg bg-secondary/50 backdrop-blur-sm py-3 px-5 flex items-center gap-1.5">
          <span>You are the</span>
          <span className="text-foreground font-semibold text-sm">
            <NumberTicker value={count} format="ordinal" />
          </span>
          <span>visitor</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
