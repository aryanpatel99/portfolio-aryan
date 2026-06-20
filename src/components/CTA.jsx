import React from 'react'
import { Button } from './ui/button'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { cld } from '@/lib/cloudinary';
import { FlickeringGrid } from './ui/flickering-grid';

const CTA = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (
        <div className="relative mt-20 overflow-hidden border border-secondary rounded-md py-8 drop-shadow-xs">
            <div className="pointer-events-none absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
                <FlickeringGrid
                    className="h-full w-full"
                    squareSize={2}
                    gridGap={2}
                    maxOpacity={0.5}
                    color="rgb(140, 140, 140)"
                    style={{
                        maskImage: "linear-gradient(to bottom, black, transparent)",
                        WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                    }}
                />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center my-5 sm:px-12 px-6">
                <p className="text-center sm:text-lg text-base font-semibold">Hey, you scrolled this far, let's talk</p>
                <div>
                    <Button data-cal-namespace="30min"
                        data-cal-link="aryan-patel-wv5rcz/30min"

                        data-cal-config='{"layout":"month_view"}' variant="secondary" className="gap-2">
                        <img src={cld("not_zenin", "w_80")} alt="aryan" className="size-6 rounded-full" />
                        Book a Free Call
                    </Button>
                </div>

            </div>

        </div>
    )
}

export default CTA
