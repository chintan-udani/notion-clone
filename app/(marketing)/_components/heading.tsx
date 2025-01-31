"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

 //it is going to be a client componenet and not a server component
export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4 text-center">
            <h1 className="text-3xl md:text-6xl sm:text-5xl font-bold">
                Your Ideas, Documents and Plans Unified.<br />
                Welcome to{" "}
                <span className="underline">
                    Jotion
                </span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Jotion is a connected worksapce where <br />
                better,faster work happens.
            </h3>
            <Button>
                Enter Jotion <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
        </div>
    )
}