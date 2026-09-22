"use client"

import Image from "next/image"
import SoundLink from "./SoundLink"

type Props = {
    src: string
    alt: string
    width: number
    height: number
    title: string
    description: string
    tags: string[]
    href?: string
}

function Inner({ src, alt, width, height, title, description, tags }: Props) {
    return (
        <>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-full rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.16)]"
            />

            <div className="grid grid-rows-[1fr] transition-all duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
                <div className="overflow-hidden">
                    <div className="pt-4">
                        <div className="flex flex-wrap gap-3">
                            {tags.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-[18px] border border-black/70 bg-[#DAD0B5] px-3 py-1 text-[11px] font-bold"
                                    style={{
                                        fontFamily: "var(--font-inconsolata)",
                                        color: "#000000",
                                    }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <h2
                            className="mt-4 text-[24px]"
                            style={{
                                fontFamily: "var(--font-inconsolata)",
                                fontWeight: 600,
                                lineHeight: "1.2em",
                                color: "#000000",
                            }}
                        >
                            {title}
                        </h2>

                        <p
                            className="mt-2 text-[14px] leading-[1.6]"
                            style={{
                                fontFamily: "var(--font-open-sans)",
                                color: "#000000",
                            }}
                        >
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function ProjectCard(props: Props) {
    const shell =
        "group block rounded-[20px] border border-[#C9BD91] p-6 transition-colors duration-300"

    if (!props.href) {
        return (
            <div className={shell}>
                <Inner {...props} />
            </div>
        )
    }

    return (
        <SoundLink href={props.href} className={shell}>
            <Inner {...props} />
        </SoundLink>
    )
}