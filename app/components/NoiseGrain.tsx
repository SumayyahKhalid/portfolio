"use client"

import { useState, useEffect, type CSSProperties } from "react"

type GrainType = "standard" | "rough" | "color" | "film" | "digital"

type Props = {
    opacity?: number
    blendMode?: CSSProperties["mixBlendMode"]
    size?: number
    type?: GrainType
    contrast?: number
    brightness?: number
}

export default function NoiseGrain({
    opacity = 0.5,
    blendMode = "overlay",
    size = 4,
    type = "standard",
    contrast = 100,
    brightness = 100,
}: Props) {
    const [noiseUrl, setNoiseUrl] = useState("")

    useEffect(() => {
        const canvas = document.createElement("canvas")
        canvas.width = 128
        canvas.height = 128
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const imageData = ctx.createImageData(128, 128)
        const data = imageData.data

        let currentSeed = 1
        const random = () => {
            const x = Math.sin(currentSeed++) * 10000
            return x - Math.floor(x)
        }

        for (let i = 0; i < data.length; i += 4) {
            if (type === "color") {
                data[i] = random() * 255
                data[i + 1] = random() * 255
                data[i + 2] = random() * 255
            } else if (type === "rough") {
                const val = random() > 0.5 ? 255 : 0
                data[i] = val
                data[i + 1] = val
                data[i + 2] = val
            } else if (type === "film") {
                const u = 1 - random()
                const v = random()
                const z =
                    Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
                let val = 128 + z * 64
                val = Math.max(0, Math.min(255, val))
                data[i] = val
                data[i + 1] = val
                data[i + 2] = val
            } else if (type === "digital") {
                const levels = 4
                const val = Math.floor(random() * levels) * (255 / (levels - 1))
                data[i] = val
                data[i + 1] = val
                data[i + 2] = val
            } else {
                const val = random() * 255
                data[i] = val
                data[i + 1] = val
                data[i + 2] = val
            }
            data[i + 3] = 255
        }

        ctx.putImageData(imageData, 0, 0)
        setNoiseUrl(canvas.toDataURL())
    }, [type])

    if (!noiseUrl) return null

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                overflow: "hidden",
                zIndex: 10,
                opacity,
                mixBlendMode: blendMode,
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    pointerEvents: "none",
                    backgroundImage: `url(${noiseUrl})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: `${128 * size}px`,
                    imageRendering: "pixelated",
                    filter: `contrast(${contrast}%) brightness(${brightness}%)`,
                }}
            />
        </div>
    )
}