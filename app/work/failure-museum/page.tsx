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
  Feature,
  Shot,
  Clip,
  DecisionGrid,
} from "../../components/CaseStudy";

export default function FailureMuseumPage() {
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
          className="py-6"
          style={
            {
              "--cs-fill": "#E6DCB8",
              "--cs-line": "#C4B183",
              "--cs-accent": "#B39B62",
              "--cs-pill": "#DAD0B5",
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

          {/* TODO_HERO: fm-hero.svg is a slide-deck screenshot with adjacent
              slides bleeding in on both edges. Replace with a clean product shot. */}
          <Image
            src="/projects/fm-hero.svg"
            alt="The Failure Museum"
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
              <p className="mt-1 text-[14px]">Web</p>
            </div>
            <div>
              <p className="text-[14px] font-bold">Timeline</p>
              <p className="mt-1 text-[14px]">
                Designathon, March 2026 · 48 hours
              </p>
            </div>
          </div>

          <div
            className="mt-8 rounded-[10px] px-6 py-5"
            style={{
              background: "var(--cs-fill)",
              borderLeft: "4px solid var(--cs-accent)",
            }}
          >
            <p
              className="mb-2 text-[12px] font-bold tracking-wide"
              style={{ fontFamily: "var(--font-open-sans)", color: "#000000" }}
            >
              MY ROLE
            </p>
            <p
              className="text-[16px] leading-[1.7]"
              style={{ fontFamily: "var(--font-open-sans)", color: "#000000" }}
            >
              Team Intuitiv was four of us, and we worked through most of this
              together, from the research to the final screens. The pieces I
              owned were <strong>prototyping</strong> and{" "}
              <strong>branding</strong>. I also helped write and run our student
              survey, and presented the final concept with the team.
            </p>
          </div>

          <Section id="context">
            <SectionHeader
              label="01.Context"
              title="A shortcut that costs more than it saves"
              intro="How AI moved from a tool of support to a tool of avoidance, and why that matters for a generation of learners."
            />

            <Body>
              Imagine having an essay due in 30 minutes. Before AI, you would
              scramble: organize your thoughts, pull from memory, submit
              whatever you could. That pressure was uncomfortable, and it was
              also exactly <strong>where learning happened</strong>.
            </Body>

            <Body>
              Today a student can generate that essay in minutes.{" "}
              <strong>The scramble is gone.</strong> So is the thinking. We
              wanted to understand what that trade actually costs, and whether
              design could do anything about it.
            </Body>

            <Callout>
              Being faster doesn&apos;t always mean better. Working through each
              step is what builds confidence, not just output.
            </Callout>

            <Body>
              Our user is a Gen Z university student, a generation that grew up
              with search engines, then smartphones, then AI. They are not lazy.{" "}
              <strong>
                They are optimizing for the wrong thing: the answer instead of
                the understanding
              </strong>
              . Our goal was to shift that default.
            </Body>

            <Shot
              src="/projects/fm-christina.svg"
              alt="Christina, 2nd year CS student"
            />
          </Section>

          <Section id="research">
            <SectionHeader
              label="02.Research"
              title="The data confirmed what we were seeing"
              intro="We combined published research with our own survey of university students to understand both the scale of the shift and the reason behind it."
            />

            <Body>
              We started with external research to confirm this wasn&apos;t just
              a personal observation.
            </Body>

            <StatRow
              stats={[
                {
                  value: "48%",
                  label:
                    "say their critical thinking skills have deteriorated since they started using AI",
                },
                {
                  value: "73%",
                  label:
                    "of Canadian students now rely on generative AI for their schoolwork",
                },
                {
                  value: "45%",
                  label:
                    "say AI is their first instinct on a new assignment, not their own attempt",
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
              Source: KPMG in Canada, student generative AI survey, October 2025
            </p>

            <Body>
              Those numbers describe what is happening. To understand why, we
              surveyed 30+ university students ourselves, asking about their
              mindset toward learning rather than their tool usage.
            </Body>

            <StatRow
              filled={false}
              stats={[
                {
                  value: "68%",
                  label:
                    "focus on getting the right answer over understanding the process",
                },
                {
                  value: "43%",
                  label:
                    "look at the correct answer after getting something wrong, then move on",
                },
                {
                  value: "60%",
                  label:
                    "use grades or test scores as their only measure of progress",
                },
              ]}
            />

            <Callout label="KEY INSIGHT">
              The problem isn&apos;t that students use AI. It&apos;s that
              failure has become something to escape instead of something to
              learn from. Students skip reflection because nothing in their
              environment makes it feel worth doing.
            </Callout>
          </Section>

          <Section id="problem">
            <SectionHeader
              label="03.Problem"
              title="A confidence gap disguised as an AI problem"
              intro="Our research pointed to something deeper than over-reliance on tools. Students have started avoiding struggle rather than learning from it."
            />

            <Body>
              A clear pattern came out of the survey: students see mistakes as
              something to fix, not something to learn from. When AI offers an
              instant exit from not knowing, most take it.
            </Body>

            <Body>
              This compounds. Every time a student skips the struggle, they lose
              a little trust in their own thinking. Eventually they stop
              believing they can figure things out, not because they can&apos;t,
              but because they&apos;ve never stayed with the discomfort long
              enough to find out.
            </Body>

            <Callout label="PROBLEM STATEMENT">
              Gen Z university students default to AI when starting independent
              work, which erodes confidence in their own thinking and weakens
              their problem-solving over time.
            </Callout>

            <Shot src="/projects/fm-hmw.svg" alt="How might we statement" />
          </Section>

          <Section id="ideate">
            <SectionHeader
              label="04.Ideation"
              title="Our first problem statement was too vague to design from"
              intro="A mentor session mid-designathon forced us to get specific, and the sharper version is what everything else got built on."
            />

            <Body>
              This is what we walked into our first mentor session with:
            </Body>

            <Callout label="VERSION 1" filled={false}>
              Gen Z university students experience reduced confidence and eroded
              critical thinking skills when over relying on AI tools to complete
              independent academic work.
            </Callout>

            <Body>
              Our mentor pushed on two words. “Independent academic work” could
              mean anything, late-night assignments, exam prep, essays. And
              “reduced confidence” is a feeling, not something you can design
              against. What does it actually look like when a student loses
              confidence? Hesitating to start. Opening ChatGPT before reading
              the question. Second-guessing an answer they already had.
            </Body>

            <Callout label="VERSION 2">
              Gen Z university students often default to AI tools when starting
              independent assignments, which reduces their confidence in their
              own thinking and weakens their problem-solving skills.
            </Callout>

            <Body>
              The second one names a moment, the start of an assignment, and a
              behaviour we could actually observe. Every feature we built after
              that traces back to it. The three-part exhibit, the guided
              prompts, all of it targets that specific moment rather than a
              vague sense of low confidence.
            </Body>

            <Body>
              The other thing that stuck with us from that session was a
              warning:{" "}
              <strong>don&apos;t let this become “AI, but better.”</strong> It
              would have been easy to design a tool that nudges you before you
              open ChatGPT. We went the other direction and built something that
              has nothing to do with AI at all.
            </Body>
          </Section>

          <Section id="solution">
            <SectionHeader
              label="05.Solution"
              title="A museum for the messy middle of learning"
              intro="The Failure Museum is a social platform where students share and reflect on academic struggles, making them visible instead of hidden."
            />

            <Body>
              Most platforms reward outcomes. LinkedIn celebrates promotions.
              Instagram shows finished work. We built the inverse: a feed where
              the wrong answer, the misconception, the confused first attempt
              becomes the exhibit, and gets the same visibility as anything
              else.
            </Body>

            <Feature
              label="LAND ON THE PLATFORM"
              text="Students are greeted with “What did you learn today?”, reframing the whole experience around growth instead of grades before they do anything else."
              pill="Onboarding"
            />

            <Feature
              label="BROWSE THE GALLERY"
              text="A feed of other students’ exhibits across coding, writing, math, and productivity. Seeing confusion at scale is what makes it feel normal."
              pill="Discovery"
              filled={false}
            />

            <Clip src="/projects/fm_vid1.mp4" />

            <Feature
              label="OPEN AN EXHIBIT"
              text="Every post follows the same three parts: what someone believed, what changed, what they understand now. Thinking made visible."
              pill="Exploration"
              filled={false}
            />

            <Clip src="/projects/fm_vid2.mp4" />

            <Feature
              label="CREATE YOUR OWN"
              text="Guided prompts walk you through documenting a misconception, replacing a blank box with questions that make honest reflection easier to start."
              pill="Creation"
            />

            <Clip src="/projects/fm_vid3.mp4" />
          </Section>

          <Section id="design">
            <SectionHeader
              label="06.Design Decisions"
              title="What we chose, and what we gave up"
              intro="Every feature answered something specific in our research. Here's what we picked, and what each choice cost us."
            />

            <DecisionGrid
              items={[
                {
                  title: "Three boxes instead of a blank one",
                  text: "43% of the students we surveyed said they don't reflect after getting something wrong. A blank text box was never going to fix that. Forcing the format into three specific questions made reflecting easier than not reflecting. The obvious downside is that not every mistake fits neatly into three parts, and we decided we'd rather have more people finish a rough reflection than have a few write perfect ones.",
                },
                {
                  title: "Public, not private",
                  text: "Struggle feels shameful mostly because it stays hidden. Putting exhibits in a feed where other people follow them is the whole point. It also means people might curate their failures into the flattering kind, which is the risk we took.",
                },
                {
                  title: "We called it a museum",
                  text: "A museum implies curation and display. A mistakes log implies shame and correction. Same content, completely different relationship to it. This was the first thing we decided and most of the rest followed from it.",
                },
                {
                  title: "No grades, no scores, no rankings",
                  text: "Over 60% of our respondents said grades were their only measure of progress. We could have redesigned that into something healthier, like streaks or reflection counts. Instead we cut every metric entirely, which meant giving up the easiest way to keep people coming back. I still think it was right, but it leaves a hole we never filled.",
                },
                {
                  title: "Guided prompts",
                  text: "Starting is the hard part, so we removed the blank page. It's more steps than posting, and anyone in a rush will bounce.",
                },
                {
                  title: "Why it looks old",
                  text: "Every AI tool looks the same right now: white, clean, futuristic. We went beige and serif and archival on purpose, so the platform feels slower the second you land on it. It does read as dated next to the things our users use every day, and I'm not sure yet whether that's a feature or a problem.",
                },
              ]}
            />
          </Section>

          <Section id="reflect">
            <SectionHeader
              label="07.Reflection and Next Steps"
              title="What I'd take further"
              intro="There's something fitting about a case study on failure needing its own rounds of iteration."
            />

            <Body>
              The finding that pushed the product hardest came from our own
              survey, not from anything published. Students looking at the right
              answer and then moving on, without ever asking why they were
              wrong, was the thing we kept coming back to. It was also the one
              stat we couldn&apos;t have found anywhere else.
            </Body>

            <Body>
              Renaming “posts” to “exhibits” changed more than I expected. Once
              we had that word, decisions about tone, layout, and even the logo
              got easier, because we were asking what belongs in a museum
              instead of what belongs in a feed. Naming is design.
            </Body>

            <Body>
              <strong>Structure is the feature.</strong> Take the three-part
              format out and this is just another social app.
            </Body>

            <Body>
              The thing I&apos;d test first is whether public was the right
              call. We chose it deliberately, and the argument still holds, but
              I can imagine a student writing something much more honest into a
              private page than into a feed their classmates can see. A next
              version would probably have both. The real question is which one
              opens by default.
            </Body>

            {/* TODO_OUTCOME: if anything happened after the designathon, add a
                <Body> here. Judge reaction, anyone outside the team trying it,
                how many teams competed, what you'd build with another week. */}
          </Section>
        </div>
      </DesktopWindow>
    </DesktopChrome>
  );
}