import Image from "next/image";
import DesktopChrome from "../components/DesktopChrome";
import DesktopWindow from "../components/DesktopWindow";
import GhibliTv from "../components/GhibliTv";
import PosterCarousel from "../components/PosterCarousel";
import AlbumStack from "../components/AlbumStack";

const body = {
  fontFamily: "var(--font-open-sans)",
  fontSize: 15,
  lineHeight: "1.65",
  color: "#000000",
};

export default function AboutMePage() {
  return (
    <DesktopChrome>
      <div className="mx-auto flex min-w-0 max-w-[1400px] flex-col gap-8 px-4 py-6 md:flex-row md:gap-10 md:pb-[4vh] md:pl-[190px] md:pr-[4%] md:pt-[4vh]">
        <div className="flex min-w-0 flex-col gap-8 md:flex-1">
          <DesktopWindow
            title="About Me - a.k.a the No-Face behind the screen"
            icon="/icons/about-me.svg"
          >
            <div className="flex flex-col gap-8 px-2 py-4 md:flex-row md:items-start">
              <div className="flex min-w-0 flex-col gap-6 md:flex-1">
                <p style={body}>
                  Hi! I&apos;m <strong>Sumayyah Khalid</strong>, an aspiring
                  developer curious about how code, creativity, and people come
                  together to build meaningful experiences.
                </p>
                <p style={body}>
                  Throughout my journey, I&apos;ve fallen in love with the way
                  software and design let me express creativity while solving
                  real problems. I&apos;m excited about where these fields are
                  headed and how I can grow within them!
                </p>
                <p style={body}>
                  I love challenging myself and always look for new hackathons
                  and designathons to take part in. <em>Fun Fact:</em> One
                  weekend, I signed up for both at the same time and ended up
                  placing 3rd?!
                </p>
                <p style={body}>
                  Outside of tech, you&apos;ll probably find me exploring nature
                  or curled up at home with my cat MOST LIKELY watching a Studio
                  Ghibli movie and recharging for whatever&apos;s next :)
                </p>
              </div>

              <Image
                src="/about/window.svg"
                alt=""
                width={700}
                height={1200}
                className="hidden w-[55%] self-center md:block md:w-[38%] md:self-start"
              />
            </div>
          </DesktopWindow>

          <DesktopWindow
            title="Current Favourite Shows & Movies:"
            className="min-w-0 overflow-hidden"
          >
            <div className="py-2">
              <PosterCarousel />
            </div>
          </DesktopWindow>
        </div>

        <div className="flex flex-col gap-10 md:w-[340px] md:shrink-0">
          <DesktopWindow title="Current Listens:">
            <div className="py-2">
              <AlbumStack />
            </div>
          </DesktopWindow>

          <div className="aspect-[3/4]">
            <GhibliTv
              title="Sum's Tv"
              channels={[
                "/tv/sum-1.jpg",
                "/tv/sum-2.jpg",
                "/tv/sum-3.jpg",
                "/tv/sum-4.jpg",
              ]}
            />
          </div>
        </div>
      </div>
    </DesktopChrome>
  );
}