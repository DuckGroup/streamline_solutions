"use client";
import { approaches } from "../constants/approaches";
import { ApproachItem } from "./approachItem";
import { SectionIntro } from "./sectionintro";



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