const approaches = [
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
    <section id="approach" className="py-32 bg-white">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="inline-block mb-4 px-4 py-2 bg-white border border-hanuman rounded-full">
              <span className="text-hanuman text-sm">How We Work</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-black mb-6">
              A process that respects your time
            </h2>
            <p className="text-xl leading-relaxed">
              We&apos;ve removed the friction from software development. No jargon,
              no bloated timelines, no surprises.
            </p>
          </div>

          
          <div className="space-y-12">
            {approaches.map((approach, index) => (
              <div key={index} className="group">
                <div className="flex gap-6">
                  <div className="text-6xl text-hanuman group-hover:text-hanuman/50 transition-colors duration-500">
                    {approach.number}
                  </div>
                  <div>
                    <h3 className="text-2xl text-black mb-3">
                      {approach.title}
                    </h3>
                    <p className="leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </div>
                {index < approaches.length - 1 && (
                  <div className="ml-18 mt-8 h-16 w-px bg-linear-to-b from-stone-400 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
