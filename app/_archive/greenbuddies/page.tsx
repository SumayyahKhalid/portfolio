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
  StatRow,
  Step,
  Shot,
  DecisionGrid,
} from "../../components/CaseStudy";

export default function GreenBuddiesPage() {
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
        <div
          className="py-6"
          style={
            {
              "--cs-fill": "#DCE9C8",
              "--cs-line": "#A8C08A",
              "--cs-accent": "#7A9E5C",
              "--cs-pill": "#C8DCAE",
            } as React.CSSProperties
          }
        >
          <CaseStudyNav
            items={[
              { id: "indoors", label: "01.Indoors" },
              { id: "idea", label: "02.The Idea" },
              { id: "walk", label: "03.The Walk" },
              { id: "choices", label: "04.Choices" },
              { id: "next", label: "05.What's Next" },
            ]}
          />

          <Image
            src="/projects/gb-hero.svg"
            alt="GreenBuddies"
            width={1300}
            height={730}
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
              <p className="mt-1 text-[14px]">Mobile App</p>
            </div>
            <div>
              <p className="text-[14px] font-bold">Timeline</p>
              <p className="mt-1 text-[14px]">
                FLOW UW Designathon - 8 hours, July 2025
              </p>
            </div>
          </div>

          <Section id="indoors">
            <SectionHeader
              label="01.Indoors"
              title="A childhood spent inside"
              intro="Most Canadian children no longer play outside daily. The cost shows up in their bodies, their moods, and their ability to learn."
            />

            <StatRow
              stats={[
                {
                  value: "37%",
                  label: "of school-aged children play outside every day",
                },
                {
                  value: "33%",
                  label:
                    "meet the recommended 60 to 120 minutes of daily physical activity",
                },
                {
                  value: "63%",
                  label:
                    "do not play outside daily, the group our user belongs to",
                },
              ]}
            />

            <Body>
              The indoor shift isn&apos;t only a physical health story.
              Researchers connect it to sharply rising childhood anxiety and
              depression, and to a generation with less practice navigating the
              unpredictable physical world.
            </Body>

            <Callout>
              The explosion of childhood depression, anxieties, and paranoias is
              extraordinary, and there is no doubt it is linked to the
              disconnect with the three-dimensional world which exists outside
              and not on a small digital screen.
            </Callout>

            <Body>
              Sitting alongside that is a second problem the research kept
              surfacing: loneliness and isolation at school aren&apos;t a
              separate social issue, they are a barrier to learning itself.
            </Body>

            <Body>
              <strong>Meet Zara.</strong> Nine years old, highly creative, and
              one of the 63%. She zones out during long classes. She has energy
              and imagination with nowhere to put either. Her time outdoors is
              occasional, unstructured, and usually alone.
            </Body>

            <Callout label="PROBLEM STATEMENT">
              Children like Zara spend most of their day indoors and
              disconnected from peers, which contributes to low physical
              activity, rising anxiety, and disengagement from learning.
            </Callout>

            <Shot src="/projects/gb-zara.svg" alt="Zara, 9 years old" />
          </Section>

          <Section id="idea">
            <SectionHeader
              label="02.The Idea"
              title="Point the screen outward"
              intro="Most interventions treat technology as the thing to remove. We asked whether the pull of a screen could be aimed at the outdoors instead."
            />

            <Body>
              Children already trust their devices. Telling a nine-year-old to
              put the phone down and go outside competes with something that is
              always available and always more interesting. That&apos;s a fight
              the outdoors loses.
            </Body>

            <Body>
              So the design question inverted.{" "}
              <strong>
                What if the screen were the reason to go outside, and the thing
                you needed the outdoors to use?
              </strong>{" "}
              A camera that only works when it&apos;s pointed at a real plant
              can&apos;t be used from the sofa.
            </Body>

            <Callout label="KEY INSIGHT">
              Curiosity in learning that is empowered by technology,
              storytelling and systems perspectives gives students the potential
              to navigate our complex world and find future innovative ways to
              address interconnected, global challenges.
            </Callout>

            <Body>
              And because isolation was half the problem, the app had to make
              going outside something you do <em>with</em> someone. That
              decision landed on the very first screen.
            </Body>
          </Section>

          <Section id="walk">
            <SectionHeader
              label="03.The Walk"
              title="One afternoon with GreenBuddies"
              intro="The app is built around a single loop: go out with a buddy, find something, learn what it is, bring it back to your class."
            />

            <Step number="1" label="BEFORE YOU LEAVE" title="Pick a buddy">
              A child types their name, then a Buddy Mode toggle offers a second
              field. It&apos;s the first choice the app asks for, which makes
              going out together the assumed way to play rather than a setting
              someone has to find.
            </Step>

            <Step number="2" label="THE PROMPT" title="Today's topic is flowers">
              The home screen sets one theme for the day and shows an Explorer
              level. A single topic gives the walk a shape without turning it
              into a list of chores.
            </Step>

            <Shot src="/projects/gb-home.svg" alt="GreenBuddies home screen" />

            <Step number="3" label="THE HUNT" title="Four things to find">
              A yellow flower. A flower with four petals. A sunflower. A flower
              with thorns. Specific enough to send a child looking, loose enough
              that the outdoors decides what they actually find.
            </Step>

            <Step number="4" label="THE FIND" title="Point and learn">
              The camera names the plant and returns a card: scientific name,
              ecosystem role, whether it&apos;s at risk, and a fact worth
              repeating out loud. Every card closes with Care &amp; Respect,
              which asks the child not to pick it but to share, snap and admire.
            </Step>

            <Shot
              src="/projects/gb-camera.svg"
              alt="Plant identification card"
            />

            <Step number="5" label="THE KEEPING" title="It goes in your PlantDex">
              Identified plants collect into a personal index, so the walk leaves
              something behind. Nearby Plants gives a child a reason to look
              again at a place they&apos;ve already been.
            </Step>

            <Step number="6" label="THE SHARING" title="Your class sees it">
              Finds post to a feed for the whole classroom, credited to the pair
              who made them. This is where the isolation half of the problem
              gets addressed: discovery becomes something classmates witness.
            </Step>

            <Shot
              src="/projects/gb-feed.svg"
              alt="Classroom feed and PlantDex"
            />

            <Step number="7" label="ALONG THE WAY" title="The Explorer Kit">
              A ruler, journal, voice memo, checklist and safety card. Tools for
              recording what you noticed rather than more things to tap,
              including a voice memo for children who&apos;d rather say it than
              write it.
            </Step>
          </Section>

          <Section id="choices">
            <SectionHeader
              label="04.Choices"
              title="Why we built it this way"
              intro="Every decision traced back to one constraint: the screen had to be the thing that gets a child outside, not the thing that keeps them looking down."
            />

            <DecisionGrid
              items={[
                {
                  title: "Buddy Mode before anything else",
                  text: "Loneliness was one of the two problems we set out to address, so pairing couldn't be optional and buried. Putting it on the first screen makes going out together the assumed way to play.",
                },
                {
                  title: "Prompts, not a fixed list",
                  text: "A flower with four petals could be dozens of things. Open prompts mean the child does the searching and the outdoors supplies the answer, rather than sending them to find one predetermined object.",
                },
                {
                  title: "Camera as the only input",
                  text: "For a nine-year-old, typing is friction and reading is work. Pointing a camera is the fastest path from curiosity to an answer, and it requires standing in front of the real plant.",
                },
                {
                  title: "Care & Respect on every card",
                  text: "The instruction not to pick the plant appears every single time, not once in onboarding. Repetition is what turns an instruction into a habit at this age.",
                },
                {
                  title: "A classroom feed, not a public one",
                  text: "Sharing addresses the isolation, but an open network is the wrong shape for children. Scoping to one classroom keeps the social reward while keeping the audience known.",
                },
                {
                  title: "Voice memos alongside the journal",
                  text: "Reflection shouldn't be gated behind writing ability. Letting a child speak what they noticed keeps the recording step open to those who find writing slow or discouraging.",
                },
              ]}
            />
          </Section>

          <Section id="next">
            <SectionHeader
              label="05.What's Next"
              title="What eight hours left open"
              intro="GreenBuddies was designed in a single day, 9am to 5pm. That constraint decided what we could resolve and what we had to leave as a question."
            />

            <Body>
              <strong>
                The classroom feed is the part I&apos;d scrutinise hardest.
              </strong>{" "}
              Sharing is what makes going outside social rather than solitary.
              But a feed invites comparison, and a child who finds less, or finds
              it later, could end up feeling worse than if they hadn&apos;t
              shared at all. Scoping it to one classroom limits the audience and
              crediting pairs rather than individuals softens the competition,
              but neither removes the risk.
            </Body>

            <Body>
              <strong>The untested assumption is the whole premise.</strong> We
              designed on the belief that a screen can send a child outside
              rather than hold them indoors. That&apos;s plausible, and
              it&apos;s exactly the kind of claim only observation settles. The
              first thing I&apos;d test is whether children put the phone away
              between finds or spend the walk looking at it.
            </Body>

            <Body>
              <strong>What I&apos;d build next.</strong> A version tested with
              real children in a real schoolyard, watching two things
              specifically: how much of the session is spent looking at the
              screen versus the world, and whether the feed leaves children
              feeling connected to their classmates or measured against them.
            </Body>
          </Section>
        </div>
      </DesktopWindow>
    </DesktopChrome>
  );
}