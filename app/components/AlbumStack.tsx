"use client"

import Image from "next/image"
import { useState } from "react"

const albums = [
    "/about/album-1.jpeg",
    "/about/album-2.jpeg",
    "/about/album-3.jpeg",
    "/about/album-4.jpeg",
]

export default function AlbumStack() {
    const [index, setIndex] = useState(0)

    const next = () => setIndex((i) => (i + 1) % albums.length)

    return (
        <div
            onClick={next}
            className="relative mx-auto aspect-square w-[60%] cursor-pointer"
        >
            {albums.map((src, i) => {
                const offset = (i - index + albums.length) % albums.length
                if (offset > 2) return null
                return (
                    <Image
                        key={src}
                        src={src}
                        alt=""
                        width={736}
                        height={736}
                        className="absolute inset-0 h-full w-full rounded-[6px] object-cover transition-all duration-300 ease-out"
                        style={{
                            transform: `translate(${offset * 10}px, ${offset * -10}px)`,
                            zIndex: albums.length - offset,
                            opacity: offset === 0 ? 1 : 0.9 - offset * 0.15,
                        }}
                    />
                )
            })}
        </div>
    )
}