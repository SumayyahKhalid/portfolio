import DesktopChrome from "../components/DesktopChrome";
import DesktopWindow from "../components/DesktopWindow";
import ChicksCard from "../components/ChicksCard";

export default function CSProjectsPage() {
  return (
    <DesktopChrome>
      <div className="mx-auto flex min-w-0 max-w-[1400px] flex-col px-4 py-6 md:pb-[4vh] md:pl-[190px] md:pr-[4%] md:pt-[4vh]">
        <DesktopWindow
          title="CS Projects"
          icon="/icons/cs-projects.svg"
          className="w-full"
        >
          <div className="flex min-h-[55vh] flex-col items-center justify-center gap-6 px-6 py-14 text-center">
            <div className="w-[60%] max-w-[300px] md:w-[38%]">
              <ChicksCard />
            </div>

            <h2
              className="text-[26px] font-bold md:text-[30px]"
              style={{
                fontFamily: "var(--font-open-sans)",
                color: "#000000",
              }}
            >
              Work in progress!
            </h2>

            <p
              className="max-w-[420px] text-[14px] leading-[1.7] md:text-[15px]"
              style={{
                fontFamily: "var(--font-inconsolata)",
                color: "#000000",
              }}
            >
              Still building this one out. Check back soon to see what
              I&apos;ve been coding.
            </p>
          </div>
        </DesktopWindow>
      </div>
    </DesktopChrome>
  );
}