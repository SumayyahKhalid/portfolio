"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

type Props = {
    href: string
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

export default function SoundLink({
    href,
    children,
    className = "",
    style,
}: Props) {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const router = useRouter()

    useEffect(() => {
        const a = new Audio("/click.mp3")
        a.volume = 1
        a.preload = "auto"
        a.load()
        audioRef.current = a
    }, [])

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        console.log("SoundLink clicked", href, audioRef.current)
        const a = audioRef.current
        if (a) {
            a.currentTime = 0
            a.play().catch((err) => console.log("play failed:", err))
        }
        setTimeout(() => router.push(href), 150)
    }

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={className}
            style={style}
        >
            {children}
        </Link>
    )
}


