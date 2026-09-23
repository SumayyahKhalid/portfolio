import Image from "next/image"
import { Minus, Square, X } from "lucide-react"
import SoundLink from "./SoundLink"

export default function IntroPopup() {
    return (
        <div className="relative z-10 px-8 pt-6 md:absolute md:right-10 md:top-10 md:w-[545px] md:px-0">
            <div
                style={{
                    background: "#f8f3cf",
                    border: "1px solid #000000",
                    borderRadius: 10,
                    overflow: "hidden",
                }}
            >
                <div
                    className="flex items-center justify-between gap-2 px-2 py-1.5"
                    style={{ borderBottom: "1px solid #000000" }}
                >
                    <div className="flex items-center gap-2">
                        <Image
                            src="/avatar.svg"
                            alt=""
                            width={28}
                            height={29}
                            className="shrink-0"
                        />
                        <span
                            className="text-[10px] md:text-[12px]"
                            style={{
                                fontFamily: "var(--font-inconsolata)",
                                fontWeight: 700,
                                lineHeight: "1.2em",
                                color: "#000000",
                            }}
                        >
                            I won&apos;t offer you gold, only code &amp; design
                            that&apos;s more valuable.
                        </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 text-black">
                        <Minus size={12} strokeWidth={2.5} />
                        <Square size={11} strokeWidth={2.5} />
                        <X size={12} strokeWidth={2.5} />
                    </div>
                </div>

                <div className="px-5 py-4">
                    <h2
                        className="text-[15px] md:text-[18px]"
                        style={{
                            fontFamily: "var(--font-open-sans)",
                            fontWeight: 700,
                            lineHeight: "22.45px",
                            color: "#000000",
                        }}
                    >
                        PRODUCT | UX DESIGNER
                    </h2>

                    <p
                        className="mt-3"
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: 13,
                            lineHeight: "22.45px",
                            color: "#000000",
                        }}
                    >
                        Hello, I&apos;m Sumayyah!
                        <br />
                        A CS + UX design student @ WLU, which means I design
                        something and then can&apos;t stop myself from building
                        it. Currently looking for new opportunities!
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                        <SoundLink
                            href="/work"
                            className="inline-block rounded-[10px] border border-black bg-[#DAD0B5] px-5 py-2 font-[family-name:var(--font-inconsolata)] text-[13px] font-bold text-black transition-transform duration-300 ease-out hover:scale-105"
                        >
                            See my work →
                        </SoundLink>

                        <SoundLink
                            href="/about-me"
                            className="inline-block rounded-[10px] border border-black bg-transparent px-5 py-2 font-[family-name:var(--font-inconsolata)] text-[13px] font-bold text-black transition-transform duration-300 ease-out hover:scale-105 hover:bg-[#DAD0B5]"
                        >
                            Who&apos;s the No-Face?
                        </SoundLink>
                    </div>
                </div>
            </div>
        </div>
    )
}