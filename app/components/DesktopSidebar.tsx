"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import Link from "next/link"

const items = [
    { label: "Home", file: "home.svg", href: "/" },
    { label: "Work", file: "ux-projects.svg", href: "/work" },
    { label: "About Me", file: "about-me.svg", href: "/about-me" },
    { label: "Resume", file: "resume.svg", href: "/resume" },
]

export default function DesktopSidebar() {
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        const a = new Audio("/click.mp3")
        a.volume = 0.5
        a.preload = "auto"
        a.load()
        audioRef.current = a
    }, [])

    const playClick = () => {
        const a = audioRef.current
        if (!a) return
        a.currentTime = 0
        a.play().catch(() => {})
    }

    return (
        <div className="relative z-10 flex flex-row flex-wrap justify-center gap-5 px-4 pt-10 pb-4 md:absolute md:left-0 md:top-[30px] md:flex-col md:flex-nowrap md:justify-start md:gap-16 md:px-15 md:pt-12 md:pb-0">
            {items.map((item) => (
                <Link
                    key={item.label}
                    href={item.href}
                    onClick={playClick}
                    className="flex flex-col items-center justify-center transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
                    style={{ width: 76, gap: 10 }}
                >
                    <Image
                        src={`/icons/${item.file}`}
                        alt={item.label}
                        width={65}
                        height={65}
                        className="w-[52px] md:w-[65px] h-auto"
                    />
                    <span
                        className="text-black"
                        style={{
                            fontFamily: "var(--font-inconsolata)",
                            fontSize: 13,
                            fontWeight: 700,
                            lineHeight: "1.2em",
                        }}
                    >
                        {item.label}
                    </span>
                </Link>
            ))}
        </div>
    )
}