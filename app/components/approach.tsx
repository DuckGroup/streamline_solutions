"use client";
import { ApproachItem } from "./approachItem";
import { SectionIntro } from "./sectionintro";

export const approaches = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your goals, constraints, and existing systems. No pre-built solutions—just honest conversation about what you need.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Clear roadmaps with realistic timelines. We break projects into phases so you can see progress and adjust as you learn.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Weekly updates and working prototypes. You stay in the loop without unnecessary meetings that slow things down.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We stick around after launch. Bug fixes, optimizations, and ongoing improvements are part of how we work with clients.",
  },
];

export const Approach = () => {
  return (
    <section id="approach" className="px-4 md:px-24 py-32 bg-white flex flex-col items-center">
      <div className="max-w-350">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <SectionIntro
              title="A process that respects your time"
              subtitle="How We Work"
            >
              We&apos;ve removed the friction from software development. No
              jargon, no bloated timelines, no surprises.
            </SectionIntro>
          </div>

          <div className="space-y-12">
            {approaches.map((approach, index) => (
              <ApproachItem key={index} approach={approach} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};