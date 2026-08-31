import Image from "next/image"

const mono = "var(--font-inconsolata)"
const sans = "var(--font-open-sans)"

export function Section({
    id,
    children,
}: {
    id?: string
    children: React.ReactNode
}) {
    return (
        <div
            id={id}
            className="mt-6 scroll-mt-16 rounded-[10px] p-6"
            style={{ border: "1px solid var(--cs-line)" }}
        >
            {children}
        </div>
    )
}

export function SectionHeader({
    label,
    title,
    intro,
}: {
    label: string
    title: string
    intro: string
}) {
    return (
        <div>
            <p
                className="text-[13px]"
                style={{ fontFamily: mono, color: "#000000" }}
            >
                {label}
            </p>
            <h2
                className="mt-2 text-[27px] font-bold"
                style={{ fontFamily: sans, color: "#000000" }}
            >
                {title}
            </h2>
            <p
                className="mt-4 text-[16px] font-bold leading-[1.6]"
                style={{ fontFamily: sans, color: "#000000" }}
            >
                {intro}
            </p>
            <div
                className="mt-6 h-[3px] w-[135px]"
                style={{ background: "var(--cs-line)" }}
            />
        </div>
    )
}

export function Body({ children }: { children: React.ReactNode }) {
    return (
        <p
            className="mt-6 text-[16px] leading-[1.7]"
            style={{ fontFamily: sans, color: "#000000" }}
        >
            {children}
        </p>
    )
}

export function Callout({
    label,
    children,
    filled = true,
}: {
    label?: string
    children: React.ReactNode
    filled?: boolean
}) {
    return (
        <div
            className="mt-8 rounded-r-[10px] px-6 py-5"
            style={{
                background: filled ? "var(--cs-fill)" : "transparent",
                border: filled ? "none" : "1px solid var(--cs-line)",
                borderLeft: "4px solid var(--cs-accent)",
            }}
        >
            {label && (
                <p
                    className="mb-2 text-[12px] font-bold tracking-wide"
                    style={{ fontFamily: sans, color: "#000000" }}
                >
                    {label}
                </p>
            )}
            <div
                className="text-[16px] font-bold italic leading-[1.6]"
                style={{ fontFamily: sans, color: "#000000" }}
            >
                {children}
            </div>
        </div>
    )
}

export function StatRow({
    stats,
    filled = true,
}: {
    stats: { value: string; label: string }[]
    filled?: boolean
}) {
    return (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((s) => (
                <div
                    key={s.value}
                    className="rounded-[10px] px-5 py-7 text-center"
                    style={{
                        background: filled ? "var(--cs-fill)" : "transparent",
                        border: filled ? "none" : "1px solid var(--cs-line)",
                    }}
                >
                    <p
                        className="text-[26px] font-bold italic"
                        style={{ fontFamily: sans, color: "#000000" }}
                    >
                        {s.value}
                    </p>
                    <p
                        className="mt-3 text-[14px] font-semibold leading-[1.5]"
                        style={{ fontFamily: sans, color: "#000000" }}
                    >
                        {s.label}
                    </p>
                </div>
            ))}
        </div>
    )
}

export function Feature({
    label,
    text,
    pill,
    filled = true,
}: {
    label: string
    text: string
    pill: string
    filled?: boolean
}) {
    return (
        <div
            className="mt-8 rounded-r-[10px] px-6 py-5"
            style={{
                background: filled ? "var(--cs-fill)" : "transparent",
                border: filled ? "none" : "1px solid var(--cs-line)",
                borderLeft: "4px solid var(--cs-accent)",
            }}
        >
            <p
                className="text-[12px] font-bold tracking-wide"
                style={{ fontFamily: sans, color: "#000000" }}
            >
                {label}
            </p>
            <p
                className="mt-3 text-[16px] font-bold italic leading-[1.6]"
                style={{ fontFamily: sans, color: "#000000" }}
            >
                {text}
            </p>
            <span
                className="mt-4 inline-block rounded-[18px] px-5 py-1.5 text-[12px] font-bold"
                style={{
                    fontFamily: mono,
                    color: "#000000",
                    background: "var(--cs-pill)",
                    border: "1px solid rgba(0,0,0,0.7)",
                }}
            >
                {pill}
            </span>
        </div>
    )
}

export function Shot({ src, alt = "" }: { src: string; alt?: string }) {
    return (
        <Image
            src={src}
            alt={alt}
            width={1300}
            height={730}
            className="mt-8 w-full rounded-[14px]"
        />
    )
}

export function DecisionGrid({
    items,
}: {
    items: { title: string; text: string }[]
}) {
    return (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {items.map((item, i) => (
                <div
                    key={item.title}
                    className="rounded-[10px] px-5 py-6"
                    style={{
                        background:
                            i % 2 === 0 ? "var(--cs-fill)" : "transparent",
                        border:
                            i % 2 === 0
                                ? "none"
                                : "1px solid var(--cs-line)",
                    }}
                >
                    <p
                        className="text-center text-[15px] font-bold italic"
                        style={{ fontFamily: sans, color: "#000000" }}
                    >
                        {item.title}
                    </p>
                    <p
                        className="mt-3 text-center text-[13px] font-semibold leading-[1.6]"
                        style={{ fontFamily: sans, color: "#000000" }}
                    >
                        {item.text}
                    </p>
                </div>
            ))}
        </div>
    )
}

export function Step({
    number,
    label,
    title,
    children,
}: {
    number: string
    label: string
    title: string
    children: React.ReactNode
}) {
    return (
        <div className="mt-10 flex gap-5">
            <div className="shrink-0">
                <div
                    className="flex h-11 w-11 items-center justify-center rounded-full text-[17px] font-bold"
                    style={{
                        background: "var(--cs-accent)",
                        fontFamily: mono,
                        color: "#FFFFFF",
                    }}
                >
                    {number}
                </div>
                <div
                    className="mx-auto mt-3 w-[2px] flex-1"
                    style={{ background: "var(--cs-line)", minHeight: 20 }}
                />
            </div>

            <div className="min-w-0 flex-1">
                <p
                    className="text-[12px] font-bold tracking-wide"
                    style={{ fontFamily: mono, color: "var(--cs-accent)" }}
                >
                    {label}
                </p>
                <h3
                    className="mt-1 text-[20px] font-bold"
                    style={{ fontFamily: sans, color: "#000000" }}
                >
                    {title}
                </h3>
                <div
                    className="mt-3 text-[16px] leading-[1.7]"
                    style={{ fontFamily: sans, color: "#000000" }}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}