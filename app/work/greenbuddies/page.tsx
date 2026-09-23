import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import DesktopChrome from "../../components/DesktopChrome";
import DesktopWindow from "../../components/DesktopWindow";
import CaseStudyNav from "../../components/CaseStudyNav";
import SoundLink from "../../components/SoundLink";
import {
  Section,
  SectionHeader,
  Body,
  Callout,
  Insight,
  StatRow,
  Feature,
  ScreenGrid,
  DecisionGrid,
} from "../../components/CaseStudy";

export default function GreenBuddiesPage() {
  return (
    <DesktopChrome>
      <DesktopWindow
        title={
          <SoundLink href="/work" className="flex items-center gap-3">
            <ArrowLeft size={22} strokeWidth={2.5} />
            Back.
          </SoundLink>
        }
        fullHeight
        className="mx-4 my-6 md:ml-[190px] md:mr-[6%] md:my-[4vh] md:mb-[8vh] md:h-[calc(100vh-12vh-26px)]"
      >
        <div
          className="mx-auto max-w-[900px] px-6 py-6 md:px-0"
          style={
            {
              "--cs-fill": "#DCE8C4",
              "--cs-line": "#B4CC8E",
              "--cs-accent": "#7FA352",
              "--cs-pill": "#E8F0D6",
            } as React.CSSProperties
          }
        >
          <CaseStudyNav
            items={[
              { id: "context", label: "01.Context" },
              { id: "research", label: "02.Research" },
              { id: "problem", label: "03.Problem" },
              { id: "ideate", label: "04.Ideate" },
              { id: "solution", label: "05.Solution" },
              { id: "design", label: "06.Design" },
              { id: "reflect", label: "07.Reflect" },
            ]}
          />

          <Image
            src="/projects/greenbuddies-hero.webp"
            alt="GreenBuddies"
            width={943}
            height={847}
            className="mt-4 w-full rounded-[14px]"
          />

          <div
            className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3"
            style={{ fontFamily: "var(--font-inconsolata)", color: "#000000" }}
          >
            <div>
              <p className="text-[14px] font-bold">Discipline</p>
              <p className="mt-1 text-[14px]">UX Research &amp; UI Design</p>
            </div>
            <div>
              <p className="text-[14px] font-bold">Platform</p>
              <p className="mt-1 text-[14px]">Mobile</p>
            </div>
            <div>
              <p className="text-[14px] font-bold">Timeline</p>
              <p className="mt-1 text-[14px]">
                Flow UW/UX Designathon, July 2025 · one day, 9 to 5
              </p>
            </div>
          </div>

          <div
            className="mt-10 grid grid-cols-1 gap-x-12 gap-y-6 pt-6 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"
            style={{ borderTop: "1px solid var(--cs-line)" }}
          >
            <div>
              <p
                className="text-[12px] font-bold uppercase tracking-[0.14em]"
                style={{
                  fontFamily: "var(--font-inconsolata)",
                  color: "var(--cs-accent)",
                }}
              >
                The Team
              </p>
              <ul
                className="mt-3 space-y-1 text-[15px]"
                style={{
                  fontFamily: "var(--font-inconsolata)",
                  color: "#000000",
                }}
              >
                <li>Sumayyah Khalid</li>
                <li>Afeefa Malik</li>
                <li>Razan Mohamed</li>
                <li>Mona Eletr</li>
              </ul>
            </div>

            <div>
              <p
                className="text-[12px] font-bold uppercase tracking-[0.14em]"
                style={{
                  fontFamily: "var(--font-inconsolata)",
                  color: "var(--cs-accent)",
                }}
              >
                My Role
              </p>
              <p
                className="mt-3 text-[16px] leading-[1.7]"
                style={{
                  fontFamily: "var(--font-open-sans)",
                  color: "#000000",
                }}
              >
                A team of four, one day start to finish. I designed the{" "}
                <strong>prototype screens</strong>, helped with the research,
                and presented the onboarding and Explorer Kit sections to the
                judges.
              </p>
            </div>
          </div>

          <Section id="context">
            <SectionHeader
              label="01.Context"
              title="The prompt was about barriers in education. We went outside."
              intro="A one-day designathon on connection-centred design, and a question broad enough to go almost anywhere."
            />

            <Body>
              The brief asked how we might design exciting and inclusive
              learning experiences that reduce barriers for children in
              education. The theme was connection: solutions that help people
              build real relationships and share experiences rather than just
              consume something alone.
            </Body>

            <Body>
              We had until 10:30 to lock an idea, slides due by 3:30, and
              presentations after that. Eight hours total.
            </Body>
          </Section>

          <Section id="research">
            <SectionHeader
              label="02.Research"
              title="Canadian kids are barely going outside"
              intro="We looked for the barrier with the most evidence behind it, and outdoor play turned out to be badly under-measured in the classroom conversation."
            />

            <StatRow
              stats={[
                {
                  value: "37%",
                  label:
                    "of school-aged Canadian children play outside every day",
                },
                {
                  value: "33%",
                  label:
                    "meet the recommended 60 to 120 minutes of daily physical activity",
                },
                {
                  value: "15 min",
                  label:
                    "average daily outdoor play for students in grades 6 through 10",
                },
              ]}
            />

            <p
              className="mt-4 text-[13px]"
              style={{
                fontFamily: "var(--font-inconsolata)",
                color: "#000000",
              }}
            >
              Source: Physical and Health Education Canada
            </p>

            <Body>
              The health research attached real consequences to that number:
              higher rates of obesity and type 2 diabetes, lower bone mineral
              density, and a documented rise in childhood anxiety and depression
              linked to spending life on a screen instead of in a
              three-dimensional world.
            </Body>

            <Insight>
              The barrier wasn&apos;t that kids can&apos;t learn. It&apos;s that
              the classroom asks them to learn sitting still, indoors, mostly
              through reading, and a lot of children are shut out by at least
              one of those three conditions.
            </Insight>
          </Section>

          <Section id="problem">
            <SectionHeader
              label="03.Problem"
              title="Three kinds of kid, one shared exclusion"
              intro="We wrote four personas. Three of them were locked out of the same lesson for completely different reasons."
            />

            <Body>
              Zara is nine, creative, and zones out during long classes. Linh is
              ten and recently arrived from Vietnam, so reading-heavy material
              leaves her behind before the lesson starts. Ayaan is eight and
              autistic, and a loud crowded classroom overwhelms him before he
              can focus on anything.
            </Body>

            <Body>
              Different kids, same result. A desk-based, text-heavy, indoor
              lesson excludes all three. That framing is what pushed us outside
              rather than toward a better worksheet.
            </Body>

            <ScreenGrid
              columns={3}
              screens={[
                {
                  src: "/projects/gb-home.svg",
                  caption:
                    "Icon-only tab bar so the app is navigable without reading",
                },
                {
                  src: "/projects/gb-explorer-kit.svg",
                  caption:
                    "The Explorer Kit, including a voice memo for kids who'd rather talk than type",
                },
                {
                  src: "/projects/gb-checklist.svg",
                  caption:
                    "Prompts stay short and visual: a yellow flower, a flower with four petals",
                },
              ]}
            />

            <Callout label="HOW MIGHT WE">
              How might we help children build meaningful connections with
              nature and each other through playful, inclusive exploration,
              while keeping the experience safe and accessible for all of them?
            </Callout>
          </Section>

          <Section id="ideate">
            <SectionHeader
              label="04.Ideation"
              title="Six ideas that were all another screen"
              intro="Everything we put on the board kept kids indoors looking at a device. The one we picked was the only one that didn't."
            />

            <Body>
              The board filled up with screens. A quiz app. An engaging learning
              platform. A game-based lesson tool. Something for
              overstimulation, something for classroom anxiety, a Minecraft
              world that prompts kids to build things. Six ideas, all of them
              another reason to look at a tablet.
            </Body>

            <Body>
              Then someone wrote down &quot;kids don&apos;t go outside,&quot;
              which was the only line on the board that pointed away from the
              screen. Given a brief about real connection, we took it.
            </Body>

            <Body>
              The mechanic came together fast once we had that. A teacher sets a
              challenge for the day and can split the class into groups. A group
              finds something that matches, photographs it, and submits it
              through the app. They earn XP and badges for what they find. Every
              piece of that was on the whiteboard before 10:30, and the rest of
              the day was working out what it would take to make it safe.
            </Body>
          </Section>

          <Section id="solution">
            <SectionHeader
              label="05.Solution"
              title="A scavenger hunt that teaches while you play it"
              intro="GreenBuddies turns outdoor time into a photo quest. Kids find things in nature, photograph them, and every accepted find becomes a learning card."
            />

            <Feature
              label="THE DAILY CHECKLIST"
              text="Teachers set a theme, and the app generates prompts like “a yellow flower” or “a flower with four petals.” The task is specific enough to start without help and open enough to find a dozen ways to solve."
              pill="Teacher-led"
            />

            <Feature
              label="SNAP TO COLLECT"
              text="Spot something on the list, tap the camera, take the photo. Image recognition confirms the find, checks it off, and adds a point."
              pill="Gameplay"
            />

            <Feature
              label="THE LEARNING CARD"
              text="An accepted photo opens a card: what the plant is, its role in the ecosystem, and a note on admiring it without disturbing it. The lesson arrives after the discovery, not before."
              pill="Learning"
            />

            <Feature
              label="MY PLANTDEX AND THE EXPLORER KIT"
              text="Finds are saved to a personal collection kids can add drawings and voice notes to. The Explorer Kit is a digital backpack with a plant ruler, a voice recorder, and a safety card."
              pill="Collection"
            />

            <Feature
              label="THE CLASSROOM FEED"
              text="Kids can share a find to their class feed and see what everyone else found. The connection piece: same walk, forty different discoveries."
              pill="Social"
            />

            <ScreenGrid
              columns={3}
              screens={[
                {
                  src: "/projects/gb-camera.svg",
                  caption: "Spot something on the list, tap the camera",
                },
                {
                  src: "/projects/gb-learning-card.svg",
                  caption:
                    "Recognition confirms the find, then the learning card opens",
                },
                {
                  src: "/projects/gb-feed.svg",
                  caption:
                    "Share to the classroom feed, scoped to one class only",
                },
              ]}
            />
          </Section>

          <Section id="design">
            <SectionHeader
              label="06.Design Decisions"
              title="Designing for children changes what you're allowed to build"
              intro="A mentor session halfway through forced us to treat safety as a design constraint rather than a feature we'd add later."
            />

            <DecisionGrid
              items={[
                {
                  title: "We cut GPS tracking entirely",
                  text: "A mentor pushed us on safety and it landed hard. An outdoor app for eight-year-olds that logs where they are is a liability, not a feature, no matter how useful the map would be. We cut location data completely: never stored, never shared. The cost is real. We gave up geofenced quest zones, any way to verify a child actually went outside, and the teacher's ability to see where their class is.",
                },
                {
                  title: "Image recognition replaced the thing GPS would have done",
                  text: "Without location we still needed the app to know a find was real, so recognition checks the photo against the checklist. A match gets a point, anything else gets rejected. It started as verification and ended up being the fun part, because kids get an instant answer on whether they found the right thing. It also filters unsafe uploads before they reach a class feed.",
                },
                {
                  title: "And a teacher behind the algorithm",
                  text: "Recognition will miss things. Teachers review submissions, so if the AI doesn't catch it, a person does.",
                },
                {
                  title: "Icon-first navigation, with a voice recorder",
                  text: "Linh can't read the interface fast enough and Ayaan shouldn't have to. The tab bar is icons only, prompts lean on photos, and the Explorer Kit includes a voice memo so a kid can record what they found instead of typing it. The learning cards are still text-heavy, which is the honest gap: we solved navigation for non-readers and didn't fully solve content.",
                },
                {
                  title: "The feed is a classroom, not the internet",
                  text: "Sharing is scoped to one class, so it's the same twenty-five kids who were already on the walk. Public sharing was never on the table once we'd had the safety conversation. It means the social layer only works if a teacher sets it up, which makes the product useless outside school.",
                },
              ]}
            />
          </Section>

          <Section id="reflect">
            <SectionHeader
              label="07.Reflection and Next Steps"
              title="What I'd take further"
              intro="Eight hours is enough to make a good decision and not enough to find out if it was right."
            />

            <Body>
              The safety conversation improved the product. That surprised me.
              Cutting GPS felt like losing a feature and it forced us toward
              image recognition, which turned out to be more fun than a map
              would have been. Constraints did the design work.
            </Body>

            <Body>
              <strong>We designed for three kids and tested with none.</strong>{" "}
              Zara, Linh and Ayaan came out of research, not interviews. I stand
              behind the reasoning, but the next version starts with watching
              actual eight-year-olds try to use it, because children break
              interfaces in ways adults never predict.
            </Body>

            <Body>
              The open question is whether teachers would run it. Every good
              thing about GreenBuddies depends on a teacher setting a quest,
              taking a class outside, and reviewing photos afterward. Ms. Rivera
              was our fourth persona and the one we designed for least.
            </Body>
          </Section>
        </div>
      </DesktopWindow>
    </DesktopChrome>
  );
}