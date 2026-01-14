import React from 'react'
import { Button } from './ui/button'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CTA = () => {
    useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
    return (
        <div className="mt-20 border border-secondary rounded-md py-8 drop-shadow-xs">
            <div className="flex flex-col gap-2 items-center justify-center my-5 sm:px-12 px-6">
                <p className="text-center sm:text-lg text-base font-semibold">Hey, you scrolled this far, let's talk</p>
                <div>
                    <Button data-cal-namespace="30min"
    data-cal-link="aryan-patel-wv5rcz/30min"
    
    data-cal-config='{"layout":"month_view"}' variant="secondary" className="gap-2">
                        <img src="/logo-a.jpg" alt="aryan" className="size-6 rounded-full" />
                        Book a Free Call
                    </Button>
                </div>

            </div>

        </div>
    )
}

export default CTA