import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DesktopChrome from "../../components/DesktopChrome";
import DesktopWindow from "../../components/DesktopWindow";
import CaseStudyNav from "../../components/CaseStudyNav";
import {
  Section,
  SectionHeader,
  Body,
  Callout,
  StatRow,
  Feature,
  DecisionGrid,
} from "../../components/CaseStudy";
import { SurveyBars, GapRows, ScreenNote } from "../../components/EchoBits";

const navItems = [
  { id: "call", label: "01.The Call" },
  { id: "dies", label: "02.Where It Dies" },
  { id: "tuning", label: "03.Tuning" },
  { id: "return", label: "04.The Return" },
  { id: "feedback", label: "05.Feedback" },
];

export default function EchoPage() {
  return (
    <DesktopChrome>
      <DesktopWindow
        title={
          <Link href="/ux-projects" className="flex items-center gap-3">
            <ArrowLeft size={22} strokeWidth={2.5} />
            Back.
          </Link>
        }
        fullHeight
        className="mx-4 my-6 md:ml-[190px] md:mr-[6%] md:my-[4vh] md:mb-[8vh] md:h-[calc(100vh-12vh-26px)]"
      >
        <div
          className="py-6"
          style={
            {
              "--cs-fill": "#DEDCF7",
              "--cs-line": "#A9A6E6",
              "--cs-accent": "#B9B6F0",
              "--cs-pill": "#CFCDF2",
            } as React.CSSProperties
          }
        >
          <Image
            src="/projects/echo-hero.png"
            alt="Echo"
            width={1300}
            height={730}
            className="w-full rounded-[14px]"
          />

          <div
            className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3"
            style={{ fontFamily: "var(--font-inconsolata)", color: "#000000" }}
          >
            <div>
              <p className="text-[14px] font-bold">My Role</p>
              <p className="mt-1 text-[14px]">
                Brand Identity, UI Design, Survey Research
              </p>
            </div>
            <div>
              <p className="text-[14px] font-bold">Team</p>
              <p className="mt-1 text-[14px]">
                4 designers, 36 hours
              </p>
            </div>
            <div>
              <p className="text-[14px] font-bold">Timeline</p>
              <p className="mt-1 text-[14px]">
                UXL Design-a-thon, March 2025
              </p>
            </div>
          </div>

          <CaseStudyNav items={navItems} />

          {/* 01 */}
          <div id="call" className="scroll-mt-4">
            <Section>
              <SectionHeader
                label="01.The Call"
                title="We asked 26 people first, and they told us something we did not expect"
                intro="UX Laurier gave us a prompt about connection. Instead of designing toward a hunch, we ran a survey and let the numbers pick the direction."
              />

              <Body>
                The prompt was open: build something that fosters meaningful
                connection. Our first instinct was a discovery problem. People
                cannot find events, so build a better feed. We wrote a survey to
                check that instinct before committing to it, and{" "}
                <strong>the instinct was wrong</strong>.
              </Body>

              <Body>
                Discovery is not broken. 96% of respondents find new artists
                through social media and 96% get event updates through Instagram.
                The pipeline into someone&apos;s awareness is working fine. What
                came back differently was everything after awareness.
              </Body>

              <SurveyBars
                items={[
                  {
                    label: "I want to attend more live events being held locally",
                    value: 4.54,
                  },
                  {
                    label: "I enjoy attending local events related to my interests",
                    value: 4.19,
                  },
                  {
                    label: "I prefer to engage in my interests alongside others rather than on my own",
                    value: 3.92,
                  },
                  {
                    label: "I can easily find others that share common interests with me",
                    value: 3.65,
                  },
                  {
                    label: "It is easy to stay updated on events surrounding my favourite artists",
                    value: 3.62,
                  },
                  {
                    label: "I prefer to bond with others over common interests online rather than in person",
                    value: 2.92,
                  },
                ]}
                caption="n = 26. Mean agreement, 1 = disagree, 5 = agree."
              />

              <Body>
                Read the top and bottom bars together. Wanting more local events
                is the strongest agreement in the entire survey. Preferring to
                bond online is the only statement that landed below neutral. Our
                respondents want to be in a room with people, and the thing they
                want least is another place to talk about it from home.
              </Body>

              <Callout>
                Everyone we surveyed already knew what was happening. Almost none
                of them had a reliable way to show up to it with someone.
              </Callout>

              <StatRow
                stats={[
                  { value: "96%", label: "get event updates through Instagram or TikTok" },
                  { value: "62%", label: "describe themselves as casual enjoyers, not superfans" },
                  { value: "2.92", label: "average agreement that online bonding beats in person" },
                ]}
              />

              <Body>
                That 62% mattered more than it looks. We were not designing for
                the enthusiast with three group chats and a ticket alert set.{" "}
                <strong>
                  We were designing for the person who likes the artist enough to
                  go and does not know a single other person going.
                </strong>
              </Body>
            </Section>
          </div>

          {/* 02 */}
          <div id="dies" className="scroll-mt-4">
            <Section>
              <SectionHeader
                label="02.Where It Dies"
                title="The concert is the moment they have the most in common, and the moment they use the least"
                intro="Mapping the survey answers against each other showed a specific place where the interest stops turning into anything. Naming that place became the actual problem statement."
              />

              <Body>
                81% follow artists on social platforms. 69% attend live events.
                But when we asked how people interact with other fans, live
                events came back at 31%, well behind private group chats and
                online forums, both at 46%.
              </Body>

              <Body>
                So the venue, the one place where a few thousand people have
                verifiably chosen the same thing on the same night, is where the
                least connecting happens. Everyone arrives with their existing
                group or alone, and{" "}
                <strong>the shared context evaporates at the door</strong>.
              </Body>

              <GapRows
                leftLabel="WHAT THE SIGNAL DOES"
                rightLabel="WHERE IT STOPS"
                rows={[
                  {
                    left: "An artist or an influencer posts a local date",
                    right: "It sits in a feed alongside ads and gets buried within hours",
                  },
                  {
                    left: "Someone saves the post and means to go",
                    right: "No one in their group chat is interested, so it quietly expires",
                  },
                  {
                    left: "They go anyway, or they skip it",
                    right: "Thousands of aligned people are in the room and none of them meet",
                  },
                  {
                    left: "The night ends",
                    right: "Photos go to a private camera roll and nothing carries into the next show",
                  },
                ]}
              />

              <Body>
                When we asked people to rank the barriers to connecting with
                other fans, difficulty finding like-minded individuals took the
                most first-place votes, with lack of a dedicated platform right
                behind it. Not cost. Not geography.{" "}
                <strong>People, and a place to find them.</strong>
              </Body>

              <Callout label="HOW MIGHT WE">
                How might we help casual fans turn an event they already know
                about into a night they actually attend with someone, without
                asking them to live in another feed?
              </Callout>

              <Body>
                Putting the problem statement here rather than at the top was
                deliberate. We did not know this was the problem until the survey
                results were sitting next to each other.
              </Body>
            </Section>
          </div>

          {/* 03 */}
          <div id="tuning" className="scroll-mt-4">
            <Section>
              <SectionHeader
                label="03.Tuning"
                title="Three obvious directions, and why we dropped all three"
                intro="The fastest way to a defensible concept was ruling out the versions of this that already exist and do not work."
              />

              <Body>
                Fan forums, ticketing platforms and social feeds each solve one
                slice of this. We sketched all three before committing, and each
                one broke against something in our own data.
              </Body>

              <DecisionGrid
                items={[
                  {
                    title: "A fan forum",
                    text: "Rejected. Online-only bonding scored 2.92, the lowest result we had. Building another place to post would have solved a problem nobody reported.",
                  },
                  {
                    title: "A better event feed",
                    text: "Rejected. 96% already find events fine. Improving discovery would have polished the one part of the journey that was not broken.",
                  },
                  {
                    title: "A ticketing layer",
                    text: "Rejected. Ticketmaster and Dice own this and do it well. We linked out to them instead of competing on a solved problem.",
                  },
                ]}
              />

              <Body>
                What was left was the middle of the journey. Someone knows about
                a show, wants to go, and needs one thing:{" "}
                <strong>a person to go with who is not a stranger by the end of the night</strong>
                . That became the product.
              </Body>

              <Body>
                The hard part was matching. Asking a casual fan to write a bio
                and browse profiles is asking for effort at exactly the moment
                they are least invested. So we pulled from something they had
                already filled in without knowing it. 69% discover music through
                streaming platforms, which means their taste already exists as
                data.
              </Body>

              <Feature
                label="THE CENTRAL BET"
                text="Your aura is a generated visual and a set of genre tags built from your streaming history, so your taste is legible in one second and you never write a word about yourself."
                pill="AURA MATCHING"
              />

              <Body>
                The aura also gave the brand its spine. Every gradient, every
                blob and the compatibility visual all come from the same idea, so
                the interface teaches the concept before any copy explains it.
              </Body>
            </Section>
          </div>

          {/* 04 */}
          <div id="return" className="scroll-mt-4">
            <Section>
              <SectionHeader
                label="04.The Return"
                title="From opening the app to standing in a cafe with someone"
                intro="Rather than list features, here is the path a first-time user takes, and the decision behind each screen on it."
              />

              <ScreenNote
                src="/projects/echo-aura.png"
                alt="Aura generation and editable genre tags"
                step="STEP 01"
                title="Your taste, without a questionnaire"
              >
                Connecting a streaming account generates the aura and its tags in
                one step. Every tag is removable and editable, because inferred
                taste is frequently wrong and the correction should take a tap,
                not a settings menu.
              </ScreenNote>

              <ScreenNote
                src="/projects/echo-home.png"
                alt="Events near you"
                step="STEP 02"
                flip
                title="Events filtered by taste and by distance"
              >
                Today and Upcoming, tagged by genre, scoped to a city. This is
                the only part of Echo that overlaps with what already exists, so
                it stays deliberately small. It is a doorway into the app, not
                the point of it.
              </ScreenNote>

              <ScreenNote
                src="/projects/echo-event.png"
                alt="Event dashboard with Go Solo and Find a Crew"
                step="STEP 03"
                title="Go Solo sits next to Find a Crew"
              >
                Our own data said 8% of respondents are lurkers and 62% are
                casual. Forcing everyone into matching would have failed most of
                the sample. Showing how many mutuals are attending gives a quiet
                signal without demanding participation.
              </ScreenNote>

              <ScreenNote
                src="/projects/echo-match.png"
                alt="Compatibility breakdown showing shared genres and artists"
                step="STEP 04"
                flip
                title="A number you can interrogate"
              >
                An unexplained 84% match is a black box. Tapping through shows
                the five shared genres and the overlapping top artists, so the
                score becomes a reason rather than a claim. That transparency is
                also the icebreaker.
              </ScreenNote>

              <ScreenNote
                src="/projects/echo-meetup.png"
                alt="Meetup spots near the venue with transit options"
                step="STEP 05"
                title="Safety designed into the logistics"
              >
                Meeting an internet match is the risky part, so Echo only
                suggests public third places within a kilometre of the venue,
                each with transit and rideshare routes attached. The safe choice
                is the default and the convenient one, rather than a warning
                nobody reads.
              </ScreenNote>

              <ScreenNote
                src="/projects/echo-gallery.png"
                alt="Echo Gallery of post-event photos"
                step="STEP 06"
                flip
                title="The night does not end at the encore"
              >
                The Gallery collects what people already do, which is post
                photos, and puts it somewhere the people who were actually there
                can see it. It is the return half of the echo, and the reason to
                open the app before the next show.
              </ScreenNote>
            </Section>
          </div>

          {/* 05 */}
          <div id="feedback" className="scroll-mt-4">
            <Section>
              <SectionHeader
                label="05.Feedback"
                title="What this does not prove yet"
                intro="The prototype answers the question we set. It does not answer whether the central bet works on real people, and it would be dishonest to present it as though it does."
              />

              <Body>
                <strong>The sample is narrow.</strong> 26 responses, 62% of them
                WLU or UW students and 73% women. It is enough to find a pattern
                and not enough to generalize. A second round would need
                respondents outside a university city, where the density of
                nearby events is completely different.
              </Body>

              <Body>
                <strong>Aura matching is untested.</strong> Nobody has used a
                compatibility score to actually meet another person. A high
                percentage of shared genres might predict a good night, or it
                might predict nothing at all. That is the first thing I would put
                in front of users.
              </Body>

              <Body>
                <strong>Echo is empty on day one.</strong> Matching depends on
                other people already being there, which means the experience in a
                new city is a beautiful interface with nobody in it. The
                promotional screen we designed papers over this rather than
                solving it. A real answer probably starts at one venue in one
                city.
              </Body>

              <Callout label="WHAT I WOULD TEST FIRST">
                Does a stated match percentage actually convert into a meetup,
                and does the Gallery bring anyone back for the next show? Those
                two answers decide whether the rest of this is worth building.
              </Callout>

              <Body>
                What I took from this one: our first framing was a discovery
                problem, and the survey killed it inside a day. Running the
                research before the sketching cost us a few hours and saved us
                from designing a better version of something that was not broken.
              </Body>
            </Section>
          </div>
        </div>
      </DesktopWindow>
    </DesktopChrome>
  );
}