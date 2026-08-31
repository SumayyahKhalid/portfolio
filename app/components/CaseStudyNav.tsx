"use client"

import { useEffect, useRef, useState } from "react"

type Item = { id: string; label: string }

export default function CaseStudyNav({ items }: { items: Item[] }) {
    const [active, setActive] = useState(items[0]?.id)
    const navRef = useRef<HTMLDivElement | null>(null)
    const scrollerRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        let el = navRef.current?.parentElement
        while (el) {
            const overflow = getComputedStyle(el).overflowY
            if (overflow === "auto" || overflow === "scroll") break
            el = el.parentElement
        }
        if (!el) return
        scrollerRef.current = el

        const onScroll = () => {
            let current = items[0]?.id
            for (const item of items) {
                const section = document.getElementById(item.id)
                if (!section) continue
                const top =
                    section.getBoundingClientRect().top -
                    el!.getBoundingClientRect().top
                if (top <= 80) current = item.id
            }
            setActive(current)
        }

        onScroll()
        el.addEventListener("scroll", onScroll, { passive: true })
        return () => el?.removeEventListener("scroll", onScroll)
    }, [items])

    const go = (id: string) => {
        const section = document.getElementById(id)
        const scroller = scrollerRef.current
        if (!section || !scroller) return
        const top =
            section.getBoundingClientRect().top -
            scroller.getBoundingClientRect().top +
            scroller.scrollTop -
            12
        scroller.scrollTo({ top, behavior: "smooth" })
    }

    return (
        <div
            ref={navRef}
            className="sticky top-0 z-20 -mx-4 px-4 py-3 md:-mx-6 md:px-6"
            style={{ background: "#f8f3cf" }}
        >
            <div
                className="flex w-full overflow-x-auto rounded-[10px]"
                style={{
                    fontFamily: "var(--font-inconsolata)",
                    border: "1px solid var(--cs-line, #C9BD91)",
                }}
            >
                {items.map((item, i) => (
                    <button
                        key={item.id}
                        onClick={() => go(item.id)}
                        className="flex-1 whitespace-nowrap px-5 py-2.5 text-[13px] font-bold transition-colors duration-200"
                        style={{
                            background:
                                active === item.id
                                    ? "var(--cs-accent, #C4B183)"
                                    : "transparent",
                            borderLeft:
                                i === 0
                                    ? "none"
                                    : "1px solid var(--cs-line, #C9BD91)",
                            color: "#000000",
                        }}
                        onMouseEnter={(e) => {
                            if (active !== item.id)
                                e.currentTarget.style.background =
                                    "var(--cs-fill, #E6DCB8)"
                        }}
                        onMouseLeave={(e) => {
                            if (active !== item.id)
                                e.currentTarget.style.background = "transparent"
                        }}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    )
}