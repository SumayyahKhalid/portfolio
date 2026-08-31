"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function ChicksCard() {
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [hovering, setHovering] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        const a = new Audio("/chickies.mp3")
        a.volume = 0.5
        a.preload = "auto"
        a.load()
        audioRef.current = a
    }, [])

    const playGroan = () => {
        const a = audioRef.current
        if (!a) return
        a.currentTime = 0
        a.play().catch(() => {})
    }

    return (
        <div
            className="relative cursor-none transition-transform duration-300 ease-out hover:scale-[1.01] active:scale-[0.99]"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                setPos({ x: e.clientX - r.left, y: e.clientY - r.top })
            }}
            onClick={playGroan}
        >
            <Image
                src="/projects/chicks.svg"
                alt=""
                width={860}
                height={700}
                className="w-full"
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
                    Don&apos;t Disturb! They&apos;re showering.
                </div>
            )}
        </div>
    )
}