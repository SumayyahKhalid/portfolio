import Image from "next/image";
import DesktopChrome from "../components/DesktopChrome";
import DesktopWindow from "../components/DesktopWindow";
import GhibliTv from "../components/GhibliTv";
import ConnectCard from "../components/ConnectCard";
import ResumeFlower from "../components/ResumeFlower";

const mono = "var(--font-inconsolata)";

export default function ResumePage() {
  return (
    <DesktopChrome>
      <div className="flex flex-col gap-8 px-4 py-6 md:h-[calc(100vh-9vh-26px)] md:flex-row md:items-stretch md:gap-20 md:pb-[3vh] md:pl-[190px] md:pr-[4%] md:pt-[6vh]">
        <div className="md:flex-1 md:max-w-[720px]">
          <DesktopWindow
            title="Resume &amp; Contact"
            icon="/icons/resume.svg"
            className="h-full w-full"
          >
            <div className="flex h-full flex-col items-center justify-center gap-5 px-4 py-10 md:py-6">
              <Image
                src="/resume/sleeping.svg"
                alt=""
                width={700}
                height={620}
                className="w-[60%] max-w-[280px] md:w-[42%]"
              />

              <h2
                className="text-[26px] font-bold md:text-[30px]"
                style={{ fontFamily: "var(--font-open-sans)", color: "#000000" }}
              >
                Let&apos;s Connect!
              </h2>

              <ResumeFlower />

              <p
                className="text-center text-[14px] md:text-[15px]"
                style={{ fontFamily: mono, color: "#000000" }}
              >
                Press the magic button above to see my resume...
              </p>

            </div>
          </DesktopWindow>
        </div>

        <div className="flex flex-col gap-10 md:min-h-0 md:w-[340px] md:shrink-0 md:gap-20">
          <div className="aspect-square md:aspect-auto md:min-h-0 md:flex-1">
            <GhibliTv />
          </div>
          <ConnectCard />
        </div>
      </div>
    </DesktopChrome>
  );
}