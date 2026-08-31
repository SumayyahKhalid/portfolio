"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function NoFaceGame() {
    const [correctIndex, setCorrectIndex] = useState(() =>
        Math.floor(Math.random() * 3)
    )
    const [guessed, setGuessed] = useState<number | null>(null)
    const [won, setWon] = useState(false)
    const winAudio = useRef<HTMLAudioElement | null>(null)
    const lossCount = useRef(0)

    useEffect(() => {
        const a = new Audio("/win.mp3")
        a.volume = 0.6
        a.preload = "auto"
        a.load()
        winAudio.current = a
    }, [])

    const playWin = () => {
        const a = winAudio.current
        if (!a) return
        a.currentTime = 0
        a.play().catch(() => {})
    }

    const handleClick = (index: number) => {
        if (guessed !== null) return

        const forcedWin = lossCount.current >= 2
        const isWin = forcedWin || index === correctIndex

        if (isWin) {
            lossCount.current = 0
            setCorrectIndex(index)
            playWin()
        } else {
            lossCount.current += 1
        }

        setWon(isWin)
        setGuessed(index)
    }

    const reset = () => {
        setGuessed(null)
        setWon(false)
        setCorrectIndex(Math.floor(Math.random() * 3))
    }

    const borderFor = (index: number) => {
        if (guessed === null) return "4px solid transparent"
        if (index === correctIndex) return "4px solid #2e8b4a"
        if (index === guessed) return "4px solid #c0392b"
        return "4px solid transparent"
    }

    return (
        <div className="mt-8 flex flex-col items-center gap-6">
            <div className="flex items-center justify-center gap-8">
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        onClick={() => handleClick(i)}
                        style={{
                            border: borderFor(i),
                            borderRadius: 12,
                            cursor: guessed === null ? "pointer" : "default",
                        }}
                        className={`p-2 transition-transform duration-300 ease-out ${
                            guessed === null
                                ? "hover:scale-105 active:scale-95"
                                : ""
                        }`}
                    >
                        <div
                            className="animate-levitate"
                            style={{ animationDelay: `${i * 0.8}s` }}
                        >
                            <Image
                                src="/noface.svg"
                                alt={`No-Face ${i + 1}`}
                                width={90}
                                height={120}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {guessed !== null && (
                <div
                    className="flex flex-col items-center gap-4"
                    style={{ fontFamily: "var(--font-inconsolata)" }}
                >
                    <p
                        className="text-center text-[15px]"
                        style={{
                            color: won ? "#2e8b4a" : "#c0392b",
                            fontWeight: 600,
                        }}
                    >
                        {won
                            ? "You found the real No-Face! No gold coins this time."
                            : "Wrong!! You owe me gold coins!!"}
                    </p>

                    <button
                        onClick={reset}
                        style={{
                            padding: "6px 20px",
                            background: "#FFF7D1",
                            border: "1px solid #000",
                            borderRadius: 10,
                            fontFamily: "var(--font-inconsolata)",
                            fontWeight: 600,
                            fontSize: 12,
                            cursor: "pointer",
                            color: "#000000",
                        }}
                        className="transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
                    >
                        Try Again...
                    </button>
                </div>
            )}
        </div>
    )
}