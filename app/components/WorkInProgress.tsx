import { ArrowLeft } from "lucide-react"
import DesktopChrome from "./DesktopChrome"
import DesktopWindow from "./DesktopWindow"
import SoundLink from "./SoundLink"

const mono = "var(--font-inconsolata)"
const sans = "var(--font-open-sans)"

export default function WorkInProgress({
  title,
  blurb,
}: {
  title: string
  blurb: string
}) {
  return (
    <DesktopChrome>
      <DesktopWindow
        title={
          <SoundLink href="/ux-projects" className="flex items-center gap-3">
            <ArrowLeft size={22} strokeWidth={2.5} />
            Back.
          </SoundLink>
        }
        fullHeight
        className="mx-4 my-6 md:ml-[190px] md:mr-[6%] md:my-[4vh] md:mb-[8vh] md:h-[calc(100vh-12vh-26px)]"
      >
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-16 text-center">
          <span
            className="rounded-[18px] border border-black/70 bg-[#E6DCB8] px-5 py-1.5 text-[12px] font-bold"
            style={{ fontFamily: mono, color: "#000000" }}
          >
            IN PROGRESS
          </span>

          <h1
            className="mt-6 text-[34px] font-bold leading-[1.15]"
            style={{ fontFamily: sans, color: "#000000" }}
          >
            {title}
          </h1>

          <div className="mt-5 h-[3px] w-[135px] bg-[#C4B183]" />

          <p
            className="mt-6 max-w-[460px] text-[16px] leading-[1.7]"
            style={{ fontFamily: sans, color: "#000000" }}
          >
            {blurb}
          </p>

          <p
            className="mt-8 text-[13px]"
            style={{ fontFamily: mono, color: "#000000" }}
          >
            Writing this one properly. Check back soon.
          </p>

          <SoundLink
            href="/ux-projects"
            className="mt-8 rounded-[18px] border border-black/70 bg-[#DAD0B5] px-6 py-2 text-[13px] font-bold transition-colors hover:bg-[#C4B183]"
          >
            See other projects
          </SoundLink>
        </div>
      </DesktopWindow>
    </DesktopChrome>
  )
}