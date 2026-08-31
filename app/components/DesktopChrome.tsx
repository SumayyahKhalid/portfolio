import { Bluetooth, BatteryMedium, Wifi, Search } from "lucide-react"
import NoiseGrain from "./NoiseGrain"
import TimezoneClock from "./TimezoneClock"
import DesktopSidebar from "./DesktopSidebar"
import SoundLink from "./SoundLink"

export default function DesktopChrome({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="relative flex-1 min-h-screen overflow-x-hidden">
            <div
                className="absolute inset-0"
                style={{
                    background: `
            radial-gradient(ellipse 70% 60% at 0% 0%, #EFEDE0 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 75% 5%, #A9C6DE 0%, transparent 65%),
            radial-gradient(ellipse 70% 70% at 5% 100%, #B0A4D8 0%, transparent 65%),
            radial-gradient(ellipse 80% 80% at 100% 85%, #E9A6C8 0%, transparent 70%),
            linear-gradient(135deg, #D8D5DC 0%, #C3B8D8 50%, #DCA9C6 100%)
          `,
                }}
            />

            <NoiseGrain
                opacity={0.15}
                size={0.3}
                type="standard"
                blendMode="overlay"
            />

            <div
                className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between gap-2 px-4 text-white"
                style={{
                    height: 26,
                    background:
                        "linear-gradient(90deg, #3D2B2B 0%, #1F1F1F 100%)",
                    opacity: 0.9,
                    fontFamily: "var(--font-inconsolata)",
                    fontSize: 13,
                    fontWeight: 700,
                    lineHeight: "1.2em",
                }}
            >
                <SoundLink
                    href="/"
                    className="inline-block origin-left truncate transition-transform duration-300 ease-out hover:scale-105"
                >
                    Sumayyah Khalid&apos;s Whimsical Portfolio
                </SoundLink>

                <div className="flex items-center gap-3 shrink-0">
                    <Bluetooth size={14} strokeWidth={2} className="hidden sm:block" />
                    <BatteryMedium size={16} strokeWidth={2} className="hidden sm:block" />
                    <Wifi size={14} strokeWidth={2} className="hidden sm:block" />
                    <Search size={14} strokeWidth={2} className="hidden sm:block" />
                    <span className="hidden opacity-50 sm:block">|</span>
                    <TimezoneClock />
                </div>
            </div>

            <div className="relative pt-[26px]">
                <DesktopSidebar />
                {children}
            </div>
        </main>
    )
}