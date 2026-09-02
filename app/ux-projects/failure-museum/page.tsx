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
              { id: "solution", label: "05.Solution" },
              { id: "design", label: "06.Design" },
              { id: "reflect", label: "07.Reflect" },
            ]}
          />

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
              <p className="mt-1 text-[14px]">Web &amp; Desktop App</p>
            </div>
            <div>
              <p className="text-[14px] font-bold">Timeline</p>
              <p className="mt-1 text-[14px]">Designathon - March 2026</p>
            </div>
          </div>

          <Section id="context">
            <SectionHeader
              label="01.Context"
              title="A shortcut that costs more than it saves"
              intro="How AI moved from being a tool of support to a tool of avoidance, and why that matters for a generation of learners."
            />

            <Body>
              Imagine having an essay due in 30 minutes. Before AI existed, you
              would scramble: organize your thoughts, pull from memory, submit
              whatever you could. That pressure was uncomfortable and it was
              also exactly <strong>where learning happened</strong>.
            </Body>

            <Body>
              Today, many university students can generate a full essay in
              minutes. <strong>The scramble is gone.</strong> But so is the
              thinking. We set out to understand what that trade-off actually
              costs, and whether design could address it.
            </Body>

            <Callout>
              Being faster and optimized doesn&apos;t always mean better. Taking
              the time to work through each step is what builds confidence and
              capability.
            </Callout>

            <Body>
              Our user is a Gen Z university student, a generation that grew up
              with search engines, then smartphones, then AI. They are not lazy.{" "}
              <strong>
                They are optimizing for the wrong thing, the answer rather than
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
              intro="We combined published research with our own original survey of university students to understand both the scale and the root cause."
            />

            <Body>
              We started with external research to confirm this wasn&apos;t just
              a personal observation, but a real and measurable shift in how
              students approach learning.
            </Body>

            <StatRow
              stats={[
                {
                  value: "48%",
                  label:
                    "say critical thinking skills have deteriorated since using AI daily",
                },
                {
                  value: "73%",
                  label:
                    "of Canadian students rely on AI for schoolwork every single day",
                },
                {
                  value: "45%",
                  label:
                    "say their first instinct is AI, not a personal attempt when given an assignment",
                },
              ]}
            />

            <Body>
              These numbers show what is happening. To understand why, we ran
              our own survey with university students, focusing on their mindset
              toward learning, not just how they use tools.
            </Body>

            <StatRow
              filled={false}
              stats={[
                {
                  value: "68% +",
                  label:
                    "focus on getting the correct answer over the learning process",
                },
                {
                  value: "43% +",
                  label:
                    "look at the correct answer after getting something wrong, and just move on",
                },
                {
                  value: "60% +",
                  label:
                    "use grades or test scores as their only measure of progress",
                },
              ]}
            />

            <Callout label="KEY INSIGHT">
              The problem isn&apos;t that students are using AI, it&apos;s that
              failure has become something to escape instead of something to
              learn from. Students skip reflection because there&apos;s no
              structure or social context that makes it feel worthwhile.
            </Callout>
          </Section>

          <Section id="problem">
            <SectionHeader
              label="03.Problem"
              title="A confidence gap disguised as an AI problem"
              intro="Our research pointed to something deeper than just relying too much on tools. It showed that students have started to avoid struggle instead of learning from it."
            />

            <Body>
              Our surveys and research revealed a clear pattern: Gen Z
              university students see mistakes as something to fix, not
              something to learn from. When AI offers an instant way out of not
              knowing, most students take it.
            </Body>

            <Body>
              This creates a compounding problem. Each time a student skips the
              struggle, they lose a bit of trust in their own thinking. Over
              time, they stop believing they can figure things out, not because
              they can&apos;t, but because they&apos;ve never stayed with the
              discomfort long enough to try.
            </Body>

            <Callout label="PROBLEM STATEMENT">
              Gen Z university students often default to AI tools when starting
              independent assignments, which reduces their confidence in their
              own thinking ability and weakens their problem-solving skills.
            </Callout>

            <Shot src="/projects/fm-hmw.svg" alt="How might we statement" />
          </Section>

          <Section id="solution">
            <SectionHeader
              label="05.Solution"
              title="A museum for the messy middle of learning"
              intro="The Failure Museum is a social platform where students share, reflect on, and learn from academic struggles, making them visible instead of hidden."
            />

            <Body>
              Most platforms reward outcomes. LinkedIn celebrates promotions.
              Instagram highlights finished products. We built the opposite, a
              feed where the wrong answer, the misconception, the confused first
              attempt becomes the exhibit, and it receives the same visibility
              as anything else.
            </Body>

            <Feature
              label="LAND ON THE PLATFORM"
              text="Students log in and are greeted with “What did you learn today?” immediately reframing the experience around growth, not grades."
              pill="Onboarding"
            />

            <Feature
              label="BROWSE THE GALLERY"
              text="A social feed of other students’ exhibits showing real struggles across coding, writing, math, and productivity. It normalizes confusion at scale."
              pill="Discovery"
              filled={false}
            />

            <Clip src="/projects/fm_vid1.mp4" />

            <Feature
              label="OPEN AN EXHIBIT"
              text="Click into any post to see the full 3-part exhibit: what someone believed, what changed, and what they now understand. Thinking made visible."
              pill="Exploration"
              filled={false}
            />

            <Clip src="/projects/fm_vid2.mp4" />

            <Feature
              label="CREATE YOUR OWN"
              text="Step-by-step guided prompts walk users through documenting a misconception, replacing the blank box with questions that encourage honest reflection."
              pill="Creation"
            />

            <Clip src="/projects/fm_vid3.mp4" />
          </Section>

          <Section id="design">
            <SectionHeader
              label="06.Design Decisions"
              title="Why we designed it this way"
              intro="Every feature was a deliberate response to something we found in research. Here's what we chose, and why."
            />

            <DecisionGrid
              items={[
                {
                  title: "3-part exhibit format",
                  text: "Our survey showed 43% of students don't reflect after getting something wrong. A blank text box doesn't fix this. The structured format makes reflection the path of least resistance.",
                },
                {
                  title: "Social feed over private journal",
                  text: "Struggle often feels shameful because it stays hidden. By making exhibits public, shareable, and followable, confusion becomes something normal and shared rather than a private failure.",
                },
                {
                  title: "“Museum” framing, not “mistakes log”",
                  text: "Naming and visual metaphor shape user behaviour. A museum implies curation, value, and display. A mistakes log implies shame and correction. Same content; entirely different relationship to it.",
                },
                {
                  title: "No grades, scores, or rankings",
                  text: "Our research showed that over 60% of students use grades to measure progress. We deliberately removed all performance metrics, making engagement with the process the only thing that matters on the platform.",
                },
                {
                  title: "Guided prompts replace blank creation",
                  text: "The hardest part of reflection is getting started. Instead of a blank “Add exhibit” box, users are guided through three specific questions, lowering the effort it takes to begin.",
                },
                {
                  title: "Warm, aged editorial aesthetic",
                  text: "The beige, serif, and archival imagery deliberately contrasts with the clean, futuristic look of most AI tools. It signals: this is a slower, more thoughtful space.",
                },
              ]}
            />
          </Section>

          <Section id="reflect">
            <SectionHeader
              label="07.Reflection and Next Steps"
              title="What we'd take further"
              intro="There's something fitting about a case study on failure that required its own rounds of iteration. Here's what we learned, and what we'd test next."
            />

            <Body>
              <strong>
                The strongest insight came from our own survey, not external
                data.
              </strong>{" "}
              The finding that students move on after a mistake without
              reflecting stood out the most because it came directly from our
              users, not a published study.
            </Body>

            <Body>
              <strong>
                The museum metaphor shaped the design more than any single
                feature.
              </strong>{" "}
              Renaming “posts” to “exhibits” changed how we approached the
              content, and how users would think about sharing. Naming is
              design.
            </Body>

            <Body>
              <strong>Structure is the feature.</strong> The three-part exhibit
              format isn&apos;t just UX polish, it&apos;s the core intervention.
              Without the guided format, the platform becomes just another
              social feed. The structure is what makes reflection happen.
            </Body>

            <Body>
              <strong>
                We chose social over private deliberately, and we&apos;d test
                this assumption.
              </strong>{" "}
              It&apos;s possible that some students would reflect more honestly
              in a private journal. A future version might offer both modes with
              different sharing defaults.
            </Body>
          </Section>
        </div>
      </DesktopWindow>
    </DesktopChrome>
  );
}