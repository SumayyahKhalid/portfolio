"use client"

import Image from "next/image"

const posters = [
    "/about/show-1.jpeg",
    "/about/show-2.jpeg",
    "/about/show-3.jpeg",
    "/about/show-4.jpeg",
]

export default function PosterCarousel() {
    const doubled = [...posters, ...posters]

    return (
        <div className="w-full overflow-hidden">
            <div className="animate-marquee flex w-max gap-6">
                {doubled.map((src, i) => (
                    <Image
                        key={i}
                        src={src}
                        alt=""
                        width={420}
                        height={620}
                        className="h-[160px] w-auto rounded-[12px]"
                    />
                ))}
            </div>
        </div>
    )
}