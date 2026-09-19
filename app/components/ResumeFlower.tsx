"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function ResumeFlower() {
  const [open, setOpen] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const a = new Audio("/click.mp3")
    a.volume = 0.5
    a.preload = "auto"
    a.load()
    audioRef.current = a
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const click = () => {
    const a = audioRef.current
    if (!a) return
    a.currentTime = 0
    a.play().catch(() => {})
  }

  return (
    <>
      <button
        onClick={() => {
          click()
          setOpen(true)
        }}
        aria-label="View my resume"
        className="inline-block transition-transform duration-300 ease-out hover:scale-110 active:scale-95"
      >
        <Image
          src="/resume/flower.svg"
          alt=""
          width={120}
          height={120}
          className="w-[60px]"
        />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          style={{ background: "rgba(0,0,0,0.35)" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[380px] rounded-[10px] border-2 border-black px-7 py-8 text-center"
            style={{
              background: "#f8f3cf",
              boxShadow: "6px 6px 0 rgba(0,0,0,0.75)",
            }}
          >
            <Image
              src="/resume/flower.svg"
              alt=""
              width={120}
              height={120}
              className="mx-auto w-[46px]"
            />

            <p
              className="mt-5 text-[17px] font-bold leading-[1.5]"
              style={{
                fontFamily: "var(--font-open-sans)",
                color: "#000000",
              }}
            >
              Please contact me for my resume!
            </p>

            <button
              onClick={() => {
                click()
                setOpen(false)
              }}
              className="mt-6 rounded-[18px] border border-black/70 bg-[#DAD0B5] px-6 py-2 text-[13px] font-bold transition-colors hover:bg-[#C4B183]"
              style={{
                fontFamily: "var(--font-inconsolata)",
                color: "#000000",
              }}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  )
}