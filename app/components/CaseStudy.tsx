"use client"

import Image from "next/image"
import { motion, useInView, useMotionValue, useSpring } from "motion/react"
import { useEffect, useRef, useState } from "react"

const mono = "var(--font-inconsolata)"
const sans = "var(--font-open-sans)"

export function Reveal({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode
    delay?: number
    className?: string
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}

export function Section({
    id,
    children,
}: {
    id?: string
    children: React.ReactNode
}) {
    return (
        <section id={id} className="mt-24 scroll-mt-20 md:mt-32">
            {children}
        </section>
    )
}

export function SectionHeader({
    label,
    title,
    intro,
}: {
    label: string
    title: string
    intro: string
}) {
    return (
        <Reveal>
            <p
                className="text-[12px] font-bold uppercase tracking-[0.14em]"
                style={{ fontFamily: mono, color: "var(--cs-accent)" }}
            >
                {label}
            </p>
            <h2
                className="mt-3 text-[28px] font-bold leading-[1.25] md:text-[34px]"
                style={{ fontFamily: sans, color: "#000000" }}
            >
                {title}
            </h2>
            <p
                className="mt-4 text-[18px] leading-[1.6]"
                style={{ fontFamily: sans, color: "rgba(0,0,0,0.58)" }}
            >
                {intro}
            </p>
        </Reveal>
    )
}

export function Body({ children }: { children: React.ReactNode }) {
    return (
        <Reveal>
            <p
                className="mt-6 text-[16px] leading-[1.75]"
                style={{ fontFamily: sans, color: "#000000" }}
            >
                {children}
            </p>
        </Reveal>
    )
}

export function Insight({ children }: { children: React.ReactNode }) {
    return (
        <Reveal>
            <div className="my-16">
                <p
                    className="text-[26px] font-bold leading-[1.4] md:text-[32px]"
                    style={{ fontFamily: sans, color: "#000000" }}
                >
                    {children}
                </p>
            </div>
        </Reveal>
    )
}

export function Callout({
    label,
    children,
}: {
    label?: string
    children: React.ReactNode
    filled?: boolean
}) {
    return (
        <Reveal>
            <div
                className="mt-10 py-1 pl-6"
                style={{ borderLeft: "3px solid var(--cs-accent)" }}
            >
                {label && (
                    <p
                        className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em]"
                        style={{ fontFamily: mono, color: "var(--cs-accent)" }}
                    >
                        {label}
                    </p>
                )}
                <div
                    className="text-[19px] font-semibold leading-[1.55]"
                    style={{ fontFamily: sans, color: "#000000" }}
                >
                    {children}
                </div>
            </div>
        </Reveal>
    )
}

