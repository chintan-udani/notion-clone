"use client";
import { useScrollTop } from "@/Hooks/use-scroll-top";

import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar  = () => {
    const scrolled = useScrollTop();
    return ( 
        <div className={cn("dark:bg-[#1F1F1F] z-50 bg-background fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
            <Logo />

            <div className="md:ml-auto md:justify-end justify-between flex w-full items-center gap-x-2">
                <ModeToggle />
            </div>
        </div>
     );
}
 