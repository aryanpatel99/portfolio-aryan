import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

export function useResolvedTheme() {
    const { theme } = useTheme();
    const [resolvedTheme, setResolvedTheme] = useState("dark");

    useEffect(() => {
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
            setResolvedTheme(systemTheme);
        } else {
            setResolvedTheme(theme);
        }
    }, [theme]);

    return resolvedTheme;
}
