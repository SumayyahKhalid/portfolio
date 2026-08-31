import Image from "next/image"

const mono = "var(--font-inconsolata)"
const sans = "var(--font-open-sans)"

/* Horizontal bars for the Likert averages. Research leads this case study,
   so the data needs a real visual, not a paragraph. */
export function SurveyBars({
    items,
    max = 5,
    caption,
}: {
    items: { label: string; value: number }[]
    max?: number
    caption?: string
}) {
    return (
        <div
            className="mt-8 rounded-[10px] px-6 py-6"
            style={{ border: "1px solid var(--cs-line)" }}
        >
            {items.map((item) => (
                <div key={item.label} className="mb-5 last:mb-0">
                    <div className="flex items-baseline justify-between gap-4">
                        <p
                            className="text-[14px] font-semibold leading-[1.4]"
                            style={{ fontFamily: sans, color: "#000000" }}
                        >
                            {item.label}
                        </p>
                        <p
                            className="shrink-0 text-[14px] font-bold"
                            style={{ fontFamily: mono, color: "#000000" }}
                        >
                            {item.value.toFixed(2)}
                        </p>
                    </div>
                    <div
                        className="mt-2 h-[10px] w-full rounded-full"
                        style={{ background: "var(--cs-fill)" }}
                    >
                        <div
                            className="h-full rounded-full"
                            style={{
                                width: `${(item.value / max) * 100}%`,
                                background:
                                    "linear-gradient(90deg, var(--cs-accent) 0%, #C58BE8 60%, #A8DDA0 100%)",
                            }}
                        />
                    </div>
                </div>
            ))}
            {caption && (
                <p
                    className="mt-5 text-[12px]"
                    style={{ fontFamily: mono, color: "#000000" }}
                >
                    {caption}
                </p>
            )}
        </div>
    )
}

/* Two columns: what people say they want, and what actually happens.
   This is the drop-off argument in one object. */
export function GapRows({
    leftLabel,
    rightLabel,
    rows,
}: {
    leftLabel: string
    rightLabel: string
    rows: { left: string; right: string }[]
}) {
    return (
        <div
            className="mt-8 overflow-hidden rounded-[10px]"
            style={{ border: "1px solid var(--cs-line)" }}
        >
            <div
                className="grid grid-cols-2"
                style={{ background: "var(--cs-accent)" }}
            >
                <p
                    className="px-5 py-2.5 text-[12px] font-bold tracking-wide"
                    style={{ fontFamily: mono, color: "#000000" }}
                >
                    {leftLabel}
                </p>
                <p
                    className="px-5 py-2.5 text-[12px] font-bold tracking-wide"
                    style={{
                        fontFamily: mono,
                        color: "#000000",
                        borderLeft: "1px solid var(--cs-line)",
                    }}
                >
                    {rightLabel}
                </p>
            </div>
            {rows.map((row, i) => (
                <div
                    key={row.left}
                    className="grid grid-cols-2"
                    style={{
                        background: i % 2 === 0 ? "transparent" : "var(--cs-fill)",
                        borderTop: "1px solid var(--cs-line)",
                    }}
                >
                    <p
                        className="px-5 py-4 text-[14px] leading-[1.6]"
                        style={{ fontFamily: sans, color: "#000000" }}
                    >
                        {row.left}
                    </p>
                    <p
                        className="px-5 py-4 text-[14px] font-bold leading-[1.6]"
                        style={{
                            fontFamily: sans,
                            color: "#000000",
                            borderLeft: "1px solid var(--cs-line)",
                        }}
                    >
                        {row.right}
                    </p>
                </div>
            ))}
        </div>
    )
}

/* A screen paired with the reasoning behind it, alternating sides.
   Different rhythm from the GreenBuddies numbered walk. */
export function ScreenNote({
    src,
    alt = "",
    step,
    title,
    children,
    flip = false,
}: {
    src: string
    alt?: string
    step: string
    title: string
    children: React.ReactNode
    flip?: boolean
}) {
    return (
        <div className="mt-10 grid grid-cols-1 items-center gap-7 sm:grid-cols-2">
            <div className={flip ? "sm:order-2" : ""}>
                <Image
                    src={src}
                    alt={alt}
                    width={1300}
                    height={900}
                    className="w-full rounded-[14px]"
                />
            </div>
            <div className={flip ? "sm:order-1" : ""}>
                <span
                    className="inline-block rounded-[18px] border border-black/70 px-4 py-1 text-[12px] font-bold"
                    style={{
                        fontFamily: mono,
                        color: "#000000",
                        background: "var(--cs-pill)",
                    }}
                >
                    {step}
                </span>
                <p
                    className="mt-4 text-[19px] font-bold leading-[1.35]"
                    style={{ fontFamily: sans, color: "#000000" }}
                >
                    {title}
                </p>
                <p
                    className="mt-3 text-[15px] leading-[1.7]"
                    style={{ fontFamily: sans, color: "#000000" }}
                >
                    {children}
                </p>
            </div>
        </div>
    )
}