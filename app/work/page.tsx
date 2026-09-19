import Image from "next/image";
import DesktopChrome from "../components/DesktopChrome";
import DesktopWindow from "../components/DesktopWindow";
import ProjectImage from "../components/ProjectImage";
import NoFaceGame from "../components/NoFaceGame";
import ChicksCard from "../components/ChicksCard";

const card = "rounded-[10px] border border-[#C9BD91] p-6";

const darkCard = "rounded-[10px] border border-[#C9BD91] bg-[#DDD2AE] p-6";

const tag =
  "rounded-[18px] border border-black/70 bg-[#DAD0B5] px-4 py-1.5";

const headingStyle = {
  fontFamily: "var(--font-inconsolata)",
  fontWeight: 600,
  fontSize: 32,
  lineHeight: "1.2em",
  color: "#000000",
};

const bodyStyle = {
  fontFamily: "var(--font-open-sans)",
  fontWeight: 400,
  fontSize: 15,
  lineHeight: "1.55",
  color: "#000000",
};

const tagStyle = {
  fontFamily: "var(--font-inconsolata)",
  fontWeight: 700,
  fontSize: 12,
  lineHeight: "1.2em",
  color: "#000000",
};

export default function UXProjectsPage() {
  return (
    <DesktopChrome>
      <DesktopWindow
        title="Work"
        icon="/icons/ux-projects.svg"
        fullHeight
        className="mx-4 my-6 md:ml-[190px] md:mr-[6%] md:my-[4vh] md:mb-[8vh] md:h-[calc(100vh-12vh-26px)]"
      >
        <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <div className={card}>
              <h2 style={headingStyle}>The Failure Museum</h2>
              <p className="mt-3" style={bodyStyle}>
                The Failure Museum is a space where mistakes are no longer
                hidden, but understood. Designed to help people reflect on their
                experiences, the platform turns moments of failure into
                opportunities for growth through storytelling, guided
                reflection, and shared learning.
              </p>
              <ProjectImage
                src="/projects/failure-museum.svg"
                alt="The Failure Museum"
                width={860}
                height={620}
                className="mt-4"
                href="/ux-projects/failure-museum"
              />
              <div
                className="mt-4 flex flex-wrap justify-end gap-3"
                style={tagStyle}
              >
                <span className={tag}>3rd Place Winner</span>
                <span className={tag}>March 2026</span>
              </div>
            </div>

            <div className={card}>
              <Image
                src="/projects/echo.svg"
                alt="Echo"
                width={860}
                height={880}
                className="w-full rounded-[10px]"
              />
              <div
                className="mt-4 flex flex-wrap justify-start gap-3"
                style={tagStyle}
              >
                <span className={tag}>Community</span>
                <span className={tag}>March 2025</span>
              </div>
              <h2 className="mt-4" style={headingStyle}>
                Echo
              </h2>
              <p className="mt-3" style={bodyStyle}>
                Echo brings people back to real-life connection through music.
                By helping users discover local events and meet others with
                similar tastes, the platform turns shared interests into
                meaningful, in-person experiences.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className={darkCard}>
              <p
                className="text-[16px] leading-[1.6]"
                style={{
                  fontFamily: "var(--font-inconsolata)",
                  fontWeight: 700,
                  color: "#000000",
                }}
              >
                Let&apos;s play a game...
                <br />
                Choose the right no-face or else you owe me gold coins!!
              </p>
              <NoFaceGame />
            </div>

            <div className={card}>
              <div
                className="flex flex-wrap justify-end gap-3"
                style={tagStyle}
              >
                <span className={tag}>Early Education</span>
                <span className={tag}>July 2025</span>
              </div>
              <Image
                src="/projects/greenbuddies.svg"
                alt="GreenBuddies"
                width={860}
                height={480}
                className="mt-4 w-full rounded-[10px]"
              />
              <h2 className="mt-4" style={headingStyle}>
                GreenBuddies
              </h2>
              <p className="mt-3" style={bodyStyle}>
                What if exploring nature felt like a game?
              </p>
              <p className="mt-3" style={bodyStyle}>
                GreenBuddies is a gamified experience that motivates children to
                step outside, complete challenges, and build a deeper connection
                with the world around them.
              </p>
            </div>

            <div className={darkCard}>
              <ChicksCard />
            </div>
          </div>
        </div>
      </DesktopWindow>
    </DesktopChrome>
  );
}