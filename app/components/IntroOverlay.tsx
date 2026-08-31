"use client"

import { motion, AnimatePresence } from "motion/react"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function IntroOverlay() {
    const [exploding, setExploding] = useState(false)
    const router = useRouter()
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        const a = new Audio("/magic.mp3")
        a.volume = 1
        a.preload = "auto"
        a.load()
        audioRef.current = a
    }, [])

    const handleClick = () => {
        audioRef.current?.play().catch(() => {})

        setExploding(true)
        setTimeout(() => {
            router.push("/home")
        }, 800)
    }

    return (
        <>
            <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                style={{
                    width: 288,
                    height: 39,
                    background: "#FFF7D1",
                    border: "2px solid #000000",
                    borderRadius: 10,
                    fontFamily: "Inconsolata, monospace",
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: "pointer",
                    letterSpacing: 0,
                    lineHeight: "1.2em",
                    color: "#000000",
                    opacity: 0.8,
                    zIndex: 1,
                    overflow: "hidden",
                    padding: "0 23px",
                }}
            >
                Start Exploring →
            </motion.button>

            <AnimatePresence>
                {exploding && (
                    <motion.div
                        style={{
                            position: "fixed",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 9999,
                            overflow: "hidden",
                            pointerEvents: "none",
                        }}
                    >
                        <motion.div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "white",
                                zIndex: 0,
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeIn" }}
                        />

                        <motion.div
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: "50%",
                                background: "white",
                                position: "relative",
                                zIndex: 1,
                            }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 100 }}
                            transition={{ duration: 0.8, ease: "easeIn" }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}