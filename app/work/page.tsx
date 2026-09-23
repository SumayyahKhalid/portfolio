import DesktopChrome from "../components/DesktopChrome";
import DesktopWindow from "../components/DesktopWindow";
import ProjectCard from "../components/ProjectCard";
import NoFaceGame from "../components/NoFaceGame";
import ChicksCard from "../components/ChicksCard";

const darkCard = "rounded-[10px] border border-[#C9BD91] bg-[#DDD2AE] p-6";

export default function WorkPage() {
  return (
    <DesktopChrome>
      <DesktopWindow
        title="Work"
        icon="/icons/ux-projects.svg"
        fullHeight
        className="mx-4 my-6 md:ml-[190px] md:mr-[6%] md:my-[4vh] md:mb-[8vh] md:h-[calc(100vh-12vh-26px)]"
      >
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 px-6 py-6 md:grid-cols-2 md:px-8">
          <div className="flex flex-col gap-10">
            <ProjectCard
              src="/projects/echo.webp"
              alt="Echo"
              width={943}
              height={847}
              title="Echo"
              description="Echo brings people back to real-life connection through music, helping users discover local events and meet others with similar tastes."
              tags={["Community", "March 2025"]}
              href="/work/echo"
            />

            <ProjectCard
              src="/projects/failure-museum.webp"
              alt="The Failure Museum"
              width={943}
              height={683}
              title="The Failure Museum"
              description="A space where academic mistakes are no longer hidden, but understood, turning moments of failure into opportunities for growth."
              tags={["3rd Place Winner", "March 2026"]}
              href="/work/failure-museum"
            />
          </div>

          <div className="flex flex-col gap-10">
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

            <ProjectCard
              src="/projects/greenbuddies.webp"
              alt="GreenBuddies"
              width={943}
              height={476}
              title="GreenBuddies"
              description="A gamified experience that motivates children to step outside, complete challenges, and build a deeper connection with the world around them."
              tags={["Early Education", "July 2025"]}
              href="/work/greenbuddies"
            />

            <div className={darkCard}>
              <ChicksCard />
            </div>
          </div>
        </div>
      </DesktopWindow>
    </DesktopChrome>
  );
}