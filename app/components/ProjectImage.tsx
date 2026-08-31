"use client"

import Image from "next/image"
import SoundLink from "./SoundLink"

type Props = {
    src: string
    alt: string
    width: number
    height: number
    className?: string
    href?: string
}

export default function ProjectImage({
    src,
    alt,
    width,
    height,
    className = "",
    href,
}: Props) {
    const img = (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full rounded-[10px]"
        />
    )

    const wrapper = `block cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.01] active:scale-[0.99] ${className}`

    if (href) {
        return (
            <SoundLink href={href} className={wrapper}>
                {img}
            </SoundLink>
        )
    }

    return <div className={wrapper}>{img}</div>
}