function CountUp({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement | null>(null)
    const inView = useInView(ref, { once: true, amount: 0.5 })
    const match = value.match(/^([^\d]*)([\d.]+)(.*)$/)
    const [shown, setShown] = useState(match ? match[1] + "0" + match[3] : value)

    const mv = useMotionValue(0)
    const spring = useSpring(mv, { duration: 1100, bounce: 0 })

    useEffect(() => {
        if (!match || !inView) return
        mv.set(parseFloat(match[2]))
    }, [inView, mv, match])

    useEffect(() => {
        if (!match) return
        return spring.on("change", (v) => {
            const decimals = match[2].includes(".") ? 2 : 0
            setShown(match[1] + v.toFixed(decimals) + match[3])
        })
    }, [spring, match])

    if (!match) return <span ref={ref}>{value}</span>
    return <span ref={ref}>{shown}</span>
}

export function StatRow({
    stats,
}: {
    stats: { value: string; label: string }[]
    filled?: boolean
}) {
    return (
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3">
            {stats.map((s, i) => (
                <Reveal key={s.value} delay={i * 0.08}>
                    <div
                        className="pt-5"
                        style={{ borderTop: "2px solid var(--cs-accent)" }}
                    >
                        <p
                            className="text-[44px] font-bold leading-none md:text-[52px]"
                            style={{ fontFamily: sans, color: "#000000" }}
                        >
                            <CountUp value={s.value} />
                        </p>
                        <p
                            className="mt-4 text-[14px] leading-[1.55]"
                            style={{ fontFamily: sans, color: "rgba(0,0,0,0.65)" }}
                        >
                            {s.label}
                        </p>
                    </div>
                </Reveal>
            ))}
        </div>
    )
}

export function Feature({
    label,
    text,
    pill,
}: {
    label: string
    text: string
    pill: string
    filled?: boolean
}) {
    return (
        <Reveal>
            <div
                className="mt-12"
                style={{ borderTop: "1px solid var(--cs-line)" }}
            >
                <div className="flex flex-wrap items-center gap-3 pt-5">
                    <p
                        className="text-[12px] font-bold uppercase tracking-[0.14em]"
                        style={{ fontFamily: mono, color: "#000000" }}
                    >
                        {label}
                    </p>
                    <span
                        className="rounded-[18px] px-3 py-1 text-[11px] font-bold"
                        style={{
                            fontFamily: mono,
                            color: "rgba(0,0,0,0.6)",
                            background: "var(--cs-pill)",
                        }}
                    >
                        {pill}
                    </span>
                </div>
                <p
                    className="mt-3 max-w-[68ch] text-[16px] leading-[1.7]"
                    style={{ fontFamily: sans, color: "#000000" }}
                >
                    {text}
                </p>
            </div>
        </Reveal>
    )
}

export function Shot({ src, alt = "" }: { src: string; alt?: string }) {
    return (
        <Reveal>
            <Image
                src={src}
                alt={alt}
                width={1300}
                height={730}
                className="mt-12 w-full rounded-[14px]"
            />
        </Reveal>
    )
}

/* Static grid of phone screens. Use for screens that carry an argument. */
export function ScreenGrid({
    screens,
    columns = 3,
}: {
    screens: { src: string; caption?: string }[]
    columns?: 2 | 3 | 4
}) {
    const cols =
        columns === 2
            ? "sm:grid-cols-2"
            : columns === 3
              ? "sm:grid-cols-3"
              : "sm:grid-cols-4"

    return (
        <div className={`mt-12 grid grid-cols-2 gap-8 sm:gap-10 ${cols}`}>
            {screens.map((s, i) => (
                <Reveal key={s.src} delay={i * 0.07}>
                    <Image
                        src={s.src}
                        alt={s.caption || ""}
                        width={420}
                        height={910}
                        className="mx-auto w-full max-w-[220px] rounded-[12px]"
                    />
                    {s.caption && (
                        <p
                            className="mx-auto mt-3 max-w-[220px] text-[12px] leading-[1.4]"
                            style={{ fontFamily: mono, color: "rgba(0,0,0,0.6)" }}
                        >
                            {s.caption}
                        </p>
                    )}
                </Reveal>
            ))}
        </div>
    )
}

/* Scrolling strip of phone screens. Pauses on hover. Use for showing off
   the visual system, not for screens a reader needs to study. */
export function ScreenMarquee({
    screens,
    speed = 40,
}: {
    screens: { src: string; caption?: string }[]
    speed?: number
}) {
    const doubled = [...screens, ...screens]

    return (
        <Reveal>
            <div className="group relative mt-12 overflow-hidden">
                <div
                    className="flex w-max gap-5 group-hover:[animation-play-state:paused]"
                    style={{ animation: `marquee ${speed}s linear infinite` }}
                >
                    {doubled.map((s, i) => (
                        <div key={i} className="w-[180px] shrink-0 md:w-[220px]">
                            <Image
                                src={s.src}
                                alt={s.caption || ""}
                                width={420}
                                height={910}
                                className="w-full rounded-[12px]"
                            />
                            {s.caption && (
                                <p
                                    className="mt-3 text-[12px] leading-[1.4]"
                                    style={{
                                        fontFamily: mono,
                                        color: "rgba(0,0,0,0.6)",
                                    }}
                                >
                                    {s.caption}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Reveal>
    )
}

export function DecisionGrid({
    items,
}: {
    items: { title: string; text: string }[]
}) {
    return (
        <div className="mt-10">
            {items.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.04}>
                    <div
                        className="grid grid-cols-1 gap-x-10 gap-y-3 py-7 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
                        style={{ borderTop: "1px solid var(--cs-line)" }}
                    >
                        <h3
                            className="text-[19px] font-bold leading-[1.35]"
                            style={{ fontFamily: sans, color: "#000000" }}
                        >
                            {item.title}
                        </h3>
                        <p
                            className="text-[15px] leading-[1.7]"
                            style={{ fontFamily: sans, color: "rgba(0,0,0,0.75)" }}
                        >
                            {item.text}
                        </p>
                    </div>
                </Reveal>
            ))}
        </div>
    )
}

export function Step({
    number,
    label,
    title,
    children,
}: {
    number: string
    label: string
    title: string
    children: React.ReactNode
}) {
    return (
        <Reveal>
            <div className="mt-10 flex gap-5">
                <div className="shrink-0">
                    <div
                        className="flex h-11 w-11 items-center justify-center rounded-full text-[17px] font-bold"
                        style={{
                            background: "var(--cs-accent)",
                            fontFamily: mono,
                            color: "#FFFFFF",
                        }}
                    >
                        {number}
                    </div>
                </div>

                <div className="min-w-0 flex-1">
                    <p
                        className="text-[12px] font-bold uppercase tracking-[0.14em]"
                        style={{ fontFamily: mono, color: "var(--cs-accent)" }}
                    >
                        {label}
                    </p>
                    <h3
                        className="mt-1 text-[20px] font-bold"
                        style={{ fontFamily: sans, color: "#000000" }}
                    >
                        {title}
                    </h3>
                    <div
                        className="mt-3 text-[16px] leading-[1.7]"
                        style={{ fontFamily: sans, color: "#000000" }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Reveal>
    )
}

export function Clip({ src, caption }: { src: string; caption?: string }) {
    return (
        <Reveal>
            <div className="mx-auto mt-12 max-w-[720px]">
                <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-[14px]"
                />
                {caption && (
                    <p
                        className="mt-3 text-[13px]"
                        style={{ fontFamily: mono, color: "rgba(0,0,0,0.6)" }}
                    >
                        {caption}
                    </p>
                )}
            </div>
        </Reveal>
    )
}