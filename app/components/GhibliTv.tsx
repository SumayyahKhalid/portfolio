"use client"

import { useState } from "react"

const bg = "#f8f3cf"
const line = "#000000"

type Props = {
    title?: string
    channels?: string[]
}

export default function GhibliTv({
    title = "Ghibli Tv",
    channels = [
        "/tv/channel-1.gif",
        "/tv/channel-2.gif",
        "/tv/channel-3.gif",
        "/tv/channel-4.gif",
        "/tv/channel-5.gif",
        "/tv/channel-6.gif",
    ],
}: Props) {
    const [index, setIndex] = useState(0)
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [hovering, setHovering] = useState(false)

    const stripe = `repeating-linear-gradient(to bottom, ${bg} 0px, ${bg} 2px, ${line} 2px, ${line} 4px)`

    const next = () => setIndex((i) => (i + 1) % channels.length)
    const prev = () =>
        setIndex((i) => (i - 1 + channels.length) % channels.length)

    return (
        <div
            className="flex h-full flex-col"
            style={{
                background: bg,
                border: `3px solid ${line}`,
                borderRadius: 8,
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
        >
            <div
                className="relative flex h-[42px] shrink-0 items-center justify-center"
                style={{ background: stripe, borderBottom: `3px solid ${line}` }}
            >
                <div
                    className="absolute left-2 top-2 h-5 w-5"
                    style={{ background: bg, border: `2px solid ${line}` }}
                />
                <span
                    className="rounded-[4px] px-3 py-0.5 text-[16px] font-bold"
                    style={{
                        fontFamily: "var(--font-inconsolata)",
                        background: bg,
                        border: `1px solid ${line}`,
                        color: line,
                    }}
                >
                    {title}
                </span>
            </div>

            <div
                className="relative m-2 min-h-0 flex-1 cursor-none overflow-hidden"
                style={{ border: `2px solid ${line}`, background: bg }}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onMouseMove={(e) => {
                    const r = e.currentTarget.getBoundingClientRect()
                    setPos({ x: e.clientX - r.left, y: e.clientY - r.top })
                }}
            >
                <img
                    src={channels[index]}
                    alt={`Channel ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {hovering && (
                    <div
                        className="pointer-events-none absolute z-50 whitespace-nowrap"
                        style={{
                            left: pos.x + 14,
                            top: pos.y + 14,
                            background: "#B9CBA4",
                            border: "1px solid #000000",
                            borderRadius: 999,
                            padding: "6px 16px",
                            fontFamily: "var(--font-inconsolata)",
                            fontWeight: 700,
                            fontSize: 12,
                            color: "#000000",
                        }}
                    >
                        Use arrows to change the channel
                    </div>
                )}
            </div>

            <div
                className="flex shrink-0 items-center px-2 py-2"
                style={{ background: stripe, borderTop: `4px solid ${line}` }}
            >
                <button
                    onClick={prev}
                    className="flex h-8 w-10 items-center justify-center rounded-[4px] transition-transform duration-200 hover:scale-105 active:scale-95"
                    style={{ background: bg, border: `2px solid ${line}` }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={line} strokeWidth="3">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                <div className="flex-1" />

                <div
                    className="rounded-[4px] px-3 py-1 text-[15px] font-bold"
                    style={{
                        fontFamily: "var(--font-inconsolata)",
                        background: bg,
                        border: `2px solid ${line}`,
                        color: line,
                    }}
                >
                    {index + 1}/{channels.length}
                </div>

                <div className="flex-1" />

                <button
                    onClick={next}
                    className="flex h-8 w-10 items-center justify-center rounded-[4px] transition-transform duration-200 hover:scale-105 active:scale-95"
                    style={{ background: bg, border: `2px solid ${line}` }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={line} strokeWidth="3">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>
        </div>
    )
}