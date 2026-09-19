import { Bluetooth, BatteryMedium, Wifi, Search } from "lucide-react";
import NoiseGrain from "./components/NoiseGrain";
import TimezoneClock from "./components/TimezoneClock";
import DesktopSidebar from "./components/DesktopSidebar";
import IntroPopup from "./components/IntroPopup";
import SoundLink from "./components/SoundLink";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative flex-1 overflow-x-hidden md:overflow-hidden">
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

      <NoiseGrain opacity={0.15} size={0.3} type="standard" blendMode="overlay" />

      <div
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between gap-2 px-4 text-white"
        style={{
          height: 26,
          background: "linear-gradient(90deg, #3D2B2B 0%, #1F1F1F 100%)",
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

      <div className="flex flex-col pt-[26px] md:block md:pt-0">
        <DesktopSidebar />
        <IntroPopup />

        <div className="relative z-0 flex justify-center px-4 pt-10 pb-8 md:absolute md:inset-y-0 md:left-0 md:right-0 md:items-center md:justify-center md:px-0 md:pb-0 md:pt-[200px] md:pointer-events-none">
          <div className="relative w-[90vw] md:w-[min(50vw,670px)]">
            <Image
              src="/mainart.svg"
              alt="Ghibli inspired desktop artwork"
              width={993}
              height={700}
              priority
              className="h-auto w-full"
            />

            <Image
              src="/blackspikey.svg"
              alt=""
              width={416}
              height={488}
              className="absolute left-[58%] top-[21%] w-[6.5%] h-auto animate-patrol"
            />
          </div>
        </div>
      </div>
    </main>
  );
}