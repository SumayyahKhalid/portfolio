import IntroOverlay from "./components/IntroOverlay";
import Starsfield from "./components/Starsfield";

export default function Home() {
  return (
    <main className="relative flex-1 flex flex-col items-center justify-start pt-[25vh] overflow-hidden bg-black">
      <div
        className="pointer-events-none absolute inset-0 bg-bottom bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url('/intro_pic.jpeg')",
          backgroundSize: "min(70vw, 110vh) auto",
          opacity: 0.8,
          maskImage:
            "radial-gradient(ellipse 30% 30% at 50% 75%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 35% 35% at 50% 75%, black 0%, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(204,204,204,0) 0%, rgba(0,0,0,0.83) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0">
        <Starsfield starCount={1200} speed={0.05} starSize={1.0} twinkle={0.4} />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12 px-6">
        <h1
          className="text-center font-medium leading-[1.5em] text-[#FFF7D1]"
          style={{ fontFamily: "var(--font-inconsolata)", fontSize: "25px" }}
        >
          Welcome to Sumayyah&apos;s
          <br />
          Whimsical Portfolio
        </h1>

        <IntroOverlay />
      </div>
    </main>
  );
}