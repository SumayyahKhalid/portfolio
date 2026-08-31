"use client"

import { useEffect, useState } from "react"

type Props = {
    showDayOfWeek?: boolean
    showSeconds?: boolean
    use24Hour?: boolean
}

export default function TimezoneClock({
    showDayOfWeek = true,
    showSeconds = false,
    use24Hour = false,
}: Props) {
    const [time, setTime] = useState("")

    useEffect(() => {
        const update = () => {
            const now = new Date()
            const parts: string[] = []

            if (showDayOfWeek) {
                parts.push(
                    new Intl.DateTimeFormat("en-US", {
                        weekday: "short",
                    }).format(now)
                )
            }

            let t = new Intl.DateTimeFormat("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                ...(showSeconds && { second: "2-digit" }),
                hour12: !use24Hour,
            }).format(now)

            if (!use24Hour) t = t.replace(/^0/, "")
            parts.push(t)

            setTime(parts.join(" "))
        }

        update()
        const id = setInterval(update, 1000)
        return () => clearInterval(id)
    }, [showDayOfWeek, showSeconds, use24Hour])

    return <span suppressHydrationWarning>{time}</span>
}