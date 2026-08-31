import Image from "next/image"
import { Minus, Square, X } from "lucide-react"

type Props = {
    title: React.ReactNode
    icon?: string
    children: React.ReactNode
    className?: string
    titleSize?: "sm" | "lg"
    fullHeight?: boolean
}

export default function DesktopWindow({
    title,
    icon,
    children,
    className = "",
    titleSize = "lg",
    fullHeight = false,
}: Props) {
    return (
        <div
            className={`relative z-10 flex flex-col ${className}`}
            style={{
                background: "#f8f3cf",
                border: "1px solid #000000",
                borderRadius: 10,
                overflow: "hidden",
            }}
        >
            <div
                className="flex shrink-0 items-center justify-between gap-3 px-4 py-2.5"
                style={{ borderBottom: "1px solid #000000" }}
            >
                <div className="flex items-center gap-3">
                    {icon && <Image src={icon} alt="" width={34} height={34} />}
                    <span
                        className={
                            titleSize === "lg"
                                ? "text-[12px] md:text-[16px]"
                                : "text-[10px] md:text-[12px]"
                        }
                        style={{
                            fontFamily: "var(--font-inconsolata)",
                            fontWeight: 700,
                            lineHeight: "1.2em",
                            color: "#000000",
                        }}
                    >
                        {title}
                    </span>
                </div>

                <div className="flex shrink-0 items-center gap-2 text-black">
                    <Minus size={titleSize === "lg" ? 18 : 12} strokeWidth={2.5} />
                    <Square size={titleSize === "lg" ? 16 : 11} strokeWidth={2.5} />
                    <X size={titleSize === "lg" ? 18 : 12} strokeWidth={2.5} />
                </div>
            </div>

            <div
                className={
                    fullHeight
                        ? "min-h-0 flex-1 overflow-y-auto px-4 pb-6 md:px-6"
                        : "px-5 py-4"
                }
            >
                {children}
            </div>
        </div>
    )
}