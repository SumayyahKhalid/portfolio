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
  ScreenMarquee,
  DecisionGrid,
} from "../../components/CaseStudy";

export default function EchoPage() {
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
              "--cs-fill": "#DCD8F5",
              "--cs-line": "#B6AEE8",
              "--cs-accent": "#6C5CE0",
              "--cs-pill": "#E8E5F8",
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
            src="/projects/echo-hero.webp"
            alt="Echo"
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
              <p className="mt-1 text-[14px]">Mobile</p>
            </div>
            <div>
              <p className="text-[14px] font-bold">Timeline</p>
              <p className="mt-1 text-[14px]">
                UXL Designathon, March 2025 · 36 hours
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
                <li>Tiwi Lanre-Adisa</li>
                <li>Amber Alim</li>
                <li>Allissa Lorenzo</li>
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
                The four of us researched together. The pieces I led were the{" "}
                <strong>survey</strong>, the <strong>wireframes</strong>, and
                the <strong>prototype</strong>.
              </p>
            </div>
          </div>

          <Section id="context">
            <SectionHeader
              label="01.Context"
              title="Everyone's listening to the same music, alone"
              intro="Music is one of the most shared things there is, and most of the time we experience it through headphones with nobody else in the room."
            />

            <Body>
              Streaming made every song available to everyone instantly, and it
              also made listening a private act. Your favourite album is
              somebody else&apos;s favourite album, and neither of you will ever
              know.
            </Body>

            <Body>
              Meanwhile live music is happening a few blocks away most weekends,
              often to a half-empty room. We wanted to understand why the gap
              between those two things is so wide.
            </Body>
          </Section>

          <Section id="research">
            <SectionHeader
              label="02.Research"
              title="People want to go out. They don't know where or with who."
              intro="We surveyed 26 people with rated statements rather than open questions, so we could see which feelings were strongest rather than which were easiest to describe."
            />

            <Body>
              Two results sat at opposite ends of the scale, and the gap between
              them is the entire product.
            </Body>

            <StatRow
              stats={[
                {
                  value: "4.54",
                  label:
                    "out of 5: wanting more local live events, the highest-rated statement in the survey",
                },
                {
                  value: "2.92",
                  label:
                    "out of 5: preferring to bond over music online rather than in person, the lowest",
                },
                {
                  value: "62%",
                  label:
                    "described themselves as casual followers rather than superfans",
                },
              ]}
            />

            <Body>
              The barrier respondents ranked first wasn&apos;t cost or
              transport. It was the difficulty of finding like-minded people to
              go with. They also told us how they currently hear about shows:
              Instagram and word of mouth, not ticketing sites or event
              listings.
            </Body>

            <Insight>
              Nobody is choosing to stay home. They want the live thing and they
              don&apos;t want it online, but going alone is the only option on
              offer.
            </Insight>
          </Section>

          <Section id="problem">
            <SectionHeader
              label="03.Problem"
              title="Discovery isn't the hard part. Company is."
              intro="Finding a show takes thirty seconds. Finding someone to go with is what actually stops people."
            />

            <Body>
              Every existing product solves the first half. Ticketing sites list
              events, algorithms suggest artists, streaming services build you a
              playlist. None of them help with the part our respondents actually
              ranked hardest.
            </Body>

            <Callout label="PROBLEM STATEMENT">
              People want more live music in their lives and don&apos;t want to
              bond over it online, but they have no way to find others nearby
              who share their taste, so they stay home.
            </Callout>
          </Section>

          <Section id="ideate">
            <SectionHeader
              label="04.Ideation"
              title="Our first version ended at the venue door"
              intro="A mentor session mid-designathon pointed out that we had designed the easy half of the night and stopped."
            />

            <Body>
              We came in with matching and event discovery. Find someone with
              your taste, find a show, go. Our mentor asked what happens after
              the encore, and we didn&apos;t have an answer.
            </Body>

            <Callout label="FROM THE MENTOR NOTES">
              After-concert element. Getting a drive home. Suggestions for after
              the show. Link to Uber, GO, local transit. Stay in touch with your
              +1.
            </Callout>

            <Body>
              It reframed the product for us. If the whole point is meeting
              someone new, then the riskiest moment isn&apos;t the show,
              it&apos;s standing outside at 11pm with a stranger and no plan.
              Designing for that moment is what makes the matching feel safe
              enough to act on.
            </Body>

            <ScreenGrid
              columns={3}
              screens={[
                {
                  src: "/projects/echo-route.svg",
                  caption:
                    "Transport options and the route home, added after the mentor session",
                },
                {
                  src: "/projects/echo-meetup.svg",
                  caption:
                    "Meetup spots near the venue, with distance and what each place is good for",
                },
                {
                  src: "/projects/echo-gallery.svg",
                  caption:
                    "The Echo Gallery, where the night keeps going after you leave",
                },
              ]}
            />

            <Body>
              The second note was about simplifying the user flow, and that one
              was about our own presentation as much as the product. We were
              trying to show every screen at once. The fix was to focus the main
              flow and move the detail somewhere else.
            </Body>
          </Section>

          <Section id="solution">
            <SectionHeader
              label="05.Solution"
              title="Find the crew, then find the show, then get home"
              intro="Echo pairs local event discovery with a way to meet people whose taste actually overlaps with yours, and follows the night all the way through."
            />

            <Feature
              label="SEE YOUR AURA"
              text="Your listening becomes a visual identity rather than a list of artist names. It gives people something expressive to compare instead of a follower count, and the genre tags stay editable so you're not stuck with what the algorithm decided about you."
              pill="Onboarding"
            />

            <Feature
              label="FIND A CREW"
              text="Match with people in and outside your network who share your taste. Compatibility is shown as two auras overlapping, with the genres and artists you have in common underneath, so a number always comes with a reason."
              pill="Connection"
            />

            <Feature
              label="LOCAL EVENTS"
              text="Shows happening near you, split into today and upcoming, surfaced the way our respondents said they actually hear about them: through people, not listings."
              pill="Discovery"
            />

            <Feature
              label="THE NIGHT AFTER"
              text="Routes home across Uber, rideshare and transit, plus meetup spots near the venue sorted by distance. The part most event apps leave to you."
              pill="After"
            />

            <Feature
              label="THE ECHO GALLERY"
              text="Post from the show and keep the thread going with the person you went with. The reason to open the app again on Monday."
              pill="Retention"
            />

            <ScreenMarquee
              speed={60}
              screens={[
                { src: "/projects/echo-onboard-1.svg" },
                { src: "/projects/echo-onboard-2.svg" },
                { src: "/projects/echo-aura-gen.svg" },
                { src: "/projects/echo-aura-tags.svg" },
                { src: "/projects/echo-events.svg" },
                { src: "/projects/echo-match.svg" },
                { src: "/projects/echo-breakdown.svg" },
                { src: "/projects/echo-gallery.svg" },
              ]}
            />
          </Section>

          <Section id="design">
            <SectionHeader
              label="06.Design Decisions"
              title="What we chose, and what we gave up"
              intro="Most of these trace directly back to a number in the survey."
            />

            <DecisionGrid
              items={[
                {
                  title: "We built for casual fans, not superfans",
                  text: "62% of respondents called themselves casual followers, so that's who we designed for. It meant cutting anything that rewards depth of knowledge: no stats, no top-artist rankings, no listening streaks. The cost is that superfans are the most motivated users of any music product, and we deliberately made the app less interesting to them.",
                },
                {
                  title: "Meeting people comes before browsing events",
                  text: "Wanting more local events scored 4.54 and bonding online scored 2.92. Discovery alone would have been the easier product to build and the one nobody needed. Leading with matching means the app is close to useless until enough people in one city are on it, which is a real cold-start problem we didn't solve.",
                },
                {
                  title: "An aura instead of a profile",
                  text: "A conventional profile turns taste into a leaderboard, which is exactly what puts casual fans off. A visual aura gives people something to compare without implying one person's listening is better than another's. It's harder to read at a glance than a list of names would be, so we put the shared genres and artists underneath the match rather than replacing them.",
                },
                {
                  title: "The night doesn't end at the venue",
                  text: "Adding transport and meetup spots meant building screens that have nothing to do with music, which is a strange thing to put in a music app. We did it because the product asks strangers to spend an evening together, and it would be irresponsible to design that without designing how they get home.",
                },
                {
                  title: "Discovery follows Instagram and word of mouth",
                  text: "Those were the two channels respondents said they actually use, so the feed mirrors how a friend tells you about a show rather than how a ticketing site lists one.",
                },
              ]}
            />
          </Section>

          <Section id="reflect">
            <SectionHeader
              label="07.Reflection and Next Steps"
              title="What I'd take further"
              intro="The survey shaped this project more than any other decision we made."
            />

            <Body>
              Rating statements rather than asking open questions was the right
              call. If we had asked people what stops them going to shows, we
              would have heard money and time, because those are the easy
              answers. The rated format surfaced the thing they wouldn&apos;t
              have said out loud, that they don&apos;t have anyone to go with.
            </Body>

            <Body>
              The mentor session is the reason this is a product and not a
              feature. We would have shipped the matching and the event feed and
              called it done. Being asked what happens after the show is what
              turned it into something that covers a whole night.
            </Body>

            <Body>
              <strong>The cold start is the unsolved problem.</strong> Echo only
              works if enough people in one city are already using it, and we
              designed the product without designing the thing that gets it off
              the ground.
            </Body>

            <Body>
              I&apos;d also want to know whether people would actually message a
              stranger about a concert. We assumed shared taste is enough of a
              bridge, and 26 survey responses can tell you people want company,
              not that they&apos;ll accept it from someone they haven&apos;t
              met.
            </Body>
          </Section>
        </div>
      </DesktopWindow>
    </DesktopChrome>
  );
}