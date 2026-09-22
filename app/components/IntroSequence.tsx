"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

type Stage = "3" | "2" | "1" | "boom" | "done"

export default function IntroSequence() {
    const [stage, setStage] = useState<Stage>("3")
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (reduced) {
            setStage("done")
            return
        }

        const timers = [
            setTimeout(() => setStage("2"), 800),
            setTimeout(() => setStage("1"), 1600),
            setTimeout(() => setStage("boom"), 2400),
            setTimeout(() => setStage("done"), 3200),
        ]

        return () => timers.forEach(clearTimeout)
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let raf = 0
        const dpr = window.devicePixelRatio || 1

        const resize = () => {
            canvas.width = window.innerWidth * dpr
            canvas.height = window.innerHeight * dpr
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        }
        resize()
        window.addEventListener("resize", resize)

        const stars = Array.from({ length: 700 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            r: Math.random() * 1.1 + 0.2,
            a: Math.random() * Math.PI * 2,
            s: Math.random() * 0.02 + 0.004,
        }))

        const draw = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
            for (const st of stars) {
                st.a += st.s
                const alpha = 0.35 + Math.abs(Math.sin(st.a)) * 0.65
                ctx.beginPath()
                ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 247, 209, ${alpha})`
                ctx.fill()
                st.y += 0.04
                if (st.y > window.innerHeight) st.y = 0
            }
            raf = requestAnimationFrame(draw)
        }
        draw()

        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener("resize", resize)
        }
    }, [])

    return (
        <AnimatePresence>
            {stage !== "done" && (
                <motion.div
                    key="intro"
                    onClick={() => setStage("done")}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
                >
                    <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(ellipse at center, rgba(204,204,204,0) 0%, rgba(0,0,0,0.83) 100%)",
                        }}
                    />

                    <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center">
                        <p
                            className="text-[#FFF7D1]"
                            style={{
                                fontFamily: "var(--font-inconsolata)",
                                fontSize: 20,
                                lineHeight: "1.5em",
                            }}
                        >
                            Welcome to Sumayyah&apos;s
                            <br />
                            Whimsical Portfolio
                        </p>

                        <AnimatePresence mode="wait">
                            {(stage === "3" || stage === "2" || stage === "1") && (
                                <motion.span
                                    key={stage}
                                    initial={{ scale: 0.4, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 1.6, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="text-[#FFF7D1]"
                                    style={{
                                        fontFamily: "var(--font-inconsolata)",
                                        fontSize: 92,
                                        fontWeight: 700,
                                        lineHeight: 1,
                                    }}
                                >
                                    {stage}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>

                    <span
                        className="absolute bottom-8 left-0 right-0 text-center text-[12px] text-[#FFF7D1] opacity-40"
                        style={{ fontFamily: "var(--font-inconsolata)" }}
                    >
                        click anywhere to skip
                    </span>

                    {stage === "boom" && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 120 }}
                            transition={{ duration: 0.8, ease: "easeIn" }}
                            className="absolute h-[100px] w-[100px] rounded-full bg-white"
                        />
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}